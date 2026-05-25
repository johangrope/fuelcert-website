import type { Metadata } from "next";
import { LeistungenTeaserGrid } from "@/components/LeistungenTeaserGrid";
import { OverviewPageLayout } from "@/components/OverviewPageLayout";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { LEISTUNGEN_OVERVIEW } from "@/lib/leistungen";

export const metadata: Metadata = {
  title: LEISTUNGEN_OVERVIEW.title,
  description: LEISTUNGEN_OVERVIEW.metaDescription,
};

export default function LeistungenOverviewPage() {
  return (
    <OverviewPageLayout
      {...LEISTUNGEN_OVERVIEW}
      innerClassName="subpage__inner--leistungen"
      showFooterCta={false}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Leistungen" },
      ]}
    >
      <LeistungenTeaserGrid />

      <ServiceCtaSection
        heading="Sie möchten klären, welche Unterstützung für Ihr Projekt relevant ist?"
        text="Wir ordnen Ihre Ausgangslage ein und zeigen, welche Leistungsbereiche für Ihr Vorhaben in Frage kommen."
        buttonLabel="Erstgespräch vereinbaren"
        href="/kontakt"
      />
    </OverviewPageLayout>
  );
}
