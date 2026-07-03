import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderDetailLayout } from "@/components/PlaceholderDetailLayout";
import { ALL_LEISTUNG_SLUGS, type LeistungSlug } from "@/lib/leistungen";
import { routing, type Locale } from "@/i18n/routing";
import { leistungenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocalizedLeistung } from "@/lib/i18n/content-access";
import { pageMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/structured-data";

type Props = { params: Promise<{ locale: string; slug: string }> };

const DEDICATED_SLUGS = new Set([
  "pre-zertifizierung",
  "zertifizierung-redcert-iscc-certifhy",
  "nachweisfuehrung-und-register",
  "co2-und-quotenhandel",
  "berichterstattung-und-meldepflichten",
]);

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_LEISTUNG_SLUGS.filter((slug) => !DEDICATED_SLUGS.has(slug)).map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const data = await getLocalizedLeistung(slug, locale as "de" | "en");
  const t = await getTranslations({ locale, namespace: "common" });
  if (!data) return { title: t("notFound") };
  return pageMetadata({
    locale: locale as Locale,
    path: `/leistungen/${slug}`,
    title: `${data.title} | FuelCert`,
    description: data.metaDescription,
  });
}

export default async function LeistungDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const data = await getLocalizedLeistung(slug, locale as "de" | "en");
  const tLeistungen = await getTranslations("leistungen");

  if (!data || !ALL_LEISTUNG_SLUGS.includes(slug as LeistungSlug) || DEDICATED_SLUGS.has(slug)) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: data.title,
          description: data.metaDescription,
          path: `/leistungen/${slug}`,
          locale: locale as Locale,
        })}
      />
      <PlaceholderDetailLayout
        breadcrumbs={await leistungenBreadcrumbs(data.menuLabel)}
        kicker={tLeistungen("kicker")}
        title={data.title}
        intro={data.intro}
        sections={data.sections}
      />
    </>
  );
}
