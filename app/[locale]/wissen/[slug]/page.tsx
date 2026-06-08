import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PlaceholderDetailLayout } from "@/components/PlaceholderDetailLayout";
import { ALL_WISSEN_SLUGS, type WissenSlug } from "@/lib/wissen";
import { routing } from "@/i18n/routing";
import { wissenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocalizedWissenArticle } from "@/lib/i18n/content-access";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_WISSEN_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = await getLocalizedWissenArticle(slug, locale as "de" | "en");
  const t = await getTranslations({ locale, namespace: "common" });
  if (!data) return { title: t("notFound") };
  return {
    title: `${data.title} | FuelCert`,
    description: data.metaDescription,
  };
}

export default async function WissenDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const data = await getLocalizedWissenArticle(slug, locale as "de" | "en");
  const t = await getTranslations("common");
  const tWissen = await getTranslations("wissen");

  if (!data || !ALL_WISSEN_SLUGS.includes(slug as WissenSlug)) {
    notFound();
  }

  return (
    <PlaceholderDetailLayout
      breadcrumbs={await wissenBreadcrumbs(data.menuLabel)}
      kicker={tWissen("kicker")}
      title={data.title}
      intro={data.intro}
      sections={data.sections}
      backHref="/wissen"
      backLabel={t("backToWissen")}
    />
  );
}
