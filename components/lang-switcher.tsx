"use client";

import type { Locale } from "@/i18n/request";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { CircleFlagLanguage } from "react-circle-flags";

const AVAILABLE_LOCALES: { code: Locale; label: string }[] = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
];

export function LangSwitcher() {
  const pathname = usePathname();
  const locale = useLocale() as Locale;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant="outline" size="icon">
          <CircleFlagLanguage languageCode={locale} height={24} width={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="*:cursor-pointer">
        {AVAILABLE_LOCALES.map(({ code, label }) => {
          return (
            <DropdownMenuItem key={code} disabled={code === locale} asChild>
              <Link href={`/${code}${pathname}`}>
                <CircleFlagLanguage
                  languageCode={code}
                  height={20}
                  width={20}
                  className="mr-2"
                />
                {label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
