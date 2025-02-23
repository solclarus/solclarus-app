import { getArticles } from "@/lib/newt";

import { ArticleItem } from "./blog-item";

export default async function Page() {
  const articles = await getArticles();

  return (
    <main className="mx-auto mt-40 max-w-xl px-4 md:px-0">
      {articles.map((article) => {
        return <ArticleItem key={article._id} article={article} />;
      })}
    </main>
  );
}
