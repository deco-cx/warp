import { makeChan, makeChanStream, makeWebSocket } from "./channel.ts";
import { handleClientMessage } from "./handlers.server.ts";
import type {
  ClientMessage,
  ServerConnectionState,
  ServerMessage,
} from "./messages.ts";

/**
 * Ensures that the given chunk is in the form of a Uint8Array.
 * If it's not already an array, it converts the provided object into a Uint8Array.
 * @param {Uint8Array | Record<string, Uint8Array[number]>} chunk - The input chunk, which can be either a Uint8Array or an object.
 * @returns {Uint8Array} The chunk converted into a Uint8Array.
 */
export const ensureChunked = (
  chunk: Uint8Array | Record<string, Uint8Array[number]>,
): Uint8Array => {
  if (Array.isArray(chunk)) {
    return chunk as Uint8Array;
  }
  return new Uint8Array(
    Array.from({ ...chunk, length: Object.keys(chunk).length }),
  );
};

const serverStates: Record<string, ServerConnectionState> = {};
const hostToClientId: Record<string, string> = {};

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

  return async (req) => {
    const url = new URL(req.url);
    if (url.pathname === connectPath) {
      const { socket, response } = Deno.upgradeWebSocket(req);
      (async () => {
        const ch = await makeWebSocket<ServerMessage, ClientMessage>(socket);
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
        const signal = ch.out.signal;
        await ch.out.send(requestForward);
        const dataChan = req.body ? makeChanStream(req.body) : undefined;
        (async () => {
          try {
            for await (const chunk of dataChan?.recv(signal) ?? []) {
              await ch.out.send({
                type: "request-data",
                id: messageId,
                chunk,
              });
            }
            if (signal.aborted) {
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
            if (signal.aborted) {
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
