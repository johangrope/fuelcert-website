import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LeistungenTeaserGrid } from "@/components/LeistungenTeaserGrid";
import { OverviewPageLayout } from "@/components/OverviewPageLayout";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { routing } from "@/i18n/routing";
import { homeCrumb } from "@/lib/i18n/breadcrumbs";
import { getLocalizedLeistungenOverview } from "@/lib/i18n/content-access";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const overview = await getLocalizedLeistungenOverview(locale as "de" | "en");
  return {
    title: overview.title,
    description: overview.metaDescription,
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LeistungenOverviewPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const overview = await getLocalizedLeistungenOverview();
  const t = await getTranslations("leistungen");
  const home = await homeCrumb();

  return (
    <OverviewPageLayout
      {...overview}
      innerClassName="subpage__inner--leistungen"
      showFooterCta={false}
      breadcrumbs={[home, { label: overview.kicker }]}
    >
      <LeistungenTeaserGrid />

      <ServiceCtaSection
        heading={t("ctaHeading")}
        text={t("ctaText")}
        buttonLabel={t("ctaButton")}
        href="/kontakt"
      />
    </OverviewPageLayout>
  );
}
