import { PinoLogger } from "hono-pino";

export type Config = {
  Variables: {
    logger: PinoLogger;
  };
};
