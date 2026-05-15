export type LeistungSlug = "zertifizierung" | "bilanzierung" | "emissionshandel" | "berichterstattung";

export function leistungPath(slug: LeistungSlug): string {
  return `/leistungen/${slug}`;
}

export interface LeistungDetail {
  slug: LeistungSlug;
  /** Anker-ID auf der Startseite (Timeline) */
  sectionId: string;
  /** Kurztitel fürs Menü */
  menuLabel: string;
  /** Titel auf der Unterseite + Meta */
  pageTitle: string;
  metaDescription: string;
  /** Teaser wie auf der Startseite */
  teaser: string;
  sections: { heading: string; paragraphs: string[] }[];
}

const leistungen: Record<LeistungSlug, LeistungDetail> = {
  zertifizierung: {
    slug: "zertifizierung",
    sectionId: "leistung-zertifizierung",
    menuLabel: "Zertifizierung",
    pageTitle: "Zertifizierung: REDcert, ISCC oder CertifHy",
    metaDescription:
      "FuelCert begleitet Sie bei REDcert, ISCC und CertifHy – von der Datenerfassung über Bilanzen bis zur Dokumentation für das Prüfaudit.",
    teaser:
      "Wir strukturieren Ihre Daten, Erstellen die Massen- und Treibhausgasbilanzen, das QM-System und die Dokumentation für das Prüfaudit.",
    sections: [
      {
        heading: "Systeme und Anforderungen",
        paragraphs: [
          "Ob Biokraftstoffe, Biomethan, RFNBO oder andere nachhaltige Kraft- und Brennstoffe: die anerkannten Zertifizierungssysteme REDcert, ISCC und CertifHy setzen klare Regeln für Nachhaltigkeit, Treibhausgasbilanz und Massenbalance. Wir helfen Ihnen, die für Ihre Lieferketten und Märkte passenden Anforderungen zu verstehen und operativ umzusetzen.",
          "Dazu gehören unter anderem die Erfassung und Aufbereitung von Erzeugungs-, Transport- und Vertriebsdaten, die Abbildung von Rabatten und Allokationen sowie die konsistente Verknüpfung von physischen und buchhalterischen Mengenströmen.",
        ],
      },
      {
        heading: "Vom Konzept bis zum Audit",
        paragraphs: [
          "Wir unterstützen bei der Einrichtung oder Anpassung Ihres Qualitäts- und Managementsystems, definieren Schnittstellen zwischen IT, Produktion und Compliance und bereiten die für Zertifizierer nachvollziehbare Dokumentation auf.",
          "Vor dem Audit können wir Stichproben fahren, Lücken in Nachweisen schließen und Schulungsbedarf für Ihre Teams adressieren – so reduzieren Sie Nichtkonformitäten und Verzögerungen auf dem Weg zur gültigen Zertifizierung.",
        ],
      },
    ],
  },
  bilanzierung: {
    slug: "bilanzierung",
    sectionId: "leistung-bilanzierung",
    menuLabel: "Bilanzierung und Nachweisführung",
    pageTitle: "Bilanzierung und Nachweisführung",
    metaDescription:
      "Unterjährige Bilanzen, RED-konforme Nachweise und Abstimmung mit Registern – FuelCert begleitet Ihre Nachweisführung entlang der Wertschöpfungskette.",
    teaser:
      "Wir erstellen die unterjährigen Bilanzen und kümmern uns um die RED-konforme Nachweisführung unter Einbezug der anzuwendenden Register.",
    sections: [
      {
        heading: "Massen- und Emissionsbilanzen",
        paragraphs: [
          "Zuverlässige Bilanzen sind die Grundlage für Zertifizierung, Quotennachweis und Meldungen. Wir führen Ihre Eingangsmengen, Umveredelungen, Verluste und Outputs zusammen und stellen sie den Anforderungen der jeweiligen Standards und nationalen Implementierungen gegenüber.",
          "Dabei achten wir auf Zeitreihen, Periodenabgrenzungen und die korrekte Zuordnung von Nachhaltigkeitsattributen – inklusive Schnittstellen zu ERP-, LIMS- oder Excel-basierten Auswertungen.",
        ],
      },
      {
        heading: "Register und Nachweise",
        paragraphs: [
          "Je nach Brennstoff und Markt sind unterschiedliche Register und Nachweissysteme relevant. Wir unterstützen bei der RED-konformen Nachweisführung, der Abstimmung mit Buchungsregeln und der Vorbereitung von Auditorien oder Behördenanfragen.",
          "Ziel ist eine lückenlose Nachvollziehbarkeit von erzeugten Mengen bis zum Endnachweis – ohne Medienbrüche, die im Audit oder bei Plausibilitätsprüfungen zu Problemen führen.",
        ],
      },
    ],
  },
  emissionshandel: {
    slug: "emissionshandel",
    sectionId: "leistung-emissionshandel",
    menuLabel: "Emissions- und Quotenhandel",
    pageTitle: "Emissions- und Quotenhandel",
    metaDescription:
      "Beratung zu CO2-Märkten, THG-Quote und Emissionshandel – FuelCert hilft bei Marktverständnis, Partnerfindung und Vertragsgestaltung.",
    teaser:
      "Wir unterstützen Sie beim Handel in den CO2-Märkten durch das Verstehen der Marktmechanismen, das Finden von Handelspartner und der Hilfe bei der Vertragsgestaltung.",
    sections: [
      {
        heading: "Marktlogiken und Anknüpfungspunkte",
        paragraphs: [
          "Erneuerbare Kraft- und Brennstoffe sind mit verschiedenen regulierten Märkten verknüpft – von der Treibhausgas-Quote über den europäischen Emissionshandel bis zu weiteren nationalen Instrumenten. Wir erläutern, welche Produkte in welche Pflichten fallen und welche Handels- und Verrechnungsoptionen sich daraus ergeben.",
          "Damit können Hersteller, Händler und Emissionshandelspflichtige fundierte Entscheidungen über Absatzwege, Speicherhaltung und Vertragspartner treffen.",
        ],
      },
      {
        heading: "Handel und Verträge",
        paragraphs: [
          "Wir begleiten Sie bei der strukturierten Suche nach passenden Gegenparteien, beim Aufsetzen von Preismechaniken, Lieferbedingungen und Dokumentationspflichten sowie bei der Abstimmung mit Zertifikats- und Mengenliquidität.",
          "Rechtliche Feinheiten ersetzen wir nicht – wir arbeiten bei Bedarf eng mit Ihrer Rechtsberatung zusammen und sorgen dafür, dass energiewirtschaftliche und regulatorische Aspekte klar in den Unterlagen abbildbar sind.",
        ],
      },
    ],
  },
  berichterstattung: {
    slug: "berichterstattung",
    sectionId: "leistung-berichterstattung",
    menuLabel: "Berichterstattung und Meldung",
    pageTitle: "Berichterstattung und Meldung",
    metaDescription:
      "Berichte und Meldungen bei DEHSt, Quotenstelle und weiteren Stellen – FuelCert unterstützt bei Aufbereitung, Fristen und formalen Anforderungen.",
    teaser:
      "Wir erstellen die erforderlichen Berichte und führen die Meldungen bei den zuständigen Behörden, wie z.B. der DEHSt und der Quotenstelle durch.",
    sections: [
      {
        heading: "Reporting entlang der Vorgaben",
        paragraphs: [
          "Behörden und Zertifizierungsstellen verlangen strukturierte Berichte mit definierten Datenfeldern und Nachweisen. Wir bündeln Ihre Stammdaten, Bilanzen und Zertifikatsinformationen und übersetzen sie in die jeweiligen Meldeformate bzw. Gesprächsvorbereitungen mit Behördenvertretern.",
          "So reduzieren Sie Rückfragen, Nachforderungen und das Risiko verspäteter oder unvollständiger Einreichungen.",
        ],
      },
      {
        heading: "Koordination mit DEHSt und Quotenstelle",
        paragraphs: [
          "Für die Praxis der Treibhausgasquote und angrenzende Themen sind die Deutsche Emissionshandelsstelle (DEHSt) und die Quotenstelle zentrale Ansprechpartner. Wir unterstützen bei der konsistenten Datenbasis, der Abstimmung von Mengen und Zeiträumen sowie bei der Einhaltung von Fristen.",
          "Wo Prozesse mehrere Abteilungen betreffen, helfen wir bei der Rollenklärung und den Übergaben – damit Zahlen, Texte und Signaturen zusammenpassen.",
        ],
      },
    ],
  },
};

export const ALL_LEISTUNG_SLUGS = Object.keys(leistungen) as LeistungSlug[];

export function getLeistung(slug: string): LeistungDetail | undefined {
  return leistungen[slug as LeistungSlug];
}

export function getAllLeistungen(): LeistungDetail[] {
  return ALL_LEISTUNG_SLUGS.map((s) => leistungen[s]);
}

/** Timeline + Startseite: Kurzinfos zu den vier Leistungen */
export function getLeistungenTeaserList() {
  return ALL_LEISTUNG_SLUGS.map((slug, index) => {
    const d = leistungen[slug];
    const side = index % 2 === 0 ? ("left" as const) : ("right" as const);
    return {
      id: d.sectionId,
      slug: d.slug,
      side,
      title: d.pageTitle,
      description: d.teaser,
      href: leistungPath(slug),
    };
  });
}
