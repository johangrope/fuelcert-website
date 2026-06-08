import type { AnwendungSlug } from "@/lib/anwendungsbereiche";
import type { OverviewPageConfig, PageScaffold } from "@/lib/types";

export const ANWENDUNGEN_OVERVIEW: OverviewPageConfig = {
  title: "Application areas | FuelCert",
  metaDescription:
    "Regulatory and product-related application areas for renewable fuels, hydrogen, RFNBO and biomethane.",
  kicker: "Application areas",
  h1: "Application areas",
  intro:
    "Where do certification, proof management and market mechanisms fit your business model? The following areas are grouped into regulatory contexts and product-focused topics.",
};

const pages: Record<AnwendungSlug, PageScaffold & { category: "regulatory" | "product" }> = {
  "thg-quote": {
    slug: "thg-quote",
    category: "regulatory",
    menuLabel: "GHG quota",
    title: "GHG quota",
    metaDescription: "Application area German greenhouse gas quota for renewable fuels.",
    intro: "Classification of the GHG quota and typical compliance requirements for fuel suppliers.",
    sections: [{ heading: "Focus areas", body: "Placeholder for services and market entry points." }],
  },
  "emissionshandel-ets-1": {
    slug: "emissionshandel-ets-1",
    category: "regulatory",
    menuLabel: "Emissions trading (EU ETS I)",
    title: "Emissions trading (EU ETS I)",
    metaDescription: "Application area EU emissions trading (ETS I).",
    intro: "Link to allowances, reporting obligations and fuel-related aspects in EU ETS I.",
    sections: [{ heading: "Focus areas", body: "Placeholder for typical questions and support." }],
  },
  "emissionshandel-nehs": {
    slug: "emissionshandel-nehs",
    category: "regulatory",
    menuLabel: "National emissions trading (nEHS)",
    title: "National emissions trading (nEHS)",
    metaDescription: "Application area national emissions trading (nEHS).",
    intro: "Classification of nEHS and interfaces with fuels and energy carriers.",
    sections: [{ heading: "Focus areas", body: "Placeholder for advisory focus in this segment." }],
  },
  "esg-und-nachhaltigkeitsnachweise": {
    slug: "esg-und-nachhaltigkeitsnachweise",
    category: "regulatory",
    menuLabel: "ESG and sustainability reporting",
    title: "ESG and sustainability reporting",
    metaDescription: "ESG reporting and sustainability proofs in the energy context.",
    intro: "Link between regulatory proofs and ESG requirements.",
    sections: [{ heading: "Focus areas", body: "Placeholder for data, proofs and reporting." }],
  },
  "wasserstoff-und-derivate": {
    slug: "wasserstoff-und-derivate",
    category: "product",
    menuLabel: "Hydrogen and derivatives",
    title: "Hydrogen and derivatives",
    metaDescription: "Certification and compliance for green hydrogen and derivatives.",
    intro: "Focus areas for hydrogen projects, proofs and certification systems.",
    sections: [{ heading: "Focus areas", body: "Placeholder for typical project and market questions." }],
  },
  rfnbo: {
    slug: "rfnbo",
    category: "product",
    menuLabel: "RFNBO and e-fuels",
    title: "RFNBO and e-fuels",
    metaDescription: "RFNBO and e-fuels – requirements, certification and proof management.",
    intro: "Classification of RFNBO and e-fuels under RED III and operational implementation questions.",
    sections: [{ heading: "Focus areas", body: "Placeholder for balancing, certification and markets." }],
  },
  "biomethan-und-bio-lng": {
    slug: "biomethan-und-bio-lng",
    category: "product",
    menuLabel: "Biomethane and bio-LNG",
    title: "Biomethane and bio-LNG",
    metaDescription: "Biomethane and bio-LNG – certification and regulatory classification.",
    intro: "Focus areas for biomethane and bio-LNG supply chains and proofs.",
    sections: [{ heading: "Focus areas", body: "Placeholder for typical compliance topics." }],
  },
};

export function getEnAnwendung(slug: string) {
  return pages[slug as AnwendungSlug];
}
