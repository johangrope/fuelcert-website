import { CALCULATOR_LIABILITY_DISCLAIMER } from "@/lib/calculator-common";
import { ERLOESRECHNER_TEASER } from "@/lib/erloesrechner-content";
import { BIOMETHAN_ERLOESRECHNER_TEASER } from "@/lib/erloesrechner-biomethan-content";
import { LEISTUNGEN_OVERVIEW } from "@/lib/leistungen";
import { LEISTUNGEN_CARD_TEASERS } from "@/lib/leistungen-overview";
import { PRE_ZERTIFIZIERUNG_CTA, PRE_ZERTIFIZIERUNG_INTRO, PRE_ZERTIFIZIERUNG_RELATED_TOPICS, PRE_ZERTIFIZIERUNG_SEO, PRE_ZERTIFIZIERUNG_SERVICES, PRE_ZERTIFIZIERUNG_SERVICES_HEADING, PRE_ZERTIFIZIERUNG_SERVICES_INTRO, PRE_ZERTIFIZIERUNG_VARIANTS, PRE_ZERTIFIZIERUNG_VARIANTS_HEADING } from "@/lib/leistungen-pre-zertifizierung";
import { UEBER_UNS_CTA, UEBER_UNS_HIGHLIGHTS, UEBER_UNS_INTRO, UEBER_UNS_PUBLICATIONS, UEBER_UNS_SEO } from "@/lib/ueber-uns";
import { UEBER_UNS_TEAM } from "@/lib/ueber-uns-team";
import { WISSEN_OVERVIEW } from "@/lib/wissen";
import { ANWENDUNGEN_OVERVIEW } from "@/lib/anwendungsbereiche";

