import fuelcertLogo from "@/assets/fuelcert-logo.png";
import type { Locale } from "@/i18n/routing";
import { SITE_URL, SITE_NAME, LEGAL_NAME, absoluteUrl } from "@/lib/seo";
import type { NewsPost } from "@/lib/news";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}${fuelcertLogo.src}`;

const FOUNDERS = [
  { name: "Katharina Sailer", email: "k.sailer@fuelcert.com" },
  { name: "Johan Grope", email: "j.grope@fuelcert.com" },
];

/** Organization für FuelCert Sailer & Grope GbR (seitenweit). */
export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    email: "info@fuelcert.com",
    telephone: "+4915233560411",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bismarckstraße 65",
      postalCode: "10627",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    founder: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name })),
    vatID: "DE365877856",
  };
}

/** WebSite-Knoten mit Sprachbezug und Publisher-Referenz. */
export function websiteJsonLd(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: locale,
    publisher: { "@id": ORG_ID },
  };
}

export type BreadcrumbItem = { label: string; href?: string };

/**
 * BreadcrumbList für Unterseiten.
 *
 * Nur ListItems mit gültiger kanonischer URL (`item`) werden ausgegeben.
 * Nicht verlinkbare Zwischenebenen (z. B. Redirect-Übersichten ohne HTTP 200)
 * werden aus dem JSON-LD weggelassen. Die aktuelle Seite wird über
 * `currentPath` als letztes Element mit `item` ergänzt.
 */
export function breadcrumbJsonLd(
  items: BreadcrumbItem[],
  locale: Locale,
  currentPath?: string,
): Record<string, unknown> {
  const listItems: Record<string, unknown>[] = [];

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const href = item.href ?? (isLast ? currentPath : undefined);
    if (!href) return;

    listItems.push({
      "@type": "ListItem",
      position: listItems.length + 1,
      name: item.label,
      item: absoluteUrl(locale, href === "/" ? "" : href),
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItems,
  };
}

/** Service-Knoten für die bestehenden Leistungsseiten. */
export function serviceJsonLd(input: {
  name: string;
  description?: string;
  path: string;
  locale: Locale;
}): Record<string, unknown> {
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    url: absoluteUrl(input.locale, input.path),
    provider: { "@id": ORG_ID },
    areaServed: "DE",
  };
  if (input.description) node.description = input.description;
  return node;
}

/** BlogPosting-Knoten für News-Detailseiten. */
export function articleJsonLd(post: NewsPost, locale: Locale): Record<string, unknown> {
  const url = absoluteUrl(locale, `/news/${post.slug}`);
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: locale,
    mainEntityOfPage: url,
    url,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
  if (post.image) node.image = `${SITE_URL}${post.image.src}`;
  return node;
}

/** Person-Knoten für die Gründer:innen (Über-uns-Seite). */
export function foundersJsonLd(): Record<string, unknown>[] {
  return FOUNDERS.map((f) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: f.name,
    email: f.email,
    worksFor: { "@id": ORG_ID },
    url: absoluteUrl("de", "/ueber-uns"),
  }));
}

/** FAQPage-Knoten. Nur verwenden, wenn echte, fachlich geprüfte Q&A vorliegen. */
export function faqJsonLd(
  entries: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.question,
      acceptedAnswer: { "@type": "Answer", text: e.answer },
    })),
  };
}
