import type { OverviewPageConfig, PageScaffold, TeaserItem } from "./types";
import { isNavItemVisible } from "./nav-visibility";

export type WissenSlug =
  | "rfnbo-zertifizierung"
  | "redcert-iscc-certifhy-unterschiede"
  | "thg-und-massenbilanz"
  | "udb-nabisy-und-registerfuehrung"
  | "rfnbo-anforderungen-red-iii"
  | "ueberwachungsplan-im-eu-ets-1"
  | "emissionsbericht-im-eu-ets-1"
  | "unionsregister-im-emissionshandel"
  | "nachhaltige-brennstoffe-im-eu-ets-1"
  | "biomethan-im-emissionshandel"
  | "rfnbo-im-emissionshandel"
  | "kostenlose-zuteilung-im-eu-ets-1"
  | "cbam"
  | "ueberwachungsplan-im-nehs"
  | "emissionsbericht-im-nehs"
  | "nehs-register"
  | "biomethan-im-nehs"
  | "rfnbo-im-nehs"
  | "zusammenwirken-nehs-und-eu-ets-1"
  | "eu-ets-2";

export const WISSEN_OVERVIEW: OverviewPageConfig = {
  title: "Wissen | FuelCert",
  metaDescription:
    "Hintergrundinformationen zu Fachthemen und Regularien sowie Erlösrechner für erneuerbare Kraft- und Brennstoffe in THG-Quote und angrenzenden CO₂-Märkten.",
  kicker: "Wissen",
  h1: "Wissen",
  intro:
    "Hier erhalten Sie sowohl Hintergrundinformationen zu den relevanten Fachthemen und Regularien sowie die Möglichkeit, die potenziellen Erlöse für Ihre erneuerbaren Kraft- und Brennstoffe in den unterschiedlichen CO₂-Märkten zu berechnen.",
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
  "ueberwachungsplan-im-eu-ets-1": {
    slug: "ueberwachungsplan-im-eu-ets-1",
    menuLabel: "Überwachungsplan im EU-ETS 1",
    title: "Überwachungsplan im EU-ETS 1",
    metaDescription: "Überwachungsplan im EU-ETS 1 – Platzhalter.",
    intro: "Platzhalter: Grundlagen zum Überwachungsplan für stationäre Anlagen im EU-ETS 1.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "emissionsbericht-im-eu-ets-1": {
    slug: "emissionsbericht-im-eu-ets-1",
    menuLabel: "Emissionsbericht im EU-ETS 1",
    title: "Emissionsbericht im EU-ETS 1",
    metaDescription: "Emissionsbericht im EU-ETS 1 – Platzhalter.",
    intro: "Platzhalter: Aufbau, Fristen und Praxis des jährlichen Emissionsberichts.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "unionsregister-im-emissionshandel": {
    slug: "unionsregister-im-emissionshandel",
    menuLabel: "Unionsregister im Emissionshandel",
    title: "Unionsregister im Emissionshandel",
    metaDescription: "Unionsregister im Emissionshandel – Platzhalter.",
    intro: "Platzhalter: Rolle des Unionsregisters für Emissionsberechtigungen (EUA).",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "nachhaltige-brennstoffe-im-eu-ets-1": {
    slug: "nachhaltige-brennstoffe-im-eu-ets-1",
    menuLabel: "Nachhaltige Brennstoffe im EU-ETS 1",
    title: "Nachhaltige Brennstoffe im EU-ETS 1",
    metaDescription: "Nachhaltige Brennstoffe im EU-ETS 1 – Platzhalter.",
    intro: "Platzhalter: Einordnung nachhaltiger Brennstoffe und abziehbarer Anteile im Emissionshandel.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "biomethan-im-emissionshandel": {
    slug: "biomethan-im-emissionshandel",
    menuLabel: "Biomethan im Emissionshandel",
    title: "Biomethan im Emissionshandel",
    metaDescription: "Biomethan im Emissionshandel – Platzhalter.",
    intro: "Platzhalter: Biomethan im EU-ETS 1 und relevante Nachweisanforderungen.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "rfnbo-im-emissionshandel": {
    slug: "rfnbo-im-emissionshandel",
    menuLabel: "RFNBO im Emissionshandel",
    title: "RFNBO im Emissionshandel",
    metaDescription: "RFNBO im Emissionshandel – Platzhalter.",
    intro: "Platzhalter: RFNBO und Emissionsberichterstattung im EU-ETS 1.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "kostenlose-zuteilung-im-eu-ets-1": {
    slug: "kostenlose-zuteilung-im-eu-ets-1",
    menuLabel: "Kostenlose Zuteilung im EU-ETS I",
    title: "Kostenlose Zuteilung im EU-ETS I",
    metaDescription: "Kostenlose Zuteilung im EU-ETS I – Platzhalter.",
    intro: "Platzhalter: Einordnung der kostenlosen Zuteilung für Anlagen im EU-ETS I.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "cbam": {
    slug: "cbam",
    menuLabel: "CBAM",
    title: "CBAM",
    metaDescription: "Carbon Border Adjustment Mechanism (CBAM) – Platzhalter.",
    intro: "Platzhalter: CBAM als angrenzendes CO₂-Regime zum EU-ETS I.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "ueberwachungsplan-im-nehs": {
    slug: "ueberwachungsplan-im-nehs",
    menuLabel: "Überwachungsplan im nEHS",
    title: "Überwachungsplan im nEHS",
    metaDescription: "Überwachungsplan im nEHS – Platzhalter.",
    intro: "Platzhalter: Grundlagen zum Überwachungsplan im nationalen Emissionshandel.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "emissionsbericht-im-nehs": {
    slug: "emissionsbericht-im-nehs",
    menuLabel: "Emissionsbericht im nEHS",
    title: "Emissionsbericht im nEHS",
    metaDescription: "Emissionsbericht im nEHS – Platzhalter.",
    intro: "Platzhalter: Aufbau, Fristen und Praxis des Emissionsberichts im nEHS.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "nehs-register": {
    slug: "nehs-register",
    menuLabel: "nEHS-Register",
    title: "nEHS-Register",
    metaDescription: "nEHS-Register – Platzhalter.",
    intro: "Platzhalter: Rolle des nEHS-Registers für Emissionszertifikate (nEZ).",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "biomethan-im-nehs": {
    slug: "biomethan-im-nehs",
    menuLabel: "Biomethan im nEHS",
    title: "Biomethan im nEHS",
    metaDescription: "Biomethan im nEHS – Platzhalter.",
    intro: "Platzhalter: Biomethan im nationalen Emissionshandel und relevante Nachweisanforderungen.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "rfnbo-im-nehs": {
    slug: "rfnbo-im-nehs",
    menuLabel: "RFNBO im nEHS",
    title: "RFNBO im nEHS",
    metaDescription: "RFNBO im nEHS – Platzhalter.",
    intro: "Platzhalter: RFNBO und Emissionsberichterstattung im nationalen Emissionshandel.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "zusammenwirken-nehs-und-eu-ets-1": {
    slug: "zusammenwirken-nehs-und-eu-ets-1",
    menuLabel: "Zusammenwirken nEHS und EU-ETS I",
    title: "Zusammenwirken nEHS und EU-ETS I",
    metaDescription: "Zusammenwirken nEHS und EU-ETS I – Platzhalter.",
    intro: "Platzhalter: Doppelerfassung, Doppelbelastung und Schnittstellen zwischen nEHS und EU-ETS I.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
  },
  "eu-ets-2": {
    slug: "eu-ets-2",
    menuLabel: "EU-ETS 2",
    title: "EU-ETS 2",
    metaDescription: "EU-ETS 2 – Platzhalter.",
    intro: "Platzhalter: Übergang und Schnittstelle zum EU-ETS 2 ab 2027.",
    sections: [{ heading: "Überblick", body: "Platzhalter für vertiefende Inhalte." }],
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
  return ALL_WISSEN_SLUGS.filter((slug) => isNavItemVisible(wissenPath(slug))).map((slug) => {
    const a = articles[slug];
    return {
      slug: a.slug,
      title: a.menuLabel,
      description: a.intro,
      href: wissenPath(slug),
    };
  });
}
