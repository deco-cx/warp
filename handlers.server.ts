import { makeReadableStream, makeWebSocket } from "./channel.ts";
import type { ClientMessage, ClientMessageHandler, DataEndMessage, DataMessage, RegisterMessage, ResponseStartMessage, WSConnectionClosed, WSMessage } from "./messages.ts";
import { ensureChunked } from "./server.ts";

/**
 * List of status codes that represent null bodies in responses.
 * @type {number[]}
 */
const NULL_BODIES = [101, 204, 205, 304];

/**
 * Handler for the 'response-start' client message.
 * @param {ClientState} state - The client state.
 * @param {ResponseStartMessage} message - The message data.
 */
const onResponseStart: ClientMessageHandler<ResponseStartMessage> = (state, message) => {
    const request = state.ongoingRequests[message.id];
    if (!request) {
        console.error(
            new Date(),
            "Didn't find response object, probably dead?",
        );
        return;
    }
    const headers = new Headers();
    Object.entries(message.headers).forEach(([key, value]: [string, string]) => {
        headers.set(key, value);
    });
    const shouldBeNullBody = NULL_BODIES.includes(message.statusCode);
    const stream = !shouldBeNullBody && request.dataChan ? makeReadableStream(request.dataChan) : undefined;
    const resp = new Response(stream, {
        status: message.statusCode,
        statusText: message.statusMessage,
        headers,
    });

    request.requestObject?.signal?.addEventListener?.("abort", () => {
        if (message.id in state.ongoingRequests) {
            delete state.ongoingRequests[message.id];
            request.responseObject.reject(new DOMException("Connection closed", "AbortError"));
        }
    });
    request.responseObject.resolve(resp);
}

/**
 * Handler for the 'data' client message.
 * @param {ClientState} state - The client state.
 * @param {DataMessage} message - The message data.
 */
const data: ClientMessageHandler<DataMessage> = async (state, message) => {
    const request = state.ongoingRequests[message.id];
    if (!request) {
        console.error(
            new Date(),
            "Didn't find response object, unable to send data",
            message.id,
        );
        return;
    }
    try {
        await request.dataChan?.send(ensureChunked(message.chunk));
    } catch (_err) {
        console.log("Request was aborted", _err);
    }
}

/**
 * Handler for the 'data-end' client message.
 * @param {ClientState} state - The client state.
 * @param {DataEndMessage} message - The message data.
 */
const onDataEnd: ClientMessageHandler<DataEndMessage> = (state, message) => {
    const request = state.ongoingRequests[message.id];
    if (!request) {
        console.error(
            new Date(),
            "Didn't find response object, unable to send data",
        );
        return;
    }
    if (message.error) {
        request.responseObject.reject(new DOMException("Connection closed", JSON.stringify(message.error)));
        return;
    }
    try {
        // Call ready again to ensure that all chunks are written
        // before closing the writer.
        request.dataChan?.close?.();
    } catch (_err) {
        console.log(_err);
    }
}

/**
 * Handler for the 'ws-closed' client message.
 * @param {ClientState} state - The client state.
 * @param {WSConnectionClosed} message - The message data.
 */
const onWsClosed: ClientMessageHandler<WSConnectionClosed> = (state, message) => {
    delete state.ongoingRequests[message.id];
}

/**
 * Handler for the 'ws-message' client message.
 * @param {ClientState} state - The client state.
 * @param {WSMessage} message - The message data.
 */
const onWsMessage: ClientMessageHandler<WSMessage> = async (state, message) => {
    await state.ongoingRequests?.[message.id]?.socketChan?.send(message.data)
}

/**
 * Handler for the 'ws-opened' client message.
 * @param {ClientState} state - The client state.
 * @param {DataEndMessage} message - The message data.
 */
const onWsOpened: ClientMessageHandler<DataEndMessage> = async (state, message) => {
    const request = state.ongoingRequests[message.id];
    if (!request) {
        return;
    }
    try {
        const { socket, response } = Deno.upgradeWebSocket(request.requestObject);
        request.responseObject.resolve(response);
        const socketChan = await makeWebSocket<ArrayBuffer, ArrayBuffer>(socket, false);
        request.socketChan = socketChan.out;
        (async () => {
            for await (const msg of socketChan.in.recv()) {
                await state.ch.out.send({ type: "ws-message", id: message.id, data: msg });
            }
            await state.ch.out.send({ type: "ws-closed", id: message.id })
            socket.close();
        })()
    }
    catch (err) {
        console.error(new Date(), "Error upgrading websocket", err);
        delete state.ongoingRequests[message.id];
    }
}
/**
 * Handler for the 'register' client message.
 * @param {ClientState} state - The client state.
 * @param {RegisterMessage} message - The message data.
 */
const register: ClientMessageHandler<RegisterMessage> = async (state, message) => {
    if (state.apiKeys.includes(message.apiKey)) {
        state.domainsToConnections[message.domain] = state.ch;
        await state.ch.out.send({ type: "registered", domain: message.domain, id: message.id })
    } else {
        console.error(
            new Date(),
            "Given API key is wrong/not recognised, stopping connection",
            message,
        );
        await state.ch.out.send({ type: "error", message: "Invalid API key" })
        state.socket.close();
    }
}

/**
 * A record mapping client message types to their respective handlers.
 * @type {Record<ClientMessage["type"], ClientMessageHandler<any>>}
 * @ignore
 */
// deno-lint-ignore no-explicit-any
const handlersByType: Record<ClientMessage["type"], ClientMessageHandler<any>> = {
    "response-start": onResponseStart,
    data,
    "data-end": onDataEnd,
    "ws-closed": onWsClosed,
    "ws-message": onWsMessage,
    "ws-opened": onWsOpened,
    register,
}

/**
 * Handles client messages received from the server.
 * @param {ClientState} state - The client state.
 * @param {ClientMessage} message - The message received from the server.
 */
export const handleClientMessage: ClientMessageHandler = async (state, message) => {
    console.info(new Date(), `[server]`, message.type, "id" in message ? message.id : "");
    await handlersByType?.[message.type]?.(state, message)?.catch?.(err => {
        console.error("unexpected error happening when handling message", message, err);
        delete state.ongoingRequests[message.id];
    });
}
