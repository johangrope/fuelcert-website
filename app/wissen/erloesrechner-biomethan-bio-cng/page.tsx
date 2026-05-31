import type { Metadata } from "next";
import { ErloesrechnerBiomethanCalculator } from "@/components/ErloesrechnerBiomethanCalculator";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import {
  BIOMETHAN_ERLOESRECHNER_ASSUMPTIONS,
  BIOMETHAN_ERLOESRECHNER_ASSUMPTIONS_HEADING,
  BIOMETHAN_ERLOESRECHNER_CTA,
  BIOMETHAN_ERLOESRECHNER_INTRO,
  BIOMETHAN_ERLOESRECHNER_SEO,
} from "@/lib/erloesrechner-biomethan-content";

export const metadata: Metadata = {
  title: BIOMETHAN_ERLOESRECHNER_SEO.title,
  description: BIOMETHAN_ERLOESRECHNER_SEO.metaDescription,
};

export default function ErloesrechnerBiomethanPage() {
  return (
    <ServicePageLayout
      kicker="Wissen"
      title={BIOMETHAN_ERLOESRECHNER_SEO.h1}
      wide
      backHref="/wissen"
      backLabel="Zurück zur Wissensübersicht"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Wissen", href: "/wissen" },
        { label: "Erlösrechner Biomethan (Bio-CNG)" },
      ]}
    >
      {BIOMETHAN_ERLOESRECHNER_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={
            i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"
          }
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block erloesrechner-section" aria-label="Erlösrechner Biomethan">
        <ErloesrechnerBiomethanCalculator />
      </section>

      <section className="service-block" aria-labelledby="biomethan-assumptions-heading">
        <h2 id="biomethan-assumptions-heading" className="subpage__heading">
          {BIOMETHAN_ERLOESRECHNER_ASSUMPTIONS_HEADING}
        </h2>
        <ul className="erloesrechner__assumptions-list">
          {BIOMETHAN_ERLOESRECHNER_ASSUMPTIONS.map((item) => (
            <li key={item} className="subpage__text">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <ServiceCtaSection id="biomethan-erloesrechner-cta" {...BIOMETHAN_ERLOESRECHNER_CTA} />
    </ServicePageLayout>
  );
}
