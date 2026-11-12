import { assertEquals } from "jsr:@std/assert@^1";
import { connect, type ConnectOptions } from "../client.ts";
import { canRegister, stripCookieDomain } from "../decohost.ts";
import { type HandlerOptions, serveHandler } from "../server.ts";

const KEY = "test-key";
const DOMAIN = "env--site.deco.host";
const leaky = { sanitizeOps: false, sanitizeResources: false };

const tunnelServer = (options: Partial<HandlerOptions> = {}) =>
  Deno.serve(
    { port: 0, onListen() {} },
    serveHandler({ apiKeys: [KEY], ...options }),
  );

const register = async (opts: ConnectOptions) => {
  const c = await connect(opts);
  const outcome = await Promise.race([
    c.registered.then(() => "registered" as const),
    c.closed.then(() => "rejected" as const),
  ]);
  return { c, outcome };
};

Deno.test({
  name: "a live domain can't be taken over, and is free again once its owner leaves",
  ...leaky,
  fn: async () => {
    const server = tunnelServer();
    const opts = {
      apiKey: KEY,
      domain: DOMAIN,
      server: `ws://localhost:${server.addr.port}`,
      localAddr: "http://localhost:1",
    };

    const owner = await register(opts);
    assertEquals(owner.outcome, "registered");
    assertEquals((await register(opts)).outcome, "rejected");

    // The owner reconnecting (deco daemon retries 500ms after a drop) must work.
    owner.c.close();
    let again = "rejected";
    for (let i = 0; i < 20 && again !== "registered"; i++) {
      await new Promise((r) => setTimeout(r, 50));
      again = (await register(opts)).outcome;
    }
    assertEquals(again, "registered");
    await server.shutdown();
  },
});

Deno.test({
  name: "canRegister=false rejects the registration",
  ...leaky,
  fn: async () => {
    const server = tunnelServer({ canRegister: () => false });
    const { outcome } = await register({
      apiKey: KEY,
      domain: DOMAIN,
      server: `ws://localhost:${server.addr.port}`,
      localAddr: "http://localhost:1",
    });
    assertEquals(outcome, "rejected");
    await server.shutdown();
  },
});

Deno.test("deco.host policy: only the connected <env>--<site> host", () => {
  const connectedTo = (host: string) =>
    new Request(`https://${host}/_connect`, { headers: { host } });

  assertEquals(canRegister(DOMAIN, connectedTo(DOMAIN)), true);
  assertEquals(canRegister(DOMAIN, connectedTo("other--site.deco.host")), false);
  for (const host of ["deco.host", "www.deco.host", "admin.deco.host", "x.env--site.deco.host", "ENV--site.deco.host"]) {
    assertEquals(canRegister(host, connectedTo(host)), false, host);
  }
});

Deno.test("deco.host policy: Set-Cookie Domain is stripped", () => {
  const res = new Response("ok", {
    headers: [
      ["set-cookie", "a=1; Domain=deco.host; Path=/"],
      ["set-cookie", "b=2; Path=/; domain=.deco.host; Secure"],
    ],
  });
  assertEquals(stripCookieDomain(res).headers.getSetCookie(), [
    "a=1; Path=/",
    "b=2; Path=/; Secure",
  ]);

  const noCookies = new Response("ok");
  assertEquals(stripCookieDomain(noCookies), noCookies);
});
