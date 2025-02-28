"use client";

import type { Locale } from "@/i18n/request";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { useLocale } from "next-intl";

type IslandMenuButtonProps = {
  href: string;
  icon: ReactNode;
};

export function IslandMenuButton({ href, icon }: IslandMenuButtonProps) {
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const IconSlot = Slot as LucideIcon;

  const isActive =
    href === "/"
      ? pathname === `/${locale}` || pathname === `/${locale}/`
      : pathname.startsWith(`/${locale}${href}`);

  return (
    <Button
      asChild
      className={cn(
        "rounded-full",
        isActive && "border-2 border-accent text-accent",
      )}
      variant="outline"
      size="icon"
    >
      <Link href={href}>
        <IconSlot>{icon}</IconSlot>
      </Link>
    </Button>
  );
}
