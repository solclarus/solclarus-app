import { type NextConfig } from "next";

import "./env";

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
};

export default withNextIntl(nextConfig);
