import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Parser from "rss-parser";

// rss-parser の出力型定義
type CustomItem = {
  title?: string;
  link?: string;
  content?: string;
  contentSnippet?: string;
  guid?: string;
  isoDate?: string;
  pubDate?: string;
  creator?: string;
  author?: string;
  categories?: string[];
  [key: string]: unknown;
};

type CustomFeed = {
  title?: string;
  description?: string;
  link?: string;
  image?: {
    url?: string;
    title?: string;
    link?: string;
  };
  generator?: string;
  lastBuildDate?: string;
  items: CustomItem[];
  [key: string]: unknown;
};

// 正規化されたアイテムの型定義
type NormalizedItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author: string;
};

export async function GET(request: NextRequest): Promise<NextResponse> {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 },
    );
  }

  try {
    // fetch APIを使用してRSSフィードを取得
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }

    // XMLテキストを取得
    const xml = await response.text();

    // rss-parser のインスタンスを作成
    const parser = new Parser<CustomFeed, CustomItem>({
      customFields: {
        item: [
          ["dc:creator", "creator"],
          ["content:encoded", "content"],
        ],
      },
    });

    // 文字列からフィードを解析
    const feed = await parser.parseString(xml);

    // アイテムを正規化
    const normalizedItems: NormalizedItem[] = feed.items.map((item) => {
      return {
        title: item.title ?? "No Title",
        link: item.link ?? "#",
        description: item.content ?? item.contentSnippet ?? "",
        pubDate: item.isoDate ?? item.pubDate ?? new Date().toISOString(),
        author: item.creator ?? item.author ?? "Unknown Author",
      };
    });

    return NextResponse.json({
      title: feed.title ?? "Unnamed Feed",
      items: normalizedItems,
    });
  } catch (error) {
    console.error(
      "Error fetching or parsing RSS feed:",
      error instanceof Error ? error.message : String(error),
    );
    return NextResponse.json(
      { error: "Failed to fetch or parse RSS feed" },
      { status: 500 },
    );
  }
}
