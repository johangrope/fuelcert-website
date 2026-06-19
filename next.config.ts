import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/de/leistungen", destination: "/de", permanent: false },
      { source: "/en/leistungen", destination: "/en", permanent: false },
      { source: "/de/anwendungsbereiche", destination: "/de", permanent: false },
      { source: "/en/anwendungsbereiche", destination: "/en", permanent: false },
      { source: "/de/wissen", destination: "/de", permanent: false },
      { source: "/en/wissen", destination: "/en", permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);
