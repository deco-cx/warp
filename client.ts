import { type Channel, makeWebSocket } from "./channel.ts";
import { handleServerMessage } from "./handlers.client.ts";
import type { ClientMessage, ClientState, ServerMessage } from "./messages.ts";

/**
 * Options for establishing a connection.
 * @typedef {Object} ConnectOptions
 * @property {string} token - The authentication token for connecting to the server.
 * @property {string} domain - The domain to register the connection with.
 * @property {string} server - The WebSocket server URL.
 * @property {string} localAddr - The local address for the WebSocket connection.
 */
export interface ConnectOptions {
    token: string;
    domain: string;
    server: string;
    localAddr: string;
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
export const connect = async (opts: ConnectOptions): Promise<Connected> => {
    const closed = Promise.withResolvers<void>();
    const registered = Promise.withResolvers<void>();
    const client = typeof Deno.createHttpClient === "function" ? Deno.createHttpClient({
        allowHost: true,
        proxy: {
            url: opts.localAddr,
        }
    }) : undefined;

    const socket = new WebSocket(`${opts.server}/_connect`);
    const ch = await makeWebSocket<ClientMessage, ServerMessage>(socket);
    await ch.out.send({
        id: crypto.randomUUID(),
        type: "register",
        apiKey: opts.token,
        domain: opts.domain,
    });
    const requestBody: Record<string, Channel<Uint8Array>> = {};
    const wsMessages: Record<string, Channel<ArrayBuffer>> = {};

    (async () => {
        const state: ClientState = {
            client,
            localAddr: opts.localAddr,
            live: false,
            requestBody,
            wsMessages,
            ch,
        }
        for await (const message of ch.in.recv()) {
            try {
                await handleServerMessage(state, message);
                if (state.live) {
                    registered.resolve();
                }
            } catch (err) {
                console.error(new Date(), "error handling message", err);
                break;
            }
        }
        closed.resolve();
    })()
    return { closed: closed.promise, registered: registered.promise };
}

