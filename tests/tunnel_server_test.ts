import { serve } from "../server.ts";
import { KEY } from "./consts.ts";

const _tunnelServer = serve({
  apiKeys: [KEY],
  port: 8001,
});
