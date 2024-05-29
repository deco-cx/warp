import { type Channel, ignoreIfClosed, makeChan, makeChanStream, makeReadableStream, makeWebSocket } from "./channel.ts";
import type { ClientMessage, ClientState, ErrorMessage, RegisteredMessage, RequestDataEndMessage, RequestDataMessage, RequestStartMessage, ServerMessage, ServerMessageHandler, WSMessage } from "./messages.ts";
import { ensureChunked } from "./server.ts";

/**
 * Handler for the 'registered' server message.
 * @param {ClientState} state - The client state.
 */
const registered: ServerMessageHandler<RegisteredMessage> = (state) => {
    state.live = true;
}

/**
 * Handler for the 'error' server message.
 * @param {ClientState} state - The client state.
 */
const error: ServerMessageHandler<ErrorMessage> = (state) => {
    state.live = false;
}

/**
 * Handler for the 'request-start' server message.
 * @param {ClientState} state - The client state.
 * @param {RequestStartMessage} message - The message data.
 */
const onRequestStart: ServerMessageHandler<RequestStartMessage> = async (state, message) => {
    if (message.headers["upgrade"] === "websocket") {
        await handleWebSocket(message, state);
        return;
    }
    if (!message.hasBody) {
        doFetch(message, state, state.ch.out).catch(ignoreIfClosed);
    } else {
        const bodyData = makeChan<Uint8Array>();
        state.requestBody[message.id] = bodyData;
        doFetch({ ...message, body: makeReadableStream(bodyData) }, state, state.ch.out).catch(ignoreIfClosed).finally(() => {
            delete state.requestBody[message.id];
        });
    }
}

/**
 * Handler for the 'request-data' server message.
 * @param {ClientState} state - The client state.
 * @param {RequestDataMessage} message - The message data.
 */
const onRequestData: ServerMessageHandler<RequestDataMessage> = async (state, message) => {
    const reqBody = state.requestBody[message.id];
    if (!reqBody) {
        console.info("[req-data] req not found", message.id);
        return;
    }
    await reqBody.send?.(ensureChunked(message.chunk));
}

/**
 * Handler for the 'request-data-end' server message.
 * @param {ClientState} state - The client state.
 * @param {RequestDataEndMessage} message - The message data.
 */
const onRequestDataEnd: ServerMessageHandler<RequestDataEndMessage> = (state, message) => {
    const reqBody = state.requestBody[message.id];
    if (!reqBody) {
        return;
    }
    reqBody.close();
}

/**
 * Handler for the 'ws-message' server message.
 * @param {ClientState} state - The client state.
 * @param {WSMessage} message - The message data.
 */
const onWsMessage: ServerMessageHandler<WSMessage> = async (state, message) => {
    await state.wsMessages?.[message.id]?.send?.(message.data);
}

/**
 * Handler for the 'ws-closed' server message.
 * @param {ClientState} state - The client state.
 * @param {RegisteredMessage} message - The message data.
 */
const onWsClosed: ServerMessageHandler<RegisteredMessage> = (state, message) => {
    const messageChan = state.wsMessages[message.id];
    delete state.wsMessages[message.id];
    messageChan?.close();
}

/**
 * Handlers for various server message types.
 * @type {Record<ServerMessage["type"], ServerMessageHandler<any>>}
 */
// deno-lint-ignore no-explicit-any
const handlersByType: Record<ServerMessage["type"], ServerMessageHandler<any>> = {
    registered,
    error,
    "request-start": onRequestStart,
    "request-data": onRequestData,
    "request-end": onRequestDataEnd,
    "ws-closed": onWsClosed,
    "ws-message": onWsMessage,
}

/**
 * Handles WebSocket connections.
 * @param {RequestStartMessage} message - The WebSocket request message.
 * @param {ClientState} state - The client state.
 */
async function handleWebSocket(message: RequestStartMessage, state: ClientState) {
    const ws = new WebSocket(new URL(message.url, state.localAddr));
    try {
        const wsCh = await makeWebSocket<ArrayBuffer, ArrayBuffer>(ws, false);
        await state.ch.out.send({
            type: "ws-opened",
            id: message.id,
        });
        state.wsMessages[message.id] = wsCh.out;
        (async () => {
            try {
                for await (const data of wsCh.in.recv(state.ch.out.signal)) {
                    await state.ch.out.send({
                        type: "ws-message",
                        data,
                        id: message.id,
                    });
                }
                if (state.ch.out.signal.aborted) {
                    return;
                }
                await state.ch.out.send({
                    type: "ws-closed",
                    id: message.id,
                });
            } catch (error) {
                if (state.ch.out.signal.aborted) {
                    return;
                }
                await state.ch.out.send({
                    type: "ws-closed",
                    id: message.id,
                }).catch(ignoreIfClosed);
                throw error;
            } finally {
                delete state.wsMessages[message.id];
            }
        })();
    } catch (err) {
        await state.ch.out.send({
            type: "data-end",
            error: err,
            id: message.id
        }).catch(ignoreIfClosed);
    }
}

/**
 * Fetches data from a request.
 * @param {RequestStartMessage & { body?: ReadableStream; }} request - The request data.
 * @param {ClientState} state - The client state.
 * @param {Channel<ClientMessage>} clientCh - The client channel.
 */
async function doFetch(request: RequestStartMessage & { body?: ReadableStream; }, state: ClientState, clientCh: Channel<ClientMessage>) {
    // Read from the stream
    const signal = clientCh.signal;
    try {
        const response = await fetch(new URL(request.url, state.localAddr), {
            ...state.client ? { client: state.client } : {},
            method: request.method,
            headers: request.headers,
            body: request.body,
            signal,
        });
        await clientCh.send({
            type: "response-start",
            id: request.id,
            statusCode: response.status,
            statusMessage: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
        })
        const body = response?.body;
        const stream = body ? makeChanStream(body) : undefined;
        for await (const chunk of stream?.recv(signal) ?? []) {
            await clientCh.send({
                type: "data",
                id: request.id,
                chunk,
            });
        }
        if (signal.aborted) {
            return;
        }
        await clientCh.send({
            type: "data-end",
            id: request.id,
        });
    } catch (err) {
        if (signal.aborted) {
            return;
        }
        throw err;
    }
}

/**
 * Handles server messages.
 * @param {ClientState} state - The client state.
 * @param {ServerMessage} message - The server message.
 */
export const handleServerMessage: ServerMessageHandler = async (state, message) => {
    await handlersByType?.[message.type]?.(state, message);
}
