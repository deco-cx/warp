import { type Channel, makeWebSocket } from "./channel.ts";
import { handleServerMessage } from "./handlers.client.ts";
import type { ClientMessage, ClientState, ServerMessage } from "./messages.ts";

/**
 * Options for establishing a connection.
 * @typedef {Object} ConnectOptions
 * @property {string} apiKey - The apiKey used for connecting to the server.
 * @property {string} domain - The domain to register the connection with.
 * @property {string} server - The WebSocket server URL.
 * @property {string} localAddr - The local address for the WebSocket connection.
 * @property {boolean} sw - If it should use a service worker.
 */
export interface ConnectOptions {
  apiKey: string;
  domain: string;
  server: string;
  localAddr: string;
  sw?: boolean;
}

/**
 * Represents a connection status object.
 * @typedef {Object} Connected
 * @property {Promise<void>} closed - A promise that resolves when the connection is closed.
 * @property {Promise<void>} registered - A promise that resolves when the connection is registered.
 */
export interface Connected {
  closed: Promise<void>;
  registered: Promise<void>;
}

/**
 * Establishes a WebSocket connection with the server.
 * @param {ConnectOptions} opts - Options for establishing the connection.
 * @returns {Promise<Connected>} A promise that resolves with the connection status.
 */
export const connectMainThread = async (
  opts: ConnectOptions,
): Promise<Connected> => {
  const closed = Promise.withResolvers<void>();
  const registered = Promise.withResolvers<void>();
  const client = typeof Deno.createHttpClient === "function"
    ? Deno.createHttpClient({
      allowHost: true,
      proxy: {
        url: opts.localAddr,
      },
    })
    : undefined;

  const socket = new WebSocket(`${opts.server}/_connect`);
  socket.binaryType = "blob";
  const ch = await makeWebSocket<ClientMessage, ServerMessage>(socket);
  await ch.out.send({
    id: crypto.randomUUID(),
    type: "register",
    apiKey: opts.apiKey,
    domain: opts.domain,
  });
  const requestBody: Record<string, Channel<Uint8Array>> = {};
  const wsSockets: Record<string, WebSocket> = {};

  (async () => {
    const state: ClientState = {
      client,
      localAddr: opts.localAddr,
      live: false,
      requestBody,
      wsSockets,
      ch,
    };
    try {
      for await (const message of ch.in.recv()) {
        await handleServerMessage(state, message);
        if (state.live) {
          registered.resolve();
        }
      }
    } catch (err) {
      console.error(new Date(), "error handling message", err);
    } finally {
      closed.resolve();
    }
  })();
  return { closed: closed.promise, registered: registered.promise };
};

/**
 * Establishes a WebSocket connection with the server.
 * @param {ConnectOptions} opts - Options for establishing the connection.
 * @returns {Promise<Connected>} A promise that resolves with the connection status.
 */
export const connectSW = (opts: ConnectOptions): Promise<Connected> => {
  const closed = Promise.withResolvers<void>();
  const registered = Promise.withResolvers<void>();
  const worker = new Worker(import.meta.url, {
    type: "module",
    deno: { permissions: "inherit" },
  });
  worker.addEventListener("message", (message) => {
    if (message.data === "closed") {
      closed.resolve();
    }
    if (message.data === "registered") {
      registered.resolve();
    }
  });
  worker.postMessage(opts);

  return Promise.resolve({
    closed: closed.promise,
    registered: registered.promise,
  });
};

// @ts-ignore: "trust-me"
self.onmessage = async (evt) => {
  const { closed, registered } = await connectMainThread(evt.data);
  // @ts-ignore: "trust-me"
  closed.then(() => self.postMessage("closed"));
  // @ts-ignore: "trust-me"
  registered.then(() => self.postMessage("registered"));
};

/**
 * Establishes a WebSocket connection with the server.
 * @param {ConnectOptions} opts - Options for establishing the connection.
 * @returns {Promise<Connected>} A promise that resolves with the connection status.
 */
export const connect = async (opts: ConnectOptions): Promise<Connected> => {
  return opts.sw ? connectSW(opts) : await connectMainThread(opts);
};
