import app from "@/app";
import { serve } from "@hono/node-server";

const port = 4000;

console.log("🚀 The API is running on http://localhost:" + port);

serve({
    fetch: app.fetch,
    port
})