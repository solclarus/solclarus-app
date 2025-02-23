import "server-only";

import type { Article } from "@/types/article";
import { cache } from "react";
import { createClient } from "newt-client-js";

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + "",
  token: process.env.NEWT_CDN_API_TOKEN + "",
  apiType: "cdn",
});

export const getArticles = cache(async () => {
  const { items } = await client.getContents<Article>({
    appUid: "article",
    modelUid: "article",
    query: {
      depth: 2,
    },
  });
  return items;
});

export const getArticleBySlug = cache(async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: "article",
    modelUid: "article",
    query: {
      depth: 2,
      slug,
      body: {
        fmt: "text",
      },
    },
  });
  return article;
});
