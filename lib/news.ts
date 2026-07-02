import type { StaticImageData } from "next/image";
import nehsAuktionImage from "@/assets/news-nehs-auktion-2026.png";
import webinarRfnboImage from "@/assets/news-webinar-rfnbo-2026.png";
import rfnboLaenderschreibenImage from "@/assets/news-rfnbo-laenderschreiben-2026.png";

export type NewsInfobox = {
  title: string;
  items: readonly string[];
};

/**
 * Rich body blocks for articles that need subheadings or a download button.
 * Posts without `blocks` fall back to plain `paragraphs`.
 */
export type NewsBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "download"; label: string; href: string };

export type NewsPost = {
  slug: string;
  title: string;
  /** ISO date for the <time> element, e.g. "2026-01-15" */
  date: string;
  /** Human-readable date shown in the UI, e.g. "15. Januar 2026" */
  dateLabel: string;
  teaser: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  paragraphs: readonly string[];
  /** Optional structured body; when set it is rendered instead of `paragraphs`. */
  blocks?: readonly NewsBlock[];
  image?: StaticImageData;
  imageAlt?: string;
  imageCaption?: string;
  infobox?: NewsInfobox;
};

export const NEWS_SEO = {
  title: "News | FuelCert",
  metaDescription:
    "Aktuelle Einordnungen und Entwicklungen zu THG-Quote, Emissionshandel, Zertifizierung und regulatorischen Rahmenbedingungen.",
  kicker: "News",
  h1: "News",
  intro:
    "Aktuelle Einordnungen und Entwicklungen zu THG-Quote, Emissionshandel, Zertifizierung und regulatorischen Rahmenbedingungen.",
  readMore: "Mehr erfahren",
  backToOverview: "Zurück zur News-Übersicht",
} as const;

