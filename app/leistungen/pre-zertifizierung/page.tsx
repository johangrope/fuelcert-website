import type { Metadata } from "next";
import { RelatedTopicsSection } from "@/components/RelatedTopicsSection";
import { ServiceBulletList } from "@/components/ServiceBulletList";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import {
  PRE_ZERTIFIZIERUNG_CTA,
  PRE_ZERTIFIZIERUNG_INTRO,
  PRE_ZERTIFIZIERUNG_RELATED_TOPICS,
  PRE_ZERTIFIZIERUNG_SEO,
  PRE_ZERTIFIZIERUNG_SERVICES,
  PRE_ZERTIFIZIERUNG_SERVICES_HEADING,
  PRE_ZERTIFIZIERUNG_SERVICES_INTRO,
  PRE_ZERTIFIZIERUNG_VARIANTS,
  PRE_ZERTIFIZIERUNG_VARIANTS_HEADING,
} from "@/lib/leistungen-pre-zertifizierung";

export const metadata: Metadata = {
  title: PRE_ZERTIFIZIERUNG_SEO.title,
  description: PRE_ZERTIFIZIERUNG_SEO.metaDescription,
};

export default function PreZertifizierungPage() {
  return (
    <ServicePageLayout
      kicker="Leistungen"
      title={PRE_ZERTIFIZIERUNG_SEO.h1}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Leistungen", href: "/leistungen" },
        { label: "Pre-Zertifizierung" },
      ]}
    >
      {PRE_ZERTIFIZIERUNG_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={
            i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"
          }
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block" aria-labelledby="pre-zert-services-heading">
        <h2 id="pre-zert-services-heading" className="subpage__heading">
          {PRE_ZERTIFIZIERUNG_SERVICES_HEADING}
        </h2>
        <p className="subpage__text">{PRE_ZERTIFIZIERUNG_SERVICES_INTRO}</p>
        <ServiceBulletList items={[...PRE_ZERTIFIZIERUNG_SERVICES]} />
        <ServiceCtaSection id="pre-zert-cta-mid" variant="subtle" heading={PRE_ZERTIFIZIERUNG_CTA.heading} />
      </section>

      <section className="service-block" aria-labelledby="pre-zert-variants-heading">
        <h2 id="pre-zert-variants-heading" className="subpage__heading">
          {PRE_ZERTIFIZIERUNG_VARIANTS_HEADING}
        </h2>
        <div className="about-highlights">
          {PRE_ZERTIFIZIERUNG_VARIANTS.map((variant) => (
            <article key={variant.title} className="about-highlight">
              <h3 className="about-highlight__title">{variant.title}</h3>
              <p className="about-highlight__text">{variant.text}</p>
            </article>
          ))}
        </div>
      </section>

      <RelatedTopicsSection topics={[...PRE_ZERTIFIZIERUNG_RELATED_TOPICS]} />

      <ServiceCtaSection id="pre-zert-cta" {...PRE_ZERTIFIZIERUNG_CTA} />
    </ServicePageLayout>
  );
}
