import type { OverviewPageConfig, PageScaffold, TeaserItem } from "./types";

export type LeistungSlug =
  | "zertifizierung-redcert-iscc-certifhy"
  | "nachweisfuehrung-und-register"
  | "co2-und-quotenhandel"
  | "berichterstattung-und-meldepflichten";

export const LEISTUNGEN_OVERVIEW: OverviewPageConfig = {
  title: "Leistungen | FuelCert",
  metaDescription:
    "Überblick über Zertifizierung, Nachweisführung, Registerführung, CO₂- und Quotenhandel sowie Berichte und Meldepflichten für erneuerbare Kraft- und Brennstoffe.",
  kicker: "Leistungen",
  h1: "Vier Leistungsbereiche entlang der regulatorischen Umsetzung",
  intro:
    "Von der Zertifizierung über Nachweise und Register bis zu Marktmechanismen und Meldepflichten – FuelCert strukturiert Ihre Umsetzung entlang dieser vier Felder.",
};

const leistungen: Record<LeistungSlug, PageScaffold & { sectionId: string }> = {
  "zertifizierung-redcert-iscc-certifhy": {
    slug: "zertifizierung-redcert-iscc-certifhy",
    sectionId: "leistung-zertifizierung",
    menuLabel: "Zertifizierung",
    title: "Zertifizierung: REDcert, ISCC EU oder CertifHy",
    metaDescription:
      "FuelCert begleitet Unternehmen bei der Zertifizierung nach REDcert, ISCC EU und CertifHy – von Datenaufbereitung und THG-/Massenbilanz bis Auditvorbereitung, Auditbegleitung und Rezertifizierung.",
    intro:
      "FuelCert unterstützt bei der Zertifizierung nach REDcert, ISCC EU und CertifHy – für Biokraftstoffe, Biomethan, Bio-LNG, RFNBO, grünen Wasserstoff, Derivate und E-Fuels, auditfest und strukturiert.",
    sections: [
      { heading: "Systeme und Scope", body: "Kurzer Platzhaltertext zu REDcert, ISCC EU und CertifHy sowie typischen Anwendungsfällen." },
      { heading: "Umsetzung", body: "Platzhalter für Vorgehen von Erstaufbau bis wiederkehrendem Audit." },
    ],
  },
  "nachweisfuehrung-und-register": {
    slug: "nachweisfuehrung-und-register",
    sectionId: "leistung-nachweisfuehrung",
    menuLabel: "Nachweisführung und Registerführung",
    title: "Nachweisführung und Registerführung für erneuerbare Kraft- und Brennstoffe",
    metaDescription:
      "FuelCert unterstützt Unternehmen bei Massen- und THG-Bilanzen, Nachweisführung, Registerführung in Nabisy und UDB sowie bei Meldungen an Register und Behörden.",
    intro:
      "FuelCert begleitet Sie bei laufender Nachweisführung und Registerführung – von Massen- und THG-Bilanzen über Nabisy und UDB bis zu Meldungen an Behörden.",
    sections: [
      {
        heading: "Leistungsübersicht",
        body: "Details finden Sie auf der Leistungsseite Nachweisführung und Registerführung.",
      },
    ],
  },
  "co2-und-quotenhandel": {
    slug: "co2-und-quotenhandel",
    sectionId: "leistung-co2-quotenhandel",
    menuLabel: "CO₂- und Quotenhandel",
    title: "CO₂- und Quotenhandel",
    metaDescription:
      "FuelCert unterstützt bei THG-Quote, ETS I und nEHS – mit Markterfahrung, Netzwerk zu Käufern und Händlern sowie fachlicher Einordnung von Vermarktung und Vertragsinhalten.",
    intro:
      "FuelCert unterstützt bei der Einordnung und Nutzung regulatorischer CO₂- und Quotenmärkte – insbesondere THG-Quote, ETS I und nEHS.",
    sections: [
      {
        heading: "Leistungsübersicht",
        body: "Details finden Sie auf der Leistungsseite CO₂- und Quotenhandel.",
      },
    ],
  },
  "berichterstattung-und-meldepflichten": {
    slug: "berichterstattung-und-meldepflichten",
    sectionId: "leistung-berichterstattung",
    menuLabel: "Berichte und Meldepflichten",
    title: "Berichte und Meldepflichten",
    metaDescription:
      "FuelCert unterstützt Unternehmen bei Berichts-, Melde- und Abgabepflichten in der THG-Quote, im EU-ETS I und im nEHS – strukturiert, fristgerecht und prüffähig.",
    intro:
      "FuelCert unterstützt bei Berichts-, Melde- und Abgabepflichten in THG-Quote, EU-ETS I und nEHS – von der Datenaufbereitung bis zur fristgerechten Einreichung.",
    sections: [
      {
        heading: "Leistungsübersicht",
        body: "Details finden Sie auf der Leistungsseite Berichte und Meldepflichten.",
      },
    ],
  },
};

export const ALL_LEISTUNG_SLUGS = Object.keys(leistungen) as LeistungSlug[];

export function getLeistung(slug: string) {
  return leistungen[slug as LeistungSlug];
}

export function getAllLeistungen() {
  return ALL_LEISTUNG_SLUGS.map((s) => leistungen[s]);
}

export function leistungPath(slug: LeistungSlug) {
  return `/leistungen/${slug}`;
}

export function getLeistungenTeaserList(): (TeaserItem & {
  sectionId: string;
  side: "left" | "right";
})[] {
  return ALL_LEISTUNG_SLUGS.map((slug, index) => {
    const d = leistungen[slug];
    return {
      id: d.sectionId,
      slug: d.slug,
      sectionId: d.sectionId,
      side: index % 2 === 0 ? "left" : "right",
      title: d.menuLabel,
      description: d.intro,
      href: leistungPath(slug),
    };
  });
}

export function getLeistungenOverviewTeasers(): TeaserItem[] {
  return ALL_LEISTUNG_SLUGS.map((slug) => {
    const d = leistungen[slug];
    return {
      slug: d.slug,
      title: d.menuLabel,
      description: d.intro,
      href: leistungPath(slug),
    };
  });
}
