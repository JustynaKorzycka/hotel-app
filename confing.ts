import { z } from "zod";

const envVariables = z.object({
  NEXT_PUBLIC_NAME: z.string(),
});

export const projectEnvs = envVariables.parse(process.env);

declare global {
  namespace NodeJs {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
