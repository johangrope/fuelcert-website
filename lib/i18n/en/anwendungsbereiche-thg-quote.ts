import type { TextSegmentItem } from "@/components/TextWithLinks";

export const THG_QUOTE_LAW_URL = "https://www.recht.bund.de/bgbl/1/2026/163/VO.html";
export const THG_QUOTE_ZOLL_URL =
  "https://www.zoll.de/DE/Fachthemen/Steuern/Verbrauchsteuern/Treibhausgasquote-THG-Quote/treibhausgasquote_thg_quote_node.html";

export const THG_QUOTE_SEO = {
  title: "GHG quota: requirements, compliance options and relevance | FuelCert",
  metaDescription:
    "What is the German GHG quota? FuelCert explains requirements, compliance options and relevance for biofuels, biomethane, bio-LNG, RFNBO and hydrogen.",
  h1: "GHG quota: requirements, compliance options and relevance for renewable fuels",
} as const;

export const THG_QUOTE_INTRO = [
  "The greenhouse gas reduction quota (GHG quota) is a central instrument of German climate policy in transport. It obliges companies placing fossil petrol and diesel fuels on the market to gradually reduce the associated greenhouse gas emissions.",
  "For producers, traders and marketers of renewable fuels and energy carriers, the GHG quota is a key regulatory and commercial framework – for example for biomethane, bio-LNG, RFNBO, green hydrogen and e-fuels. Whether and how a product can be credited depends on certification, balancing, proof management and market access working together.",
] as const;

export const THG_QUOTE_WHAT_IS = {
  heading: "What is the GHG quota?",
  paragraphs: [
    [
      {
        text: "The GHG quota obliges suppliers of fossil petrol and diesel fuels to reduce the greenhouse gas intensity of their fuels relative to a reference value. The legal basis is the Federal Immission Control Act (BImSchG), in particular Section 37a BImSchG – most recently updated in the ",
      },
      {
        text: "Second Act on the Further Development of the Greenhouse Gas Reduction Quota",
        href: THG_QUOTE_LAW_URL,
        external: true,
      },
      { text: "." },
    ] satisfies readonly TextSegmentItem[],
    [
      {
        text: "In practice, this means: quota-obligated parties must annually demonstrate that the emissions of their fuels have been reduced by the legally specified percentage – for example through renewable fuels, electricity for e-mobility, or the transfer of GHG reductions to third parties. At the Main Customs Office – also known as the biofuel quota office – obligated parties and third parties acting as transferees must submit the annual report on quota compliance by 1 June of the year following the obligation year. The customs administration provides further information in its ",
      },
      {
        text: "GHG quota topic section",
        href: THG_QUOTE_ZOLL_URL,
        external: true,
      },
      { text: "." },
    ] satisfies readonly TextSegmentItem[],
    "The quota rises step by step until 2040. This increases the need for robust, verifiable and marketable compliance options – and at the same time the importance of sound regulatory implementation for suppliers of renewable energy carriers.",
  ],
} as const;

export const THG_QUOTE_FULFILLMENT = {
  heading: "How can the GHG quota be met?",
  paragraphs: [
    "In principle, there are two routes: the quota can be met through own measures – for example by placing lower-emission or renewable fuels on the market. Or part of the obligation is taken over by third parties that achieve a GHG reduction and make it available for quota purposes.",
    "Important: even players that do not themselves place fossil fuels on the market can contribute to the quota – if they produce, verify and market renewable fuels or other quota-relevant volumes. That makes the GHG quota relevant for many companies outside classic mineral oil structures.",
  ],
} as const;

export const THG_QUOTE_OPTIONS_HEADING = "Typical compliance options under the GHG quota";

export const THG_QUOTE_OPTIONS_VISUAL = {
  alt: "Hydrogen refuelling station as an example of RFNBO and hydrogen in the context of the GHG quota",
  caption:
    "Hydrogen and RFNBO can – depending on regulatory classification, proof management and use case – be a relevant compliance option under the GHG quota.",
} as const;

