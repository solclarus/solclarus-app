import type { Metadata } from "next";

import "@/styles/globals.css";

import type { Locale } from "@/i18n/request";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { IslandMenu } from "@/components/island-menu";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { config } from "@/config/app";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: config.app,
  description: config.description,
};

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = (await params).locale;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <div className="min-h-dvh">
              {children}
              <IslandMenu />
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
