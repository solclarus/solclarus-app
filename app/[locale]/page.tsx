import { appConfig } from "@/app.config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-4 pt-10 md:items-start md:px-0">
      <Avatar className="size-28 rounded-full border">
        <AvatarImage src={appConfig.icon} alt={appConfig.author} />
        <AvatarFallback>
          {appConfig.author.toUpperCase().charAt(0)}
        </AvatarFallback>
      </Avatar>
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
    </main>
  );
}
