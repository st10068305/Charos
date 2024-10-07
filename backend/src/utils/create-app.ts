import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

import { Config } from "@/types";

import { pinoLogger } from "../middleware/pino-logger";

export default function createApp() {
  const app = new OpenAPIHono<Config>({ strict: false });

  /**
   * Setup our not found and error middleware to return JSON responses.
   */
  app.notFound(notFound);
  app.onError(onError);

  /**
   * Setup our usages.
   */
  app.use(serveEmojiFavicon("📦"));
  app.use(pinoLogger());

  return app;
}
