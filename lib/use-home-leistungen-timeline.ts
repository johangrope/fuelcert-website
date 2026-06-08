"use client";

import { useLocale } from "next-intl";
import { useMemo } from "react";
import { getEnLeistung } from "@/lib/i18n/en/leistungen-data";
import { getLeistung, LEISTUNG_SLUG_ORDER, leistungPath } from "@/lib/leistungen";

export type HomeLeistungTimelineItem = {
  slug: string;
  sectionId: string;
  side: "left" | "right";
  title: string;
  description: string;
  href: string;
};

export function useHomeLeistungenTimeline(): HomeLeistungTimelineItem[] {
  const locale = useLocale();

  return useMemo(
    () =>
      LEISTUNG_SLUG_ORDER.map((slug, index) => {
        const d = (locale === "en" ? getEnLeistung(slug) : getLeistung(slug))!;
        return {
          slug,
          sectionId: d.sectionId,
          side: index % 2 === 0 ? ("left" as const) : ("right" as const),
          title: d.menuLabel,
          description: d.intro,
          href: leistungPath(slug),
        };
      }),
    [locale],
  );
}
