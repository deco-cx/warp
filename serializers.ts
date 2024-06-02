import type { Message, MessageSerializer } from "./channel.ts";
import { ensureChunked } from "./server.ts";

export const jsonSerializer = <TSend, TReceive>(): MessageSerializer<
  TSend,
  TReceive,
  string
> => {
  return {
    deserialize: (msg) => {
      const parsed = JSON.parse(msg);
      if (!("chunk" in parsed)) {
        return parsed;
      }
      const { chunk, ...rest } = parsed;
      return {
        chunk: ensureChunked(chunk),
        ...rest,
      };
    },
    serialize: JSON.stringify,
  };
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

export const arrayBufferSerializer = (): MessageSerializer<
  ArrayBuffer,
  ArrayBuffer,
  ArrayBuffer
> => {
  return {
    binaryType: "arraybuffer",
    serialize: (msg) => msg,
    deserialize: (msg) => msg,
  };
};

export const dataViewerSerializer = <
  TSend,
  TReceive,
>(): MessageSerializer<
  TSend,
  TReceive,
  ArrayBuffer
> => {
  return {
    binaryType: "arraybuffer",
    serialize: ({ chunk, ...rest }: Message<TSend>) => {
      return createMessage(rest, chunk);
    },
    deserialize: (buffer: ArrayBuffer) => {
      const parsed = parseMessage(buffer);
      return {
        ...parsed.metadata,
        chunk: parsed.binaryData,
      };
    },
  };
};
