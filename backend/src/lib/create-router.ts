import { OpenAPIHono } from "@hono/zod-openapi";

import { Config } from "@/types";

export default function createRouter() {
  return new OpenAPIHono<Config>({ strict: false });
}
