export const ERLOESRECHNER_SEO = {
  title: "Erlösrechner | FuelCert",
  metaDescription:
    "Schätzen Sie das Erlöspotenzial von grünem Wasserstoff (RFNBO) in der Treibhausgasminderungsquote – interaktiv und auf Basis zentraler Markt- und Regulierungsparameter.",
  h1: "Erlösrechner",
} as const;

export const ERLOESRECHNER_INTRO = [
  "Mit diesem Erlösrechner können Sie das potenzielle Erlöspotenzial von grünem, strombasiertem Wasserstoff (RFNBO) in der Treibhausgasminderungsquote (THG-Quote) auf Basis weniger Annahmen abschätzen.",
  "Passen Sie Menge, Emissionsfaktor, Verpflichtungsjahr, Antriebsart und Preisannahmen an – die Ergebnisse aktualisieren sich sofort. Der Rechner dient der ersten Orientierung; eine verbindliche Bewertung erfordert die Einordnung Ihres konkreten Projekts.",
] as const;

export const ERLOESRECHNER_SCOPE_NOTE =
  "Aktuell werden nur Erlöse aus der THG-Quote für grünen Wasserstoff berechnet. Erweiterungen für ETS I und nEHS sind perspektivisch vorgesehen.";

export { CALCULATOR_LIABILITY_DISCLAIMER as ERLOESRECHNER_LIABILITY_DISCLAIMER } from "./calculator-common";

export const ERLOESRECHNER_ASSUMPTIONS_HEADING = "Annahmen und Hinweise";

export const ERLOESRECHNER_ASSUMPTIONS = [
  "Zugrunde liegen ein fossiler Referenzwert von 94 gCO₂/MJ, ein Heizwert von 120 MJ/kg H₂ sowie die jährliche THG-Quote und der jeweilige Jahresfaktor gemäß dem geltenden Regulierungsrahmen.",
  "Für Brennstoffzellenfahrzeuge wird ein Effizienzfaktor von 0,4 angesetzt; die RFNBO-Unterquote wird unabhängig von der gewählten Antriebsart berechnet.",
  "Die Ergebnisse sind indikativ. Tatsächliche Marktpreise, Nachweisführung, Zertifizierung und projektspezifische Regulatorik können die real erzielbaren Erlöse abweichen lassen.",
  "FuelCert unterstützt Sie bei der detaillierten Bewertung von Erlöspotenzialen, Zertifizierung, Nachweisführung und der Umsetzung im THG-Quotensystem.",
] as const;

export const ERLOESRECHNER_CTA = {
  heading: "Sie möchten die Erlöspotenziale für Ihr Projekt konkret bewerten?",
  text: "Wir unterstützen Sie bei der Einordnung regulatorischer Anforderungen, der Zertifizierung und der praktischen Umsetzung im THG-Quotensystem.",
} as const;

export const ERLOESRECHNER_TEASER = {
  slug: "erloesrechner",
  title: "Erlösrechner Wasserstoff (RFNBO)",
  description:
    "Interaktive Schätzung des Erlöspotenzials von grünem Wasserstoff (RFNBO) in der THG-Quote.",
  href: "/wissen/erloesrechner",
} as const;
