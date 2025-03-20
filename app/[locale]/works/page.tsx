import type { Locale } from "@/i18n/request";
import { WorkItem } from "@/components/works/work-item";
import { getWorks } from "@/lib/work";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function WorksPage({ params }: Props) {
  const { locale } = await params;
  const works = await getWorks();

  return (
    <main className="mx-auto max-w-3xl px-4 pt-20 md:px-0">
      <h1 className="mb-8 text-3xl font-bold">Works</h1>
      <div className="grid grid-cols-1 gap-6">
        {works.map((work) => (
          <WorkItem key={work.slug} work={work} locale={locale} />
        ))}
      </div>
    </main>
  );
}
