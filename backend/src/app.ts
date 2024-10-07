import index from "@/routes/index.route";

import configureOpenAPI from "./lib/configure-openapi";
import configureScalar from "./lib/configure-scalar";
import createApp from "./lib/create-app";

const app = createApp();

const routes = [index];

configureOpenAPI(app);
configureScalar(app);

routes.forEach((route) => app.route("/", route));

export default app;
