import { createRoute, z } from "@hono/zod-openapi";

import createRouter from "@/utils/create-router";

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

const router = createRouter().openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: {
          "text/plain": {
            schema: z.string(),
          },
        },
        description: "Charos API index route",
      },
    },
  }),
  (context) => {
    return context.text(CharosText, 200);
  }
);

export default router;
