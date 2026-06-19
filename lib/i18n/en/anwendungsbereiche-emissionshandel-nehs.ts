export const NEHS_SEO = {
  title: "National emissions trading (nEHS): BEHG, monitoring plan and nEZs | FuelCert",
  metaDescription:
    "National emissions trading (nEHS) under the BEHG: FuelCert supports scope assessment, monitoring plans, emissions reports, nEHS registry, nEZ procurement and surrender – as well as renewable fuels.",
  h1: "National emissions trading (nEHS)",
} as const;

export const NEHS_INTRO = [
  "The national emissions trading system (nEHS) under the German Fuel Emissions Trading Act (BEHG) puts a price on CO₂ emissions from fuels outside the EU ETS – especially in heating and transport. Unlike EU ETS I, nEHS generally links not to direct installation emissions but to the placing on the market of fuels.",
  "For affected companies, nEHS is therefore a compliance topic, a cost factor and – for renewable power and fuels under the applicable conditions – also an economic lever. FuelCert supports across the entire nEHS process.",
] as const;

export const NEHS_INTRO_VISUAL = {
  alt: "Industrial fuel logistics and emissions monitoring in national emissions trading",
  caption:
    "Under nEHS, fuels, emissions reporting, registry processes and nEZ surrender are closely linked in regulatory terms.",
} as const;

export const NEHS_ECONOMIC = {
  heading: "Why national emissions trading is economically relevant",
  paragraphs: [
    "Under nEHS, responsible parties must procure and surrender national emission certificates (nEZs) for reported fuel emissions. The system affects heating and transport sectors particularly strongly – CO₂ pricing works in practice through fuel prices and the regulatory treatment of quantities placed on the market.",
    "Compliance alone is not the only factor; sound classification matters too: Which fuels are covered? Which quantities must be reported? Which emissions require surrender? Which shares can be deducted under the applicable conditions?",
    "The system's price logic has evolved from a fixed-price phase (until 2025) via a price corridor (from 2026) towards EU ETS 2 (transition from 2027). This development is economically relevant for affected companies – without all detail questions being finally settled yet.",
  ],
} as const;

export const NEHS_SUPPORT = {
  heading: "FuelCert supports across the entire nEHS process",
  intro: "Companies in nEHS face a continuous regulatory process. FuelCert provides structured, substantive support:",
  bullets: [
    "Assessment of nEHS scope",
    "Classification of responsibility under the BEHG",
    "Preparation, revision and updates of monitoring plans",
    "Support with data collection and process structure",
    "Preparation and structuring of emissions reports",
    "Preparation and support through verification / accredited verifier",
    "Support in the nEHS registry",
    "Support with procurement and surrender of nEZs",
    "Classification of renewable fuels and proof management",
    "Support with deduction logic, double counting and double charging",
    "Support with clarifications with DEHSt",
    "Classification of interfaces with EU ETS I and EU ETS 2",
  ],
} as const;

export const NEHS_RENEWABLES = {
  heading: "Renewable power and fuels in nEHS",
  paragraphs: [
    "Renewable power and fuels play a greater practical role in nEHS than in EU ETS I. Particularly relevant are biomass, biomethane, bio-LNG, biogenic fuel shares, RFNBO, synthetic methane and other low-carbon or climate-neutral fuels – depending on fuel and use case within the applicable regulatory framework.",
    "Biomethane in the natural gas grid is a particularly practical case: emissions attributable to corresponding quantities can be deducted in the emissions report under the applicable conditions – provided proof management, certification and data foundations are set up in a rule-compliant manner.",
    "For RFNBO and other non-biogenic renewable fuels, recognition is regulatorily envisaged but practical proof management is partly still limited or under development. Pure hydrogen is not generally subject to the same reporting obligation as natural gas; hydrogen blending or mixing with natural gas must be assessed separately.",
  ],
} as const;

export const NEHS_OBLIGATIONS = {
  heading: "Obligations, deadlines and registry at a glance",
  bullets: [
    "Monitoring plan – before operations begin and in the event of material changes",
    "Emissions report – preparation and verification by the accredited verifier",
    "Registry entry of emissions – by 31 July of the following year",
    "Procurement of required nEZs",
    "Surrender of nEZs – by 30 September of the following year",
  ],
  paragraphs: [
    "Only national emission certificates (nEZs) apply in nEHS – not EU ETS allowances. Implementation generally uses accounts in the nEHS registry: compliance accounts for obligation fulfilment and – where relevant – trading accounts for certificate trading.",
  ],
} as const;

export const NEHS_INTERFACES = {
  heading: "Double counting, double charging and interfaces",
  paragraphs: [
    "The interaction of nEHS and EU ETS I is particularly relevant in practice. Where fuels are supplied to EU ETS I installations, double charging may need to be avoided – alongside tax relief provisions and other deduction logic.",
    "From 2027, transition to EU ETS 2 is envisaged or relevant. Companies may need to assess nEHS, EU ETS I and future EU ETS II logic in context – without pre-empting the detail questions of EU ETS 2.",
  ],
} as const;

export const NEHS_IMPLEMENTATION = {
  heading: "What matters in implementation",
  paragraphs: [
    "What counts is that scope, data foundations and evidence align across the entire process – from classifying fuel quantities through verified reporting to on-time certificate surrender.",
    "Errors at individual steps can increase internal effort, verification risk and nEZ demand. Renewable fuels can – with appropriate proof management and under the applicable conditions – be taken into account with an emission-reducing effect.",
  ],
} as const;

export const NEHS_FLOW = {
  heading: "How national emissions trading works in practice",
  intro:
    "In practice, nEHS links scope assessment, monitoring plan, proof management, emissions report, registry and nEZ surrender into one continuous annual process. The graphic on the right summarises the process logic.",
  figure: {
    alt: "nEHS process: scope assessment, monitoring plan, evidence, emissions report, registry and nEZ surrender",
    caption:
      "Key process steps in nEHS – with deadlines and the possible effect of renewable fuels with rule-compliant proof management.",
    enlargeLabel: "Enlarge graphic",
    closeLabel: "Close",
  },
  dehstLink: {
    label: "DEHSt information page on national emissions trading",
    hint: "Official information from the German Emissions Trading Authority on nEHS under the BEHG.",
    href: "https://www.dehst.de/DE/Themen/nEHS/nehs_node.html",
  },
} as const;

export const NEHS_RELATED_HEADING = "Further topics";
export const NEHS_RELATED_INTRO =
  "Further context on services and other application areas – for implementation in national emissions trading.";

export const NEHS_RELATED_GROUPS = [
  {
    heading: "Services",
    items: [
      { label: "Pre-certification", href: "/leistungen/pre-zertifizierung" },
      { label: "Certification", href: "/leistungen/zertifizierung-redcert-iscc-certifhy" },
      { label: "Proof management and register operations", href: "/leistungen/nachweisfuehrung-und-register" },
      { label: "CO₂ and quota trading", href: "/leistungen/co2-und-quotenhandel" },
      { label: "Reports and reporting obligations", href: "/leistungen/berichterstattung-und-meldepflichten" },
    ],
  },
  {
    heading: "Further application areas",
    items: [
      { label: "GHG quota", href: "/anwendungsbereiche/thg-quote" },
      { label: "EU ETS I", href: "/anwendungsbereiche/emissionshandel-ets-1" },
    ],
  },
] as const;

export const NEHS_CTA = {
  heading:
    "Would you like to implement your nEHS obligations in a regulatorily sound way – with as little internal effort as possible?",
  actions: [{ label: "Schedule an initial consultation", href: "/kontakt", variant: "primary" as const }],
} as const;
