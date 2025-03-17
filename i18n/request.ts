import type { AbstractIntlMessages } from "next-intl";
import { routing } from "@/i18n/routing";
import { getRequestConfig } from "next-intl/server";

export type Locale = "en" | "ja";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  const messages = (
    (await import(`@/messages/${locale}.json`)) as AbstractIntlMessages
  ).default as AbstractIntlMessages;

  return {
    locale,
    messages,
  };
});
