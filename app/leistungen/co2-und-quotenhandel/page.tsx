import type { Metadata } from "next";
import { RelatedTopicsSection } from "@/components/RelatedTopicsSection";
import { ServiceBulletList } from "@/components/ServiceBulletList";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import {
  CO2_QUOTENHANDEL_CTA,
  CO2_QUOTENHANDEL_INTRO,
  CO2_QUOTENHANDEL_RELATED_TOPICS,
  CO2_QUOTENHANDEL_SEO,
  CO2_QUOTENHANDEL_SERVICES,
} from "@/lib/leistungen-co2-quotenhandel";

export const metadata: Metadata = {
  title: CO2_QUOTENHANDEL_SEO.title,
  description: CO2_QUOTENHANDEL_SEO.metaDescription,
};

export default function Co2QuotenhandelPage() {
  return (
    <ServicePageLayout
      kicker="Leistungen"
      title={CO2_QUOTENHANDEL_SEO.h1}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Leistungen", href: "/leistungen" },
        { label: "CO₂- und Quotenhandel" },
      ]}
    >
      {CO2_QUOTENHANDEL_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"}
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block" aria-labelledby="co2-services-heading">
        <h2 id="co2-services-heading" className="subpage__heading">
          Was wir im CO₂- und Quotenhandel übernehmen
        </h2>
        <p className="subpage__text">
          Wir unterstützen Sie dort, wo Marktlogik, Regulatorik und Vertragspraxis zusammenlaufen – von der
          Einordnung der Märkte bis zur Vorbereitung konkreter Geschäfte.
        </p>
        <ServiceBulletList items={[...CO2_QUOTENHANDEL_SERVICES]} />
        <ServiceCtaSection id="service-cta-mid" variant="subtle" heading={CO2_QUOTENHANDEL_CTA.heading} />
      </section>

      <section className="service-block" aria-labelledby="co2-market-heading">
        <h2 id="co2-market-heading" className="subpage__heading">
          Marktzugang, Netzwerk und Erfahrung
        </h2>
        <p className="subpage__text">
          FuelCert verfügt über mehrjährige Erfahrung in CO₂- und Quotenmärkten – insbesondere bei THG-Quote,
          ETS I und nEHS – und bringt langjährige Praxis aus früherer eigener Marktteilnahme im
          Quotenmarkt mit. Über unser Netzwerk zu Käufern von THG-Quoten, Händlern und Brokern können wir
          Marktzugang anbahnen – direkt oder über passende Marktpartner. FuelCert handelt unabhängig und ist
          kein klassischer Broker; wir unterstützen die Einordnung, Anbahnung und Strukturierung, ohne selbst
          als Handelsplattform aufzutreten.
        </p>
      </section>

      <section className="service-block" aria-labelledby="co2-revenue-heading">
        <h2 id="co2-revenue-heading" className="subpage__heading">
          Was erlöst mein Produkt – und warum?
        </h2>
        <p className="subpage__text">
          Erlöse aus CO₂- und Quotenmärkten hängen von regulatorischer Anrechenbarkeit, Nachweisqualität,
          Nachfrage und den jeweiligen Marktmechanismen ab. FuelCert hilft, Vermarktungsoptionen und
          Erlöspotenziale realistisch einzuordnen – auf Basis belastbarer Daten, klarer Regelwerke und
          aktueller Marktlage, nicht auf Basis vager Versprechen.
        </p>
      </section>

      <section className="service-block" aria-labelledby="co2-contracts-heading">
        <h2 id="co2-contracts-heading" className="subpage__heading">
          Unterstützung bei Handelsgeschäften und Vertragsinhalten
        </h2>
        <p className="subpage__text">
          FuelCert unterstützt die Vorbereitung und fachliche Strukturierung wirtschaftlicher Geschäfte im
          Quoten- und Zertifikatsumfeld. Dazu gehört die Einordnung marktüblicher Vertragsmechanismen und
          vertraglicher Details aus der Perspektive von Marktlogik, Nachweisführung und regulatorischer
          Umsetzung – fundiert durch Praxiserfahrung, nicht durch allgemeine Beratungsfloskeln.
        </p>
        <p className="subpage__text subpage__text--muted">
          FuelCert ist keine Kanzlei und erteilt keine Rechtsberatung. Vertragliche Inhalte bewerten wir
          fachlich und marktbezogen; für rechtliche Bewertungen wenden Sie sich an Ihre Rechtsberatung.
        </p>
      </section>

      <RelatedTopicsSection topics={[...CO2_QUOTENHANDEL_RELATED_TOPICS]} />

      <ServiceCtaSection id="service-cta-end" {...CO2_QUOTENHANDEL_CTA} />
    </ServicePageLayout>
  );
}
