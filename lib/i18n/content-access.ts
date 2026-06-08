import {
  getAnwendung,
  ANWENDUNGEN_OVERVIEW,
  anwendungPath,
  ALL_ANWENDUNG_SLUGS,
  type AnwendungSlug,
} from "@/lib/anwendungsbereiche";
import { getLeistung, LEISTUNGEN_OVERVIEW, LEISTUNG_SLUG_ORDER, leistungPath } from "@/lib/leistungen";
import { LEISTUNGEN_CARD_TEASERS } from "@/lib/leistungen-overview";
import { getWissenArticle, WISSEN_OVERVIEW, wissenPath, ALL_WISSEN_SLUGS, type WissenSlug } from "@/lib/wissen";
import { ERLOESRECHNER_TEASER } from "@/lib/erloesrechner-content";
import { BIOMETHAN_ERLOESRECHNER_TEASER } from "@/lib/erloesrechner-biomethan-content";
import { ERLOESRECHNER_TEASER as ERLOESRECHNER_TEASER_EN } from "./en/erloesrechner-content";
import { BIOMETHAN_ERLOESRECHNER_TEASER as BIOMETHAN_TEASER_EN } from "./en/erloesrechner-biomethan-content";
import type { TeaserItem } from "@/lib/types";
import type { Locale } from "@/i18n/routing";
import { getCurrentLocale } from "./resolve";

async function localeIsEn(locale?: Locale) {
  const loc = locale ?? (await getCurrentLocale());
  return loc === "en";
}
import { ANWENDUNGEN_OVERVIEW as ANWENDUNGEN_OVERVIEW_EN, getEnAnwendung } from "./en/anwendungen-data";
import {
  getEnLeistung,
  LEISTUNGEN_CARD_TEASERS as LEISTUNGEN_CARD_TEASERS_EN,
  LEISTUNGEN_OVERVIEW as LEISTUNGEN_OVERVIEW_EN,
} from "./en/leistungen-data";
import { getEnWissenArticle, WISSEN_OVERVIEW as WISSEN_OVERVIEW_EN } from "./en/wissen-data";

export async function getLocalizedLeistungenOverview(locale?: Locale) {
  return (await localeIsEn(locale)) ? LEISTUNGEN_OVERVIEW_EN : LEISTUNGEN_OVERVIEW;
}

export async function getLocalizedLeistungenCards(locale?: Locale) {
  return (await localeIsEn(locale)) ? LEISTUNGEN_CARD_TEASERS_EN : LEISTUNGEN_CARD_TEASERS;
}

export async function getLocalizedLeistung(slug: string, locale?: Locale) {
  return (await localeIsEn(locale)) ? getEnLeistung(slug) : getLeistung(slug);
}

export async function getLocalizedLeistungenTimeline(locale?: Locale) {
  const en = await localeIsEn(locale);
  return LEISTUNG_SLUG_ORDER.map((slug, index) => {
    const d = (en ? getEnLeistung(slug) : getLeistung(slug))!;
    return {
      slug,
      sectionId: d.sectionId,
      side: index % 2 === 0 ? ("left" as const) : ("right" as const),
      title: d.menuLabel,
      description: d.intro,
      href: leistungPath(slug),
    };
  });
}

export async function getLocalizedWissenOverview(locale?: Locale) {
  return (await localeIsEn(locale)) ? WISSEN_OVERVIEW_EN : WISSEN_OVERVIEW;
}

export async function getLocalizedWissenArticle(slug: string, locale?: Locale) {
  return (await localeIsEn(locale)) ? getEnWissenArticle(slug) : getWissenArticle(slug);
}

export async function getLocalizedAnwendungenOverview(locale?: Locale) {
  return (await localeIsEn(locale)) ? ANWENDUNGEN_OVERVIEW_EN : ANWENDUNGEN_OVERVIEW;
}

export async function getLocalizedAnwendung(slug: string, locale?: Locale) {
  return (await localeIsEn(locale)) ? getEnAnwendung(slug) : getAnwendung(slug);
}

export async function getLocalizedWissenTeasers(locale?: Locale): Promise<TeaserItem[]> {
  const en = await localeIsEn(locale);
  const calcH2 = en ? ERLOESRECHNER_TEASER_EN : ERLOESRECHNER_TEASER;
  const calcBio = en ? BIOMETHAN_TEASER_EN : BIOMETHAN_ERLOESRECHNER_TEASER;
  const articles = ALL_WISSEN_SLUGS.map((slug) => {
    const a = (en ? getEnWissenArticle(slug) : getWissenArticle(slug))!;
    return {
      slug: a.slug,
      title: a.menuLabel,
      description: a.intro,
      href: wissenPath(slug as WissenSlug),
    };
  });
  return [calcH2, calcBio, ...articles];
}

const regulatorySlugs: AnwendungSlug[] = [
  "thg-quote",
  "emissionshandel-ets-1",
  "emissionshandel-nehs",
  "esg-und-nachhaltigkeitsnachweise",
];

const productSlugs: AnwendungSlug[] = [
  "wasserstoff-und-derivate",
  "rfnbo",
  "biomethan-und-bio-lng",
];

function toAnwendungTeaser(
  slug: AnwendungSlug,
  en: boolean,
): TeaserItem {
  const d = (en ? getEnAnwendung(slug) : getAnwendung(slug))!;
  return {
    slug: d.slug,
    title: d.menuLabel,
    description: d.intro,
    href: anwendungPath(slug),
  };
}

export async function getLocalizedAnwendungenRegulatoryTeasers(locale?: Locale) {
  const en = await localeIsEn(locale);
  return regulatorySlugs.map((s) => toAnwendungTeaser(s, en));
}

export async function getLocalizedAnwendungenProductTeasers(locale?: Locale) {
  const en = await localeIsEn(locale);
  return productSlugs.map((s) => toAnwendungTeaser(s, en));
}
