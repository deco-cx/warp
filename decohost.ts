// Policy for the deco.host deployment (the `warp` Cloudflare Worker).
// The generic server in server.ts stays policy-free; only the Worker uses this.

// Every deco tunnel client (deco daemon, @decocms/start, deco-sites/mcp)
// registers `<env>--<site>.deco.host`. Requiring the `--` keeps the apex and
// service names (www, api, admin, ...) out of reach of any registration.
const TUNNEL_HOST = /^[a-z0-9-]+--[a-z0-9-]+\.deco\.host$/;

/**
 * A connection may only register the exact tunnel host it connected to.
 * Each host is its own Durable Object, so that is also the only domain that
 * can ever receive its traffic.
 */
export const canRegister = (domain: string, connectReq: Request): boolean => {
  const host = connectReq.headers.get("host");
  const allowed = domain === host && TUNNEL_HOST.test(domain);
  console.log(JSON.stringify({
    event: "warp.register",
    domain,
    host,
    allowed,
    ip: connectReq.headers.get("cf-connecting-ip"),
  }));
  return allowed;
};

/**
 * deco.host is not on the Public Suffix List, so a tunnel response with
 * `Set-Cookie: ...; Domain=deco.host` would reach every other *.deco.host.
 * Dropping the Domain attribute makes each cookie host-only.
 */
export const stripCookieDomain = (res: Response): Response => {
  const cookies = res.headers.getSetCookie();
  if (res.status === 101 || cookies.length === 0) return res;
  const out = new Response(res.body, res);
  out.headers.delete("set-cookie");
  for (const cookie of cookies) {
    out.headers.append("set-cookie", cookie.replace(/;\s*domain=[^;]*/gi, ""));
  }
  return out;
};
