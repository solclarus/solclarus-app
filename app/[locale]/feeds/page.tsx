"use client";

import { FeedLoading } from "@/components/feeds/feed-loading";
import { FeedTabs } from "@/components/feeds/feed-tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFeeds } from "@/hooks/use-feeds";
import { useTranslations } from "next-intl";

export default function FeedsPage() {
  const { feeds, loading, error } = useFeeds();
  const t = useTranslations("Feed");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
      </div>
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {loading && feeds.length === 0 ? (
        <FeedLoading />
      ) : feeds.length > 0 ? (
        <FeedTabs feeds={feeds} />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>No feeds available</CardTitle>
            <CardDescription>
              Please check your feed configuration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Make sure you have defined RSS feeds in the constants file.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
