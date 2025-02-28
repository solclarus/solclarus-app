"use client";

import * as React from "react";
import { themes } from "@/config/themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
  const themeIds = themes.map((theme) => theme.id);

  function getDefaultThemeBySeason() {
    const month = new Date().getMonth() + 1;

    if (month >= 3 && month <= 5) return "spring-blossom";
    if (month >= 6 && month <= 8) return "summer-ocean";
    if (month >= 9 && month <= 11) return "autumn-maple";
    return "winter-snow";
  }

  return (
    <NextThemesProvider
      attribute={"data-theme"}
      defaultTheme={getDefaultThemeBySeason()}
      themes={themeIds}
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
