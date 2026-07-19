import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LegalDocumentSections } from "@/components/LegalDocumentSections";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { homeCrumb } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import { pageMetadata } from "@/lib/seo";
import * as DE from "@/lib/datenschutz";
import * as EN from "@/lib/i18n/en/datenschutz";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";
  const c = await getLocaleContent(DE, EN);
  return pageMetadata({
    locale: locale as Locale,
    path: "/datenschutz",
    title: isEn ? EN.DATENSCHUTZ_SEO_EN.title : c.DATENSCHUTZ_SEO.title,
    description: isEn ? EN.DATENSCHUTZ_SEO_EN.metaDescription : c.DATENSCHUTZ_SEO.metaDescription,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function DatenschutzPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";
  const tFooter = await getTranslations("footer");
  const tCommon = await getTranslations("common");
  const c = await getLocaleContent(DE, EN);
  const home = await homeCrumb();

  return (
    <>
      <SiteHeader />
      <main className="subpage legal-page">
        <div className="container subpage__inner legal-page__inner">
          <Breadcrumbs items={[home, { label: tFooter("privacy") }]} currentPath="/datenschutz" />
          <h1 className="subpage__title">
            {isEn ? EN.DATENSCHUTZ_SEO_EN.h1 : c.DATENSCHUTZ_SEO.h1}
          </h1>
          <p className="subpage__text legal-page__updated">
            {isEn ? EN.DATENSCHUTZ_UPDATED_EN : c.DATENSCHUTZ_UPDATED}
          </p>

          <LegalDocumentSections sections={c.DATENSCHUTZ_SECTIONS} />

          <p className="subpage__cta">
            <Link href="/" className="subpage__back-link">
              ← {tCommon("backToHome")}
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
