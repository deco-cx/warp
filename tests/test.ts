import { connect } from "../client.ts";
import { KEY } from "./consts.ts";

const _worker = new Worker(import.meta.resolve("./server_test.ts"), {
  type: "module",
  deno: { permissions: "inherit" },
});

const _worker2 = new Worker(import.meta.resolve("./tunnel_server_test.ts"), {
  type: "module",
  deno: { permissions: "inherit" },
});
const domain = "localhost:8001";
const { registered } = await connect({
  domain,
  localAddr: "http://localhost:8000",
  server: "ws://localhost:8001",
  apiKey: KEY,
});

await registered;

const client = Deno.createHttpClient({
  allowHost: true,
});

const start = performance.now();
const resp = await fetch("http://localhost:8001", {
  method: "POST",
  headers: {
    "x-client-request": "true",
    "host": domain,
  },
  client,
  body: (await Deno.open("./big.response.html")).readable,
});
const text = await resp.text();
console.log("TEXT", resp.headers);
console.log("TOOK", performance.now() - start, "Ms");

const start2 = performance.now();
const resp2 = await fetch("http://localhost:8000", {
  method: "POST",
  headers: {
    "x-client-request": "true",
    "host": domain,
  },
  client,
  body: (await Deno.open("./big.response.html")).readable,
});
const text2 = await resp2.text();
console.log("TEXT2", resp.headers);
console.log("TOOK2", performance.now() - start2, "Ms");

console.log("EQUAL", text === text2);
const ws = new WebSocket("ws://localhost:8001/connect-ws");
ws.onmessage = (_msg) => {
  console.log("MESSAGE CLIENT RECEIVED");
};
ws.onopen = () => {
  ws.send(JSON.stringify({ pong: true }));
  ws.close();
};
