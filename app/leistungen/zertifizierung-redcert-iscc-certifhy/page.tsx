import type { Metadata } from "next";
import { CertificationProcessGraphic } from "@/components/CertificationProcessGraphic";
import { RelatedTopicsSection } from "@/components/RelatedTopicsSection";
import { ServiceBulletList } from "@/components/ServiceBulletList";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import {
  ZERTIFIZIERUNG_INTRO,
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
      </section>

      <section className="service-block" aria-labelledby="service-process-heading">
        <h2 id="service-process-heading" className="subpage__heading">
          So begleiten wir den Zertifizierungsprozess
        </h2>
        <CertificationProcessGraphic />
        <p className="subpage__text service-page__process-note">
          Von der ersten Datenerfassung bis zur Rezertifizierung begleiten wir Sie Schritt für Schritt – mit
          klaren Verantwortlichkeiten, abgestimmt auf Prüfstelle und Unternehmen.
        </p>
      </section>

      <RelatedTopicsSection topics={[...ZERTIFIZIERUNG_RELATED_TOPICS]} />

      <ServiceCtaSection
        heading="Sie planen eine Zertifizierung nach REDcert, ISCC EU oder CertifHy?"
        text="Sprechen Sie mit uns über Ihr Projekt – wir klären Ausgangslage, Systemwahl und den nächsten sinnvollen Schritt."
      />
    </ServicePageLayout>
  );
}
