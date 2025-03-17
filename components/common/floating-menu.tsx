import { FloatingMenuItem } from "@/components/common/floating-menu-item";
import { LangSwitcher } from "@/components/common/lang-switcher";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Separator } from "@/components/ui/separator";
import { Book, Home, Rocket } from "lucide-react";

export function FloatingMenu() {
  return (
    <nav className="fixed bottom-16 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full border bg-card p-2 shadow-lg md:bottom-20">
      <FloatingMenuItem href={"/"} icon={<Home />} />
      <FloatingMenuItem href={"/feeds"} icon={<Book />} />
      <FloatingMenuItem href={"/works"} icon={<Rocket />} />
      <Separator orientation="vertical" className="mx-1 h-5 w-px self-center" />
      <ThemeSwitcher />
      <LangSwitcher />
      <ScrollToTop />
    </nav>
  );
}
