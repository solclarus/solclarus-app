import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { type Locale } from "@/i18n/request";

import { getWork } from "../lib";

type Props = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

type MDXContent = {
  default: React.ComponentType;
  metadata?: Record<string, unknown>;
};

export default async function Page({ params }: Props) {
  try {
    const { locale, slug } = await params;

    const [mdxModule, workData] = await Promise.all([
      import(`@/content/${slug}/${locale}.mdx`) as Promise<MDXContent>,
      getWork(slug),
    ]);

    const MDXContent = mdxModule.default;

    if (!MDXContent || !workData) {
      notFound();
    }

    return (
      <article className="container py-8">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">{workData.title}</h1>
          <p className="text-muted-foreground">
            {workData.description[locale]}
          </p>
        </header>

        <div className="prose max-w-none dark:prose-invert">
          <MDXContent />
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error loading work page:", error);
    notFound();
  }
}

// generateMetadata用の型を別途定義して使用
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const work = await getWork(slug);

  if (!work) {
    return {};
  }

  return {
    title: work.title,
    description: work.description[locale],
  };
}
