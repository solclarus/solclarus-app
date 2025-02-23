import type { Locale } from "@/i18n/request";
import type { Work } from "@/types/work";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

type Props = {
  work: Work;
  locale: Locale;
};

export function WorkItem({ work, locale }: Props) {
  return (
    <div>
      <Link href={`/${locale}/work/${work.id}`}>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={`/images/works/${work.id}.jpg`}
            alt={work.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 place-content-center bg-card/80 text-center opacity-0 transition-opacity hover:opacity-100">
            <h2 className="text-xl font-bold">{work.title}</h2>
            <p className="text-sm text-muted-foreground">
              {work.description[locale]}
            </p>
          </div>
        </div>
      </Link>
      <div className="mt-3 flex w-full items-center justify-between">
        <div className="font-bold">{work.title}</div>
        <div className="text-muted-foreground">
          {format(work.publishedAt, "MMM yyyy")}
        </div>
      </div>
    </div>
  );
}
