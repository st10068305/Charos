import { serve } from "@hono/node-server";
import { config } from "dotenv";
import { expand } from "dotenv-expand";

import app from "@/app";

import env from "@/lib/env";

expand(config());

const port = env.PORT;

console.log("🚀 The API is running on http://localhost:" + port);

serve({
  fetch: app.fetch,
  port,
});
