import type { WissenSlug } from "@/lib/wissen";
import type { OverviewPageConfig, PageScaffold } from "@/lib/types";

export const WISSEN_OVERVIEW: OverviewPageConfig = {
  title: "Knowledge | FuelCert",
  metaDescription:
    "Fundamentals on RFNBO, REDcert, ISCC EU, CertifHy, GHG and mass balance, and UDB, Nabisy and register management.",
  kicker: "Knowledge",
  h1: "Knowledge",
  intro:
    "Curated insights on key terms and processes – as a basis for in-depth advisory and content development.",
};

const articles: Record<WissenSlug, PageScaffold> = {
  "rfnbo-zertifizierung": {
    slug: "rfnbo-zertifizierung",
    menuLabel: "RFNBO certification",
    title: "RFNBO certification",
    metaDescription: "Fundamentals of RFNBO certification.",
    intro: "What companies should typically consider for RFNBO certification.",
    sections: [{ heading: "Overview", body: "Placeholder for in-depth content." }],
  },
  "redcert-iscc-certifhy-unterschiede": {
    slug: "redcert-iscc-certifhy-unterschiede",
    menuLabel: "REDcert, ISCC EU and CertifHy",
    title: "REDcert, ISCC EU and CertifHy",
    metaDescription: "Comparison of REDcert, ISCC EU and CertifHy.",
    intro: "Brief overview of differences and selection criteria for certification systems.",
    sections: [{ heading: "System comparison", body: "Placeholder for structured content." }],
  },
  "thg-und-massenbilanz": {
    slug: "thg-und-massenbilanz",
    menuLabel: "GHG and mass balance",
    title: "GHG and mass balance",
    metaDescription: "GHG and mass balance in the context of renewable fuels.",
    intro: "Terms and relationships in compact form.",
    sections: [{ heading: "Basics", body: "Placeholder for later development." }],
  },
  "udb-nabisy-und-registerfuehrung": {
    slug: "udb-nabisy-und-registerfuehrung",
    menuLabel: "UDB, Nabisy and register management",
    title: "UDB, Nabisy and register management",
    metaDescription: "UDB, Nabisy and register management.",
    intro: "Role of UDB, Nabisy and register management in practice.",
    sections: [{ heading: "Practice", body: "Placeholder for typical workflows." }],
  },
  "rfnbo-anforderungen-red-iii": {
    slug: "rfnbo-anforderungen-red-iii",
    menuLabel: "RFNBO requirements under RED III",
    title: "RFNBO requirements under RED III",
    metaDescription: "RED III and RFNBO.",
    intro: "Classification of key requirements and implementation areas.",
    sections: [{ heading: "Regulatory framework", body: "Placeholder for detailed content." }],
  },
};

export function getEnWissenArticle(slug: string) {
  return articles[slug as WissenSlug];
}
