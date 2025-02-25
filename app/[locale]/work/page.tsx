import { type Locale } from "@/i18n/request";

import { getWorks } from "./lib";
import { WorkItem } from "./work-item";

type WorksPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function WorksPage({ params }: WorksPageProps) {
  const locale = (await params).locale as Locale;
  const works = await getWorks();

  return (
    <main className="mx-auto mt-40 max-w-xl px-4 md:px-0">
      <h1 className="mb-8 text-3xl font-bold">Works</h1>
      <div className="grid grid-cols-1 gap-6">
        {works.map((work) => (
          <WorkItem key={work.id} work={work} locale={locale} />
        ))}
      </div>
    </main>
  );
}
