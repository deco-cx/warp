// copied from https://github.com/honojs/hono/blob/80c7e225af5fd8f92b3a69015fe78c546b678ba9/src/helper/adapter/index.ts#L45 under MIT License.
// deno-lint-ignore-file no-explicit-any
/**
 * @module
 * Adapter Helper for Hono.
 */

export type Runtime =
  | "node"
  | "deno"
  | "bun"
  | "workerd"
  | "fastly"
  | "edge-light"
  | "other";

const knownUserAgents: Partial<Record<Runtime, string>> = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js",
};

export const getRuntimeKey = (): Runtime => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global = globalThis as any;

  // check if the current runtime supports navigator.userAgent
  const userAgentSupported = typeof navigator !== "undefined" &&
    typeof navigator.userAgent === "string";

  // if supported, check the user agent
  if (userAgentSupported) {
    for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey as Runtime;
      }
    }
  }

  // check if running on Edge Runtime
  if (typeof global?.EdgeRuntime === "string") {
    return "edge-light";
  }

  // check if running on Fastly
  if (global?.fastly !== undefined) {
    return "fastly";
  }

  // userAgent isn't supported before Node v21.1.0; so fallback to the old way
  if (global?.process?.release?.name === "node") {
    return "node";
  }

  // couldn't detect the runtime
  return "other";
};

const checkUserAgentEquals = (platform: string): boolean => {
  const userAgent = navigator.userAgent;

  return userAgent.startsWith(platform);
};


export const upgradeWebSocket = (req: Request): { socket: WebSocket; response: Response } => {
  if (getRuntimeKey() === "deno") {
    return Deno.upgradeWebSocket(req);
  }
  // @ts-ignore: WebSocketPair is not part of the global scope
  const webSocketPair = new WebSocketPair();
  const [client, server] = Object.values(webSocketPair);
  // @ts-ignore: WebSocketPair is not part of the global scope
  const originalAccept = server.accept.bind(server);
  // @ts-ignore: WebSocketPair is not part of the global scope
  server.accept = () => {
    originalAccept();
    // @ts-ignore: WebSocketPair is not part of the global scope
    server.dispatchEvent(new Event("open"));
  };
  return {
    socket: server as WebSocket,
    response: new Response(null, {
      status: 101,
      // @ts-ignore: webSocket is not part of the Response type
      webSocket: client,
    }),
  };
};