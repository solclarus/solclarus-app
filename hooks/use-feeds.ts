"use client";

import type { Feed, FeedItem, FeedSource } from "@/types/feed";
import { useEffect, useState } from "react";
import { FEED_SOURCES } from "@/config/feeds";

type FeedAPIResponse = {
  items: FeedItem[];
};

export function useFeeds() {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAllFeeds(): Promise<void> {
      setLoading(true);

      try {
        const feedPromises = FEED_SOURCES.map(
          async (feedSource: FeedSource) => {
            try {
              const response = await fetch(
                `/api/rss?url=${encodeURIComponent(feedSource.url)}`,
              );

              if (!response.ok) {
                console.error(
                  `Failed to fetch ${feedSource.title}:`,
                  response.statusText,
                );
                return {
                  id: feedSource.id,
                  title: feedSource.title,
                  url: feedSource.url,
                  items: [],
                };
              }

              const data = (await response.json()) as FeedAPIResponse;

              return {
                id: feedSource.id,
                title: feedSource.title,
                url: feedSource.url,
                items: data.items || [],
              };
            } catch (err) {
              const errorMessage =
                err instanceof Error ? err.message : "Unknown error";

              console.error(
                `Error fetching ${feedSource.title}:`,
                errorMessage,
              );

              return {
                id: feedSource.id,
                title: feedSource.title,
                url: feedSource.url,
                items: [],
              };
            }
          },
        );

        const results = await Promise.all(feedPromises);
        setFeeds(results);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";

        setError(`Failed to fetch feeds: ${errorMessage}`);
        console.error("Error fetching feeds:", err);
      } finally {
        setLoading(false);
      }
    }

    void fetchAllFeeds();
  }, []);

  return { feeds, loading, error };
}
