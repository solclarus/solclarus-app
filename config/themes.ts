import { type Theme } from "@/types/theme";
import { Flame, Mountain, Snowflake, Star, TreePine } from "lucide-react";

export const THEMES: Theme[] = [
  {
    id: "sapphire-sky",
    label: { ja: "瑠璃色の夜空", en: "Sapphire Sky" },
    icon: Star,
  },
  {
    id: "jade-forest",
    label: { ja: "碧玉色の深林", en: "Jade Forest" },
    icon: TreePine,
  },
  {
    id: "amber-dune",
    label: { ja: "琥珀色の砂丘", en: "Amber Dune" },
    icon: Mountain,
  },
  {
    id: "ruby-crater",
    label: { ja: "紅玉色の火山湖", en: "Ruby Crater" },
    icon: Flame,
  },
  {
    id: "moonstone-snowfield",
    label: { ja: "月長石色の雪原", en: "Moonstone Snowfield" },
    icon: Snowflake,
  },
];
