import type { LucideIcon } from "lucide-react";

export type ThemeId =
  | "amber-dune"
  | "jade-forest"
  | "moonstone-snowfield"
  | "ruby-crater"
  | "sapphire-sky";

export type Theme = {
  id: ThemeId;
  label: { ja: string; en: string };
  icon: LucideIcon;
};
