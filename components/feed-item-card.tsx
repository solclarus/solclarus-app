import Link from "next/link";
import { FeedLogo } from "@/components/feed-logo";
import { format } from "date-fns";
import { Calendar } from "lucide-react";

type Props = {
  title: string;
  link: string;
  pubDate: string;
  feedTitle: string;
  feedId: string;
};

export function FeedItemCard({
  title,
  link,
  pubDate,
  feedTitle,
  feedId,
}: Props) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-lg border border-card p-4 transition-all hover:border-primary hover:bg-card hover:shadow-lg"
    >
      <p className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
        <Calendar className="h-3 w-3" />
        <span>{format(pubDate, "yyyy/MM/dd")}</span>
      </p>
      <h2 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
        {title}
      </h2>
      {feedTitle && (
        <div className="flex items-center gap-1 text-xs">
          <FeedLogo id={feedId} title={feedTitle} size={14} />
          <span>{feedTitle}</span>
        </div>
      )}
    </Link>
  );
}
