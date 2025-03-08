"use client";

import * as React from "react";
import { THEMES } from "@/config/themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
  const themeIds = THEMES.map((theme) => theme.id);

  return (
    <NextThemesProvider
      attribute={"data-theme"}
      defaultTheme={themeIds[0]}
      themes={themeIds}
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
