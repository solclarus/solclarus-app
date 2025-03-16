import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Link as LinkType } from "@/types/work";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { FaAppStore, FaGithub, FaGlobe, FaGooglePlay } from "react-icons/fa";

type Metadata = {
  slug: string;
  title: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  image: string;
  links: LinkType[];
};

export function WorkLayout({
  children,
  metadata,
}: {
  children: React.ReactNode;
  metadata: Metadata;
}) {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-12 overflow-hidden rounded-xl border">
        <Image
          src={metadata.image}
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
          {metadata.tags?.map((tag: string, index: number) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
      </header>
      <article className="prose max-w-none">{children}</article>
    </div>
  );
}
