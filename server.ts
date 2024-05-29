import { type DuplexChannel, makeChan, makeChanStream, makeWebSocket } from "./channel.ts";
import { handleClientMessage } from "./handlers.server.ts";
import type { ClientMessage, RequestObject, ServerMessage, ServerState } from "./messages.ts";

/**
 * Ensures that the given chunk is in the form of a Uint8Array.
 * If it's not already an array, it converts the provided object into a Uint8Array.
 * @param {Uint8Array | Record<string, Uint8Array[number]>} chunk - The input chunk, which can be either a Uint8Array or an object.
 * @returns {Uint8Array} The chunk converted into a Uint8Array.
 */
export const ensureChunked = (chunk: Uint8Array | Record<string, Uint8Array[number]>): Uint8Array => {
  if (Array.isArray(chunk)) {
    return chunk as Uint8Array;
  }
  return new Uint8Array(Array.from({ ...chunk, length: Object.keys(chunk).length }))
}


const domainsToConnections: Record<string, DuplexChannel<ServerMessage, ClientMessage>> = {};
const ongoingRequests: Record<string, RequestObject> = {};

/**
 * Represents options for configuring the server.
 * @typedef {Object} ServerOptions
 * @property {string[]} apiKeys - An array of API keys for authentication.
 * @property {number} port - The port number where the server will listen for connections.
 */
export interface ServerOptions {
  apiKeys: string[]
  port: number;
}

/**
 * Starts the Warp server.
 * @param {ServerOptions} [options] - Optional configurations for the server.
 * @returns {Deno.HttpServer<Deno.NetAddr>} An instance of Deno HTTP server.
 */
export const start = (options?: ServerOptions): Deno.HttpServer<Deno.NetAddr> => {
  const port = (options?.port ?? Deno.env.get("PORT"));
  const apiKeys = options?.apiKeys ?? Deno.env.get("API_KEYS")?.split(",") ?? []; // array of api keys (random strings)

  return Deno.serve({
    handler: async (req) => {
      const url = new URL(req.url);
      if (url.pathname === "/_connect") {
        const { socket, response } = Deno.upgradeWebSocket(req);
        (async () => {
          const ch = await makeWebSocket<ServerMessage, ClientMessage>(socket);
          const state: ServerState = {
            socket,
            ch,
            domainsToConnections,
            ongoingRequests,
            apiKeys,
          }
          for await (const message of ch.in.recv()) {
            await handleClientMessage(state, message);
          }
        })()
        return response;

      }
      const host = req.headers.get("host");
      if (host && host in domainsToConnections) {
        const ch = domainsToConnections[host];
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
          dataChan: makeChan(),
        }
        try {
          await ch.out.send(requestForward);
          const dataChan = req.body ? makeChanStream(req.body) : undefined;
          (async () => {
            for await (const chunk of dataChan?.recv() ?? []) {
              await ch.out.send({
                type: "request-data",
                id: messageId,
                chunk,
              });
            }
            await ch.out.send({
              type: "request-end",
              id: messageId,
            });
          })()
          return responseObject.promise;
        } catch (err) {
          console.error(new Date(), "Error sending request to remote client", err);
          return new Response("Error sending request to remote client", { status: 503 });
        }
      }
      return new Response("No registration for domain and/or remote service not available", { status: 503 });
    },
    port: port ? +port : 8000,
  })
}