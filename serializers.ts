import type { Message, MessageSerializer } from "./channel.ts";

/**
 * Ensures that the given chunk is in the form of a Uint8Array.
 * If it's not already an array, it converts the provided object into a Uint8Array.
 * @param {Uint8Array | Record<string, Uint8Array[number]>} chunk - The input chunk, which can be either a Uint8Array or an object.
 * @returns {Uint8Array} The chunk converted into a Uint8Array.
 */
export const ensureChunked = (
  chunk: Uint8Array | Record<string, Uint8Array[number]> & { length: number },
): Uint8Array => {
  if (Array.isArray(chunk)) {
    return chunk as Uint8Array;
  }
  (chunk as { length: number }).length = Object.keys(chunk).length;
  const arr = Uint8Array.from(
    chunk,
  );
  return arr;
};

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

  // Read the binary data
  const binaryData = new Uint8Array(buffer, 4 + metadataLength);
  try {
    const metadata = JSON.parse(metadataString);

    return { metadata, binaryData };
  } catch (error) {
    console.log({
      error,
      buffer,
      binaryData,
      metadataString,
      metadataUint8Array,
    });
    return { metadata: "", binaryData };
  }
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
