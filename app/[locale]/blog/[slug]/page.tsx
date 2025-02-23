import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getArticleBySlug } from "@/lib/newt";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  return {
    title: article?.title,
    description: "投稿詳細ページです",
  };
}

export default async function Page({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return;

  return (
    <main className="prose mx-auto mt-40 max-w-2xl px-4 dark:prose-invert md:px-0">
      <h1>{article.title}</h1>
      <div className="not-prose mb-4 flex items-center gap-3">
        <Avatar className="rounded-full border">
          <AvatarImage
            src={article.author.profileImage?.src}
            alt={article.author.fullName}
          />
          <AvatarFallback>
            {article.author.fullName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-start">
          <p className="font-bold">{article.author.fullName}</p>
          <time className="text-xs text-muted-foreground">
            {format(article._sys.createdAt, "MMM do yyyy")}
          </time>
        </div>
      </div>
      <div className="space-x-2">
        {article.tags.map((tag) => {
          return <Badge key={tag.slug}>{tag.name}</Badge>;
        })}
      </div>
      <Separator className="my-6" />
      <article className="prose dark:prose-invert">
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </article>
    </main>
  );
}
