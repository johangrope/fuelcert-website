import type { OverviewPageConfig, PageScaffold, TeaserItem } from "./types";

export type WissenSlug =
  | "rfnbo-zertifizierung"
  | "redcert-iscc-certifhy-unterschiede"
  | "thg-und-massenbilanz"
  | "udb-nabisy-und-registerfuehrung"
  | "rfnbo-anforderungen-red-iii";

export const WISSEN_OVERVIEW: OverviewPageConfig = {
  title: "Wissen | FuelCert",
  metaDescription:
    "Grundlagen zu RFNBO, REDcert, ISCC EU, CertifHy, THG- und Massenbilanz sowie UDB, Nabisy und Registerführung.",
  kicker: "Wissen",
  h1: "Wissen",
  intro:
    "Platzhalter: Kuratierte Einordnungen zu zentralen Begriffen und Prozessen – als Grundlage für vertiefende Beratung und SEO-Inhalte in einem späteren Schritt.",
};

const articles: Record<WissenSlug, PageScaffold> = {
  "rfnbo-zertifizierung": {
    slug: "rfnbo-zertifizierung",
    menuLabel: "RFNBO-Zertifizierung",
    title: "RFNBO-Zertifizierung",
    metaDescription: "Grundlagen zur RFNBO-Zertifizierung – Platzhalter.",
    intro: "Platzhalter: Was Unternehmen bei RFNBO-Zertifizierung typischerweise beachten sollten.",
    sections: [{ heading: "Überblick", body: "Platzhalter für spätere vertiefende Inhalte." }],
  },
  "redcert-iscc-certifhy-unterschiede": {
    slug: "redcert-iscc-certifhy-unterschiede",
    menuLabel: "REDcert, ISCC EU und CertifHy",
    title: "REDcert, ISCC EU und CertifHy",
    metaDescription: "Vergleich von REDcert, ISCC EU und CertifHy – Platzhalter.",
    intro: "Platzhalter: Kurzer Überblick über Abgrenzung und Auswahlkriterien der Zertifizierungssysteme.",
    sections: [{ heading: "Systemvergleich", body: "Platzhalter für tabellarische oder strukturierte Inhalte." }],
  },
  "thg-und-massenbilanz": {
    slug: "thg-und-massenbilanz",
    menuLabel: "THG- und Massenbilanz",
    title: "THG- und Massenbilanz",
    metaDescription: "THG- und Massenbilanz im Kontext erneuerbarer Kraftstoffe – Platzhalter.",
    intro: "Platzhalter: Begriffe und Zusammenhänge in kompakter Form.",
    sections: [{ heading: "Grundlagen", body: "Platzhalter für spätere Ausarbeitung." }],
  },
  "udb-nabisy-und-registerfuehrung": {
    slug: "udb-nabisy-und-registerfuehrung",
    menuLabel: "UDB, Nabisy und Registerführung",
    title: "UDB, Nabisy und Registerführung",
    metaDescription: "UDB, Nabisy und Registerführung – Platzhalter.",
    intro: "Platzhalter: Rolle von UDB, Nabisy und Registerführung in der Praxis.",
    sections: [{ heading: "Praxisbezug", body: "Platzhalter für typische Workflows." }],
  },
  "rfnbo-anforderungen-red-iii": {
    slug: "rfnbo-anforderungen-red-iii",
    menuLabel: "RFNBO-Anforderungen nach RED III",
    title: "RFNBO-Anforderungen nach RED III",
    metaDescription: "RED III und RFNBO – Platzhalter.",
    intro: "Platzhalter: Einordnung zentraler Anforderungen und Umsetzungsfelder.",
    sections: [{ heading: "Regulatorischer Rahmen", body: "Platzhalter für Detailinhalte." }],
  },
};

export const ALL_WISSEN_SLUGS = Object.keys(articles) as WissenSlug[];

export function getWissenArticle(slug: string) {
  return articles[slug as WissenSlug];
}

export function wissenPath(slug: WissenSlug) {
  return `/wissen/${slug}`;
}

export function getWissenOverviewTeasers(): TeaserItem[] {
  return ALL_WISSEN_SLUGS.map((slug) => {
    const a = articles[slug];
    return {
      slug: a.slug,
      title: a.menuLabel,
      description: a.intro,
      href: wissenPath(slug),
    };
  });
}
