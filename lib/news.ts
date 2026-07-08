import type { StaticImageData } from "next/image";
import type { TextSegmentItem } from "@/components/TextWithLinks";
import nehsAuktionImage from "@/assets/news-nehs-auktion-2026.png";
import webinarRfnboImage from "@/assets/news-webinar-rfnbo-2026.png";
import rfnboLaenderschreibenImage from "@/assets/news-rfnbo-laenderschreiben-2026.png";
import h2SchienenverkehrImage from "@/assets/news-h2-schienenverkehr-2026.png";
import nehsPreiskorridor2027Image from "@/assets/news-nehs-preiskorridor-2027.png";
import certifHyZertifizierungWunH2Image from "@/assets/news-certifhy-zertifizierung-wunh2-riessner-gase-2026.png";

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
  | { type: "paragraphWithLinks"; segments: readonly TextSegmentItem[] }
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
    slug: "rfnbo-wasserstoff-schienenverkehr-thg-quote",
    title: "Klarheit geschaffen: RFNBO-Wasserstoff im Schienenverkehr ist auf die THG-Quote anrechenbar",
    date: "2026-06-20",
    dateLabel: "20. Juni 2026",
    teaser:
      "FuelCert hat beim Hauptzollamt Klarheit dazu geschaffen, dass RFNBO-Wasserstoff im Schienenverkehr auf die THG-Quote anrechenbar ist – ein wichtiger Schritt für Wasserstoffprojekte im Verkehrssektor.",
    metaTitle:
      "RFNBO-Wasserstoff im Schienenverkehr: anrechenbar auf die THG-Quote | FuelCert",
    metaDescription:
      "FuelCert hat beim Hauptzollamt eingeordnet, dass die Treibhausgasminderung durch RFNBO-Wasserstoff im Schienenverkehr auf die THG-Quote anrechenbar ist. Grundlage, praktische Relevanz und Hinweise.",
    intro:
      "FuelCert hat beim Hauptzollamt Klarheit dazu geschaffen, dass die Treibhausgasminderung durch den Einsatz von RFNBO-Wasserstoff im Schienenverkehr auf die THG-Quote anrechenbar ist. Damit wurde eine bislang offenbar restriktivere behördliche Sichtweise neu eingeordnet.",
    image: h2SchienenverkehrImage,
    imageAlt:
      "Infografik: Wasserstoffzug im Schienenverkehr mit Symbolen für RFNBO-Wasserstoff, Schienenverkehr und Anrechnung auf die THG-Quote",
    imageCaption:
      "FuelCert hat die regulatorische Anrechenbarkeit von RFNBO-Wasserstoff im Schienenverkehr auf die THG-Quote gegenüber dem Hauptzollamt eingeordnet.",
    paragraphs: [
      "FuelCert hat beim Hauptzollamt Klarheit dazu geschaffen, dass die Treibhausgasminderung durch den Einsatz von RFNBO-Wasserstoff im Schienenverkehr auf die THG-Quote anrechenbar ist. Damit wurde eine bislang offenbar restriktivere behördliche Sichtweise neu eingeordnet.",
      "Die Einordnung stützt sich auf mehrere regulatorische Texte. Besonders relevant sind § 3 Absatz 3 der 37. BImSchV, § 37a Absatz 5 Nummer 4 BImSchG sowie die einschlägige FAQ-Antwort des Bundesumweltministeriums zum Entwurf des 2. Gesetzes zur Weiterentwicklung der THG-Quote.",
      "Die Klärung ist für Projekte im Bereich Wasserstoff und Schienenverkehr von hoher praktischer Bedeutung. Sie verbessert die regulatorische Einordnung von RFNBO-Wasserstoff als Erfüllungsoption in der THG-Quote und stärkt damit die wirtschaftliche Perspektive entsprechender Anwendungen.",
      "Einzuordnen ist zugleich, dass die Auskunft des Hauptzollamts rechtlich unverbindlich ist. Eine abschließende, verbindliche Klärung kann nur im Rahmen eines förmlichen Verfahrens erreicht werden.",
      "Die Klarstellung ist dennoch ein wichtiger Schritt für den Hochlauf von Wasserstoff im Verkehrssektor und insbesondere für mehr Klimaschutz im Schienenverkehr.",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "FuelCert hat beim Hauptzollamt Klarheit dazu geschaffen, dass die Treibhausgasminderung durch den Einsatz von RFNBO-Wasserstoff im Schienenverkehr auf die THG-Quote anrechenbar ist. Damit wurde eine bislang offenbar restriktivere behördliche Sichtweise neu eingeordnet.",
      },
      { type: "heading", text: "Regulatorische Grundlage" },
      {
        type: "paragraph",
        text: "Die Einordnung stützt sich auf mehrere regulatorische Texte. Besonders relevant sind:",
      },
      {
        type: "list",
        items: [
          "§ 3 Absatz 3 der 37. BImSchV, wonach der Anpassungsfaktor für die Antriebseffizienz auch dann gilt, wenn der erneuerbare Kraftstoff nicht biogenen Ursprungs nachweislich in Straßen- oder Schienenfahrzeugen verwendet wird",
          "§ 37a Absatz 5 Nummer 4 BImSchG, in dem die Begrenzung auf den Straßenverkehr nur für die Erfüllungsoption „Strom“ formuliert ist",
          "die einschlägige FAQ-Antwort des Bundesumweltministeriums zum Entwurf des 2. Gesetzes zur Weiterentwicklung der THG-Quote",
        ],
      },
      { type: "heading", text: "Praktische Relevanz" },
      {
        type: "paragraph",
        text: "Die Klärung ist für Projekte im Bereich Wasserstoff und Schienenverkehr von hoher praktischer Bedeutung. Sie verbessert die regulatorische Einordnung von RFNBO-Wasserstoff als Erfüllungsoption in der THG-Quote und stärkt damit die wirtschaftliche Perspektive entsprechender Anwendungen.",
      },
      { type: "heading", text: "Einordnung und Vorsichtshinweis" },
      {
        type: "paragraph",
        text: "Einzuordnen ist zugleich, dass die Auskunft des Hauptzollamts rechtlich unverbindlich ist. Eine abschließende, verbindliche Klärung kann nur im Rahmen eines förmlichen Verfahrens erreicht werden.",
      },
      {
        type: "paragraph",
        text: "Die Klarstellung ist dennoch ein wichtiger Schritt für den Hochlauf von Wasserstoff im Verkehrssektor und insbesondere für mehr Klimaschutz im Schienenverkehr.",
      },
    ],
  },
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
  {
    slug: "nehs-preiskorridor-2027",
    title: "nEHS: Preiskorridor von 55 bis 65 Euro soll auch 2027 gelten",
    date: "2026-07-08",
    dateLabel: "8. Juli 2026",
    teaser:
      "Das Bundesumweltministerium hat einen Referentenentwurf zur Änderung des Brennstoffemissionshandelsgesetzes vorgelegt. Der CO₂-Preiskorridor von 55 bis 65 Euro pro Tonne soll demnach auch 2027 gelten – und damit die Übergangsphase zum ETS 2 verlängert werden.",
    metaTitle: "nEHS: CO₂-Preiskorridor soll 2027 verlängert werden | FuelCert",
    metaDescription:
      "Der CO₂-Preiskorridor im nationalen Emissionshandel soll auch 2027 bei 55 bis 65 Euro liegen. Was der BEHG-Entwurf für Unternehmen und den Übergang zum ETS 2 bedeutet.",
    intro:
      "Das Bundesumweltministerium hat einen Referentenentwurf zur Änderung des Brennstoffemissionshandelsgesetzes vorgelegt. Der CO₂-Preiskorridor von 55 bis 65 Euro pro Tonne soll demnach auch 2027 gelten – und damit die Übergangsphase zum ETS 2 verlängert werden.",
    image: nehsPreiskorridor2027Image,
    imageAlt:
      "Nationaler Emissionshandel und Übergang zum ETS 2 mit CO₂-Preiskorridor von 55 bis 65 Euro",
    paragraphs: [
      "Das Bundesministerium für Umwelt, Klimaschutz, Naturschutz und nukleare Sicherheit (BMUKN) hat die Länder- und Verbändeanhörung zum Entwurf eines Dritten Gesetzes zur Änderung des Brennstoffemissionshandelsgesetzes (BEHG) gestartet.",
      "Kern des Entwurfs ist die geplante Verlängerung des bisherigen Preiskorridors: Auch im Jahr 2027 sollen nationale Emissionszertifikate (nEZ) zu Preisen zwischen 55 und 65 Euro pro Tonne CO₂ veräußert werden.",
      "Der nun vorgelegte Referentenentwurf soll die Preisstabilität im nationalen Emissionshandel um ein weiteres Jahr verlängern, sodass Unternehmen im nEHS zusätzliche Planungssicherheit erhalten.",
      "Der Entwurf ist allerdings noch nicht innerhalb der Bundesregierung abgestimmt; im weiteren Gesetzgebungsverfahren können sich daher noch Änderungen ergeben.",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Das Bundesministerium für Umwelt, Klimaschutz, Naturschutz und nukleare Sicherheit (BMUKN) hat die Länder- und Verbändeanhörung zum Entwurf eines Dritten Gesetzes zur Änderung des Brennstoffemissionshandelsgesetzes (BEHG) gestartet.",
      },
      {
        type: "paragraph",
        text: "Kern des Entwurfs ist die geplante Verlängerung des bisherigen Preiskorridors: Auch im Jahr 2027 sollen nationale Emissionszertifikate (nEZ) zu Preisen zwischen 55 und 65 Euro pro Tonne CO₂ veräußert werden. Damit soll die im Koalitionsausschuss vereinbarte Preisstabilität im nationalen Emissionshandel umgesetzt werden.",
      },
      { type: "heading", text: "Preisstabilität für ein weiteres Übergangsjahr" },
      {
        type: "paragraph",
        text: "Nach geltender Rechtslage ist der Preiskorridor von 55 bis 65 Euro zunächst für 2026 vorgesehen. Für 2027 würde sich der Preis im nationalen Emissionshandel grundsätzlich an der Preisentwicklung im europäischen Emissionshandel orientieren.",
      },
      {
        type: "paragraph",
        text: "Der nun vorgelegte Referentenentwurf soll dies ändern und den bestehenden Preiskorridor um ein weiteres Jahr verlängern. Für Unternehmen im nEHS würde dies zusätzliche Planungssicherheit bei der Beschaffung und Abgabe nationaler Emissionszertifikate schaffen.",
      },
      {
        type: "paragraph",
        text: "Der Entwurf ist allerdings noch nicht innerhalb der Bundesregierung abgestimmt. Im weiteren Gesetzgebungsverfahren können sich daher noch Änderungen ergeben.",
      },
      { type: "heading", text: "Auch BEHV und BEDV sollen angepasst werden" },
      {
        type: "paragraph",
        text: "Die geplante Änderung betrifft nicht nur das BEHG. Auch die Brennstoffemissionshandelsverordnung (BEHV) soll an den verlängerten Preiskorridor angepasst werden.",
      },
      {
        type: "paragraph",
        text: "Darüber hinaus sind Änderungen der BEHG-Doppelbilanzierungsverordnung (BEDV) vorgesehen. Ziel ist insbesondere ein sachgerechter Umgang mit eingelagerten Brennstoffmengen beim Übergang zwischen den Emissionshandelssystemen.",
      },
      {
        type: "paragraph",
        text: "Stellungnahmen zum Referentenentwurf können bis zum 15. Juli 2026, 12:00 Uhr, eingereicht werden.",
      },
      { type: "heading", text: "Der Übergang zum ETS 2 rückt näher" },
      {
        type: "paragraph",
        text: "Der Entwurf zeigt zugleich, wie stark das nationale Emissionshandelssystem inzwischen durch den bevorstehenden Übergang zum europäischen ETS 2 geprägt ist.",
      },
      {
        type: "paragraph",
        text: "Für betroffene Unternehmen geht es daher längst nicht mehr nur um die aktuellen Anforderungen des nEHS. Parallel gewinnen die künftigen Anforderungen des ETS 2 an Bedeutung. Dazu gehören bereits heute Vorbereitungs-, Überwachungs- und Berichtspflichten sowie die Frage, wie bestehende Prozesse, Datenstrukturen und Verantwortlichkeiten auf das europäische System ausgerichtet werden.",
      },
      {
        type: "paragraph",
        text: "Unternehmen, die ihre Prozesse frühzeitig auf den Übergang vorbereiten, können Schnittstellen zwischen nEHS und ETS 2 rechtzeitig klären und spätere Umstellungen deutlich vereinfachen.",
      },
      { type: "heading", text: "FuelCert unterstützt bei nEHS und ETS 2" },
      {
        type: "paragraph",
        text: "FuelCert begleitet Unternehmen bei der praktischen Umsetzung der Anforderungen aus dem nationalen und europäischen Emissionshandel.",
      },
      {
        type: "list",
        items: [
          "Erstellung und Weiterentwicklung von Überwachungsplänen und Emissionsberichten",
          "Nachweisführung für Kraft- und Brennstoffe, die mit einem Emissionsfaktor von null angesetzt werden sollen",
          "Unterstützung bei Meldungen und Prozessen gegenüber der DEHSt",
          "Beschaffung nationaler Emissionszertifikate (nEZ)",
          "Frühzeitige Vorbereitung auf den Übergang vom nEHS zum ETS 2",
        ],
      },
    ],
  },
  {
    slug: "certifhy-zertifizierung-wunh2-riessner-gase",
    title: "Zwei erfolgreiche CertifHy-Zertifizierungen für die RFNBO-Wasserstofflieferkette",
    date: "2026-06-10",
    dateLabel: "10. Juni 2026",
    teaser:
      "FuelCert hat die WUN H2 GmbH und die Riessner-Gase GmbH erfolgreich durch den RFNBO-Zertifizierungsprozess begleitet. Damit sind sowohl die Erzeugung als auch die Vermarktung und Distribution des erneuerbaren Wasserstoffs nach CertifHy zertifiziert.",
    metaTitle: "RFNBO-Zertifizierung für WUN H2 und Riessner-Gase | FuelCert",
    metaDescription:
      "WUN H2 und Riessner-Gase sind erfolgreich nach CertifHy zertifiziert. FuelCert begleitete Erzeugung und Distribution durch den RFNBO-Zertifizierungsprozess.",
    intro:
      "FuelCert hat die WUN H2 GmbH und die Riessner-Gase GmbH erfolgreich durch den RFNBO-Zertifizierungsprozess begleitet. Damit sind sowohl die Erzeugung als auch die Vermarktung und Distribution des erneuerbaren Wasserstoffs nach CertifHy zertifiziert.",
    image: certifHyZertifizierungWunH2Image,
    imageAlt:
      "Vertreter von WUN H2, Riessner-Gase, TÜV SÜD und FuelCert am Wasserstoffstandort der WUN H2 GmbH",
    imageCaption:
      "Erfolgreiche RFNBO-Zertifizierung von WUN H2 und Riessner-Gase mit Unterstützung von FuelCert.",
    paragraphs: [
      "Mit der erfolgreichen Zertifizierung der WUN H2 GmbH und der Riessner-Gase GmbH wurden zwei Unternehmen entlang einer gemeinsamen RFNBO-Wasserstofflieferkette erfolgreich zertifiziert.",
      "Die WUN H2 GmbH betreibt einen Elektrolyseur mit einer Leistung von 8,75 MW und erzeugt damit erneuerbaren Wasserstoff. Im Rahmen der Zertifizierung mussten die regulatorischen Anforderungen an die Herstellung von erneuerbaren Kraftstoffen nicht biogenen Ursprungs – sogenannten RFNBO – in die betrieblichen Abläufe und die Nachweisführung des Unternehmens überführt werden.",
      "Die Riessner-Gase GmbH übernimmt die Vermarktung und den Transport des erzeugten Wasserstoffs mittels Trailer-Lösungen. Auch für diese Stufe der Lieferkette wurde eine eigene Zertifizierung umgesetzt, damit die erforderlichen Nachhaltigkeits- und RFNBO-Informationen entlang der Lieferkette nachvollziehbar weitergegeben werden können.",
      "Die Zertifizierungen bilden zugleich die Grundlage für die weitere Entwicklung des Wasserstoffstandorts. Eine eigene Wasserstofftankstelle der WUN H2 GmbH soll in Betrieb gehen. Darüber hinaus besteht vor Ort die Möglichkeit, industrielle Abnehmer perspektivisch über eine bestehende Pipeline-Anbindung mit Wasserstoff zu versorgen.",
      "FuelCert hat die WUN H2 GmbH und die Riessner-Gase GmbH bei der Vorbereitung und Umsetzung ihrer RFNBO-Zertifizierung begleitet. Unsere Leistungen umfassen insbesondere die Prüfung der regulatorischen Anforderungen und des Zertifizierungsumfangs, die Erstellung der erforderlichen QM- und Nachweisdokumentation, die Umsetzung von Massen- und Treibhausgasbilanzierung sowie die Vorbereitung auf das Audit durch die Zertifizierungsstelle.",
      "Auch nach der Erstzertifizierung unterstützen wir Unternehmen bei der laufenden Nachweisführung und der praktischen Umsetzung der RFNBO-Anforderungen im operativen Betrieb.",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Mit der erfolgreichen Zertifizierung der WUN H2 GmbH und der Riessner-Gase GmbH wurden zwei Unternehmen entlang einer gemeinsamen RFNBO-Wasserstofflieferkette erfolgreich zertifiziert.",
      },
      { type: "heading", text: "Zertifizierte Erzeugung von RFNBO-Wasserstoff" },
      {
        type: "paragraph",
        text: "Die WUN H2 GmbH betreibt einen Elektrolyseur mit einer Leistung von 8,75 MW und erzeugt damit erneuerbaren Wasserstoff.",
      },
      {
        type: "paragraph",
        text: "Im Rahmen der Zertifizierung mussten die regulatorischen Anforderungen an die Herstellung von erneuerbaren Kraftstoffen nicht biogenen Ursprungs – sogenannten RFNBO – in die betrieblichen Abläufe und die Nachweisführung des Unternehmens überführt werden.",
      },
      {
        type: "list",
        items: [
          "Prüfung der eingesetzten Strombezugskonzepte",
          "Dokumentation der RFNBO-Kriterien sowie Einrichtung geeigneter Prozesse für die Massen- und Treibhausgasbilanzierung",
        ],
      },
      {
        type: "paragraph",
        text: "Mit der erfolgreichen Zertifizierung kann die WUN H2 GmbH ihren entsprechend den regulatorischen Anforderungen erzeugten Wasserstoff als RFNBO-konform vermarkten.",
      },
      { type: "heading", text: "Auch die Distribution ist zertifiziert" },
      {
        type: "paragraph",
        text: "Die Riessner-Gase GmbH übernimmt die Vermarktung und den Transport des erzeugten Wasserstoffs mittels Trailer-Lösungen.",
      },
      {
        type: "paragraph",
        text: "Auch für diese Stufe der Lieferkette wurde eine eigene Zertifizierung umgesetzt. Damit können die erforderlichen Nachhaltigkeits- und RFNBO-Informationen entlang der Lieferkette nachvollziehbar weitergegeben werden.",
      },
      {
        type: "paragraph",
        text: "Gerade bei mehrstufigen Lieferketten ist entscheidend, dass die Prozesse der beteiligten Unternehmen aufeinander abgestimmt sind und die erforderlichen Nachweise konsistent vom Produzenten bis zum Abnehmer weitergegeben werden.",
      },
      { type: "heading", text: "Weitere Nutzungsmöglichkeiten vor Ort" },
      {
        type: "paragraph",
        text: "Die Zertifizierungen bilden zugleich die Grundlage für die weitere Entwicklung des Wasserstoffstandorts.",
      },
      {
        type: "paragraphWithLinks",
        segments: [
          { text: "Eine eigene " },
          { text: "Wasserstofftankstelle", href: "/anwendungsbereiche/wasserstoff-und-derivate" },
          { text: " der WUN H2 GmbH soll in Betrieb gehen." },
        ],
      },
      {
        type: "paragraph",
        text: "Darüber hinaus besteht vor Ort die Möglichkeit, industrielle Abnehmer perspektivisch über eine bestehende Pipeline-Anbindung mit Wasserstoff zu versorgen.",
      },
      {
        type: "paragraph",
        text: "Damit entstehen unterschiedliche Absatzwege für den zertifizierten erneuerbaren Wasserstoff – von der mobilen Distribution über Trailer bis zur direkten Versorgung von Industrie und Mobilität.",
      },
      {
        type: "heading",
        text: "FuelCert begleitet RFNBO-Projekte bis zur erfolgreichen Zertifizierung",
      },
      {
        type: "paragraph",
        text: "FuelCert hat die WUN H2 GmbH und die Riessner-Gase GmbH bei der Vorbereitung und Umsetzung ihrer RFNBO-Zertifizierung begleitet.",
      },
      {
        type: "paragraphWithLinks",
        segments: [
          {
            text: "Unsere Leistungen umfassen insbesondere die Prüfung der regulatorischen Anforderungen und des Zertifizierungsumfangs im Rahmen der ",
          },
          { text: "Zertifizierung nach CertifHy", href: "/leistungen/zertifizierung-redcert-iscc-certifhy" },
          { text: ", die Erstellung der erforderlichen QM- und Nachweisdokumentation sowie die Umsetzung von Massen- und Treibhausgasbilanzierung." },
        ],
      },
      {
        type: "paragraph",
        text: "Darüber hinaus unterstützen wir bei der Vorbereitung auf das Audit durch die Zertifizierungsstelle. Auch nach der Erstzertifizierung begleiten wir Unternehmen bei der laufenden Nachweisführung.",
      },
      {
        type: "paragraphWithLinks",
        segments: [
          { text: "Dabei liegt der Fokus auf der praktischen Umsetzung der " },
          { text: "RFNBO-Anforderungen", href: "/anwendungsbereiche/rfnbo" },
          { text: " im operativen Betrieb." },
        ],
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
