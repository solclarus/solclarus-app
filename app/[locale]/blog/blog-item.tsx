import type { Article } from "@/types/article";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { format } from "date-fns";

export function ArticleItem({ article }: { article: Article }) {
  return (
    <div className="relative p-4">
      <h2 className="truncate text-lg font-bold">
        <Link href={`/blog/${article.slug}`}>
          {article.title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <time className="text-sm text-muted-foreground">
        {format(article._sys.createdAt, "MMM do yyyy")}
      </time>
      <div className="mt-3 space-x-1">
        {article.tags.map((tag) => {
          return (
            <Badge key={tag._id} variant={"outline"}>
              {tag.name}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
