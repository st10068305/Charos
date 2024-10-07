import { OpenAPIHono } from "@hono/zod-openapi";
import { apiReference } from "@scalar/hono-api-reference";

import { Config } from "@/types";

export default function configureScalar(app: OpenAPIHono<Config>) {
  app.get(
    "/api-doc",
    apiReference({
      spec: {
        url: "/api-spec",
      },
    })
  );
}
