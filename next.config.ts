import { type NextConfig } from "next";

import "./env";

import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

import { env } from "./env";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${env.NEWT_SPACE_UID}.assets.newt.so/v1`,
      },
    ],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withNextIntl(withMDX(nextConfig));
