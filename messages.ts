import type { Channel, DuplexChannel } from "./channel.ts";

export interface RequestObject {
    id: string;
    requestObject: Request;
    responseObject: ReturnType<typeof Promise.withResolvers<Response>>;
    dataChan?: Channel<Uint8Array>;
    socketChan?: Channel<ArrayBuffer>
}

export interface RegisterMessage {
    id: string;
    type: "register";
    apiKey: string;
    domain: string;
}
export interface ResponseStartMessage {
    type: "response-start";
    id: string;
    statusCode: number;
    statusMessage: string;
    headers: Record<string, string>;
}
export interface DataMessage {
    type: "data";
    id: string;
    chunk: Uint8Array;
}

export interface DataEndMessage {
    type: "data-end";
    id: string;
    error?: unknown;
}
export interface WSConnectionOpened {
    type: "ws-opened"
    id: string;
}
export interface WSMessage {
    type: "ws-message"
    id: string;
    data: ArrayBuffer;
}
export interface WSConnectionClosed {
    type: "ws-closed"
    id: string;
}
export type ClientMessage = WSMessage | WSConnectionClosed | WSConnectionOpened | RegisterMessage | ResponseStartMessage | DataMessage | DataEndMessage;

export interface RequestStartMessage {
    type: "request-start";
    domain: string;
    id: string;
    method: string;
    url: string;
    headers: Record<string, string>;
    hasBody?: boolean;
}
export interface RequestDataEndMessage {
    type: "request-end"
    id: string;
}
export interface RequestDataMessage {
    type: "request-data";
    id: string;
    chunk: Uint8Array
}
export interface RegisteredMessage {
    type: "registered";
    id: string;
    domain: string;
}
export interface ErrorMessage {
    type: "error";
    message: string;
}
export type ServerMessage = WSMessage | WSConnectionClosed | RequestStartMessage | RequestDataEndMessage | RequestDataMessage | RegisteredMessage | ErrorMessage;

export interface ClientState {
    ch: DuplexChannel<ClientMessage, ServerMessage>;
    requestBody: Record<string, Channel<Uint8Array>>;
    wsMessages: Record<string, Channel<ArrayBuffer>>;
    live: boolean;
    localAddr: string;
    client?: Deno.HttpClient
}
export interface ServerState {
    socket: WebSocket;
    ch: DuplexChannel<ServerMessage, ClientMessage>;
    domainsToConnections: Record<string, DuplexChannel<ServerMessage, ClientMessage>>;
    ongoingRequests: Record<string, RequestObject>;
    apiKeys: string[];
}
export type ServerMessageHandler<TServerMessage extends ServerMessage = ServerMessage> = (state: ClientState, message: TServerMessage) => Promise<void> | void;
export type ClientMessageHandler<TClientMessage extends ClientMessage = ClientMessage> = (state: ServerState, message: TClientMessage) => Promise<void> | void;
