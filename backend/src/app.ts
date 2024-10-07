import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

import { pinoLogger } from "./middleware/pino-logger";
import indexRouter from "./routes";
import { Config } from "./types/config";

const app = new OpenAPIHono<Config>();

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

/**
 * Initialize our router.
 */
app.route("/", indexRouter);

export default app;
