"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themes } from "@/config/themes";
import { type Locale } from "@/i18n/request";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const locale = useLocale() as Locale;

  useEffect(() => setMounted(true), []);

  function getCurrentThemeIcon() {
    const currentTheme = themes.find((t) => t.id === theme) ?? themes[0];
    const Icon = currentTheme!.icon;
    return <Icon className={currentTheme!.className} />;
  }

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          {getCurrentThemeIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="*:cursor-pointer">
        {themes.map((item) => (
          <DropdownMenuItem
            key={item.id}
            disabled={theme == item.id}
            onClick={() => setTheme(item.id)}
          >
            <item.icon className={item.className} />
            {item.label[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
