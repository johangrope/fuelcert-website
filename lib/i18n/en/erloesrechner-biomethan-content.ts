export const BIOMETHAN_ERLOESRECHNER_SEO = {
  title: "Revenue calculator biomethane (bio-CNG) | FuelCert",
  metaDescription:
    "Estimate revenue potential of biomethane as bio-CNG under the German GHG quota – interactive, based on key regulatory and price assumptions.",
  h1: "Revenue calculator biomethane (bio-CNG)",
} as const;

export const BIOMETHAN_ERLOESRECHNER_INTRO = [
  "This revenue calculator lets you estimate the potential revenue of biomethane as bio-CNG under the German GHG reduction quota based on a few assumptions.",
  "Adjust compliance year, calorific volume, emissions value and GHG price – results update instantly. The calculator is for initial orientation; a binding assessment requires review of your specific project.",
] as const;

export const BIOMETHAN_ERLOESRECHNER_SCOPE_NOTE =
  "Currently only bio-CNG is calculated. Extensions for bio-LNG and electricity are planned.";

export const BIOMETHAN_ERLOESRECHNER_ASSUMPTIONS_HEADING = "Assumptions and notes";

export const BIOMETHAN_ERLOESRECHNER_ASSUMPTIONS = [
  "Based on a fossil reference value of 94 gCO₂/MJ and the annual GHG quota under the applicable framework. The crediting factor for bio-CNG is set to 1.",
  "Energy in GJ is derived from calorific volume using the conversion for bio-CNG (kWh ÷ 1.1 ÷ 1,000 × 3.6).",
  "Results are indicative. Actual revenue depends on regulatory classification, proof management, certification and market prices at the time of marketing.",
  "FuelCert supports detailed assessment of revenue potential, quota eligibility and implementation under the GHG quota system.",
] as const;

export const BIOMETHAN_ERLOESRECHNER_CTA = {
  heading: "Want a concrete assessment of your biomethane revenue potential?",
  text: "We support you in classifying regulatory requirements, proof management and practical implementation under the GHG quota system.",
} as const;

export const BIOMETHAN_ERLOESRECHNER_TEASER = {
  slug: "erloesrechner-biomethan-bio-cng",
  title: "Revenue calculator biomethane (bio-CNG)",
  description: "Interactive estimate of revenue potential for biomethane as bio-CNG under the GHG quota.",
  href: "/wissen/erloesrechner-biomethan-bio-cng",
} as const;
