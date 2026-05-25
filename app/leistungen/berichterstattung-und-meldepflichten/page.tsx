import type { Metadata } from "next";
import { RelatedTopicsSection } from "@/components/RelatedTopicsSection";
import { ServiceBulletGroups } from "@/components/ServiceBulletGroups";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import {
  BERICHTERSTATTUNG_CTA_END,
  BERICHTERSTATTUNG_CTA_MID,
  BERICHTERSTATTUNG_IMPLEMENTATION,
  BERICHTERSTATTUNG_INTRO,
  BERICHTERSTATTUNG_RELATED_TOPICS,
  BERICHTERSTATTUNG_SEO,
  BERICHTERSTATTUNG_SERVICE_GROUPS,
  BERICHTERSTATTUNG_SERVICES_INTRO,
} from "@/lib/leistungen-berichterstattung";

export const metadata: Metadata = {
  title: BERICHTERSTATTUNG_SEO.title,
  description: BERICHTERSTATTUNG_SEO.metaDescription,
};

export default function BerichterstattungPage() {
  return (
    <ServicePageLayout
      kicker="Leistungen"
      title={BERICHTERSTATTUNG_SEO.h1}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Leistungen", href: "/leistungen" },
        { label: "Berichte und Meldepflichten" },
      ]}
    >
      <p className="subpage__lead service-page__intro">{BERICHTERSTATTUNG_INTRO}</p>

      <section className="service-block" aria-labelledby="berichte-services-heading">
        <h2 id="berichte-services-heading" className="subpage__heading">
          Was wir bei Berichts- und Meldepflichten übernehmen
        </h2>
        <p className="subpage__text">{BERICHTERSTATTUNG_SERVICES_INTRO}</p>
        <ServiceBulletGroups groups={BERICHTERSTATTUNG_SERVICE_GROUPS} />
        <ServiceCtaSection id="service-cta-mid" variant="subtle" heading={BERICHTERSTATTUNG_CTA_MID.heading} />
      </section>

      <section className="service-block" aria-labelledby="berichte-implementation-heading">
        <h2 id="berichte-implementation-heading" className="subpage__heading">
          So begleiten wir die Umsetzung
        </h2>
        {BERICHTERSTATTUNG_IMPLEMENTATION.map((paragraph, i) => (
          <p key={i} className="subpage__text">
            {paragraph}
          </p>
        ))}
      </section>

      <RelatedTopicsSection topics={[...BERICHTERSTATTUNG_RELATED_TOPICS]} />

      <ServiceCtaSection id="service-cta-end" {...BERICHTERSTATTUNG_CTA_END} />
    </ServicePageLayout>
  );
}
