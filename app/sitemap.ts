import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/seo";
import { ALL_LEISTUNG_SLUGS, leistungPath } from "@/lib/leistungen";
import { ALL_ANWENDUNG_SLUGS, anwendungPath } from "@/lib/anwendungsbereiche";
import { ALL_WISSEN_SLUGS, wissenPath } from "@/lib/wissen";
import { NEWS_POSTS } from "@/lib/news";
import { isNavItemVisible } from "@/lib/nav-visibility";

/** Locale-unabhängige Pfade mit optionalem letzten Änderungsdatum. */
type Entry = { path: string; lastModified?: string; priority?: number };

/**
 * Nur kanonische, tatsächlich erreichbare Seiten (HTTP 200).
 * Übersichts-Redirects (/leistungen, /anwendungsbereiche, /wissen) und
 * per nav-visibility ausgeblendete Placeholder-Routen (notFound) sind ausgeschlossen.
 */
function buildEntries(): Entry[] {
  const staticPaths: Entry[] = [
    { path: "", priority: 1 },
    { path: "/news", priority: 0.7 },
    { path: "/ueber-uns", priority: 0.6 },
    { path: "/kontakt", priority: 0.6 },
    { path: "/impressum", priority: 0.2 },
    { path: "/datenschutz", priority: 0.2 },
  ];

  const leistungen: Entry[] = ALL_LEISTUNG_SLUGS.map((slug) => ({
    path: leistungPath(slug),
    priority: 0.7,
  }));

  const anwendungen: Entry[] = ALL_ANWENDUNG_SLUGS.filter((slug) =>
    isNavItemVisible(anwendungPath(slug)),
  ).map((slug) => ({
    path: anwendungPath(slug),
    priority: 0.7,
  }));

  const wissenCalculators: Entry[] = [
    { path: "/wissen/erloesrechner", priority: 0.6 },
    { path: "/wissen/erloesrechner-biomethan-bio-cng", priority: 0.6 },
  ];

  const wissenArticles: Entry[] = ALL_WISSEN_SLUGS.filter((slug) =>
    isNavItemVisible(wissenPath(slug)),
  ).map((slug) => ({
    path: wissenPath(slug),
    priority: 0.5,
  }));

  const news: Entry[] = NEWS_POSTS.map((post) => ({
    path: `/news/${post.slug}`,
    lastModified: post.date,
    priority: 0.6,
  }));

  return [
    ...staticPaths,
    ...leistungen,
    ...anwendungen,
    ...wissenCalculators,
    ...wissenArticles,
    ...news,
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = buildEntries();

  return entries.flatMap((entry) => {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = absoluteUrl(locale, entry.path);
    }

    return routing.locales.map((locale) => ({
      url: absoluteUrl(locale, entry.path),
      lastModified: entry.lastModified ? new Date(entry.lastModified) : new Date(),
      priority: entry.priority,
      alternates: { languages },
    }));
  });
}
