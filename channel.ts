import { Queue } from "./queue.ts";
import { jsonSerializer } from "./serializers.ts";

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
  chunk?: Uint8Array;
};

export interface MessageSerializer<
  TSend,
  TReceive,
  TRawFormat extends string | ArrayBufferLike | ArrayBufferView | Blob,
> {
  binaryType?: BinaryType;
  serialize: (
    msg: Message<TSend>,
  ) => TRawFormat;
  deserialize: (str: TRawFormat) => Message<TReceive>;
}

export const makeWebSocket = <
  TSend,
  TReceive,
  TMessageFormat extends string | ArrayBufferLike | ArrayBufferView | Blob =
    | string
    | ArrayBufferLike
    | ArrayBufferView
    | Blob,
>(
  socket: WebSocket,
  _serializer?: MessageSerializer<TSend, TReceive, TMessageFormat>,
): Promise<DuplexChannel<Message<TSend>, Message<TReceive>>> => {
  const serializer = _serializer ??
    jsonSerializer<Message<TSend>, Message<TReceive>>();
  const sendChan = makeChan<Message<TSend>>();
  const recvChan = makeChan<Message<TReceive>>();
  const ch = Promise.withResolvers<
    DuplexChannel<Message<TSend>, Message<TReceive>>
  >();
  socket.binaryType = serializer.binaryType ?? "blob";
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
    await recvChan.send(serializer.deserialize(msg.data));
  };
  socket.onopen = async () => {
    ch.resolve({ in: recvChan, out: sendChan });
    for await (const message of sendChan.recv()) {
      try {
        socket.send(
          serializer.serialize(message),
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
