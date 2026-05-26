import type { Metadata } from "next";
import { AboutHighlights } from "@/components/AboutHighlights";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TeamSection } from "@/components/TeamSection";
import {
  UEBER_UNS_CTA,
  UEBER_UNS_HIGHLIGHTS,
  UEBER_UNS_INTRO,
  UEBER_UNS_PUBLICATIONS,
  UEBER_UNS_SEO,
} from "@/lib/ueber-uns";
import { UEBER_UNS_TEAM } from "@/lib/ueber-uns-team";

export const metadata: Metadata = {
  title: UEBER_UNS_SEO.title,
  description: UEBER_UNS_SEO.metaDescription,
};

export default function UeberUnsPage() {
  return (
    <ServicePageLayout
      kicker="FuelCert"
      title={UEBER_UNS_SEO.h1}
      backHref="/"
      backLabel="Zur Startseite"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Über uns" },
      ]}
    >
      {UEBER_UNS_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"}
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block" aria-labelledby="about-highlights-heading">
        <h2 id="about-highlights-heading" className="subpage__heading">
          Was FuelCert ausmacht
        </h2>
        <AboutHighlights highlights={UEBER_UNS_HIGHLIGHTS} />
      </section>

      <TeamSection members={UEBER_UNS_TEAM} />

      <PublicationsSection publications={UEBER_UNS_PUBLICATIONS} />

      <ServiceCtaSection id="about-cta" {...UEBER_UNS_CTA} />
    </ServicePageLayout>
  );
}
