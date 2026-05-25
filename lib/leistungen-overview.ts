import type { LeistungSlug } from "./leistungen";

export const LEISTUNGEN_CARD_TEASERS: Record<
  LeistungSlug,
  { title: string; description: string }
> = {
  "zertifizierung-redcert-iscc-certifhy": {
    title: "Zertifizierung",
    description:
      "REDcert, ISCC EU und CertifHy – von der Vorbereitung über das Audit bis zur Rezertifizierung, auditfest und strukturiert.",
  },
  "nachweisfuehrung-und-register": {
    title: "Nachweisführung und Registerführung",
    description:
      "Massen- und THG-Bilanzen, Nabisy und UDB sowie Meldungen an Register und Behörden im laufenden Betrieb.",
  },
  "co2-und-quotenhandel": {
    title: "CO₂- und Quotenhandel",
    description:
      "Einordnung von THG-Quote und Emissionshandel sowie begleitende Unterstützung bei Marktmechanismen und Verträgen.",
  },
  "berichterstattung-und-meldepflichten": {
    title: "Berichte und Meldepflichten",
    description:
      "Berichte, Fristen und Meldepflichten bei zuständigen Stellen – z. B. im Kontext von DEHSt und Quotenstelle.",
  },
};
