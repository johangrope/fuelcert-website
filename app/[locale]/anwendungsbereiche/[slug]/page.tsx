import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PlaceholderDetailLayout } from "@/components/PlaceholderDetailLayout";
import { ALL_ANWENDUNG_SLUGS, type AnwendungSlug } from "@/lib/anwendungsbereiche";
import { routing } from "@/i18n/routing";
import { anwendungenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocalizedAnwendung } from "@/lib/i18n/content-access";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_ANWENDUNG_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = await getLocalizedAnwendung(slug, locale as "de" | "en");
  const t = await getTranslations({ locale, namespace: "common" });
  if (!data) return { title: t("notFound") };
  return {
    title: `${data.title} | FuelCert`,
    description: data.metaDescription,
  };
}

export default async function AnwendungDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const data = await getLocalizedAnwendung(slug, locale as "de" | "en");
  const t = await getTranslations("common");
  const tApp = await getTranslations("anwendungsbereiche");

  if (!data || !ALL_ANWENDUNG_SLUGS.includes(slug as AnwendungSlug)) {
    notFound();
  }

  return (
    <PlaceholderDetailLayout
      breadcrumbs={await anwendungenBreadcrumbs(data.menuLabel)}
      kicker={tApp("kicker")}
      title={data.title}
      intro={data.intro}
      sections={data.sections}
      backHref="/anwendungsbereiche"
      backLabel={t("backToAnwendungsbereiche")}
    />
  );
}
