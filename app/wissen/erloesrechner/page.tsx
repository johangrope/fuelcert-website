import type { Metadata } from "next";
import { ErloesrechnerCalculator } from "@/components/ErloesrechnerCalculator";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import {
  ERLOESRECHNER_ASSUMPTIONS,
  ERLOESRECHNER_ASSUMPTIONS_HEADING,
  ERLOESRECHNER_CTA,
  ERLOESRECHNER_INTRO,
  ERLOESRECHNER_SEO,
} from "@/lib/erloesrechner-content";

export const metadata: Metadata = {
  title: ERLOESRECHNER_SEO.title,
  description: ERLOESRECHNER_SEO.metaDescription,
};

export default function ErloesrechnerPage() {
  return (
    <ServicePageLayout
      kicker="Wissen"
      title={ERLOESRECHNER_SEO.h1}
      wide
      backHref="/wissen"
      backLabel="Zurück zur Wissensübersicht"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Wissen", href: "/wissen" },
        { label: "Erlösrechner" },
      ]}
    >
      {ERLOESRECHNER_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={
            i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"
          }
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block erloesrechner-section" aria-label="Erlösrechner">
        <ErloesrechnerCalculator />
      </section>

      <section className="service-block" aria-labelledby="erloesrechner-assumptions-heading">
        <h2 id="erloesrechner-assumptions-heading" className="subpage__heading">
          {ERLOESRECHNER_ASSUMPTIONS_HEADING}
        </h2>
        <ul className="erloesrechner__assumptions-list">
          {ERLOESRECHNER_ASSUMPTIONS.map((item) => (
            <li key={item} className="subpage__text">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <ServiceCtaSection id="erloesrechner-cta" {...ERLOESRECHNER_CTA} />
    </ServicePageLayout>
  );
}
