import type { LucideIcon } from "lucide-react";
import { type Locale } from "@/i18n/request";

export type ThemeId =
  | "amber-dune"
  | "jade-forest"
  | "moonstone-snowfield"
  | "ruby-crater"
  | "sapphire-sky";

export type Theme = {
  id: ThemeId;
  label: Record<Locale, string>;
  icon: LucideIcon;
};
