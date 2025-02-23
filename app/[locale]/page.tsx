import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { env } from "@/env";
import { useTranslations } from "next-intl";

export default function Home() {
  const url = env.DEBUG_URL;
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col items-center pt-10 md:items-start">
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
    </div>
  );
}
