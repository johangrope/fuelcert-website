import type { NewsTickerItem } from "@/lib/news-ticker";

export const NEWS_TICKER = {
  enabled: true,
  label: "News",
  ariaLabel: "Latest news",
  items: [
    {
      text: "GModG finally passed — Federal Council waives mediation procedure · Green gas quota and bio ladder on the way · New perspectives for biomethane and hydrogen",
      href: "/news/gmodg-beschlossen-gruengasquote-biotreppe",
    },
  ] satisfies readonly NewsTickerItem[],
} as const;
