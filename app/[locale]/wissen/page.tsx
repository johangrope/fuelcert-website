import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { OverviewPageLayout } from "@/components/OverviewPageLayout";
import { TeaserGrid } from "@/components/TeaserGrid";
import { routing } from "@/i18n/routing";
import { homeCrumb } from "@/lib/i18n/breadcrumbs";
import { getLocalizedWissenOverview, getLocalizedWissenTeasers } from "@/lib/i18n/content-access";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const overview = await getLocalizedWissenOverview(locale as "de" | "en");
  return {
    title: overview.title,
    description: overview.metaDescription,
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function WissenOverviewPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const overview = await getLocalizedWissenOverview(locale as "de" | "en");
  const teasers = await getLocalizedWissenTeasers(locale as "de" | "en");
  const home = await homeCrumb();

  return (
    <OverviewPageLayout
      {...overview}
      breadcrumbs={[home, { label: overview.kicker }]}
    >
      <TeaserGrid items={teasers} />
    </OverviewPageLayout>
  );
}
