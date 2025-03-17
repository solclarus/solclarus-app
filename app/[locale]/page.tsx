"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { config } from "@/config/app";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center px-4 pt-10 md:items-start md:px-0">
      <Avatar className="mb-3 size-28 rounded-full border">
        <AvatarImage src={config.icon} alt={config.author} />
        <AvatarFallback>{config.author.toUpperCase().charAt(0)}</AvatarFallback>
      </Avatar>
      <h2 className="mb-3 text-xl font-bold text-accent">{config.author}</h2>
      <p className="text-center md:text-start">
        {t.rich("greeting", {
          name: (name) => (
            <span className="font-extrabold italic text-accent">{name}</span>
          ),
        })}
      </p>
    </main>
  );
}
