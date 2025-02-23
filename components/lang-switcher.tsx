"use client";

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

export function LangSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant="outline" size="icon">
          <CircleFlagLanguage languageCode={locale} height={24} width={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="*:cursor-pointer">
        <DropdownMenuItem asChild>
          <Link href={`/ja${pathname}`}>
            <CircleFlagLanguage
              languageCode={"ja"}
              height={20}
              width={20}
              className="mr-2"
            />
            日本語
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/en${pathname}`}>
            <CircleFlagLanguage
              languageCode={"en"}
              height={20}
              width={20}
              className="mr-2"
            />
            English
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
