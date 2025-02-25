import type { Work } from "@/types/work";

export const works: Work[] = [
  {
    id: "solclarus-app",
    title: "SOLCLARUS APP",
    description: {
      en: "Personal portfolio website",
      ja: "個人ポートフォリオサイト",
    },
    publishedAt: new Date("2024-02"),
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Newt CMS"],
    links: {
      github: "https://github.com/solclarus/solclarus-app",
      live: "https://solclarus.me",
    },
  },
  {
    id: "gowanted",
    title: "GoWanted",
    description: {
      en: "A Pokémon GO companion app showing available Pokémon",
      ja: "Pokémon GOで捕まえられるポケモンを表示するアプリ",
    },
    publishedAt: new Date("2023-12"),
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Pokemon API"],
    links: {
      github: "https://github.com/solclarus/gowanted",
      live: "https://gowanted.vercel.app",
    },
  },
  {
    id: "cinemento",
    title: "Cinemento",
    description: {
      en: "A movie logging application to track your watching history",
      ja: "映画の視聴履歴を記録できるアプリ",
    },
    publishedAt: new Date("2023-10"),
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "TMDB API"],
    links: {
      github: "https://github.com/solclarus/cinemento",
      live: "https://cinemento.vercel.app",
    },
  },
];
