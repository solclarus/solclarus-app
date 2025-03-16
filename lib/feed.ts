import type { Feed } from "@/types/feed";

export function getAllItems(feeds: Feed[]) {
  return feeds
    .flatMap((feed) =>
      feed.items.map((item) => ({
        ...item,
        feedTitle: feed.title,
        feedId: feed.id,
      })),
    )
    .sort(
      (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
    );
}
