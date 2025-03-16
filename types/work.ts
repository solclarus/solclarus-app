export type Link = {
  type: string;
  href: string;
};

export type Work = {
  slug: string;
  title: string;
  description: {
    en: string;
    ja: string;
  };
  publishedAt: string;
  updatedAt: string;
  tags: {
    en: string[];
    ja: string[];
  };
  image: string;
  links: Link[];
};
