import type { TextSegmentItem } from "@/components/TextWithLinks";

export const THG_QUOTE_SEO = {
  title: "THG-Quote: Anforderungen, Erfüllungsoptionen und Chancen | FuelCert",
  metaDescription:
    "Was ist die THG-Quote? FuelCert erklärt Anforderungen, Erfüllungsoptionen und die Relevanz für Biokraftstoffe, Biomethan, Bio-LNG, RFNBO und Wasserstoff.",
  h1: "THG-Quote: Anforderungen, Erfüllungsoptionen und Relevanz für erneuerbare Kraftstoffe",
} as const;

export const THG_QUOTE_INTRO = [
  "Die Treibhausgasminderungsquote (THG-Quote) ist ein zentrales Instrument der deutschen Klimapolitik im Verkehr. Sie verpflichtet Unternehmen, die fossile Otto- und Dieselkraftstoffe in Verkehr bringen, die damit verbundenen Treibhausgasemissionen schrittweise zu senken.",
  "Für Produzenten, Händler und Vermarkter erneuerbarer Kraftstoffe und Energieträger ist die THG-Quote ein wesentlicher regulatorischer und wirtschaftlicher Rahmen – etwa für Biomethan, Bio-LNG, RFNBO, grünen Wasserstoff und E-Fuels. Ob und wie ein Produkt angerechnet werden kann, hängt von Zertifizierung, Bilanzierung, Nachweisführung und Marktzugang zusammen.",
] as const;

export const THG_QUOTE_LAW_URL = "https://www.recht.bund.de/bgbl/1/2026/163/VO.html";
export const THG_QUOTE_ZOLL_URL =
  "https://www.zoll.de/DE/Fachthemen/Steuern/Verbrauchsteuern/Treibhausgasquote-THG-Quote/treibhausgasquote_thg_quote_node.html";

export const THG_QUOTE_WHAT_IS = {
  heading: "Was ist die THG-Quote?",
  paragraphs: [
    [
      {
        text: "Die THG-Quote (Treibhausgasminderungsquote) verpflichtet Inverkehrbringer fossiler Otto- und Dieselkraftstoffe, die Treibhausgasintensität ihrer Kraftstoffe gegenüber einem Referenzwert zu mindern. Rechtsgrundlage ist das Bundes-Immissionsschutzgesetz (BImSchG), insbesondere § 37a BImSchG – zuletzt fortgeschrieben im ",
      },
      {
        text: "Zweiten Gesetz zur Weiterentwicklung der Treibhausgasminderungs-Quote",
        href: THG_QUOTE_LAW_URL,
        external: true,
      },
      { text: "." },
    ] satisfies readonly TextSegmentItem[],
    [
      {
        text: "In der Praxis bedeutet das: Quotenverpflichtete müssen jährlich nachweisen, dass die Emissionen ihrer Kraftstoffe um den gesetzlich festgelegten Prozentsatz reduziert wurden – etwa durch den Einsatz erneuerbarer Kraftstoffe, Strom für Elektromobilität oder die Übernahme von THG-Minderungen durch Dritte. Beim Hauptzollamt – auch Biokraftstoffquotenstelle genannt – müssen Verpflichtete und Dritte als deren Übernehmer jährlich die Meldung über die Quotenerfüllung bis zum 1. Juni des auf das Verpflichtungsjahr folgenden Jahres einreichen. Die Zollverwaltung informiert dazu im ",
      },
      {
        text: "Fachthema Treibhausgasquote",
        href: THG_QUOTE_ZOLL_URL,
        external: true,
      },
      { text: "." },
    ] satisfies readonly TextSegmentItem[],
    "Die Quote steigt schrittweise bis 2040 an. Damit wächst der Bedarf an belastbaren, nachweisbaren und marktfähigen Erfüllungsoptionen – und gleichzeitig die Bedeutung sauberer regulatorischer Umsetzung für Anbieter erneuerbarer Energieträger.",
  ],
} as const;

