import type { LeistungSlug } from "@/lib/leistungen";
import type { OverviewPageConfig, PageScaffold } from "@/lib/types";

export const LEISTUNGEN_OVERVIEW: OverviewPageConfig = {
  title: "Services | FuelCert",
  metaDescription:
    "Overview of pre-certification, certification, proof management, register operations, CO₂ and quota trading, and reporting obligations for renewable fuels.",
  kicker: "Services",
  h1: "Five service areas along regulatory implementation",
  intro:
    "From pre-certification through certification, proofs and registers to market mechanisms and reporting – FuelCert structures your implementation along these fields.",
};

export const LEISTUNGEN_CARD_TEASERS: Record<LeistungSlug, { title: string; description: string }> = {
  "pre-zertifizierung": {
    title: "Pre-certification",
    description:
      "Dress rehearsal with a certification body under REDcert, ISCC EU or CertifHy – FuelCert accompanies, the body assesses RFNBO conformity.",
  },
  "zertifizierung-redcert-iscc-certifhy": {
    title: "Certification",
    description:
      "REDcert, ISCC EU and CertifHy – from preparation through audit to recertification, audit-ready and structured.",
  },
  "nachweisfuehrung-und-register": {
    title: "Proof management and registers",
    description:
      "Mass and GHG balances, Nabisy and UDB, and submissions to registers and authorities in ongoing operations.",
  },
  "co2-und-quotenhandel": {
    title: "CO₂ and quota trading",
    description:
      "Classification of GHG quota and emissions trading plus support with market mechanisms and contracts.",
  },
  "berichterstattung-und-meldepflichten": {
    title: "Reports and reporting obligations",
    description:
      "Reports, deadlines and submissions to authorities – e.g. in the context of DEHSt and the quota office.",
  },
};

const leistungen: Record<LeistungSlug, PageScaffold & { sectionId: string }> = {
  "pre-zertifizierung": {
    slug: "pre-zertifizierung",
    sectionId: "leistung-pre-zertifizierung",
    menuLabel: "Pre-certification",
    title: "Pre-certification for RFNBO projects",
    metaDescription:
      "Pre-certification under REDcert, ISCC EU or CertifHy – FuelCert supports RFNBO projects as a dress rehearsal before certification; the certification body conducts the audit.",
    intro:
      "FuelCert supports pre-certification of RFNBO projects in planning or construction – with robust classification for investment, bank financing and funding decisions.",
    sections: [{ heading: "Service overview", body: "Details are on the pre-certification service page." }],
  },
  "zertifizierung-redcert-iscc-certifhy": {
    slug: "zertifizierung-redcert-iscc-certifhy",
    sectionId: "leistung-zertifizierung",
    menuLabel: "Certification",
    title: "Certification: REDcert, ISCC EU or CertifHy",
    metaDescription:
      "FuelCert supports certification under REDcert, ISCC EU and CertifHy – from data preparation and GHG/mass balance to audit preparation, audit support and recertification.",
    intro:
      "FuelCert supports certification under REDcert, ISCC EU and CertifHy – for biofuels, biomethane, bio-LNG, RFNBO, green hydrogen, derivatives and e-fuels, audit-ready and structured.",
    sections: [
      { heading: "Systems and scope", body: "Brief placeholder on REDcert, ISCC EU and CertifHy and typical use cases." },
      { heading: "Implementation", body: "Placeholder for approach from initial setup to recurring audit." },
    ],
  },
  "nachweisfuehrung-und-register": {
    slug: "nachweisfuehrung-und-register",
    sectionId: "leistung-nachweisfuehrung",
    menuLabel: "Proof management and registers",
    title: "Proof management and register operations for renewable fuels",
    metaDescription:
      "FuelCert supports mass and GHG balances, proof management, Nabisy and UDB register operations, and submissions to registers and authorities.",
    intro:
      "FuelCert supports ongoing proof management and register operations – from mass and GHG balances through Nabisy and UDB to submissions to authorities.",
    sections: [{ heading: "Service overview", body: "Details are on the proof management and register page." }],
  },
  "co2-und-quotenhandel": {
    slug: "co2-und-quotenhandel",
    sectionId: "leistung-co2-quotenhandel",
    menuLabel: "CO₂ and quota trading",
    title: "CO₂ and quota trading",
    metaDescription:
      "FuelCert supports GHG quota, EU ETS I and nEHS – with market experience, buyer and trader networks, and expert assessment of marketing and contracts.",
    intro:
      "FuelCert supports classification and use of regulatory CO₂ and quota markets – in particular GHG quota, EU ETS I and nEHS.",
    sections: [{ heading: "Service overview", body: "Details are on the CO₂ and quota trading page." }],
  },
  "berichterstattung-und-meldepflichten": {
    slug: "berichterstattung-und-meldepflichten",
    sectionId: "leistung-berichterstattung",
    menuLabel: "Reports and reporting obligations",
    title: "Reports and reporting obligations",
    metaDescription:
      "FuelCert supports reporting, submission and surrender obligations under GHG quota, EU ETS I and nEHS – structured, on time and audit-ready.",
    intro:
      "FuelCert supports reporting, submission and surrender obligations under GHG quota, EU ETS I and nEHS – from data preparation to timely submission.",
    sections: [{ heading: "Service overview", body: "Details are on the reports and reporting obligations page." }],
  },
};

export function getEnLeistung(slug: string) {
  return leistungen[slug as LeistungSlug];
}
