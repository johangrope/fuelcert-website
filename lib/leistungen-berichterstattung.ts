import type { ServiceBulletGroup } from "@/components/ServiceBulletGroups";

export const BERICHTERSTATTUNG_SEO = {
  title: "Berichte und Meldepflichten | FuelCert",
  metaDescription:
    "FuelCert unterstützt Unternehmen bei Berichts-, Melde- und Abgabepflichten in der THG-Quote, im EU-ETS I und im nEHS – strukturiert, fristgerecht und prüffähig.",
  h1: "Berichte und Meldepflichten",
} as const;

export const BERICHTERSTATTUNG_INTRO =
  "FuelCert unterstützt Unternehmen bei der fristgerechten, belastbaren und prüffähigen Erfüllung von Berichts-, Melde- und Abgabepflichten in der THG-Quote, im EU-ETS I und im nationalen Emissionshandel (nEHS). Wir helfen dabei, regulatorische Anforderungen richtig einzuordnen, Daten systematisch aufzubereiten und die erforderlichen Meldungen, Berichte und Abgaben sicher umzusetzen." as const;

export const BERICHTERSTATTUNG_SERVICES_INTRO =
  "Je nach System und Unternehmensrolle fallen unterschiedliche Melde-, Berichts- und Abgabepflichten an. FuelCert unterstützt Sie in allen drei relevanten Feldern – strukturiert, fristgerecht und prüffähig." as const;

export const BERICHTERSTATTUNG_SERVICE_GROUPS: readonly ServiceBulletGroup[] = [
  {
    heading: "THG-Quote",
    items: [
      "Meldungen gegenüber dem Hauptzollamt bzw. der Biokraftstoffquotenstelle",
      "Unterstützung bei Meldungen durch Dritte als Übernehmer von Quotenverpflichtungen",
      "Aufbereitung von Mengen-, Vertrags- und Abrechnungsdaten",
      "Prüfung formaler Anforderungen an Quotenmeldungen",
      "Abstimmung mit Quotenverpflichteten, Vertragspartnern und dem Hauptzollamt",
      "Unterstützung bei Rückfragen, Korrekturen und Nachmeldungen",
    ],
  },
  {
    heading: "EU-ETS I",
    items: [
      "Erstellung und Aktualisierung von Überwachungsplänen",
      "Vorbereitung und Unterstützung bei der jährlichen Emissionsberichterstattung",
      "Vorbereitung der Verifizierung durch die Prüfstelle",
      "Abstimmung mit Prüfstelle und DEHSt",
      "Unterstützung bei der Abgabe von Emissionsberechtigungen",
      "Einordnung von Sonderfällen, z. B. Biomasse, RFNBO oder Abfallbrennstoffen",
    ],
  },
  {
    heading: "nEHS",
    items: [
      "Prüfung der Pflichten nach BEHG und EBeV",
      "Erstellung und Aktualisierung von Überwachungsplänen",
      "Vorbereitung und Unterstützung bei der jährlichen Emissionsberichterstattung",
      "Eintragung der Emissionen im nEHS-Register",
      "Unterstützung bei der Abgabe von nEHS-Zertifikaten",
      "Abstimmung mit DEHSt und Prüfstelle",
      "Abgrenzung zu EU-ETS I, EU-ETS II und biogenen Brennstoffanteilen",
    ],
  },
] as const;

export const BERICHTERSTATTUNG_IMPLEMENTATION = [
  "Berichts- und Meldepflichten in CO₂- und Quotenmärkten sind formal anspruchsvoll und an feste Fristen gebunden. Je nach System müssen Mengen-, Energie- und Emissionsdaten strukturiert aufbereitet, Überwachungspläne erstellt, Emissionsberichte eingereicht, Verifizierungen vorbereitet oder Zertifikate abgegeben werden.",
  "FuelCert unterstützt Unternehmen dabei, diese Pflichten effizient, fristgerecht und prüffähig umzusetzen. Wir prüfen die relevanten Anforderungen, bereiten die erforderlichen Daten auf, erstellen Berichte und Pläne und begleiten die Abstimmung mit Behörden, Prüfstellen und Vertragspartnern.",
  "Besonders wichtig ist die saubere Abgrenzung zwischen den verschiedenen regulatorischen Systemen. In der Praxis können THG-Quote, EU-ETS I, nEHS und künftig EU-ETS II ineinandergreifen – etwa bei Brennstofflieferungen, biogenen Brennstoffanteilen, Abzugsfragen oder dem Einsatz erneuerbarer Kraft- und Brennstoffe.",
  "FuelCert hilft dabei, diese Schnittstellen frühzeitig zu erkennen und die jeweiligen Berichts-, Melde- und Abgabepflichten systemgerecht einzuordnen.",
] as const;

export const BERICHTERSTATTUNG_CTA_MID = {
  heading: "Sie möchten Berichts- und Meldepflichten sicher aufsetzen?",
  text: "Wir unterstützen Sie bei der Einordnung der Anforderungen sowie bei Berichten, Meldungen und Abgaben gegenüber Behörden und Prüfstellen.",
} as const;

export const BERICHTERSTATTUNG_CTA_END = {
  heading: "Sie möchten Berichte, Meldungen und Abgaben fristgerecht und prüffähig umsetzen?",
  text: "FuelCert unterstützt Sie bei der strukturierten Vorbereitung und Umsetzung regulatorischer Berichts- und Meldepflichten.",
} as const;

export const BERICHTERSTATTUNG_RELATED_TOPICS = [
  { label: "THG-Quote", href: "/anwendungsbereiche/thg-quote" },
  { label: "Emissionshandel (ETS I)", href: "/anwendungsbereiche/emissionshandel-ets-1" },
  { label: "Nationaler Emissionshandel (nEHS)", href: "/anwendungsbereiche/emissionshandel-nehs" },
  { label: "RFNBO und E-Fuels", href: "/anwendungsbereiche/rfnbo" },
  { label: "THG- und Massenbilanz", href: "/wissen/thg-und-massenbilanz" },
  { label: "RFNBO-Anforderungen nach RED III", href: "/wissen/rfnbo-anforderungen-red-iii" },
  {
    label: "REDcert, ISCC EU und CertifHy",
    href: "/wissen/redcert-iscc-certifhy-unterschiede",
  },
] as const;
