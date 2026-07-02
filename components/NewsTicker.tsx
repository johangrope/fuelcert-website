"use client";

import { useLocale } from "next-intl";
import * as DE from "@/lib/news-ticker";
import * as EN from "@/lib/i18n/en/news-ticker";

function TickerGroup({
  items,
  ariaHidden = false,
}: {
  items: readonly string[];
  ariaHidden?: boolean;
}) {
  return (
    <div className="news-ticker__group" aria-hidden={ariaHidden || undefined}>
      {items.map((item, index) => (
        <span className="news-ticker__item" key={`${item}-${index}`}>
          <span className="news-ticker__text">{item}</span>
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
