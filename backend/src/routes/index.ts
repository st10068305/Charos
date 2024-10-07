import { OpenAPIHono } from "@hono/zod-openapi";

import { Config } from "@/types";

const indexRouter = new OpenAPIHono<Config>();

const CharosText = `██████╗██╗  ██╗ █████╗ ██████╗  ██████╗ ███████╗
██╔════╝██║  ██║██╔══██╗██╔══██╗██╔═══██╗██╔════╝
██║     ███████║███████║██████╔╝██║   ██║███████╗
██║     ██╔══██║██╔══██║██╔══██╗██║   ██║╚════██║
╚██████╗██║  ██║██║  ██║██║  ██║╚██████╔╝███████║
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝

Developed by:

ST10081301: Kyle Josh Venter
ST10068305: Connor Richard Davis
ST1002865: Umar Bux
ST10240068: Mohamed Ziyaa Moosa
`;

indexRouter.get("/", (context) => {
  return context.text(CharosText, 200);
});

export default indexRouter;
