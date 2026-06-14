import type { OverviewPageConfig, PageScaffold, TeaserItem } from "./types";

export type AnwendungSlug =
  | "thg-quote"
  | "emissionshandel-ets-1"
  | "emissionshandel-nehs"
  | "esg-und-nachhaltigkeitsnachweise"
  | "wasserstoff-und-derivate"
  | "rfnbo"
  | "biomethan-und-bio-lng";

export const ANWENDUNGEN_OVERVIEW: OverviewPageConfig = {
  title: "Anwendungsbereiche | FuelCert",
  metaDescription:
    "Regulatorische und produktbezogene Anwendungsbereiche für erneuerbare Kraft- und Brennstoffe, Wasserstoff, RFNBO und Biomethan.",
  kicker: "Anwendungsbereiche",
  h1: "Anwendungsbereiche",
  intro:
    "Platzhalter: Wo greifen Zertifizierung, Nachweise und Marktmechanismen in Ihrem Geschäftsmodell? Die folgenden Bereiche gliedern sich in regulatorische Kontexte und produktbezogene Schwerpunkte.",
};

const regulatorySlugs: AnwendungSlug[] = [
  "thg-quote",
  "emissionshandel-ets-1",
  "emissionshandel-nehs",
  "esg-und-nachhaltigkeitsnachweise",
];

const productSlugs: AnwendungSlug[] = [
  "wasserstoff-und-derivate",
  "biomethan-und-bio-lng",
  "rfnbo",
];

export const ALL_ANWENDUNG_SLUGS = [...regulatorySlugs, ...productSlugs] as AnwendungSlug[];

const pages: Record<AnwendungSlug, PageScaffold & { category: "regulatory" | "product" }> = {
  "thg-quote": {
    slug: "thg-quote",
    category: "regulatory",
    menuLabel: "THG-Quote",
    title: "THG-Quote",
    metaDescription:
      "Was ist die THG-Quote? Anforderungen, Erfüllungsoptionen und Relevanz für Biomethan, RFNBO, Wasserstoff und erneuerbare Kraftstoffe.",
    intro:
      "Die Treibhausgasminderungsquote verpflichtet Inverkehrbringer fossiler Kraftstoffe zur Emissionsminderung – mit wachsenden Chancen für erneuerbare Energieträger.",
    sections: [{ heading: "Schwerpunkte", body: "Platzhalter für Leistungen und Anknüpfungspunkte in diesem Markt." }],
  },
  "emissionshandel-ets-1": {
    slug: "emissionshandel-ets-1",
    category: "regulatory",
    menuLabel: "Emissionshandel (ETS I)",
    title: "Emissionshandel (EU-ETS 1)",
    metaDescription:
      "EU-ETS 1 für Betreiber stationärer Anlagen: Wie nachhaltige Brennstoffe berichtete Emissionen, EUA-Bedarf und ETS-Kosten mindern können.",
    intro:
      "Im EU-ETS 1 müssen Betreiber erfasster Anlagen Emissionen melden und Emissionsberechtigungen abgeben – mit wirtschaftlicher Relevanz für nachhaltige Brennstoffe und abziehbare Anteile.",
    sections: [{ heading: "Schwerpunkte", body: "Überwachungsplan, Emissionsbericht, Nachweise und Unionsregister im wirtschaftlichen Kontext." }],
  },
  "emissionshandel-nehs": {
    slug: "emissionshandel-nehs",
    category: "regulatory",
    menuLabel: "Nationaler Emissionshandel (nEHS)",
    title: "Nationaler Emissionshandel (nEHS)",
    metaDescription:
      "Nationaler Emissionshandel (nEHS) nach BEHG: Überwachungsplan, Emissionsbericht, nEHS-Register, nEZ und erneuerbare Brennstoffe.",
    intro:
      "Das nEHS bepreist CO₂-Emissionen aus Brennstoffen außerhalb des EU-ETS – mit besonderer Relevanz für Wärme, Verkehr und Inverkehrbringer.",
    sections: [{ heading: "Schwerpunkte", body: "Betroffenheit, Pflichten, Fristen, Register und erneuerbare Brennstoffe im nationalen Emissionshandel." }],
  },
  "esg-und-nachhaltigkeitsnachweise": {
    slug: "esg-und-nachhaltigkeitsnachweise",
    category: "regulatory",
    menuLabel: "ESG und Nachhaltigkeitsnachweise",
    title: "ESG und Nachhaltigkeitsnachweise",
    metaDescription: "ESG-Reporting und Nachhaltigkeitsnachweise im Energiekontext.",
    intro: "Platzhalter: Verbindung von regulatorischen Nachweisen und ESG-Anforderungen.",
    sections: [{ heading: "Schwerpunkte", body: "Platzhalter für Daten, Nachweise und Reporting." }],
  },
  "wasserstoff-und-derivate": {
    slug: "wasserstoff-und-derivate",
    category: "product",
    menuLabel: "Wasserstoff und Derivate",
    title: "Wasserstoff und Derivate",
    metaDescription: "Zertifizierung und Compliance für grünen Wasserstoff und Derivate.",
    intro: "Platzhalter: Schwerpunkte bei Wasserstoffprojekten, Nachweisen und Zertifizierungssystemen.",
    sections: [{ heading: "Schwerpunkte", body: "Platzhalter für typische Projekt- und Marktfragen." }],
  },
  rfnbo: {
    slug: "rfnbo",
    category: "product",
    menuLabel: "RFNBO und E-Fuels",
    title: "RFNBO und E-Fuels",
    metaDescription: "RFNBO und E-Fuels – Anforderungen, Zertifizierung und Nachweisführung.",
    intro: "Platzhalter: Einordnung von RFNBO und E-Fuels nach RED III und operativen Umsetzungsfragen.",
    sections: [{ heading: "Schwerpunkte", body: "Platzhalter für Bilanzierung, Zertifizierung und Märkte." }],
  },
  "biomethan-und-bio-lng": {
    slug: "biomethan-und-bio-lng",
    category: "product",
    menuLabel: "Biomethan und Bio-LNG",
    title: "Biomethan und Bio-LNG",
    metaDescription: "Biomethan und Bio-LNG – Zertifizierung und regulatorische Einordnung.",
    intro: "Platzhalter: Schwerpunkte bei Biomethan- und Bio-LNG-Lieferketten und Nachweisen.",
    sections: [{ heading: "Schwerpunkte", body: "Platzhalter für typische Compliance-Themen." }],
  },
};

export function getAnwendung(slug: string) {
  return pages[slug as AnwendungSlug];
}

export function anwendungPath(slug: AnwendungSlug) {
  return `/anwendungsbereiche/${slug}`;
}

function toTeaser(d: (typeof pages)[AnwendungSlug]): TeaserItem {
  return {
    slug: d.slug,
    title: d.menuLabel,
    description: d.intro,
    href: anwendungPath(d.slug as AnwendungSlug),
  };
}

export function getAnwendungenRegulatoryTeasers() {
  return regulatorySlugs.map((s) => toTeaser(pages[s]));
}

export function getAnwendungenProductTeasers() {
  return productSlugs.map((s) => toTeaser(pages[s]));
}
