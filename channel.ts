import { Queue } from "./queue.ts";

export interface Channel<T> {
    close(): void;
    send(value: T): Promise<void>;
    recv(): AsyncIterableIterator<T>;
}

export const makeChan = <T>(): Channel<T> => {
    const queue: Queue<{ value: T, resolve: () => void }> = new Queue();
    const ctrl = new AbortController();
    const abortPromise = Promise.withResolvers<void>();
    ctrl.signal.onabort = () => {
        abortPromise.resolve();
    }

    const send = (value: T): Promise<void> => {
        return new Promise((resolve, reject) => {
            if (ctrl.signal.aborted) reject(new Error("Channel is closed"));
            queue.push({ value, resolve });
        });
    };

    const close = () => {
        ctrl.abort();
    };

    const recv = async function* (): AsyncIterableIterator<T> {
        while (true) {
            if (ctrl.signal.aborted) {
                return;
            }
            try {
                const next = await queue.pop({ signal: ctrl.signal });
                next.resolve();
                yield next.value;
            } catch (_err) {
                if (ctrl.signal.aborted) {
                    return;
                }
                throw _err;
            }
        }
    };

    return { send, recv, close };
};

export interface DuplexChannel<TSend, TReceive> {
    in: Channel<TReceive>
    out: Channel<TSend>
}

export const makeWebSocket = <TSend, TReceive>(socket: WebSocket, parse: boolean = true): Promise<DuplexChannel<TSend, TReceive>> => {
    const sendChan = makeChan<TSend>();
    const recvChan = makeChan<TReceive>();
    const ch = Promise.withResolvers<DuplexChannel<TSend, TReceive>>();
    socket.onclose = () => {
        sendChan.close();
        recvChan.close();
    }
    socket.onerror = (err) => {
        socket.close();
        ch.reject(err);
    }
    socket.onmessage = async (msg) => {
        let eventData = msg.data;
        const target = msg?.target;
        if (
            target && "binaryType" in target &&
            target.binaryType === "blob" && typeof eventData === "object" &&
            "text" in eventData
        ) {
            eventData = await eventData.text();
        }
        const message = parse ? JSON.parse(eventData) : eventData;
        await recvChan.send(message);
    }
    socket.onopen = async () => {
        ch.resolve({ in: recvChan, out: sendChan });
        for await (const message of sendChan.recv()) {
            try {
                socket.send(parse ? JSON.stringify(message) : message as ArrayBuffer);
            } catch (_err) {
                console.error("error sending message through socket", message);
            }
        }
        socket.close();
    }
    return ch.promise;
}

export const makeReadableStream = (ch: Channel<Uint8Array>): ReadableStream<Uint8Array> => {
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
    })
}
export const makeChanStream = (stream: ReadableStream): Channel<Uint8Array> => {
    const chan = makeChan<Uint8Array>();

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
