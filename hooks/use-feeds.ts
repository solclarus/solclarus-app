"use client";

import { useEffect, useState } from "react";
import { FEEDS } from "@/config/feeds";

// 型定義
type FeedSource = {
  id: string;
  title: string;
  url: string;
};

type FeedItem = {
  title: string;
  link: string;
  pubDate: string;
};

type FeedAPIResponse = {
  title: string;
  items: FeedItem[];
};

export type Feed = {
  id: string;
  title: string;
  url: string;
  items: FeedItem[];
};

type UseFeedsResult = {
  feeds: Feed[];
  loading: boolean;
  error: string | null;
};

/**
 * RSSフィードを取得するためのカスタムフック
 * @returns {UseFeedsResult} フィード、ローディング状態、エラー情報
 */
export function useFeeds(): UseFeedsResult {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAllFeeds(): Promise<void> {
      setLoading(true);

      try {
        const feedPromises: Promise<Feed>[] = FEEDS.map(
          async (feedSource: FeedSource) => {
            try {
              const response = await fetch(
                `/api?url=${encodeURIComponent(feedSource.url)}`,
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
