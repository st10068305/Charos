import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";

import { pinoLogger } from "./middleware/pino-logger";
import indexRouter from "./routes";
import { Config } from "./types/config";

const app = new OpenAPIHono<Config>();

app.notFound(notFound);
app.onError(onError);

app.use(pinoLogger());

app.route("/", indexRouter);

export default app;
