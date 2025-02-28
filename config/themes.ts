import type { LucideIcon } from "lucide-react";
import { Flower, Leaf, Snowflake, Umbrella } from "lucide-react";

// import {
//   Cannabis,
//   Cloud,
//   Leaf,
//   LucideIcon,
//   Snowflake,
//   Stars,
//   Sunset,
// } from "lucide-react";

// export type ThemeConfig = {
//   id: string;
//   label: { ja: string; en: string };
//   icon: LucideIcon;
//   className: string;
// };

// export const themes: ThemeConfig[] = [
//   {
//     id: "starry-night",
//     label: { ja: "星空", en: "Starry Night" },
//     icon: Stars,
//     className: "text-indigo-300 bg-indigo-950",
//   },
//   {
//     id: "powder-snow",
//     label: { ja: "粉雪", en: "Powder Snow" },
//     icon: Snowflake,
//     className: "text-blue-500 bg-blue-50",
//   },
//   {
//     id: "evergreen",
//     label: { ja: "常緑樹", en: "Evergreen" },
//     icon: Leaf,
//     className: "text-green-700 bg-green-50",
//   },
//   {
//     id: "autumn-leaf",
//     label: { ja: "秋の葉", en: "Autumn Leaf" },
//     icon: Cannabis,
//     className: "text-orange-600 bg-orange-50",
//   },
//   {
//     id: "desert-dusk",
//     label: { ja: "砂漠の夕暮れ", en: "Desert Dusk" },
//     icon: Sunset,
//     className: "text-amber-600 bg-amber-50",
//   },
// ];

export type ThemeConfig = {
  id: string;
  label: { ja: string; en: string };
  icon: LucideIcon;
  className: string;
  backgroundColor: string;
  season: string;
};

export const themes: ThemeConfig[] = [
  {
    id: "spring-blossom",
    label: { ja: "春の桜", en: "Spring Blossom" },
    icon: Flower,
    className: "text-pink-500",
    backgroundColor: "bg-pink-50",
    season: "spring",
  },
  {
    id: "summer-ocean",
    label: { ja: "夏の海", en: "Summer Ocean" },
    icon: Umbrella,
    className: "text-cyan-500",
    backgroundColor: "bg-cyan-50",
    season: "summer",
  },
  {
    id: "autumn-maple",
    label: { ja: "秋の紅葉", en: "Autumn Maple" },
    icon: Leaf,
    className: "text-orange-600",
    backgroundColor: "bg-orange-50",
    season: "autumn",
  },
  {
    id: "winter-snow",
    label: { ja: "冬の雪景色", en: "Winter Snow" },
    icon: Snowflake,
    className: "text-purple-500",
    backgroundColor: "bg-purple-50",
    season: "winter",
  },
];
