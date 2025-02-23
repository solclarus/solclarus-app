import { Suspense } from "react";
import { Book, Home, Rocket } from "lucide-react";

import { BackToTop } from "./back-to-top";
import { IslandMenuButton } from "./island-menu-button";
import { LangSwitcher } from "./lang-switcher";
import { ThemeSwitcher } from "./theme-switcher";

export function IslandMenu() {
  return (
    <nav className="z-100 fixed bottom-16 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border bg-card p-2 shadow-lg md:bottom-20">
      <IslandMenuButton href={"/"} icon={<Home fill="orange" />} />
      <IslandMenuButton href={"/work"} icon={<Rocket />} />
      <IslandMenuButton href={"/blog"} icon={<Book />} />
      <Suspense>
        <ThemeSwitcher />
      </Suspense>
      <LangSwitcher />
      <BackToTop />
    </nav>
  );
}
