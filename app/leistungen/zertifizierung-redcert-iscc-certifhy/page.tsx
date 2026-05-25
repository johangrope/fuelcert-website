import type { Metadata } from "next";
import { CertificationProcessGraphic } from "@/components/CertificationProcessGraphic";
import { RelatedTopicsSection } from "@/components/RelatedTopicsSection";
import { ServiceProcessFlow } from "@/components/ServiceProcessFlow";
import { ServiceBulletList } from "@/components/ServiceBulletList";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import {
  ZERTIFIZIERUNG_CTA,
  ZERTIFIZIERUNG_INTRO,
  ZERTIFIZIERUNG_PROCESS_INTRO,
  ZERTIFIZIERUNG_PROCESS_STEPS,
  ZERTIFIZIERUNG_RELATED_TOPICS,
  ZERTIFIZIERUNG_SEO,
  ZERTIFIZIERUNG_SERVICES,
} from "@/lib/leistungen-zertifizierung";

export const metadata: Metadata = {
  title: ZERTIFIZIERUNG_SEO.title,
  description: ZERTIFIZIERUNG_SEO.metaDescription,
};

export default function ZertifizierungPage() {
  return (
    <ServicePageLayout
      kicker="Leistungen"
      title={ZERTIFIZIERUNG_SEO.h1}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Leistungen", href: "/leistungen" },
        { label: "Zertifizierung" },
      ]}
    >
      {ZERTIFIZIERUNG_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"}
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block" aria-labelledby="service-scope-heading">
        <h2 id="service-scope-heading" className="subpage__heading">
          Was wir im Zertifizierungsprozess übernehmen
        </h2>
        <p className="subpage__text">
          Wir übernehmen die operativ anspruchsvollen Schritte im Zertifizierungsprozess – von der Datenerfassung
          über THG- und Massenbilanz bis zur Auditvorbereitung, Auditbegleitung und Rezertifizierung. So bleibt Ihr
          Team entlastet und der Prozess auditfest dokumentiert.
        </p>
        <ServiceBulletList items={[...ZERTIFIZIERUNG_SERVICES]} />
        <ServiceCtaSection id="service-cta-mid" variant="subtle" heading={ZERTIFIZIERUNG_CTA.heading} />
      </section>

      <section className="service-block" aria-labelledby="service-process-heading">
        <h2 id="service-process-heading" className="subpage__heading">
          So begleiten wir den Zertifizierungsprozess
        </h2>
        <p className="subpage__text">{ZERTIFIZIERUNG_PROCESS_INTRO}</p>
        <ServiceProcessFlow steps={ZERTIFIZIERUNG_PROCESS_STEPS} />
        <CertificationProcessGraphic />
        <p className="subpage__text service-page__process-note">
          Die Grafik zeigt die Einbettung in Wertschöpfungskette und Behördenkontext – der Ablauf oben
          beschreibt, wie FuelCert Sie operativ durch den Zertifizierungsprozess begleitet.
        </p>
      </section>

      <RelatedTopicsSection topics={[...ZERTIFIZIERUNG_RELATED_TOPICS]} />

      <ServiceCtaSection id="service-cta-end" {...ZERTIFIZIERUNG_CTA} />
    </ServicePageLayout>
  );
}
