export const ETS1_SEO = {
  title: "Emissions trading (EU ETS I): monitoring plan, emissions report and EUAs | FuelCert",
  metaDescription:
    "EU ETS I for operators of covered installations: FuelCert supports monitoring plans, emissions reports, verification, Union Registry, EUA procurement and surrender – as well as sustainable fuels, free allocation and CBAM.",
  h1: "Emissions trading (EU ETS I)",
} as const;

export const ETS1_INTRO = [
  "Under the European emissions trading system (EU ETS I), operators of covered installations must monitor their greenhouse gas emissions, report annually and surrender emission allowances (EUAs). For many companies, EU ETS I is both a regulatory obligation and a significant cost factor.",
  "FuelCert supports companies across the entire ETS I process – from monitoring plans and emissions reports through verification and the Union Registry to EUA procurement and timely surrender to DEHSt. In addition, topics such as sustainable fuels, free allocation and CBAM may be relevant.",
] as const;

export const ETS1_INTRO_VISUAL = {
  alt: "Industrial installation in EU ETS I with emissions monitoring and digital data collection",
  caption:
    "In EU ETS I, plant operations, emissions monitoring, reporting and surrender of emission allowances form one continuous regulatory process.",
} as const;

export const ETS1_ECONOMIC = {
  heading: "Why EU ETS I is economically relevant",
  paragraphs: [
    "Under EU ETS I, companies must surrender emission allowances for the emissions reported from their installations. Higher reported emissions generally mean greater EUA demand – and therefore higher costs in emissions trading.",
    "Compliance alone is not the only factor; correct regulatory classification and reporting matter too. Sustainable fuels or deductible shares can – under the applicable conditions – be taken into account with an emission-reducing effect, thereby reducing the volume of EUAs to be surrendered and ETS costs.",
  ],
} as const;

export const ETS1_SUPPORT = {
  heading: "FuelCert supports across the entire ETS I process",
  intro:
    "Companies in EU ETS I face a continuous regulatory process. FuelCert provides structured, substantive support:",
  bullets: [
    "Monitoring plan – preparation, revision and updates",
    "Data collection and internal processes",
    "Emissions report – preparation and structuring",
    "Verification and support through the accredited verifier",
    "Union Registry – processes and regulatory classification",
    "EUA procurement",
    "EUA surrender and transfer to DEHSt",
    "substantive clarifications with DEHSt",
    "sustainable fuels and deductible shares",
    "free allocation",
    "CBAM as an adjacent topic",
  ],
} as const;

export const ETS1_SUSTAINABLE_FUELS = {
  heading: "Sustainable fuels and deductible shares in EU ETS I",
  paragraphs: [
    "The use of sustainable fuels can, under the applicable conditions, be a particularly relevant economic lever. Where sustainable biomass, biomethane or other deductible shares are properly evidenced and correctly reflected in the monitoring plan and emissions report, reported emissions may decrease – and with them EUA demand.",
    "This requires in particular a suitable monitoring plan, robust sustainability and quantity evidence, sound data and process logic, correct treatment in the emissions report and, where necessary, coordination with the verifier and DEHSt.",
  ],
} as const;

export const ETS1_FREE_ALLOCATION = {
  heading: "Free allocation in EU ETS I",
  paragraphs: [
    "Free allocation is a major economic issue for many installations in EU ETS I. It can significantly affect the actual ETS cost burden.",
    "Relevant factors include the classification of the installation, allocation rules, robust data foundations and regulatorily sound preparation. FuelCert helps companies understand the significance of free allocation and supports the relevant processes in a structured, expert manner.",
  ],
} as const;

export const ETS1_CBAM = {
  heading: "CBAM as an adjacent topic",
  paragraphs: [
    "The Carbon Border Adjustment Mechanism (CBAM) is an adjacent CO₂ regime. It is not identical to EU ETS I, but is closely linked from a regulatory perspective.",
    "For affected companies, it can be important to assess EU ETS I, free allocation and CBAM in context – especially where emissions reporting, allocation logic and cross-border goods flows intersect.",
  ],
} as const;

export const ETS1_FLOW = {
  heading: "How EU ETS I works in practice",
  intro:
    "EU ETS I links fuel use, monitoring plan, evidence, emissions report and EUA surrender into one continuous process – with economic relevance through correct regulatory implementation at every step.",
  blocks: [
    {
      heading: "The process at a glance",
      paragraphs: [
        "From fuel use in the installation through the approved monitoring plan and evidence management to the verified emissions report and EUA surrender in the Union Registry – each step must be regulatorily sound.",
      ],
    },
    {
      heading: "Economic lever of sustainable fuels",
      paragraphs: [
        "Sustainable fuels or deductible shares can – where the conditions are met – be taken into account with an emission-reducing effect. This can reduce reported emissions and EUA demand.",
      ],
    },
    {
      heading: "Key deadlines",
      paragraphs: [
        "The monitoring plan must be submitted to or updated with DEHSt before operations begin and in the event of material changes.",
        "The emissions report must be submitted by 31 March of the following year; EUA surrender is due by 30 September of the following year.",
      ],
    },
  ],
  figure: {
    alt: "Schematic overview of EU ETS I from fuel use, monitoring plan and evidence through emissions report, EUA surrender and reduced ETS costs through sustainable fuels.",
    caption:
      "Schematic overview of the key process steps in EU ETS I and the possible cost effect of sustainably evidenced fuels.",
    enlargeLabel: "Enlarge graphic",
    closeLabel: "Close",
  },
  dehstLink: {
    label: "DEHSt information page on EU ETS I",
    hint: "Official information from the German Emissions Trading Authority on stationary installations in EU ETS I.",
    href: "https://www.dehst.de/DE/Themen/EU-ETS-1/EU-ETS-1-Informationen/EU-ETS-1-verstehen/eu-ets-1-verstehen_node.html",
  },
} as const;

export const ETS1_RELATED_HEADING = "Further topics";
export const ETS1_RELATED_INTRO =
  "Further context on services and other application areas – for implementation in EU ETS I.";

export const ETS1_RELATED_GROUPS = [
  {
    heading: "Services",
    items: [
      { label: "Pre-certification", href: "/leistungen/pre-zertifizierung" },
      { label: "Certification", href: "/leistungen/zertifizierung-redcert-iscc-certifhy" },
      { label: "Proof and register management", href: "/leistungen/nachweisfuehrung-und-register" },
      { label: "CO₂ and quota trading", href: "/leistungen/co2-und-quotenhandel" },
      { label: "Reporting and submission obligations", href: "/leistungen/berichterstattung-und-meldepflichten" },
    ],
  },
  {
    heading: "Further application areas",
    items: [
      { label: "GHG quota", href: "/anwendungsbereiche/thg-quote" },
      { label: "nEHS", href: "/anwendungsbereiche/emissionshandel-nehs" },
    ],
  },
] as const;

export const ETS1_CTA = {
  heading:
    "Would you like to set up or develop your ETS I process in a regulatorily sound, economically sensible way – with as little internal effort as possible?",
  actions: [{ label: "Schedule an initial consultation", href: "/kontakt", variant: "primary" as const }],
} as const;
