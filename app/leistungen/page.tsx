import type { Metadata } from "next";
import { OverviewPageLayout } from "@/components/OverviewPageLayout";
import { TeaserGrid } from "@/components/TeaserGrid";
import { LEISTUNGEN_OVERVIEW, getLeistungenOverviewTeasers } from "@/lib/leistungen";

export const metadata: Metadata = {
  title: LEISTUNGEN_OVERVIEW.title,
  description: LEISTUNGEN_OVERVIEW.metaDescription,
};

export default function LeistungenOverviewPage() {
  return (
    <OverviewPageLayout
      {...LEISTUNGEN_OVERVIEW}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Leistungen" },
      ]}
    >
      <TeaserGrid items={getLeistungenOverviewTeasers()} />
    </OverviewPageLayout>
  );
}
