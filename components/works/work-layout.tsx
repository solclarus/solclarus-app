import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Locale } from "@/i18n/request";
import { type Work } from "@/types/work";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { FaAppStore, FaGithub, FaGlobe, FaGooglePlay } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  metadata: Work;
  locale: Locale;
};

export function WorkLayout({ children, metadata, locale }: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-12 overflow-hidden rounded-xl border">
        <Image
          src={`/images/works/${metadata.slug}.jpg`}
          alt={metadata.title}
          width={1200}
          height={600}
          className="w-full object-cover"
        />
      </div>
      <header className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl">
              {metadata.title}
            </h1>
            <p className="mb-2">{metadata.description[locale]}</p>
            <div className="mb-3 flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{format(metadata.publishedAt, "yyyy/MM/dd")}</span>
            </div>
            <div className="flex gap-1">
              {metadata.links.map((link, index) => (
                <Button key={index} size="icon" asChild>
                  <Link href={link.href}>
                    {link.type === "github" && <FaGithub />}
                    {link.type === "website" && <FaGlobe />}
                    {link.type === "appstore" && <FaAppStore />}
                    {link.type === "googleplay" && <FaGooglePlay />}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {metadata.tags[locale].map((tag: string, index: number) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
      </header>
      <article className="prose max-w-none">{children}</article>
    </div>
  );
}