export const NEWS_POSTS: readonly NewsPost[] = [
  {
    slug: "erste-nehs-auktion-2026",
    title: "Erste nEHS-Auktion 2026: Zuschlagspreis am oberen Rand des Preiskorridors",
    date: "2026-07-02",
    dateLabel: "2. Juli 2026",
    teaser:
      "Die erste nEHS-Auktion 2026 markiert den Übergang vom Festpreis zum Preiskorridor. Was die Ergebnisse für Unternehmen und den Übergang zum EU-ETS 2 bedeuten.",
    metaTitle: "Erste nEHS-Auktion 2026: Zuschlagspreis am oberen Rand des Preiskorridors | FuelCert",
    metaDescription:
      "Zuschlagspreis 65,00 EUR/nEZ, zugeteilte Menge 21,34 Mio. nEZ, Zuteilungsrate 7,32 %: Einordnung der ersten nEHS-Auktion 2026 und des Übergangs zum EU-ETS 2.",
    intro:
      "Die erste nEHS-Auktion 2026 markiert den Übergang vom Festpreis zum Preiskorridor. Was die Ergebnisse für Unternehmen und den Übergang zum EU-ETS 2 bedeuten.",
    image: nehsAuktionImage,
    imageAlt:
      "Laptop mit Diagramm zur ersten nEHS-Auktion in Deutschland auf einem Schreibtisch, im Hintergrund eine Stadtsilhouette mit Windrädern",
    paragraphs: [
      "Mit der ersten Versteigerung nationaler Emissionszertifikate (nEZ) im Jahr 2026 ist der nationale Emissionshandel in Deutschland in die Auktionsphase übergegangen. Nach den vorliegenden Auktionsergebnissen lag der Zuschlagspreis bei 65,00 EUR/nEZ. Die zugeteilte Menge betrug 21,34 Mio. nEZ, die Gesamtgebotsmenge 291,71 Mio. nEZ. Daraus ergab sich eine durchschnittliche Zuteilungsrate von 7,32 %.",
      "Die Ergebnisse zeigen, dass der Marktstart im nEHS 2026 auf ein hohes Interesse getroffen ist. Gleichzeitig verdeutlicht die Auktion, dass der gesetzlich vorgesehene Preiskorridor nicht nur formal besteht, sondern für die Marktteilnehmer bereits in der ersten Auktionsrunde praktisch relevant ist.",
      "Für Unternehmen im nationalen Emissionshandel ist 2026 ein wichtiges Übergangsjahr: Nach der Festpreisphase der Jahre 2021 bis 2025 werden nEZ nun im Preiskorridor von 55 bis 65 EUR/tCO₂ versteigert. Damit bleibt das deutsche System zunächst noch regulatorisch eingehegt, bevor mit dem Übergang zum EU-ETS 2 ein stärker marktbasiertes System greift.",
      "Zugleich wurde der Start der Regelphase des EU-ETS 2 um ein Jahr verschoben. Statt 2027 soll die Abgabepflicht nun ab 2028 beginnen. Für Deutschland bedeutet das, dass die Übergangsphase im nEHS verlängert wird. Der Preiskorridor bleibt damit auch 2027 relevant, bevor nach dem Übergang zum ETS 2 die bisherigen nationalen Preisgrenzen entfallen.",
      "Für betroffene Unternehmen unterstreicht die erste Auktion, wie wichtig eine frühzeitige Einordnung von Beschaffungsstrategie, Registerprozessen, Berichtspflichten und regulatorischen Schnittstellen zwischen nEHS und ETS 2 ist.",
    ],
  },
  {
    slug: "webinar-rueckblick-wasserstoffprojekte",
    title: "Webinar-Rückblick: Drei Erkenntnisse für wirtschaftlichere Wasserstoffprojekte",
    date: "2026-06-29",
    dateLabel: "29. Juni 2026",
    teaser:
      "Im Webinar im Rahmen der Woche des Wasserstoffs 2026 standen RFNBO-Zertifizierung, THG-Quote und die praktische Umsetzung der Wasserstoffvermarktung im Mittelpunkt. Drei Erkenntnisse waren für die Projektwirtschaftlichkeit besonders relevant.",
    metaTitle:
      "Webinar-Rückblick: Drei Erkenntnisse für wirtschaftlichere Wasserstoffprojekte | FuelCert",
    metaDescription:
      "Rückblick auf das FuelCert-Webinar zur Woche des Wasserstoffs 2026: RFNBO-Produktion optimieren, THG-Quotenerlöse realistisch berechnen und Trailerlogistik massenbilanziell korrekt abbilden.",
    intro:
      "Im Webinar im Rahmen der Woche des Wasserstoffs 2026 standen RFNBO-Zertifizierung, THG-Quote und die praktische Umsetzung der Wasserstoffvermarktung im Mittelpunkt. Drei Erkenntnisse waren für die Projektwirtschaftlichkeit besonders relevant.",
    image: webinarRfnboImage,
    imageAlt:
      "Schematische Darstellung des Stromverbrauchs eines Elektrolyseurs vor und nach regulatorischer Optimierung der RFNBO-Fahrweise",
    imageCaption:
      "Schematische Darstellung einer regulatorisch optimierten RFNBO-Fahrweise aus dem Webinar.",
    paragraphs: [
      "Im Rahmen der Woche des Wasserstoffs 2026 haben wir gemeinsam mit mehr als 40 Teilnehmerinnen und Teilnehmern über die praktische Umsetzung von RFNBO-Zertifizierung, THG-Quote und Wasserstoffvermarktung gesprochen. Wir bedanken uns für das große Interesse, die hohe Beteiligung und den offenen fachlichen Austausch.",
      "Im Webinar wurde deutlich, dass die Wirtschaftlichkeit von Wasserstoffprojekten nicht nur von Stromkosten und Technik abhängt, sondern in hohem Maß auch von der regulatorisch sauberen Ausgestaltung. Drei Punkte standen dabei besonders im Fokus:",
      "Ein zentrales Thema war die Frage, wie sich die RFNBO-Produktion maximieren lässt, ohne unnötige Kosten durch eine überdimensionierte PPA-Beschaffung zu verursachen. Entscheidend ist hier die regulatorisch saubere Nutzung der bestehenden Spielräume, etwa durch eine intelligente Fahrweise und eine passende Bilanzierungslogik.",
      "Für viele Projekte ist die THG-Quote ein wesentlicher wirtschaftlicher Baustein. Im Webinar haben wir aufgezeigt, worauf es bei einer belastbaren Erlösabschätzung ankommt und wie sich unterschiedliche Annahmen auf die Wirtschaftlichkeit auswirken. Zur ersten Einordnung steht auf unserer Webseite auch ein kostenloser Erlösrechner zur Verfügung.",
      "Auch die Verteilung von Wasserstoff per Trailer ist regulatorisch anspruchsvoll. Damit Zertifizierung, Nachweisführung und Vermarktung später belastbar ineinandergreifen, muss die Liefer- und Mengenlogik von Beginn an massenbilanziell sauber aufgesetzt werden. Genau diese praktische Umsetzbarkeit war ein weiterer Schwerpunkt des Webinars.",
      "Ein herzlicher Dank gilt auch unseren Gastreferenten von TÜV SÜD, WUN H2 und Rießner Gase für ihre wertvollen Praxisbeiträge und die fachlich fundierten Einblicke.",
      "Der Webinar-Rückblick zeigt einmal mehr: Für wirtschaftlich tragfähige Wasserstoffprojekte braucht es nicht nur technische Konzepte, sondern auch eine belastbare regulatorische Umsetzung entlang der gesamten Prozesskette.",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Im Rahmen der Woche des Wasserstoffs 2026 haben wir gemeinsam mit mehr als 40 Teilnehmerinnen und Teilnehmern über die praktische Umsetzung von RFNBO-Zertifizierung, THG-Quote und Wasserstoffvermarktung gesprochen. Wir bedanken uns für das große Interesse, die hohe Beteiligung und den offenen fachlichen Austausch.",
      },
      {
        type: "paragraph",
        text: "Im Webinar wurde deutlich, dass die Wirtschaftlichkeit von Wasserstoffprojekten nicht nur von Stromkosten und Technik abhängt, sondern in hohem Maß auch von der regulatorisch sauberen Ausgestaltung. Drei Punkte standen dabei besonders im Fokus:",
      },
      { type: "heading", text: "1. RFNBO-Produktion wirtschaftlich optimieren" },
      {
        type: "paragraph",
        text: "Ein zentrales Thema war die Frage, wie sich die RFNBO-Produktion maximieren lässt, ohne unnötige Kosten durch eine überdimensionierte PPA-Beschaffung zu verursachen. Entscheidend ist hier die regulatorisch saubere Nutzung der bestehenden Spielräume, etwa durch eine intelligente Fahrweise und eine passende Bilanzierungslogik.",
      },
      { type: "heading", text: "2. THG-Quotenerlöse realistisch und vollständig berechnen" },
      {
        type: "paragraph",
        text: "Für viele Projekte ist die THG-Quote ein wesentlicher wirtschaftlicher Baustein. Im Webinar haben wir aufgezeigt, worauf es bei einer belastbaren Erlösabschätzung ankommt und wie sich unterschiedliche Annahmen auf die Wirtschaftlichkeit auswirken. Zur ersten Einordnung steht auf unserer Webseite auch ein kostenloser Erlösrechner zur Verfügung.",
      },
      { type: "heading", text: "3. Trailerlogistik massenbilanziell korrekt abbilden" },
      {
        type: "paragraph",
        text: "Auch die Verteilung von Wasserstoff per Trailer ist regulatorisch anspruchsvoll. Damit Zertifizierung, Nachweisführung und Vermarktung später belastbar ineinandergreifen, muss die Liefer- und Mengenlogik von Beginn an massenbilanziell sauber aufgesetzt werden. Genau diese praktische Umsetzbarkeit war ein weiterer Schwerpunkt des Webinars.",
      },
      {
        type: "paragraph",
        text: "Ein herzlicher Dank gilt auch unseren Gastreferenten von TÜV SÜD, WUN H2 und Rießner Gase für ihre wertvollen Praxisbeiträge und die fachlich fundierten Einblicke.",
      },
      {
        type: "paragraph",
        text: "Die Vorträge aus dem Webinar stehen hier zum Download bereit:",
      },
      {
        type: "download",
        label: "Vorträge herunterladen",
        href: "https://cloud.fuelcert.com/s/x3ngHBsRFr5mENA",
      },
      {
        type: "paragraph",
        text: "Der Webinar-Rückblick zeigt einmal mehr: Für wirtschaftlich tragfähige Wasserstoffprojekte braucht es nicht nur technische Konzepte, sondern auch eine belastbare regulatorische Umsetzung entlang der gesamten Prozesskette.",
      },
    ],
  },
  {
    slug: "softening-rfnbo-criteria-green-hydrogen-market-ramp-up",
    title:
      "Markthochlauf für grünen Wasserstoff: Aufweichung der aktuellen RFNBO-Kriterien zur Erschließung des europäischen Wasserstoffpotenzials",
    date: "2026-06-25",
    dateLabel: "25. Juni 2026",
    teaser:
      "16 Bundesländer fordern eine pragmatische Überprüfung der RFNBO-Kriterien, um Investitionssicherheit zu stärken und den Hochlauf der europäischen Wasserstoffwirtschaft zu beschleunigen.",
    metaTitle:
      "Markthochlauf für grünen Wasserstoff: Aufweichung der aktuellen RFNBO-Kriterien | FuelCert",
    metaDescription:
      "16 deutsche Bundesländer bitten EU-Energiekommissar Dan Jørgensen um eine pragmatische Überprüfung der RFNBO-Kriterien – für mehr Investitionssicherheit im Wasserstoffhochlauf.",
    intro:
      "16 Bundesländer fordern eine pragmatische Überprüfung der RFNBO-Kriterien, um Investitionssicherheit zu stärken und den Hochlauf der europäischen Wasserstoffwirtschaft zu beschleunigen.",
    image: rfnboLaenderschreibenImage,
    imageAlt:
      "Gemeinsames Schreiben von 16 deutschen Bundesländern an EU-Energiekommissar Dan Jørgensen mit den Wappen der Landesministerien",
    imageCaption:
      "Gemeinsames Schreiben von 16 deutschen Bundesländern an EU-Energiekommissar Dan Jørgensen zur Überprüfung der RFNBO-Kriterien.",
    paragraphs: [
      "Mit einem gemeinsamen Schreiben an EU-Energiekommissar Dan Jørgensen haben sich 16 Landesministerinnen und Landesminister aus Deutschland für eine pragmatische Weiterentwicklung der aktuellen RFNBO-Kriterien ausgesprochen. Ziel ist es, Investitionssicherheit für Elektrolyseprojekte zu schaffen und den Hochlauf der europäischen Wasserstoffwirtschaft nicht durch überkomplexe Vorgaben auszubremsen.",
      "Im Mittelpunkt des Schreibens steht die Sorge, dass die bestehenden Anforderungen des Delegierten Rechtsakts (EU) 2023/1184 die Kosten vieler Wasserstoffprojekte deutlich erhöhen und dadurch Investitionsentscheidungen verzögern oder ganz verhindern. Im Brief wird darauf hingewiesen, dass zahlreiche großskalige Elektrolyseprojekte trotz Förderung ihre Final Investment Decision verschoben haben oder ganz gestoppt wurden.",
      "Die Unterzeichnenden argumentieren, dass ein Regulierungsrahmen für den Markthochlauf in der Anfangsphase einfach, investierbar und praktikabel sein müsse. Aus ihrer Sicht führen die aktuellen RFNBO-Vorgaben jedoch vielfach zu dem Gegenteil: hohe Komplexität, Unsicherheit bei Projektentwicklern und industriellen Abnehmern sowie wirtschaftliche Nachteile gegenüber anderen Stromverbrauchern. Zugleich wird betont, dass Elektrolyseure einen wichtigen Beitrag zu Flexibilität, Sektorkopplung und Systemintegration leisten können.",
      "Darüber hinaus wird eine konsistentere Strukturierung von Ausnahmeregelungen angeregt, etwa durch eine Bündelung der verschiedenen Ausnahmen im Delegierten Rechtsakt. Auch die für 2028 vorgesehene Überprüfung sollte aus Sicht der Unterzeichnenden so ausgestaltet werden, dass Investitionssicherheit und langfristige Planbarkeit für Unternehmen gewahrt bleiben.",
      "Das Schreiben ist ein starkes industrie- und energiepolitisches Signal: Der Hochlauf der Wasserstoffwirtschaft wird nicht als regionale Einzelaufgabe verstanden, sondern als gemeinsames europäisches Projekt. Gerade für Industrie- und Hafenstandorte sowie Regionen mit hohem Ausbaupotenzial bei erneuerbaren Energien ist ein pragmatischer und zugleich belastbarer Regulierungsrahmen entscheidend. Die angekündigte Überprüfung der RFNBO-Kriterien könnte damit zu einem zentralen Hebel für Investitionen und den weiteren Markthochlauf von erneuerbarem Wasserstoff in Europa werden.",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Mit einem gemeinsamen Schreiben an EU-Energiekommissar Dan Jørgensen haben sich 16 Landesministerinnen und Landesminister aus Deutschland für eine pragmatische Weiterentwicklung der aktuellen RFNBO-Kriterien ausgesprochen. Ziel ist es, Investitionssicherheit für Elektrolyseprojekte zu schaffen und den Hochlauf der europäischen Wasserstoffwirtschaft nicht durch überkomplexe Vorgaben auszubremsen.",
      },
      { type: "heading", text: "Hohe Kosten bremsen Investitionsentscheidungen" },
      {
        type: "paragraph",
        text: "Im Mittelpunkt des Schreibens steht die Sorge, dass die bestehenden Anforderungen des Delegierten Rechtsakts (EU) 2023/1184 die Kosten vieler Wasserstoffprojekte deutlich erhöhen und dadurch Investitionsentscheidungen verzögern oder ganz verhindern. Im Brief wird darauf hingewiesen, dass zahlreiche großskalige Elektrolyseprojekte trotz Förderung ihre Final Investment Decision verschoben haben oder ganz gestoppt wurden.",
      },
      { type: "heading", text: "Einfach, investierbar und praktikabel" },
      {
        type: "paragraph",
        text: "Die Unterzeichnenden argumentieren, dass ein Regulierungsrahmen für den Markthochlauf in der Anfangsphase einfach, investierbar und praktikabel sein müsse. Aus ihrer Sicht führen die aktuellen RFNBO-Vorgaben jedoch vielfach zu dem Gegenteil: hohe Komplexität, Unsicherheit bei Projektentwicklern und industriellen Abnehmern sowie wirtschaftliche Nachteile gegenüber anderen Stromverbrauchern. Zugleich wird betont, dass Elektrolyseure einen wichtigen Beitrag zu Flexibilität, Sektorkopplung und Systemintegration leisten können.",
      },
      { type: "heading", text: "Kernelemente der geforderten Weiterentwicklung" },
      {
        type: "list",
        items: [
          "Verlängerung der Übergangsphase für die Additionality-Anforderungen bis 2035",
          "Mehr Flexibilität bei der zeitlichen Korrelation, insbesondere die weitere Nutzung der monatlichen Korrelation bis 2035",
          "Prüfung, ob eine Absenkung der Schwelle für die generelle Ausnahme bei Stromsystemen mit sehr hohen Anteilen erneuerbarer Energien die Ziele des Delegierten Rechtsakts besser unterstützen kann",
        ],
      },
      {
        type: "paragraph",
        text: "Darüber hinaus wird eine konsistentere Strukturierung von Ausnahmeregelungen angeregt, etwa durch eine Bündelung der verschiedenen Ausnahmen im Delegierten Rechtsakt. Auch die für 2028 vorgesehene Überprüfung sollte aus Sicht der Unterzeichnenden so ausgestaltet werden, dass Investitionssicherheit und langfristige Planbarkeit für Unternehmen gewahrt bleiben.",
      },
      {
        type: "download",
        label: "Schreiben herunterladen",
        href: "https://cloud.fuelcert.com/s/4f4434JHKctKQAg",
      },
      {
        type: "paragraph",
        text: "Das Schreiben ist ein starkes industrie- und energiepolitisches Signal: Der Hochlauf der Wasserstoffwirtschaft wird nicht als regionale Einzelaufgabe verstanden, sondern als gemeinsames europäisches Projekt. Gerade für Industrie- und Hafenstandorte sowie Regionen mit hohem Ausbaupotenzial bei erneuerbaren Energien ist ein pragmatischer und zugleich belastbarer Regulierungsrahmen entscheidend. Die angekündigte Überprüfung der RFNBO-Kriterien könnte damit zu einem zentralen Hebel für Investitionen und den weiteren Markthochlauf von erneuerbarem Wasserstoff in Europa werden.",
      },
    ],
  },
];

export const ALL_NEWS_SLUGS = NEWS_POSTS.map((post) => post.slug);

export function getNewsPost(slug: string): NewsPost | undefined {
  return NEWS_POSTS.find((post) => post.slug === slug);
}

export function newsPath(slug: string): string {
  return `/news/${slug}`;
}