const messages = {
  common: {
    learnMore: "Mehr erfahren >",
    contact: "Kontakt aufnehmen",
    backToServices: "Zurück zur Leistungsübersicht",
    backToWissen: "Zurück zur Wissensübersicht",
    backToAnwendungsbereiche: "Zurück zur Übersicht Anwendungsbereiche",
    backToHome: "Zur Startseite",
    contactCta: "Kontakt aufnehmen →",
    readArticle: "Beitrag lesen →",
    assumptionsHeading: "Annahmen und Hinweise",
    relatedTopicsHeading: "Weiterführende Themen",
    relatedTopicsIntro:
      "Vertiefende Einordnungen finden Sie in unserem Wissensbereich – für Details zu Systemen, Bilanzen und regulatorischen Anforderungen.",
    breadcrumbAria: "Brotkrumen",
    assumptions: "Annahmen",
    result: "Ergebnis",
    liabilityDisclaimer: CALCULATOR_LIABILITY_DISCLAIMER,
    portraitAlt: "Porträt {name}",
    certificationGraphicAlt:
      "Schematische Darstellung des Zertifizierungsprozesses von der Ausgangslage über Daten und Bilanzierung bis zum Audit und zur Rezertifizierung",
    languageLabel: "Sprache",
    notFound: "Seite nicht gefunden",
    yes: "Ja",
    no: "Nein",
  },
  calculatorH2: {
    scopeNote:
      "Aktuell werden nur Erlöse aus der THG-Quote für grünen Wasserstoff berechnet. Erweiterungen für ETS I und nEHS sind perspektivisch vorgesehen.",
    hydrogenKg: "Menge Wasserstoff in kg",
    rangeHint: "Bereich: {min} – {max} kg",
    emissionsFactor: "Emissionsfaktor des Wasserstoffs in gCO₂/MJ",
    emissionsHint:
      "Manuell eintragbar, z. B. aus Zertifizierung oder Bilanzierung. Bereich: {min} bis {max} gCO₂/MJ.",
    year: "Verpflichtungsjahr",
    yearHint: "Steuert THG-Quote und Jahresfaktor gemäß Regulierung.",
    drivetrain: "Antriebsart",
    drivetrainHint: "Beeinflusst die No-Cap-Quote; die RFNBO-Unterquote bleibt unverändert.",
    drivetrainFuelCell: "Brennstoffzellenfahrzeuge",
    drivetrainCombustion: "Verbrennungsmotor",
    noCapPrice: "Quotenpreis No-Cap in € je Tonne",
    rfnboPrice: "Quotenpreis RFNBO-Unterquote in € je GJ",
    resultsCaption: "Erlöse für {kg} kg H₂ im Jahr {year}",
    colNoCap: "No-Cap Quote",
    colRfnbo: "RFNBO-Unterquote",
    colTotal: "gesamt",
    specificRevenue: "spezifischer Erlös",
    totalRevenue: "Gesamterlös",
  },
  calculatorBiomethan: {
    scopeNote:
      "Aktuell wird nur Bio-CNG berechnet. Erweiterungen für Bio-LNG, RFNBO und Strom sind perspektivisch vorgesehen.",
    year: "Verpflichtungsjahr",
    yearHint: "Steuert die THG-Quote gemäß Regulierung.",
    calorificVolume: "Brennwertmenge Biomethan (kWh)",
    rangeHint: "Bereich: {min} – {max} kWh",
    emissionsValue: "Emissionswert Biomethan (gCO₂/MJ)",
    emissionsHint: "Manuell eintragbar. Bereich: {min} bis {max} gCO₂/MJ.",
    thgPrice: "THG-Preis (€/t CO₂eq)",
    advancedBiofuelQuestion:
      "Wurde das Biomethan ausschließlich aus Einsatzstoffen des Anhang I der 38. BImSchV hergestellt und gilt somit als fortschrittlicher Biokraftstoff?",
    advancedBiofuelHint:
      "Zusätzliche Erlöse aus der Unterquote sind nur relevant, wenn das Biomethan als fortschrittlicher Biokraftstoff im Sinne der 38. BImSchV einzuordnen ist.",
    advancedBiofuelPrice: "Preis Unterquote fortschrittliche Biokraftstoffe (€/GJ)",
    resultsCaption: "Erlöse für {kwh} kWh (Brennwert) als Bio-CNG im Jahr {year}",
    colNoCap: "No-Cap-Quote",
    colAdvanced: "Unterquote fortschrittliche Biokraftstoffe",
    colTotal: "gesamt",
    specificRevenue: "spezifischer Erlös",
    totalRevenue: "absoluter Erlös",
  },
  nav: {
    home: "Home",
    about: "Über uns",
    contact: "Kontakt",
    services: "Leistungen",
    applications: "Anwendungsbereiche",
    knowledge: "Wissen",
    regulatoryAreas: "Regulatorische Bereiche",
    productAreas: "Produktbezogene Bereiche",
    preCertification: "Pre-Zertifizierung",
    certification: "Zertifizierung",
    proofManagement: "Nachweisführung und Registerführung",
    co2Trading: "CO₂- und Quotenhandel",
    reporting: "Berichte und Meldepflichten",
    calculatorH2: "Erlösrechner Wasserstoff (RFNBO)",
    calculatorBiomethan: "Erlösrechner Biomethan (Bio-CNG)",
    thgQuote: "THG-Quote",
    ets: "Emissionshandel (ETS I)",
    nehs: "Nationaler Emissionshandel (nEHS)",
    esg: "ESG und Nachhaltigkeitsnachweise",
    hydrogen: "Wasserstoff und Derivate",
    biomethan: "Biomethan und Bio-LNG",
    rfnbo: "RFNBO und E-Fuels",
    rfnboCert: "RFNBO-Zertifizierung",
    systemsCompare: "REDcert, ISCC EU und CertifHy",
    thgMass: "THG- und Massenbilanz",
    udbNabisy: "UDB, Nabisy und Registerführung",
    redIII: "RFNBO-Anforderungen nach RED III",
  },
  footer: {
    contact: "Kontakt",
    more: "Weiteres",
    about: "Über uns",
    imprint: "Impressum",
    privacy: "Datenschutz",
    bookCall: "Erstgespräch buchen",
    copyright: "Copyright © 2026 FuelCert Sailer & Grope GbR",
    company: "FuelCert Sailer & Grope GbR",
    addressLine1: "Bismarckstraße 65",
    addressLine2: "10627 Berlin",
  },
  home: {
    metaTitle: "FuelCert – Zertifizierung für erneuerbare Kraft- und Brennstoffe",
    metaDescription:
      "FuelCert unterstützt Unternehmen bei Zertifizierung, Nachweisführung und regulatorischen Fragen rund um RFNBO, grünen Wasserstoff, Biomethan und Compliance.",
    heroTitle:
      "Ihre Experten für Zertifizierung erneuerbarer Kraft- und Brennstoffe sowie Emissions- und Quotenhandel",
    heroLead:
      "FuelCert unterstützt Produzenten, Händler, Inverkehrbringer, Energieversorger und emissionshandelspflichtige Unternehmen bei der Zertifizierung, Nachweisführung, Emissionsberichterstattung sowie beim Emissions- und Quotenhandel. Darüber hinaus bietet FuelCert Beratungsleistungen zu den angrenzenden Compliance-Themen.",
    heroImageAlt:
      "Tankwagen mit Renewable-Fuel-Branding vor moderner Energieanlage mit Windrad, Solarpanels und Speichertanks",
    servicesTitle: "Unsere Leistungen",
    servicesIntro:
      "Je nachdem, wo Sie sich als unser Kunde entlang der Wertschöpfungskette einordnen und wie intensiv Sie in regulatorischen Prozessen unterstützt werden möchten, bietet FuelCert passgenaue Dienstleistungen an. So können Zertifizierung, Nachweisführung, Berichterstattung, Meldeprozesse und Handelsaktivitäten effizient, prüfsicher und mit möglichst geringem internem Aufwand umgesetzt werden.",
    testimonialsTitle: "Ausgewählte Kundenstimmen",
    testimonialsIntroPrefix: "Mehr auf ",
    testimonialsIntroLink: "Über uns",
    testimonialsIntroSuffix: ".",
    referencesIntro: "Diese Kunden und Partner setzen bereits auf FuelCert.",
  },
  leistungen: {
    overview: LEISTUNGEN_OVERVIEW,
    cards: LEISTUNGEN_CARD_TEASERS,
    ctaHeading: "Sie möchten klären, welche Unterstützung für Ihr Projekt relevant ist?",
    ctaText:
      "Wir ordnen Ihre Ausgangslage ein und zeigen, welche Leistungsbereiche für Ihr Vorhaben in Frage kommen.",
    ctaButton: "Erstgespräch vereinbaren",
    kicker: "Leistungen",
  },
  preZert: {
    seo: PRE_ZERTIFIZIERUNG_SEO,
    intro: PRE_ZERTIFIZIERUNG_INTRO,
    servicesHeading: PRE_ZERTIFIZIERUNG_SERVICES_HEADING,
    servicesIntro: PRE_ZERTIFIZIERUNG_SERVICES_INTRO,
    services: PRE_ZERTIFIZIERUNG_SERVICES,
    variantsHeading: PRE_ZERTIFIZIERUNG_VARIANTS_HEADING,
    variants: PRE_ZERTIFIZIERUNG_VARIANTS,
    cta: PRE_ZERTIFIZIERUNG_CTA,
    relatedTopics: PRE_ZERTIFIZIERUNG_RELATED_TOPICS,
    breadcrumb: "Pre-Zertifizierung",
  },
  about: {
    seo: UEBER_UNS_SEO,
    intro: UEBER_UNS_INTRO,
    highlightsTitle: "Was FuelCert ausmacht",
    highlights: UEBER_UNS_HIGHLIGHTS,
    teamTitle: "Das Team hinter FuelCert",
    publicationsTitle: "Veröffentlichungen und Fachbeiträge",
    publications: UEBER_UNS_PUBLICATIONS,
    cta: UEBER_UNS_CTA,
    team: UEBER_UNS_TEAM,
    kicker: "FuelCert",
    breadcrumb: "Über uns",
  },
  wissen: {
    overview: WISSEN_OVERVIEW,
    erloesrechnerTeaser: ERLOESRECHNER_TEASER,
    biomethanTeaser: BIOMETHAN_ERLOESRECHNER_TEASER,
    kicker: "Wissen",
    breadcrumb: "Wissen",
  },
  anwendungsbereiche: {
    overview: ANWENDUNGEN_OVERVIEW,
    kicker: "Anwendungsbereiche",
    breadcrumb: "Anwendungsbereiche",
    regulatoryTitle: "Regulatorische Bereiche",
    regulatoryIntro:
      "Märkte, Quoten und Emissionshandelssysteme – mit typischen Fragestellungen für Produzenten, Händler und Pflichtige.",
    productTitle: "Produktbezogene Bereiche",
    productIntro:
      "Wasserstoff und Derivate, Biomethan und Bio-LNG sowie RFNBO und E-Fuels – fokussiert auf produktbezogene Compliance.",
  },
  contact: {
    title: "Kontakt",
    metaDescription: "Kontakt zu FuelCert – Beratung und Erstgespräch.",
    kicker: "Kontakt",
    breadcrumb: "Kontakt",
  },
} as const;

export default messages;
