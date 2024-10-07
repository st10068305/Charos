import configureOpenAPI from "./utils/configure-openapi";
import createApp from "./utils/create-app";

const app = createApp();

configureOpenAPI(app);

export default app;