export const THG_QUOTE_FULFILLMENT_OPTIONS = [
  {
    title: "Conventional biofuels",
    text: "Bioethanol (mostly as E10) or biodiesel – subject to feedstock requirements regarding sustainability, GHG reduction and sub-quotas or caps.",
  },
  {
    title: "Biogas",
    text: "Gaseous as bio-CNG or biomethane, or liquid as bio-LNG. Depending on feedstocks, creditable towards the advanced biofuels sub-quota.",
  },
  {
    title: "Hydrogen",
    text: "Both electricity-based hydrogen (RFNBO) and bio-based hydrogen. Separate rules apply, such as sub-quota, crediting factor and areas of use.",
  },
  {
    title: "E-mobility",
    text: "Emission savings through consumption of charging electricity in purely electric road vehicles – flat-rate per vehicle and actual amount delivered at public charging points.",
  },
  {
    title: "E-fuels",
    text: "Examples of e-fuels include, alongside hydrogen, e-methane, e-methanol, e-kerosene and synthetic electricity-based diesel and petrol fuels.",
  },
  {
    title: "Special applications",
    text: "RFNBO in refineries during fuel processing as an intermediate product – under the respective conditions of the regulatory framework.",
  },
] as const;

export const THG_QUOTE_CUSTOMS_CALCULATOR_URL =
  "https://www.zoll.de/DE/Fachthemen/Steuern/Verbrauchsteuern/Treibhausgasquote-THG-Quote/Treibhausgasrechner/treibhausgasrechner_node.html";

export const THG_QUOTE_REVENUE = {
  heading: "How revenues from the GHG quota are calculated",
  blocks: [
    {
      heading: "Core calculation logic",
      paragraphs: [
        "Revenues from the GHG quota depend primarily on the net GHG reduction of the fuel used – in other words, how far emissions fall below the applicable target value. The target value is derived from the fossil reference value of 94 gCO₂/MJ multiplied by (100% − GHG quota of the relevant compliance year).",
        "The resulting net GHG reduction, multiplied by the market price in the quota market, gives the revenue from the GHG quota. The legal basis is the Federal Immission Control Act (BImSchG), in particular the GHG quota logic under Section 37a BImSchG. If the quota obligation is not met, a statutory payment applies; in simplified terms, this corresponds to a theoretical upper limit of €600/t CO₂eq.",
      ],
    },
    {
      heading: "Price formation in the quota market",
      paragraphs: [
        "The quota market is volatile and depends on supply and demand. Market observation shows historically very high and very low price phases: during the 2022 high-price period, prices were at times well above €500/t CO₂; they later fell – partly in connection with market discussion around allegedly falsely declared volumes from Asia – to clearly below €100/t CO₂ at times, and have recently risen again to well above €400/t CO₂.",
        "Key influencing factors include, among others, the second act on the further development of the GHG quota, the long-term rising quota levels and stricter anti-fraud requirements – including the possibility of on-site inspections. This classification describes market developments and observations, not a binding forecast.",
      ],
    },
    {
      heading: "Impact of sub-quotas",
      paragraphs: [
        "Alongside the main GHG quota, there are sub-quotas – especially for RFNBO and advanced biofuels. These relate to the energy quantity of fuels placed on the market rather than directly to GHG emissions.",
        "If corresponding fuels such as RFNBO, biomethane or bio-CNG are used with proper evidence, additional revenues can arise – supplementary to the main quota and depending on proof management, certification and market access. The overview table below shows the step-by-step development of GHG quota, sub-quotas and crediting factors.",
      ],
    },
    {
      heading: "Practical relevance and next steps",
      paragraphs: [
        "For an initial robust assessment of revenues from the GHG quota, it is worth classifying your product and market data concretely. The graphic on the right illustrates the calculation logic using RFNBO / hydrogen as an example; the FuelCert revenue calculators add interactive scenarios for hydrogen and biomethane.",
      ],
    },
  ],
  figure: {
    alt: "Schematic illustration of the calculation logic for net GHG reduction and tradable GHG reduction for RFNBO hydrogen",
    caption:
      "Tradable GHG reduction using RFNBO / hydrogen as an example – from fossil reference value and target value to net GHG reduction.",
    enlargeLabel: "Enlarge graphic",
    closeLabel: "Close",
  },
  calculators: {
    heading: "Calculate revenue potential directly",
    intro:
      "Use the FuelCert revenue calculators for a structured initial assessment based on key regulatory and price assumptions.",
    links: [
      {
        label: "Go to revenue calculator RFNBO / hydrogen",
        href: "/wissen/erloesrechner",
      },
      {
        label: "Go to revenue calculator biomethane / bio-CNG",
        href: "/wissen/erloesrechner-biomethan-bio-cng",
      },
    ],
  },
  customsCalculator: {
    label: "Official GHG calculator of German Customs",
    hint: "External calculator provided by German Customs",
    href: THG_QUOTE_CUSTOMS_CALCULATOR_URL,
  },
} as const;

