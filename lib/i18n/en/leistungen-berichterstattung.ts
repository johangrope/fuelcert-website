import type { ServiceBulletGroup } from "@/components/ServiceBulletGroups";

export const BERICHTERSTATTUNG_SEO = {
  title: "Reports and reporting obligations | FuelCert",
  metaDescription:
    "FuelCert supports companies with reporting, submission and surrender obligations under the GHG quota, EU ETS I and nEHS – structured, on time and audit-ready.",
  h1: "Reports and reporting obligations",
} as const;

export const BERICHTERSTATTUNG_INTRO =
  "FuelCert supports companies in meeting reporting, submission and surrender obligations under the GHG quota, EU ETS I and national emissions trading (nEHS) on time, robustly and in an audit-ready manner. We help you classify regulatory requirements correctly, prepare data systematically and implement required submissions, reports and surrenders securely." as const;

export const BERICHTERSTATTUNG_SERVICES_HEADING = "What we take on for reporting obligations";

export const BERICHTERSTATTUNG_SERVICES_INTRO =
  "Depending on the system and your role in the market, different reporting and surrender obligations apply. FuelCert supports you in all three relevant areas – structured, on time and audit-ready." as const;

export const BERICHTERSTATTUNG_SERVICE_GROUPS: readonly ServiceBulletGroup[] = [
  {
    heading: "GHG quota",
    items: [
      "Submissions to the main customs office or biofuel quota office",
      "Support with third-party submissions as quota obligation transferees",
      "Preparation of volume, contract and settlement data",
      "Review of formal requirements for quota submissions",
      "Coordination with quota obligors, contract partners and the main customs office",
      "Support with enquiries, corrections and resubmissions",
    ],
  },
  {
    heading: "EU ETS I",
    items: [
      "Creation and updating of monitoring plans",
      "Preparation and support for annual emissions reporting",
      "Preparation of verification by the certification body",
      "Coordination with certification body and DEHSt",
      "Support with surrender of emission allowances",
      "Support with union registry account and processes",
      "Classification of special cases, e.g. biomass, RFNBO or waste fuels",
    ],
  },
  {
    heading: "nEHS",
    items: [
      "Review of obligations under BEHG and EBeV",
      "Creation and updating of monitoring plans",
      "Preparation and support for annual emissions reporting",
      "Entry of emissions in the nEHS register",
      "Support with surrender of nEHS certificates",
      "Support with nEHS registry account and processes",
      "Coordination with DEHSt and certification body",
      "Delimitation from EU ETS I, EU ETS II and biogenic fuel shares",
    ],
  },
] as const;

export const BERICHTERSTATTUNG_IMPLEMENTATION_HEADING = "How we support implementation";

export const BERICHTERSTATTUNG_IMPLEMENTATION = [
  "Reporting and submission obligations in CO₂ and quota markets are formally demanding and bound to fixed deadlines. Depending on the system, volume, energy and emissions data must be prepared, monitoring plans created, emissions reports submitted, verifications prepared or certificates surrendered.",
  "FuelCert helps companies implement these obligations efficiently, on time and in an audit-ready way. We review relevant requirements, prepare required data, create reports and plans and support coordination with authorities, certification bodies and contract partners.",
  "Clean delimitation between regulatory systems is particularly important. In practice, GHG quota, EU ETS I, nEHS and future EU ETS II can overlap – for example with fuel deliveries, biogenic shares, deduction issues or use of renewable fuels.",
  "FuelCert helps identify these interfaces early and classify the respective reporting and surrender obligations correctly by system.",
] as const;

export const BERICHTERSTATTUNG_CTA_MID = {
  heading: "Want to set up reporting obligations securely?",
  text: "We support you in classifying requirements and in reports, submissions and surrenders to authorities and certification bodies.",
} as const;

export const BERICHTERSTATTUNG_CTA_END = {
  heading: "Want to implement reports, submissions and surrenders on time and audit-ready?",
  text: "FuelCert supports you in structured preparation and implementation of regulatory reporting obligations.",
} as const;

export const BERICHTERSTATTUNG_RELATED_TOPICS = [
  { label: "GHG quota", href: "/anwendungsbereiche/thg-quote" },
  { label: "Emissions trading (EU ETS I)", href: "/anwendungsbereiche/emissionshandel-ets-1" },
  { label: "National emissions trading (nEHS)", href: "/anwendungsbereiche/emissionshandel-nehs" },
  { label: "RFNBO and e-fuels", href: "/anwendungsbereiche/rfnbo" },
  { label: "GHG and mass balance", href: "/wissen/thg-und-massenbilanz" },
  { label: "RFNBO requirements under RED III", href: "/wissen/rfnbo-anforderungen-red-iii" },
  { label: "REDcert, ISCC EU and CertifHy", href: "/wissen/redcert-iscc-certifhy-unterschiede" },
] as const;
