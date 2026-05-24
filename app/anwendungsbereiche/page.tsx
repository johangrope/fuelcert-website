import type { Metadata } from "next";
import { GroupedTeaserSection } from "@/components/GroupedTeaserSection";
import { OverviewPageLayout } from "@/components/OverviewPageLayout";
import {
  ANWENDUNGEN_OVERVIEW,
  getAnwendungenProductTeasers,
  getAnwendungenRegulatoryTeasers,
} from "@/lib/anwendungsbereiche";

export const metadata: Metadata = {
  title: ANWENDUNGEN_OVERVIEW.title,
  description: ANWENDUNGEN_OVERVIEW.metaDescription,
};

export default function AnwendungsbereicheOverviewPage() {
  return (
    <OverviewPageLayout
      {...ANWENDUNGEN_OVERVIEW}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Anwendungsbereiche" },
      ]}
    >
      <GroupedTeaserSection
        title="Regulatorische Bereiche"
        intro="Platzhalter: Märkte, Quoten und Emissionshandelssysteme – mit typischen Fragestellungen für Produzenten, Händler und Pflichtige."
        items={getAnwendungenRegulatoryTeasers()}
      />
      <GroupedTeaserSection
        title="Produktbezogene Bereiche"
        intro="Platzhalter: Wasserstoff und Derivate, Biomethan und Bio-LNG sowie RFNBO und E-Fuels – fokussiert auf produktbezogene Compliance."
        items={getAnwendungenProductTeasers()}
      />
    </OverviewPageLayout>
  );
}
