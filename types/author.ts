import { type Content, type Media } from "newt-client-js";

export type Author = {
  fullName: string;
  profileImage?: Media;
} & Content;
