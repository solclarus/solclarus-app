"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

type IslandMenuButtonProps = {
  href: string;
  icon: ReactNode;
};

export function IslandMenuButton({ href, icon }: IslandMenuButtonProps) {
  const pathname = usePathname();
  const locale = useParams().locale as "en" | "ja";
  const IconSlot = Slot as LucideIcon;

  return (
    <Button
      asChild
      className={cn(
        "rounded-full",
        pathname === `/${locale}${href}` && "border bg-muted",
      )}
      variant="ghost"
      size="icon"
    >
      <Link href={href}>
        <IconSlot className="h-[1.2rem] w-[1.2rem]">{icon}</IconSlot>
      </Link>
    </Button>
  );
}
