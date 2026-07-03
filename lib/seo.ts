import type { Metadata } from "next";
import ogDefaultImage from "@/assets/fuelcert-logo.png";
import { routing, type Locale } from "@/i18n/routing";

/**
 * Maßgebliche Produktions-Domain (ohne abschließenden Slash).
 * Wird für Canonical-URLs, hreflang-Alternates, Sitemap, OpenGraph
 * und strukturierte Daten (JSON-LD) verwendet.
 */
export const SITE_URL = "https://www.fuelcert.com";

export const SITE_NAME = "FuelCert";
export const LEGAL_NAME = "FuelCert Sailer & Grope GbR";

/** OpenGraph locale-Kennungen je next-intl-Locale. */
const OG_LOCALE: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
};

/** Standard-Beschreibung als Fallback, falls eine Seite keine eigene liefert. */
export const DEFAULT_DESCRIPTION: Record<Locale, string> = {
  de: "FuelCert – Zertifizierung, Nachweisführung und regulatorische Beratung für erneuerbare Kraft- und Brennstoffe.",
  en: "FuelCert – certification, verification and regulatory advisory for renewable fuels.",
};

/** Standard-OG-Bild (Fallback). TODO: dediziertes 1200×630-Social-Image ergänzen. */
export const DEFAULT_OG_IMAGE = ogDefaultImage.src;

/**
 * Baut eine absolute URL für einen locale-unabhängigen Pfad.
 * @param locale de | en
 * @param path z. B. "" (Startseite) oder "/leistungen" oder "/news/slug"
 */
export function absoluteUrl(locale: Locale, path = ""): string {
  const clean = path === "/" ? "" : path;
  return `${SITE_URL}/${locale}${clean}`;
}

/**
 * Erzeugt canonical + hreflang-Alternates für eine Seite.
 * Der Canonical zeigt immer auf die aktuelle Locale-Variante.
 */
export function buildAlternates(locale: Locale, path = ""): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = absoluteUrl(l, path);
  }
  languages["x-default"] = absoluteUrl(routing.defaultLocale, path);
  return {
    canonical: absoluteUrl(locale, path),
    languages,
  };
}

type PageMetaInput = {
  locale: Locale;
  /** locale-unabhängiger Pfad, z. B. "/leistungen" oder "" für die Startseite */
  path?: string;
  title: string;
  description?: string;
  /** Absolute oder relative Bild-URL(s) für OpenGraph/Twitter */
  images?: string | string[];
  /** OpenGraph-Typ, Standard "website"; News nutzen "article" */
  type?: "website" | "article";
};

/**
 * Zentraler Helper für generateMetadata: setzt Title, Description,
 * Canonical, hreflang-Alternates sowie OpenGraph- und Twitter-Tags.
 */
export function pageMetadata({
  locale,
  path = "",
  title,
  description,
  images,
  type = "website",
}: PageMetaInput): Metadata {
  const desc = description ?? DEFAULT_DESCRIPTION[locale];
  const url = absoluteUrl(locale, path);
  const imageList = images
    ? Array.isArray(images)
      ? images
      : [images]
    : [DEFAULT_OG_IMAGE];

  return {
    title,
    description: desc,
    alternates: buildAlternates(locale, path),
    openGraph: {
      title,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      type,
      images: imageList,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: imageList,
    },
  };
}
