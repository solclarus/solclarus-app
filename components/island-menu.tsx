import { Separator } from "@/components/ui/separator";
import { Book, Home, Rocket } from "lucide-react";

import { IslandMenuButton } from "./island-menu-button";
import { LangSwitcher } from "./lang-switcher";
import { ScrollToTop } from "./scroll-to-top";
import { ThemeSwitcher } from "./theme/theme-switcher";

export function IslandMenu() {
  return (
    <nav className="fixed bottom-16 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full border bg-card p-2 shadow-lg md:bottom-20">
      <IslandMenuButton href={"/"} icon={<Home />} />
      <IslandMenuButton href={"/feeds"} icon={<Book />} />
      <IslandMenuButton href={"/works"} icon={<Rocket />} />
      <Separator orientation="vertical" className="mx-1 h-5 w-px self-center" />
      <ThemeSwitcher />
      <LangSwitcher />
      <ScrollToTop />
    </nav>
  );
}
