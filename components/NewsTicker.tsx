"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import * as DE from "@/lib/news-ticker";
import * as EN from "@/lib/i18n/en/news-ticker";
import type { NewsTickerItem } from "@/lib/news-ticker";

function TickerGroup({
  items,
  ariaHidden = false,
}: {
  items: readonly NewsTickerItem[];
  ariaHidden?: boolean;
}) {
  return (
    <div className="news-ticker__group" aria-hidden={ariaHidden || undefined}>
      {items.map((item, index) => (
        <span className="news-ticker__item" key={`${item.href}-${index}`}>
          <Link href={item.href} className="news-ticker__text">
            {item.text}
          </Link>
          <span className="news-ticker__sep" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function NewsTicker() {
  const locale = useLocale();
  const config = locale === "en" ? EN.NEWS_TICKER : DE.NEWS_TICKER;

  if (!config.enabled) return null;

  return (
    <aside className="news-ticker" aria-label={config.ariaLabel}>
      <div className="news-ticker__inner container">
        <span className="news-ticker__label">{config.label}</span>

        <div className="news-ticker__marquee">
          <div className="news-ticker__track" aria-live="off">
            <TickerGroup items={config.items} />
            <TickerGroup items={config.items} ariaHidden />
          </div>
        </div>
      </div>
    </aside>
  );
}
