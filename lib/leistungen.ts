import type { OverviewPageConfig, PageScaffold, TeaserItem } from "./types";

export type LeistungSlug =
  | "zertifizierung-redcert-iscc-certifhy"
  | "nachweisfuehrung-und-register"
  | "co2-und-quotenhandel"
  | "berichterstattung-und-meldepflichten";

export const LEISTUNGEN_OVERVIEW: OverviewPageConfig = {
  title: "Leistungen | FuelCert",
  metaDescription:
    "Überblick über Zertifizierung, Nachweisführung, Registerführung, CO2- und Quotenhandel sowie Berichte und Meldepflichten für erneuerbare Kraft- und Brennstoffe.",
  kicker: "Leistungen",
  h1: "Unsere Leistungen",
  intro:
    "FuelCert begleitet Unternehmen entlang der Wertschöpfungskette bei Zertifizierung, Nachweisführung, Marktmechanismen und Meldepflichten. Hier finden Sie einen Überblick – die Detailseiten folgen mit vertiefenden Inhalten.",
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
    title: "Nachweisführung und Registerführung",
    metaDescription: "Nachweisführung, Massenbilanz und Registerführung (UDB, Nabisy) für erneuerbare Kraft- und Brennstoffe.",
    intro:
      "Platzhalter: Unterstützung bei unterjährigen Bilanzen, RED-konformer Nachweisführung und Abstimmung mit relevanten Registern.",
    sections: [
      { heading: "Bilanzen", body: "Platzhalter zu Massen- und Treibhausgasbilanzen entlang der Lieferkette." },
      { heading: "Registerführung", body: "Platzhalter zu UDB, Nabisy und Registerführung in der Praxis." },
    ],
  },
  "co2-und-quotenhandel": {
    slug: "co2-und-quotenhandel",
    sectionId: "leistung-co2-quotenhandel",
    menuLabel: "CO2- und Quotenhandel",
    title: "CO2- und Quotenhandel",
    metaDescription: "Beratung zu THG-Quote, Emissionshandel und CO2-Marktmechanismen.",
    intro:
      "Platzhalter: Einordnung regulatorischer Märkte und begleitende Unterstützung bei Handel und Vertragsgestaltung.",
    sections: [
      { heading: "Marktüberblick", body: "Platzhalter zu Quoten, Zertifikaten und Anknüpfungspunkten." },
      { heading: "Operative Begleitung", body: "Platzhalter zu Partnern, Prozessen und Dokumentation." },
    ],
  },
  "berichterstattung-und-meldepflichten": {
    slug: "berichterstattung-und-meldepflichten",
    sectionId: "leistung-berichterstattung",
    menuLabel: "Berichte und Meldepflichten",
    title: "Berichte und Meldepflichten",
    metaDescription: "Berichte und Meldepflichten bei Behörden und zuständigen Stellen.",
    intro:
      "Platzhalter: Unterstützung bei Berichten, Fristen und Meldepflichten – z. B. im Kontext von DEHSt und Quotenstelle.",
    sections: [
      { heading: "Berichte", body: "Platzhalter zu Datenaufbereitung und formalen Anforderungen." },
      { heading: "Koordination", body: "Platzhalter zu internen Schnittstellen und Einreichungsprozessen." },
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
