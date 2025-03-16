import { WORKS } from "@/config/works";
import { type Locale } from "@/i18n/request";

type MDXModule = {
  default: React.ComponentType;
  [key: string]: unknown;
};

export async function getWorks() {
  try {
    return WORKS;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error loading works";

    console.error(`Error loading works: ${errorMessage}`);
    return [];
  }
}

export async function getWork(locale: Locale, slug: string) {
  try {
    const work = (await import(`@/content/${slug}/${locale}.mdx`)) as MDXModule;
    const metadata = getLocalizedProjectMetadata(locale, slug);

    return { ...work, metadata };
  } catch (error) {
    console.error(`Error loading work "${slug}": ${locale}`, error);
    return null;
  }
}

export function getLocalizedProjectMetadata(locale: Locale, slug: string) {
  const work = WORKS.find((work) => work.slug === slug);

  if (!work) return null;

  return {
    slug: work.slug,
    title: work.title,
    publishedAt: work.publishedAt,
    updatedAt: work.updatedAt,
    tags: work.tags[locale],
    image: work.image,
    links: work.links,
  };
}
