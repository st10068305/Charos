import { ZodError, z } from "zod";

const Environment = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z.coerce.number().default(4000),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
});

export type Environment = z.infer<typeof Environment>;

let env: Environment;

try {
  env = Environment.parse(process.env);
} catch (err) {
  const error = err as ZodError;

  console.error("🔥 Invalid Environment.");
  console.error(error.flatten().fieldErrors);

  process.exit(1);
}

export default env;