export const THG_QUOTE_RELEVANCE = {
  heading: "Why the GHG quota may be relevant for your project",
  paragraphs: [
    "The GHG quota is not only relevant for classic mineral oil companies. Producers, traders and marketers of renewable fuels and energy carriers can also benefit from quota-relevant products – if regulatory requirements, proofs and market access are in place.",
    "Classification is key: is your product quota-eligible? What certification and proof management are required? What revenue potential arises in the GHG quota market – and how can it be implemented robustly?",
    "FuelCert supports you along these questions – from regulatory classification through certification and proof management to market access and operational implementation in the GHG quota system.",
  ],
} as const;

export const THG_QUOTE_TABLE_SECTION = {
  heading: "Development of the GHG quota, sub-quotas and crediting factors",
  intro:
    "The GHG quota, mandatory sub-quotas and crediting factors develop in stages. The following overview summarises the key figures for obligation years 2026 to 2040.",
  caption: "Overview of GHG quota, sub-quotas and crediting factors",
  yearLabel: "Year",
  note: "As of June 2026. The table reflects the applicable regulatory framework (including BImSchG, 37th and 38th BImSchV ordinances). Legislative changes may alter the values; for binding decisions, always rely on the current legal position.",
  numberLocale: "en-GB",
} as const;

export const THG_QUOTE_TABLE_COLUMNS = [
  { key: "thgQuote" as const, label: "GHG quota", suffix: "%" as const },
  { key: "rfnboSubquota" as const, label: "RFNBO sub-quota", suffix: "%" as const },
  {
    key: "advancedBiofuelSubquota" as const,
    label: "Advanced biofuels sub-quota (Annex IX Part A)",
    suffix: "%" as const,
  },
  { key: "foodFeedCap" as const, label: "Cap on 1G biofuels", suffix: "%" as const },
  { key: "rfnboFactor" as const, label: "RFNBO crediting factor", suffix: "×" as const },
  { key: "electricityFactor" as const, label: "Electricity crediting factor (e-mobility)", suffix: "×" as const },
] as const;

export const THG_QUOTE_RELATED_HEADING = "Related topics";
export const THG_QUOTE_RELATED_INTRO =
  "Further context, services and practical tools – for implementation in the GHG quota system.";

export const THG_QUOTE_RELATED_GROUPS = [
  {
    heading: "Services",
    items: [
      { label: "Certification under REDcert, ISCC EU or CertifHy", href: "/leistungen/zertifizierung-redcert-iscc-certifhy" },
      { label: "Proof management and register operations", href: "/leistungen/nachweisfuehrung-und-register" },
      { label: "CO₂ and quota trading", href: "/leistungen/co2-und-quotenhandel" },
      { label: "Reporting and compliance obligations", href: "/leistungen/berichterstattung-und-meldepflichten" },
    ],
  },
  {
    heading: "Knowledge",
    items: [
      { label: "RFNBO certification", href: "/wissen/rfnbo-zertifizierung" },
      { label: "GHG and mass balance", href: "/wissen/thg-und-massenbilanz" },
      { label: "REDcert, ISCC EU and CertifHy compared", href: "/wissen/redcert-iscc-certifhy-unterschiede" },
      { label: "UDB, Nabisy and register operations", href: "/wissen/udb-nabisy-und-registerfuehrung" },
    ],
  },
] as const;

export const THG_QUOTE_CTA = {
  heading: "Want to clarify how your product can be credited under the GHG quota?",
  text: "FuelCert supports you with regulatory classification, certification, proof management and marketing in the GHG quota market.",
  actions: [{ label: "Contact us", href: "/kontakt", variant: "primary" as const }],
} as const;
