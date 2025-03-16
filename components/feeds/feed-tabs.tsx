"use client";

import type { Feed } from "@/types/feed";
import { useState } from "react";
import { FeedItemCard } from "@/components/feeds/feed-item-card";
import { FeedLogo } from "@/components/feeds/feed-logo";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllItems } from "@/lib/feed";

type Props = {
  feeds: Feed[];
};

export function FeedTabs({ feeds }: Props) {
  const [activeTab, setActiveTab] = useState("all");
  const allItems = getAllItems(feeds);

  return (
    <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-4">
        <TabsTrigger value="all">All</TabsTrigger>
        {feeds.map((feed, i) => (
          <TabsTrigger
            key={i}
            value={feed.url}
            className="flex items-center gap-1"
          >
            <FeedLogo id={feed.id} title={feed.title} size={16} />
            <span>{feed.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="all">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {allItems.length > 0 ? (
            allItems.map((item, i) => (
              <FeedItemCard
                key={i}
                title={item.title}
                link={item.link}
                pubDate={item.pubDate}
                feedTitle={item.feedTitle}
                feedId={item.feedId}
              />
            ))
          ) : (
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <p>No items found for this feed.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </TabsContent>
      {feeds.map((feed, i) => (
        <TabsContent key={i} value={feed.url}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {feed.items.length > 0 ? (
              feed.items.map((item, index) => (
                <FeedItemCard
                  key={index}
                  title={item.title}
                  link={item.link}
                  pubDate={item.pubDate}
                  feedTitle={feed.title}
                  feedId={feed.id}
                />
              ))
            ) : (
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <p>No items found for this feed.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
