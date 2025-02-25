export type Work = {
  id: string;
  title: string;
  description: {
    en: string;
    ja: string;
  };
  publishedAt: Date;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
};
