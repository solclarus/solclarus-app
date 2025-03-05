import type { LucideIcon } from "lucide-react";
import { Flame, Mountain, Snowflake, Star, TreePine } from "lucide-react";

export type ThemeConfig = {
  id: string;
  label: { ja: string; en: string };
  icon: LucideIcon;
  className: string;
  backgroundColor: string;
};

export const themes: ThemeConfig[] = [
  // {
  //   id: "spring-blossom",
  //   label: { ja: "春の桜", en: "Spring Blossom" },
  //   icon: Flower,
  //   className: "text-pink-500",
  //   backgroundColor: "bg-pink-50",
  // },
  // {
  //   id: "summer-ocean",
  //   label: { ja: "夏の海", en: "Summer Ocean" },
  //   icon: Umbrella,
  //   className: "text-cyan-500",
  //   backgroundColor: "bg-cyan-50",
  // },
  // {
  //   id: "autumn-maple",
  //   label: { ja: "秋の紅葉", en: "Autumn Maple" },
  //   icon: Leaf,
  //   className: "text-orange-600",
  //   backgroundColor: "bg-orange-50",
  // },
  // {
  //   id: "winter-snow",
  //   label: { ja: "冬の雪景色", en: "Winter Snow" },
  //   icon: Snowflake,
  //   className: "text-purple-500",
  //   backgroundColor: "bg-purple-50",
  // },

  {
    id: "indigo-night",
    label: { ja: "紺碧の夜空", en: "Indigo Night" },
    icon: Star,
    className: "text-[#aab8ef]", // 淡い星の光
    backgroundColor: "bg-[#0d1333]", // 深い夜空
  },
  {
    id: "emerald-grove",
    label: { ja: "翠玉の森", en: "Emerald Grove" },
    icon: TreePine,
    className: "text-[#38a169]", // 鮮やかな緑
    backgroundColor: "bg-[#f0fff4]", // 薄い緑の白
  },
  {
    id: "amber-dunes",
    label: { ja: "琥珀の砂丘", en: "Amber Dunes" },
    icon: Mountain,
    className: "text-[#dd6b20]", // オレンジ
    backgroundColor: "bg-[#fffaf0]", // 砂色の白
  },
  {
    id: "crimson-crater",
    label: { ja: "緋色の火口", en: "Crimson Crater" },
    icon: Flame,
    className: "text-[#e53e3e]", // 鮮やかな赤
    backgroundColor: "bg-[#1a202c]", // 暗い溶岩石
  },
  {
    id: "cerulean-snowscape",
    label: { ja: "蒼青の雪景", en: "Cerulean Snowscape" },
    icon: Snowflake,
    className: "text-[#3182ce]", // 鮮やかな青
    backgroundColor: "bg-[#f7fafc]", // 雪の白
  },
];
