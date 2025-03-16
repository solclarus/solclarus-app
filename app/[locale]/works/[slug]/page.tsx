import type { Locale } from "@/i18n/request";
import { notFound } from "next/navigation";
import { WorkLayout } from "@/components/works/work-layout";
import { getWork } from "@/lib/work";

type Props = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export default async function WorkDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  try {
    const work = await getWork(locale, slug);

    if (!work) {
      notFound();
    }

    const { default: Content, metadata } = work;

    return (
      <WorkLayout metadata={metadata} locale={locale}>
        <Content />
      </WorkLayout>
    );
  } catch (error) {
    console.error(`Error loading work page (${slug}):`, error);
    notFound();
  }
}
