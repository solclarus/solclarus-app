import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { env } from "@/env";
import { useTranslations } from "next-intl";

export default function Home() {
  const url = env.DEBUG_URL;
  const t = useTranslations("Home");

  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-4 pt-10 md:items-start md:px-0">
      <Avatar className="size-28 rounded-full border">
        <AvatarImage
          src={
            "https://pbs.twimg.com/profile_images/1755179821687279616/84mo1RyV_400x400.jpg"
          }
          alt={"SOLCLARUS"}
        />
        <AvatarFallback>SC</AvatarFallback>
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
      <p className="text-sm text-gray-500">{url}</p>
    </main>
  );
}
