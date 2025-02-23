import { type Tag } from "@/types/tag";
import { type Content } from "newt-client-js";

import { type Author } from "./author";

export type Article = {
  title: string;
  slug: string;
  body: string;
  tags: Tag[];
  author: Author;
} & Content;
