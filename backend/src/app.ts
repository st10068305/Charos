import index from "@/routes/index.route";

import configureOpenAPI from "./utils/configure-openapi";
import configureScalar from "./utils/configure-scalar";
import createApp from "./utils/create-app";

const app = createApp();

const routes = [index];

configureOpenAPI(app);
configureScalar(app);

routes.forEach((route) => app.route("/", route));

export default app;
