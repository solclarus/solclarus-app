import { type Locale } from "@/i18n/request";

export type Link = {
  type: string;
  href: string;
};

export type Work = {
  slug: string;
  title: string;
  description: Record<Locale, string>;
  publishedAt: string;
  updatedAt: string;
  tags: Record<Locale, string[]>;
  image: string;
  links: Link[];
};
