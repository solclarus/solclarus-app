import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getArticleBySlug, getArticles } from "@/lib/newt";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
export const dynamicParams = false;

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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return;

  return (
    <main className="prose mt-40 dark:prose-invert">
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
