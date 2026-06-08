import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { GroupedTeaserSection } from "@/components/GroupedTeaserSection";
import { OverviewPageLayout } from "@/components/OverviewPageLayout";
import { routing } from "@/i18n/routing";
import { homeCrumb } from "@/lib/i18n/breadcrumbs";
import {
  getLocalizedAnwendungenOverview,
  getLocalizedAnwendungenProductTeasers,
  getLocalizedAnwendungenRegulatoryTeasers,
} from "@/lib/i18n/content-access";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const overview = await getLocalizedAnwendungenOverview(locale as "de" | "en");
  return {
    title: overview.title,
    description: overview.metaDescription,
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AnwendungsbereicheOverviewPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const overview = await getLocalizedAnwendungenOverview(locale as "de" | "en");
  const t = await getTranslations("anwendungsbereiche");
  const home = await homeCrumb();

  return (
    <OverviewPageLayout
      {...overview}
      breadcrumbs={[home, { label: overview.kicker }]}
    >
      <GroupedTeaserSection
        title={t("regulatoryTitle")}
        intro={t("regulatoryIntro")}
        items={await getLocalizedAnwendungenRegulatoryTeasers(locale as "de" | "en")}
      />
      <GroupedTeaserSection
        title={t("productTitle")}
        intro={t("productIntro")}
        items={await getLocalizedAnwendungenProductTeasers(locale as "de" | "en")}
      />
    </OverviewPageLayout>
  );
}
