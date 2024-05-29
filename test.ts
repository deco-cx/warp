import { connect } from "./client.ts";
import { start } from "./server.ts";

const LOCAL_PORT = 8000;
const _localServer = Deno.serve({
  handler: (req) => {
    if (req.url.endsWith("/connect-ws")) {
      const { socket, response } = Deno.upgradeWebSocket(req);
      socket.onclose = () => {
        console.log("CLOSED");
      }
      socket.onopen = () => {
        console.log("OPEN");
        socket.send(JSON.stringify({ ping: true }));
      }
      socket.onmessage = (msg) => {
        console.log("MESSAGE RECEIVED", msg);
      }
      return response;
    }
    const cp = new Headers(req.headers);
    cp.set("x-server-reply", "true");
    return new Response(JSON.stringify({ message: "HELLO WORLD" }), {
      headers: {
        'content-type': "application/json",
      }, status: 200
    });
  },
  port: LOCAL_PORT,
});


const KEY = "c309424a-2dc4-46fe-bfc7-a7c10df59477";

const _tunnelServer = start({
  apiKeys: [KEY],
  port: 8001
});

const domain = "localhost:8001";
await connect({
  domain,
  localAddr: "http://localhost:8000",
  server: "ws://localhost:8001",
  token: KEY,
});


const client = Deno.createHttpClient({
  allowHost: true,
});

const resp = await fetch("http://localhost:8001", {
  method: "POST",
  headers: {
    "x-client-request": "true",
    "host": domain
  },
  client,
  body: "Hello World",
});
console.log("TEXT", await resp.text(), resp.headers);


const ws = new WebSocket("ws://localhost:8001/connect-ws");
ws.onmessage = (msg) => {
  console.log("MESSAGE CLIENT RECEIVED", msg);
}
ws.onopen = () => {
  ws.send(JSON.stringify({ pong: true }))
  ws.close();
}