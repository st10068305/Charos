import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

import { pinoLogger } from "../middleware/pino-logger";
import createRouter from "./create-router";

export default function createApp() {
  const app = createRouter();
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