export const THG_QUOTE_FULFILLMENT = {
  heading: "Wie kann die THG-Quote erfüllt werden?",
  paragraphs: [
    "Grundsätzlich gibt es zwei Wege: Die Quote kann durch eigene Maßnahmen erfüllt werden – etwa durch das Inverkehrbringen emissionsärmerer oder erneuerbarer Kraftstoffe. Oder ein Teil der Verpflichtung wird von Dritten übernommen, die eine THG-Minderung erzielen und diese quotenrelevant bereitstellen.",
    "Wichtig: Auch Akteure, die selbst keine fossilen Kraftstoffe in Verkehr bringen, können zur Quote beitragen – wenn sie erneuerbare Kraftstoffe oder andere quotenrelevante Mengen erzeugen, nachweisen und vermarkten. Das macht die THG-Quote für viele Unternehmen außerhalb klassischer Mineralölstrukturen relevant.",
  ],
} as const;

export const THG_QUOTE_FULFILLMENT_OPTIONS = [
  {
    title: "Klassische Biokraftstoffe",
    text: "Bioethanol (meist als E10) oder Biodiesel – unter Beachtung der Einsatzstoffe in Bezug auf Nachhaltigkeit, THG-Minderung und Unterquoten bzw. Obergrenzen.",
  },
  {
    title: "Biogas",
    text: "Gasförmig als Bio-CNG bzw. Biomethan oder flüssig als Bio-LNG. Je nach Einsatzstoffen anrechenbar auf die Unterquote für fortschrittliche Biokraftstoffe.",
  },
  {
    title: "Wasserstoff",
    text: "Sowohl strombasierter Wasserstoff (RFNBO) als auch biogener Wasserstoff. Es gelten gesonderte Regeln wie Unterquote, Anrechnungsfaktor und Einsatzbereiche.",
  },
  {
    title: "Elektromobilität",
    text: "Emissionseinsparungen durch Verbrauch von Ladestrom in rein elektrisch betriebenen Straßenfahrzeugen – pauschal je Fahrzeug und real abgegeben an öffentlichen Ladepunkten.",
  },
  {
    title: "E-Fuels",
    text: "Beispiele für E-Fuels sind neben Wasserstoff E-Methan, E-Methanol, E-Kerosin sowie synthetische strombasierte Diesel- und Ottokraftstoffe.",
  },
  {
    title: "Sonderanwendungen",
    text: "RFNBO in Raffinerien bei der Verarbeitung von Kraftstoffen als Zwischenprodukt – unter den jeweiligen Voraussetzungen des Regelwerks.",
  },
] as const;

export const THG_QUOTE_CUSTOMS_CALCULATOR_URL =
  "https://www.zoll.de/DE/Fachthemen/Steuern/Verbrauchsteuern/Treibhausgasquote-THG-Quote/Treibhausgasrechner/treibhausgasrechner_node.html";

