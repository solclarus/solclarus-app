import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DEBUG_URL: z.string().url(),
    NEWT_SPACE_UID: z.string().min(1),
    NEWT_CDN_API_TOKEN: z.string().min(1),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },
  runtimeEnv: {
    DEBUG_URL: process.env.DEBUG_URL,
    NEWT_SPACE_UID: process.env.NEWT_SPACE_UID,
    NEWT_CDN_API_TOKEN: process.env.NEWT_CDN_API_TOKEN,
    NODE_ENV: process.env.NODE_ENV,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
