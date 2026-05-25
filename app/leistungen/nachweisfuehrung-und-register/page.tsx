import type { Metadata } from "next";
import { RelatedTopicsSection } from "@/components/RelatedTopicsSection";
import { ServiceBulletList } from "@/components/ServiceBulletList";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import {
  NACHWEISFUEHRUNG_CTA,
  NACHWEISFUEHRUNG_INTRO,
  NACHWEISFUEHRUNG_RELATED_TOPICS,
  NACHWEISFUEHRUNG_SEO,
  NACHWEISFUEHRUNG_SERVICES,
} from "@/lib/leistungen-nachweisfuehrung";

export const metadata: Metadata = {
  title: NACHWEISFUEHRUNG_SEO.title,
  description: NACHWEISFUEHRUNG_SEO.metaDescription,
};

export default function NachweisfuehrungPage() {
  return (
    <ServicePageLayout
      kicker="Leistungen"
      title={NACHWEISFUEHRUNG_SEO.h1}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Leistungen", href: "/leistungen" },
        { label: "Nachweisführung und Registerführung" },
      ]}
    >
      {NACHWEISFUEHRUNG_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"}
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block" aria-labelledby="nachweis-services-heading">
        <h2 id="nachweis-services-heading" className="subpage__heading">
          Was wir bei Nachweisführung und Registerführung übernehmen
        </h2>
        <p className="subpage__text">
          Wir übernehmen die operativen Schritte der Nachweisführung – von der Bilanzierung über die
          Nachweisausstellung bis zur Registerbuchung und Meldung an Behörden. So bleiben Ihre Prozesse
          nachvollziehbar, fristgerecht und im Alltag beherrschbar.
        </p>
        <ServiceBulletList items={[...NACHWEISFUEHRUNG_SERVICES]} />
        <ServiceCtaSection id="service-cta-mid" variant="subtle" heading={NACHWEISFUEHRUNG_CTA.heading} />
      </section>

      <section className="service-block" aria-labelledby="nachweis-bilanzen-heading">
        <h2 id="nachweis-bilanzen-heading" className="subpage__heading">
          Massen- und THG-Bilanzen belastbar und systemkonform erstellen
        </h2>
        <p className="subpage__text">
          Eine belastbare Nachweisführung basiert auf konsistenter, nachvollziehbarer und systemkonformer
          Bilanzierung. FuelCert erstellt monatliche oder quartalsweise Massen- und THG-Bilanzen und stellt
          sicher, dass die zugrunde liegenden Daten aufbereitet, geprüft und dokumentiert werden.
        </p>
      </section>

      <section className="service-block" aria-labelledby="nachweis-daten-heading">
        <h2 id="nachweis-daten-heading" className="subpage__heading">
          Datenbereitstellung mit möglichst geringem Aufwand für Ihr Unternehmen
        </h2>
        <p className="subpage__text">
          Nicht jedes Unternehmen liefert Daten auf die gleiche Weise. FuelCert definiert und etabliert
          Datenprozesse, die zu Ihrer tatsächlichen Situation passen – mit möglichst geringem internen Aufwand,
          aber ohne Kompromisse bei Zuverlässigkeit und Prüfbarkeit.
        </p>
      </section>

      <section className="service-block" aria-labelledby="nachweis-register-heading">
        <h2 id="nachweis-register-heading" className="subpage__heading">
          Registerführung in Nabisy, UDB und weiteren Systemen
        </h2>
        <p className="subpage__text">
          FuelCert unterstützt die Führung relevanter Registerkonten – etwa in Nabisy und der Unionsdatenbank
          (UDB). Dazu gehören Registrierung, Mengenmeldungen, Buchungen, Fristenüberwachung und die Umsetzung
          regulatorischer Neuerungen. Wir können diese Prozesse übernehmen oder Ihr internes Team gezielt
          begleiten.
        </p>
      </section>

      <section className="service-block" aria-labelledby="nachweis-meldungen-heading">
        <h2 id="nachweis-meldungen-heading" className="subpage__heading">
          Nachweise und Meldungen an Register und Behörden
        </h2>
        <p className="subpage__text">
          FuelCert unterstützt bei der Ausstellung von Nachhaltigkeitsnachweisen und bei der Übermittlung der
          erforderlichen Daten an Register und Behörden. Dazu gehört je nach Anwendungsfall etwa die
          Bereitstellung von RFNBO-Nachweisen gegenüber dem Umweltbundesamt oder die systemkonforme Buchung von
          Mengen in Registern wie z. B. Nabisy und der Unionsdatenbank. So stellen wir sicher, dass Nachweise
          nicht nur erstellt, sondern auch formal und operativ korrekt eingereicht werden.
        </p>
      </section>

      <section className="service-block" aria-labelledby="nachweis-aenderungen-heading">
        <h2 id="nachweis-aenderungen-heading" className="subpage__heading">
          Wenn sich Projekte oder Regulierung ändern
        </h2>
        <p className="subpage__text">
          Nachweisführung und Registerprozesse sind nicht statisch. Änderungen in Projektstruktur,
          Materialströmen, Verantwortlichkeiten oder Regulatorik können Anpassungen an Bilanzierungs- und
          Dokumentationslogiken erforderlich machen. FuelCert begleitet Sie auch bei solchen Updates – damit
          Ihre Prozesse belastbar bleiben.
        </p>
      </section>

      <RelatedTopicsSection topics={[...NACHWEISFUEHRUNG_RELATED_TOPICS]} />

      <ServiceCtaSection id="service-cta-end" {...NACHWEISFUEHRUNG_CTA} />
    </ServicePageLayout>
  );
}