export const THG_QUOTE_REVENUE = {
  heading: "Wie sich Erlöse aus der THG-Quote berechnen",
  blocks: [
    {
      heading: "Grundlogik der Erlösberechnung",
      paragraphs: [
        "Erlöse aus der THG-Quote hängen maßgeblich von der Netto-THG-Minderung des eingesetzten Kraftstoffs ab – also davon, um wie viel die Emissionen unter dem jeweiligen Zielwert liegen. Der Zielwert leitet sich aus dem fossilen Referenzwert von 94 gCO₂/MJ multipliziert mit (100 % − THG-Quote des relevanten Verpflichtungsjahres) ab.",
        "Die so ermittelte Netto-THG-Minderung, multipliziert mit dem Marktpreis im Quotenmarkt, ergibt den Erlös aus der THG-Quote. Rechtsgrundlage ist das Bundes-Immissionsschutzgesetz (BImSchG), insbesondere die THG-Quotenlogik nach § 37a BImSchG. Wird die Quotenverpflichtung nicht erfüllt, fällt eine gesetzliche Zahlungspflicht an; vereinfacht betrachtet entspricht dies einer theoretischen Obergrenze von 600 €/t CO₂eq.",
      ],
    },
    {
      heading: "Preisbildung am Quotenmarkt",
      paragraphs: [
        "Der Quotenmarkt ist volatil und hängt von Angebot und Nachfrage ab. In der Marktbeobachtung gab es historisch sehr hohe und sehr niedrige Preisphasen: So lagen die Preise in der Hochpreisphase 2022 zeitweise deutlich über 500 €/t CO₂, fielen später – unter anderem im Zusammenhang mit der Marktdiskussion um mutmaßlich falsch deklarierte Volumina aus Asien – teils klar unter 100 €/t CO₂ und sind zuletzt wieder auf Werte deutlich über 400 €/t CO₂ gestiegen.",
        "Als wesentliche Einflussfaktoren gelten unter anderem das Zweite Gesetz zur Weiterentwicklung der Treibhausgasminderungs-Quote, die langfristig steigenden Quotenniveaus sowie verschärfte Anti-Betrugs-Anforderungen – einschließlich der Möglichkeit von Vor-Ort-Kontrollen. Diese Einordnung beschreibt Marktentwicklungen und Beobachtungen, keine verbindliche Prognose.",
      ],
    },
    {
      heading: "Einfluss von Unterquoten",
      paragraphs: [
        "Neben der Haupt-THG-Quote gibt es Unterquoten – insbesondere für RFNBO und fortschrittliche Biokraftstoffe. Sie beziehen sich auf die Energiemenge in Verkehr gebrachter Kraftstoffe und nicht unmittelbar auf THG-Emissionen.",
        "Werden entsprechende Kraftstoffe wie RFNBO, Biomethan oder Bio-CNG nachweislich eingesetzt, können zusätzliche Erlöse entstehen – ergänzend zur Hauptquote und abhängig von Nachweisführung, Zertifizierung und Marktzugang. Die nachfolgende Übersichtstabelle zeigt die stufenweise Entwicklung von THG-Quote, Unterquoten und Anrechnungsfaktoren.",
      ],
    },
    {
      heading: "Praxisbezug und nächste Schritte",
      paragraphs: [
        "Für eine erste belastbare Orientierung zu Erlösen aus der THG-Quote lohnt sich die Einordnung anhand konkreter Produkt- und Marktdaten. Die Grafik rechts zeigt die Berechnungslogik am Beispiel RFNBO / Wasserstoff; die FuelCert-Erlösrechner ergänzen dies um interaktive Szenarien für Wasserstoff und Biomethan.",
      ],
    },
  ],
  figure: {
    alt: "Schematische Darstellung der Berechnungslogik der Netto-THG-Minderung und handelbaren THG-Minderung für RFNBO-Wasserstoff",
    caption:
      "Handelbare THG-Minderung am Beispiel RFNBO / Wasserstoff – von fossilem Referenzwert und Zielwert bis zur Netto-THG-Minderung.",
    enlargeLabel: "Grafik vergrößern",
    closeLabel: "Schließen",
  },
  calculators: {
    heading: "Erlöspotenziale direkt berechnen",
    intro:
      "Nutzen Sie die FuelCert-Erlösrechner für eine strukturierte Ersteinschätzung auf Basis zentraler regulatorischer und preislicher Annahmen.",
    links: [
      {
        label: "Zum Erlösrechner RFNBO / Wasserstoff",
        href: "/wissen/erloesrechner",
      },
      {
        label: "Zum Erlösrechner Biomethan / Bio-CNG",
        href: "/wissen/erloesrechner-biomethan-bio-cng",
      },
    ],
  },
  customsCalculator: {
    label: "Zum offiziellen Treibhausgasrechner des Zolls",
    hint: "Externer Rechner der Zollverwaltung",
    href: THG_QUOTE_CUSTOMS_CALCULATOR_URL,
  },
} as const;

export const THG_QUOTE_RELEVANCE = {
  heading: "Warum die THG-Quote für Ihr Projekt relevant sein kann",
  paragraphs: [
    "Die THG-Quote ist nicht nur für klassische Mineralölunternehmen relevant. Auch Produzenten, Händler und Vermarkter erneuerbarer Kraftstoffe und Energieträger können von quotenrelevanten Produkten profitieren – wenn regulatorische Voraussetzungen, Nachweise und Marktzugang stimmen.",
    "Entscheidend ist die Einordnung: Ist Ihr Produkt quotenfähig? Welche Zertifizierung und Nachweisführung sind erforderlich? Welches Erlöspotenzial ergibt sich im THG-Quotenmarkt – und wie lässt es sich belastbar umsetzen?",
    "FuelCert unterstützt entlang dieser Fragen – von der regulatorischen Einordnung über Zertifizierung und Nachweisführung bis zu Marktzugang und operativer Umsetzung im THG-Quotensystem.",
  ],
} as const;

export const THG_QUOTE_OPTIONS_HEADING = "Typische Erfüllungsoptionen in der THG-Quote";

