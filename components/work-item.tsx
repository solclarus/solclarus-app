import type { Locale } from "@/i18n/request";
import type { Work } from "@/types/work";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

type WorkItemProps = {
  work: Work;
  locale: Locale;
};

export function WorkItem({ work, locale }: WorkItemProps) {
  const { slug, title, description, publishedAt } = work;

  return (
    <article className="group flex flex-col">
      <Link href={`/${locale}/works/${slug}`} className="block">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={`/images/works/${slug}.jpg`}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/80 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm text-muted-foreground">
              {description[locale]}
            </p>
          </div>
        </div>
      </Link>
      <div className="mt-3 flex w-full items-center justify-between">
        <h2 className="font-bold">{title}</h2>
        <time
          className="text-muted-foreground"
          dateTime={publishedAt.toString()}
        >
          {format(publishedAt, "MMM yyyy")}
        </time>
      </div>
    </article>
  );
}
