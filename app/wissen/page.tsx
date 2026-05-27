import type { Metadata } from "next";
import { OverviewPageLayout } from "@/components/OverviewPageLayout";
import { TeaserGrid } from "@/components/TeaserGrid";
import { ERLOESRECHNER_TEASER } from "@/lib/erloesrechner-content";
import { WISSEN_OVERVIEW, getWissenOverviewTeasers } from "@/lib/wissen";

export const metadata: Metadata = {
  title: WISSEN_OVERVIEW.title,
  description: WISSEN_OVERVIEW.metaDescription,
};

export default function WissenOverviewPage() {
  return (
    <OverviewPageLayout
      {...WISSEN_OVERVIEW}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Wissen" },
      ]}
    >
      <TeaserGrid items={[ERLOESRECHNER_TEASER, ...getWissenOverviewTeasers()]} />
    </OverviewPageLayout>
  );
}
