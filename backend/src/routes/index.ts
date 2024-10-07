import { OpenAPIHono } from "@hono/zod-openapi";

import { Config } from "@/types/config";

const indexRouter = new OpenAPIHono<Config>();

export default indexRouter;
