import { type FeedSource } from "@/types/feed";

export const FEED_SOURCES: FeedSource[] = [
  {
    id: "note",
    title: "note",
    url: "https://note.com/recommend/rss",
  },
  {
    id: "qiita",
    title: "Qiita",
    url: "https://qiita.com/popular-items/feed",
  },
  {
    id: "zenn",
    title: "Zenn",
    url: "https://zenn.dev/feed",
  },
];
