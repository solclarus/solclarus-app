export type Work = {
  id: string;
  title: string;
  description: {
    en: string;
    ja: string;
  };
  thumbnail: string;
  publishedAt: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
};
