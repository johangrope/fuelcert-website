import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PlaceholderDetailLayout } from "@/components/PlaceholderDetailLayout";
import { ALL_WISSEN_SLUGS, type WissenSlug, wissenPath } from "@/lib/wissen";
import { routing, type Locale } from "@/i18n/routing";
import { wissenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocalizedWissenArticle } from "@/lib/i18n/content-access";
import { isNavItemVisible } from "@/lib/nav-visibility";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_WISSEN_SLUGS.filter((slug) => isNavItemVisible(wissenPath(slug))).map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = await getLocalizedWissenArticle(slug, locale as "de" | "en");
  const t = await getTranslations({ locale, namespace: "common" });
  if (!data) return { title: t("notFound") };
  return pageMetadata({
    locale: locale as Locale,
    path: `/wissen/${slug}`,
    title: `${data.title} | FuelCert`,
    description: data.metaDescription,
  });
}

export default async function WissenDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const data = await getLocalizedWissenArticle(slug, locale as "de" | "en");
  const tWissen = await getTranslations("wissen");

  if (
    !data ||
    !ALL_WISSEN_SLUGS.includes(slug as WissenSlug) ||
    !isNavItemVisible(wissenPath(slug as WissenSlug))
  ) {
    notFound();
  }

  return (
    <PlaceholderDetailLayout
      breadcrumbs={await wissenBreadcrumbs(data.menuLabel)}
      kicker={tWissen("kicker")}
      title={data.title}
      intro={data.intro}
      sections={data.sections}
    />
  );
}
