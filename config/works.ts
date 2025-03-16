import type { Work } from "@/types/work";

export const WORKS: Work[] = [
  {
    slug: "solclarus-app",
    title: "solclarus",
    description: {
      en: "Personal portfolio website",
      ja: "個人ポートフォリオサイト",
    },
    publishedAt: "2023-12-01",
    updatedAt: "2023-12-01",
    tags: {
      en: ["Web Development", "Frontend", "Portfolio"],
      ja: ["ウェブ開発", "フロントエンド", "ポートフォリオ"],
    },
    image: "/images/works/solclarus-app.jpg",
    links: [
      {
        type: "github",
        href: "https://github.com/solclarus/solclarus-app",
      },
      { type: "website", href: "https://solclarus.me" },
    ],
  },
  {
    slug: "gowanted",
    title: "GoWanted",
    description: {
      en: "A Pokémon GO companion app showing available Pokémon",
      ja: "Pokémon GOで捕まえられるポケモンを表示するアプリ",
    },
    publishedAt: "2023-12-01",
    updatedAt: "2023-12-01",
    tags: {
      en: ["Web Development", "E-commerce", "Stripe"],
      ja: ["ウェブ開発", "Eコマース", "Stripe"],
    },
    image: "/images/works/gowanted.jpg",
    links: [
      {
        type: "github",
        href: "https://github.com/solclarus/poketrail",
      },
      { type: "appstore", href: "https://poketrail.vercel.app" },
    ],
  },
  {
    slug: "cinemento",
    title: "Cinemento",
    description: {
      en: "A movie logging application to track your watching history",
      ja: "映画の視聴履歴を記録できるアプリ",
    },
    publishedAt: "2023-12-01",
    updatedAt: "2023-12-01",
    tags: {
      en: ["Web Development", "CMS", "Blog"],
      ja: ["ウェブ開発", "CMS", "ブログ"],
    },
    image: "/images/works/cinemento.jpg",
    links: [
      {
        type: "github",
        href: "https://github.com/solclarus/cinemento",
      },
      {
        type: "website",
        href: "https://cinemento.vercel.app",
      },
      {
        type: "appstore",
        href: "https://cinemento.vercel.app",
      },
      {
        type: "googleplay",
        href: "https://cinemento.vercel.app",
      },
    ],
  },
];
