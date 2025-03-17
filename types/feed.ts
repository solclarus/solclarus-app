export type FeedItem = {
  title: string;
  link: string;
  pubDate: string;
};

export type Feed = {
  id: string;
  title: string;
  url: string;
  items: FeedItem[];
};

export type FeedSource = {
  id: string;
  title: string;
  url: string;
};
