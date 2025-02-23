import { type Content } from "newt-client-js";

export type Tag = {
  name: string;
  slug: string;
} & Content;
