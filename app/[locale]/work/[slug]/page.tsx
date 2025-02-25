import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { type Locale } from "@/i18n/request";

import { getWork } from "../lib";

type WorkPageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

type MDXContent = {
  default: React.ComponentType;
  metadata?: Record<string, unknown>;
};

export default async function WorkPage({ params }: WorkPageProps) {
  const { locale, slug } = await params;

  try {
    const [mdxModule, work] = await Promise.all([
      import(`@/content/${slug}/${locale}.mdx`) as Promise<MDXContent>,
      getWork(slug),
    ]);

    const MDXContent = mdxModule.default;

    if (!MDXContent || !work) {
      notFound();
    }

    const { id, title } = work;

    return (
      <main>
        <header>
          <div className="not-prose relative mb-6 aspect-video overflow-hidden rounded-lg">
            <Image
              src={`/images/works/${id}.jpg`}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <h1>{title}</h1>
        </header>
        <MDXContent />
      </main>
    );
  } catch (error) {
    console.error(`Error loading work page (${slug}):`, error);
    notFound();
  }
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
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
