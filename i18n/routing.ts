import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  // "as-needed" causes ERR_TOO_MANY_REDIRECTS on Next.js 15 (rewrite / ↔ redirect /).
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
