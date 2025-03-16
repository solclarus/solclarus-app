import type { Metadata } from "next";

import "@/styles/globals.css";

import type { Locale } from "@/i18n/request";
import { notFound } from "next/navigation";
import { FloatingMenu } from "@/components/common/floating-menu";
import { Footer } from "@/components/common/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { config } from "@/config/app";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: config.app,
  description: config.description,
};

type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>;

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
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
              <FloatingMenu />
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