export const THG_QUOTE_OPTIONS_VISUAL = {
  alt: "Wasserstofftankstelle als Beispiel für RFNBO und Wasserstoff im Kontext der THG-Quote",
  caption:
    "Wasserstoff und RFNBO können – je nach regulatorischer Einordnung, Nachweisführung und Anwendungsfall – eine relevante Erfüllungsoption in der THG-Quote sein.",
} as const;

export const THG_QUOTE_TABLE_SECTION = {
  heading: "Entwicklung der THG-Quote, Unterquoten und Anrechnungsfaktoren",
  intro:
    "Die THG-Quote, verbindliche Unterquoten und Anrechnungsfaktoren entwickeln sich stufenweise. Die folgende Übersicht fasst die wesentlichen Kennzahlen für die Verpflichtungsjahre 2026 bis 2040 zusammen.",
  caption: "Übersicht THG-Quote, Unterquoten und Anrechnungsfaktoren",
  yearLabel: "Jahr",
  note: "Stand: Juni 2026. Die Tabelle orientiert sich am geltenden Regelwerk (u. a. BImSchG, 37. BImSchV, 38. BImSchV). Gesetzliche Anpassungen können die Werte ändern; für verbindliche Entscheidungen ist stets der aktuelle Rechtsstand maßgeblich.",
  numberLocale: "de-DE",
} as const;

export const THG_QUOTE_TABLE_COLUMNS = [
  { key: "thgQuote" as const, label: "THG-Quote", suffix: "%" as const },
  { key: "rfnboSubquota" as const, label: "Unterquote RFNBO", suffix: "%" as const },
  {
    key: "advancedBiofuelSubquota" as const,
    label: "Unterquote fortschrittliche Biokraftstoffe (Anhang IX A)",
    suffix: "%" as const,
  },
  { key: "foodFeedCap" as const, label: "Obergrenze 1G-Biokraftstoffe", suffix: "%" as const },
  {
    key: "wasteBiofuelCap" as const,
    label: "Obergrenze abfallbasierter Biokraftstoffe (Anlage 4)",
    suffix: "%" as const,
  },
  { key: "rfnboFactor" as const, label: "Anrechnungsfaktor RFNBO", suffix: "×" as const },
  { key: "electricityFactor" as const, label: "Anrechnungsfaktor Strom (Elektromobilität)", suffix: "×" as const },
  {
    key: "m3n3ElectricityFactor" as const,
    label: "Anrechnungsfaktor Strom (Klassen M3 und N3)",
    suffix: "×" as const,
  },
] as const;

export const THG_QUOTE_RELATED_HEADING = "Weiterführende Themen";
export const THG_QUOTE_RELATED_INTRO =
  "Vertiefende Einordnungen, Leistungen und praktische Tools – für die Umsetzung im THG-Quotensystem.";

export const THG_QUOTE_RELATED_GROUPS = [
  {
    heading: "Leistungen",
    items: [
      { label: "Pre-Zertifizierung", href: "/leistungen/pre-zertifizierung" },
      { label: "Zertifizierung nach REDcert, ISCC EU oder CertifHy", href: "/leistungen/zertifizierung-redcert-iscc-certifhy" },
      { label: "Nachweisführung und Registerführung", href: "/leistungen/nachweisfuehrung-und-register" },
      { label: "CO₂- und Quotenhandel", href: "/leistungen/co2-und-quotenhandel" },
      { label: "Berichte und Meldepflichten", href: "/leistungen/berichterstattung-und-meldepflichten" },
    ],
  },
  {
    heading: "Weitere Anwendungsbereiche",
    items: [
      { label: "EU-ETS I", href: "/anwendungsbereiche/emissionshandel-ets-1" },
      { label: "nEHS", href: "/anwendungsbereiche/emissionshandel-nehs" },
    ],
  },
] as const;

export const THG_QUOTE_CTA = {
  heading: "Sie möchten klären, wie Ihr Produkt in der THG-Quote angerechnet werden kann?",
  text: "FuelCert unterstützt Sie bei der regulatorischen Einordnung, Zertifizierung, Nachweisführung und Vermarktung im THG-Quotenmarkt.",
  actions: [{ label: "Kontakt aufnehmen", href: "/kontakt", variant: "primary" as const }],
} as const;
