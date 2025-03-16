import { WorkItem } from "@/components/work-item";
import { type Locale } from "@/i18n/request";
import { getWorks } from "@/lib/work";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function WorksPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const works = await getWorks();

  return (
    <main className="mx-auto mt-40 max-w-xl px-4 md:px-0">
      <h1 className="mb-8 text-3xl font-bold">Works</h1>
      <div className="grid grid-cols-1 gap-6">
        {works.map((work) => (
          <WorkItem key={work.slug} work={work} locale={locale} />
        ))}
      </div>
    </main>
  );
}
