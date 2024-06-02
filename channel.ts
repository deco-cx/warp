import { Queue } from "./queue.ts";

export interface Channel<T> {
  closed: Promise<void>;
  signal: AbortSignal;
  close(): void;
  send(value: T): Promise<void>;
  recv(signal?: AbortSignal): AsyncIterableIterator<T>;
}

export const link = (...signals: AbortSignal[]): AbortSignal => {
  const ctrl = new AbortController();
  for (const signal of signals) {
    signal.onabort = (evt) => {
      if (!ctrl.signal.aborted) {
        ctrl.abort(evt);
      }
    };
  }
  return ctrl.signal;
};

export class ClosedChannelError extends Error {
  constructor() {
    super("Channel is closed");
  }
}
export const ifClosedChannel =
  (cb: () => Promise<void> | void) => (err: unknown) => {
    if (err instanceof ClosedChannelError) {
      return cb();
    }
    throw err;
  };

export const ignoreIfClosed = ifClosedChannel(() => {});
export const makeChan = <T>(capacity = 0): Channel<T> => {
  let currentCapacity = capacity;
  const queue: Queue<{ value: T; resolve: () => void }> = new Queue();
  const ctrl = new AbortController();
  const abortPromise = Promise.withResolvers<void>();
  ctrl.signal.onabort = () => {
    abortPromise.resolve();
  };

  const send = (value: T): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (ctrl.signal.aborted) reject(new ClosedChannelError());
      let mResolve = resolve;
      if (currentCapacity > 0) {
        currentCapacity--;
        mResolve = () => {
          currentCapacity++;
        };
        resolve();
      }
      queue.push({ value, resolve: mResolve });
    });
  };

  const close = () => {
    ctrl.abort();
  };

  const recv = async function* (
    signal?: AbortSignal,
  ): AsyncIterableIterator<T> {
    const linked = signal ? link(ctrl.signal, signal) : ctrl.signal;
    while (true) {
      if (linked.aborted) {
        return;
      }
      try {
        const next = await queue.pop({ signal: linked });
        next.resolve();
        yield next.value;
      } catch (_err) {
        if (linked.aborted) {
          return;
        }
        throw _err;
      }
    }
  };

  return {
    send,
    recv,
    close,
    signal: ctrl.signal,
    closed: abortPromise.promise,
  };
};

export interface DuplexChannel<TSend, TReceive> {
  in: Channel<TReceive>;
  out: Channel<TSend>;
}

// deno-lint-ignore no-explicit-any
export type Message<TMessageProperties = any> = TMessageProperties & {
  payload?: Uint8Array;
};

// Function to combine metadata and binary data
function createMessage(
  metadata: unknown,
  uint8Array?: Uint8Array,
): ArrayBuffer {
  const metadataString = JSON.stringify(metadata);
  const metadataUint8Array = new TextEncoder().encode(metadataString);

  // Create a buffer to hold the metadata length, metadata, and binary data
  const buffer = new ArrayBuffer(
    4 + metadataUint8Array.length + (uint8Array?.length ?? 0),
  );
  const view = new DataView(buffer);

  // Write the metadata length (4 bytes)
  view.setUint32(0, metadataUint8Array.length, true);

  // Write the metadata
  new Uint8Array(buffer, 4, metadataUint8Array.length).set(metadataUint8Array);

  // Write the binary data
  uint8Array &&
    new Uint8Array(buffer, 4 + metadataUint8Array.length).set(uint8Array);

  return buffer;
}

function parseMessage(
  buffer: ArrayBuffer,
  // deno-lint-ignore no-explicit-any
): { metadata: any; binaryData: Uint8Array } {
  const view = new DataView(buffer);

  // Read the metadata length (4 bytes)
  const metadataLength = view.getUint32(0, true);

  // Read the metadata
  const metadataUint8Array = new Uint8Array(buffer, 4, metadataLength);
  const metadataString = new TextDecoder().decode(metadataUint8Array);
  const metadata = JSON.parse(metadataString);

  // Read the binary data
  const binaryData = new Uint8Array(buffer, 4 + metadataLength);

  return { metadata, binaryData };
}

export const makeWebSocket = <
  TSend,
  TReceive,
  TMessageSend = Message<TSend>,
  TMessageRecieve = Message<TReceive>,
>(
  socket: WebSocket,
  parse: boolean = true,
): Promise<DuplexChannel<TMessageSend, TMessageRecieve>> => {
  const sendChan = makeChan<TMessageSend>();
  const recvChan = makeChan<TMessageRecieve>();
  const ch = Promise.withResolvers<
    DuplexChannel<TMessageSend, TMessageRecieve>
  >();
  socket.binaryType = "arraybuffer";
  socket.onclose = () => {
    sendChan.close();
    recvChan.close();
  };
  socket.onerror = (err) => {
    socket.close();
    ch.reject(err);
  };
  socket.onmessage = async (msg) => {
    if (recvChan.signal.aborted) {
      return;
    }
    if (!parse) {
      await recvChan.send(msg.data);
      return;
    }
    const { binaryData, metadata } = parseMessage(msg.data);
    await recvChan.send({ ...metadata, payload: binaryData });
  };
  socket.onopen = async () => {
    ch.resolve({ in: recvChan, out: sendChan });
    for await (const message of sendChan.recv()) {
      try {
        if (!parse) {
          socket.send(message as unknown as ArrayBuffer);
          continue;
        }
        const { payload, ...rest } = message as { payload?: Uint8Array };
        const msg = createMessage(rest, payload);
        socket.send(
          msg,
        );
      } catch (_err) {
        console.error("error sending message through socket", message);
      }
    }
    socket.close();
  };
  return ch.promise;
};

export const makeReadableStream = (
  ch: Channel<Uint8Array>,
): ReadableStream<Uint8Array> => {
  return new ReadableStream({
    async start(controller) {
      for await (const content of ch.recv()) {
        controller.enqueue(content);
      }
      controller.close();
    },
    cancel() {
      ch.close();
    },
  });
};
export const makeChanStream = (
  stream: ReadableStream,
): Channel<Uint8Array> => {
  const chan = makeChan<Uint8Array>(0); // capacity

  // Consume the transformed stream to trigger the pipeline
  const reader = stream.getReader();
  const processStream = async () => {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      await chan.send(value);
    }
    chan.close();
  };
  processStream().catch(console.error);
  return chan;
};
