import { link, makeChan, makeChanStream, makeWebSocket } from "./channel.ts";
import { CLIENT_VERSION_QUERY_STRING } from "./client.ts";
import { handleClientMessage } from "./handlers.server.ts";
import type {
  ClientMessage,
  ServerConnectionState,
  ServerMessage,
} from "./messages.ts";
import { upgradeWebSocket } from "./runtime.ts";
import { dataViewerSerializer, jsonSerializer } from "./serializers.ts";

/**
 * Represents options for configuring the server.
 * @typedef {Object} ServerOptions
 * @property {number} port - The port number where the server will listen for connections.
 */
export interface ServeOptions extends HandlerOptions {
  port?: number;
}

/**
 * Represents options for configuring the server handler.
 * @typedef {Object} HandlerOptions
 * @property {string[]} apiKeys - An array of API keys for authentication.
 * @property {string} connectPath - A path for connecting to the server.
 */
export interface HandlerOptions {
  apiKeys: string[];
  connectPath?: string;
}

/**
 * Starts the Warp server.
 * @param {ServeOptions} [options] - Optional configurations for the server.
 * @returns {Deno.HttpServer<Deno.NetAddr>} An instance of Deno HTTP server.
 */
export const serve = (options: ServeOptions): Deno.HttpServer<Deno.NetAddr> => {
  const port = options?.port ?? 8000;
  return Deno.serve({
    handler: serveHandler(options),
    port,
  });
};

/**
 * Creates a handler function for serving requests, with support for WebSocket connections
 * and forwarding requests to registered domains.
 *
 * @param {HandlerOptions} [options] - Optional configuration for the handler.
 * @param {string[]} [options.apiKeys] - An array of API keys used for authentication.
 * @param {string} [options.connectPath] - The path for WebSocket connection upgrades.
 * @returns {(request: Request) => Response | Promise<Response>} - The request handler function.
 */
export const serveHandler = (
  options: HandlerOptions,
): (request: Request) => Response | Promise<Response> => {
  const apiKeys = options.apiKeys; // array of api keys (random strings)
  const connectPath = options?.connectPath ?? "/_connect";
  const serverStates: Record<string, ServerConnectionState> = {};
  const hostToClientId: Record<string, string> = {};
  return async (req) => {
    const url = new URL(req.url);
    if (url.pathname === connectPath) {
      const { socket, response } = upgradeWebSocket(req);
      const clientVersion = url.searchParams.get(CLIENT_VERSION_QUERY_STRING);
      const chPromise = clientVersion === null
        ? makeWebSocket<ServerMessage, ClientMessage, string>(
          socket,
          jsonSerializer(),
        )
        : makeWebSocket<ServerMessage, ClientMessage, ArrayBuffer>(
          socket,
          dataViewerSerializer(),
        );

      (async () => {
        const ch = await chPromise;
        const clientId = crypto.randomUUID();
        const hosts: string[] = [];
        const state: ServerConnectionState = {
          clientId,
          socket,
          ch,
          controller: {
            link: (host) => {
              hosts.push(host);
              hostToClientId[host] = clientId;
            },
          },
          ongoingRequests: {},
          apiKeys,
        };
        serverStates[state.clientId] = state;
        try {
          for await (const message of ch.in.recv(req.signal)) {
            await handleClientMessage(state, message);
          }
        } catch (_err) {
          // ignore
        } finally {
          delete serverStates[clientId];
          for (const host of hosts) {
            if (hostToClientId[host] === clientId) {
              delete hostToClientId[host];
            }
          }
        }
      })();
      return response;
    }
    const host = req.headers.get("host");
    if (host && host in hostToClientId) {
      const serverState = serverStates[hostToClientId[host]];
      if (!serverState) {
        return new Response(
          "No registration for domain and/or remote service not available",
          { status: 503 },
        );
      }
      const { ch, ongoingRequests } = serverState;
      const messageId = crypto.randomUUID();
      const hasBody = !!req.body;
      const url = new URL(req.url);
      const requestForward: ServerMessage = {
        type: "request-start",
        domain: host,
        id: messageId,
        method: req.method,
        hasBody,
        url: (url.pathname + url.search),
        headers: [...req.headers.entries()].reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {} as Record<string, string>),
      };

      // Create a writable stream using TransformStream
      const responseObject = Promise.withResolvers<Response>();
      ongoingRequests[messageId] = {
        id: messageId,
        requestObject: req,
        responseObject,
        responseBodyChan: makeChan(),
      };
      try {
        await ch.out.send(requestForward);
        const dataChan = req.body ? makeChanStream(req.body) : undefined;
        const linked = link(ch.out.signal, req.signal);
        req.signal.addEventListener("abort", () => {
          if (!ch.out.signal.aborted) {
            ch.out.send({
              type: "request-aborted",
              id: messageId,
            }).catch(() => {});
          }
        });
        (async () => {
          try {
            for await (const chunk of dataChan?.recv(linked) ?? []) {
              await ch.out.send({
                type: "request-data",
                id: messageId,
                chunk,
              });
            }
            if (linked.aborted) {
              return;
            }
            await ch.out.send({
              type: "request-end",
              id: messageId,
            });
          } catch (err) {
            responseObject.resolve(
              new Response("Error sending request to remote client", {
                status: 503,
              }),
            );
            if (linked.aborted) {
              return;
            }
            console.log(
              `unexpected error when sending request`,
              err,
              req,
              messageId,
            );
          }
        })();
        return responseObject.promise;
      } catch (err) {
        console.error(
          new Date(),
          "Error sending request to remote client",
          err,
        );
        return new Response("Error sending request to remote client", {
          status: 503,
        });
      }
    }
    return new Response(
      "No registration for domain and/or remote service not available",
      { status: 503 },
    );
  };
};

export class Warp implements DurableObject {
  handler: (req: Request) => Promise<Response> | Response;
  constructor(_state: unknown, env: { API_KEY: string }) {
    this.handler = serveHandler({
      apiKeys: [env.API_KEY],
    });
  }

  fetch(req: Request): Promise<Response> | Response {
    return this.handler(req);
  }
}

const RUN_SCRIPT = "https://cdn.jsdelivr.net/gh/deco-sites/mcp@0.1.5/run.ts";
export default {
  fetch(req: Request, env: { WARP: DurableObjectNamespace }) {
    const reqUrl = new URL(req.url);
    const host = req.headers.get("host") ?? reqUrl.searchParams.get("host");
    if (host == null) {
      return new Response(
        "No registration for domain and/or remote service not available",
        { status: 503 },
      );
    }
    if (host === "mcp.deco.host" && reqUrl.pathname === "/") {
      return new Response(null, {
        status: 307,
        headers: {
          location: RUN_SCRIPT,
        },
      });
    }
    const warp = env.WARP.idFromName(host);
    const durableObject = env.WARP.get(warp);
    return durableObject.fetch(req);
  },
};
