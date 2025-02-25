import { Book, Home, Rocket } from "lucide-react";

import { IslandMenuButton } from "./island-menu-button";
import { LangSwitcher } from "./lang-switcher";
import { ScrollToTop } from "./scroll-to-top";
import { ThemeSwitcher } from "./theme-switcher";

export function IslandMenu() {
  return (
    <nav className="z-100 fixed bottom-16 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border bg-card p-2 shadow-lg md:bottom-20">
      <IslandMenuButton href={"/"} icon={<Home />} />
      <IslandMenuButton href={"/blog"} icon={<Book />} />
      <IslandMenuButton href={"/work"} icon={<Rocket />} />
      <ThemeSwitcher />
      <LangSwitcher />
      <ScrollToTop />
    </nav>
  );
}
