const LOCAL_PORT = 8000;
const _localServer = Deno.serve({
  handler: async (req) => {
    if (req.url.endsWith("/connect-ws")) {
      const { socket, response } = Deno.upgradeWebSocket(req);
      socket.onclose = () => {
        console.log("CLOSED");
      };
      socket.onopen = () => {
        console.log("OPEN");
        socket.send(JSON.stringify({ ping: true }));
      };
      socket.onmessage = (_msg) => {
        console.log("MESSAGE RECEIVED");
      };
      return response;
    }
    await req.text();
    const cp = new Headers(req.headers);
    cp.set("x-server-reply", "true");
    return new Response((await Deno.open("../big.response.html")).readable, {
      headers: {
        "content-type": "text/html",
      },
      status: 200,
    });
  },
  port: LOCAL_PORT,
});
