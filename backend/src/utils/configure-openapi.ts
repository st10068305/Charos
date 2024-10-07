import { OpenAPIHono } from "@hono/zod-openapi";

import { Config } from "@/types";

import packageJSON from "../../package.json";

export default function configureOpenAPI(app: OpenAPIHono<Config>) {
  app.doc("/api-doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "Charos API",
    },
  });
}
