export const ERLOESRECHNER_SEO = {
  title: "Revenue calculator | FuelCert",
  metaDescription:
    "Estimate revenue potential of green hydrogen (RFNBO) under the German GHG quota – interactive, based on key market and regulatory parameters.",
  h1: "Revenue calculator",
} as const;

export const ERLOESRECHNER_INTRO = [
  "This revenue calculator lets you estimate the potential revenue of green, power-based hydrogen (RFNBO) under the German greenhouse gas (GHG) reduction quota based on a few assumptions.",
  "Adjust volume, emissions factor, compliance year, drivetrain and price assumptions – results update instantly. The calculator is for initial orientation; a binding assessment requires review of your specific project.",
] as const;

export const ERLOESRECHNER_SCOPE_NOTE =
  "Currently only GHG quota revenue for green hydrogen is calculated. Extensions for EU ETS I and nEHS are planned.";

export const CALCULATOR_LIABILITY_DISCLAIMER =
  "Disclaimer: Calculated values are for non-binding orientation only. FuelCert assumes no liability for accuracy, completeness or timeliness of results and is not liable for decisions or damages based on this calculator.";

export const ERLOESRECHNER_ASSUMPTIONS_HEADING = "Assumptions and notes";

export const ERLOESRECHNER_ASSUMPTIONS = [
  "Based on a fossil reference value of 94 gCO₂/MJ, a calorific value of 120 MJ/kg H₂, and the annual GHG quota and year factor under the applicable regulatory framework.",
  "For fuel cell vehicles an efficiency factor of 0.4 is applied; the RFNBO sub-quota is calculated independently of the chosen drivetrain.",
  "Results are indicative. Actual market prices, proof management, certification and project-specific regulation may differ from achievable revenue.",
  "FuelCert supports detailed assessment of revenue potential, certification, proof management and implementation under the GHG quota system.",
] as const;

export const ERLOESRECHNER_CTA = {
  heading: "Want a concrete assessment of revenue potential for your project?",
  text: "We support you in classifying regulatory requirements, certification and practical implementation under the GHG quota system.",
} as const;

export const ERLOESRECHNER_TEASER = {
  slug: "erloesrechner",
  title: "Revenue calculator hydrogen (RFNBO)",
  description: "Interactive estimate of revenue potential for green hydrogen (RFNBO) under the GHG quota.",
  href: "/wissen/erloesrechner",
} as const;
