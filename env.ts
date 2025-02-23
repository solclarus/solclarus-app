import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DEBUG_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  client: {
    NEXT_PUBLIC_NEWT_SPACE_UID: z.string().min(1),
    NEXT_PUBLIC_NEWT_CDN_API_TOKEN: z.string().min(1),
  },
  runtimeEnv: {
    DEBUG_URL: process.env.DEBUG_URL,
    NEXT_PUBLIC_NEWT_SPACE_UID: process.env.NEXT_PUBLIC_NEWT_SPACE_UID,
    NEXT_PUBLIC_NEWT_CDN_API_TOKEN: process.env.NEXT_PUBLIC_NEWT_CDN_API_TOKEN,
    NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
