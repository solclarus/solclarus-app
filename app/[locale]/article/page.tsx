import { getArticles } from "@/lib/newt";

import { ArticleItem } from "./article-item";

export default async function ArticleListPage() {
  const articles = await getArticles();

  return (
    <main className="mt-20 space-y-4">
      {articles.map((article) => {
        return <ArticleItem key={article._id} article={article} />;
      })}
    </main>
  );
}
