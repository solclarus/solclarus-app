import { env } from "@/env";
import { useTranslations } from "next-intl";

export default function Home() {
  const url = env.DEBUG_URL;
  const t = useTranslations("Home");

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-xl font-bold text-orange-500">solclarus</h2>
        <p className="text-center text-muted-foreground md:text-start">
          {t.rich("greeting", {
            name: (name) => (
              <strong>
                <i className="text-foreground">{name}</i>
              </strong>
            ),
          })}
        </p>
        <p className="text-sm text-gray-500">{url}</p>
      </div>
    </div>
  );
}
