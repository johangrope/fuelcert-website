import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { RelatedTopicsSection } from "@/components/RelatedTopicsSection";
import { ServiceBulletList } from "@/components/ServiceBulletList";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { routing, type Locale } from "@/i18n/routing";
import { leistungenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import { pageMetadata } from "@/lib/seo";
import * as DE from "@/lib/leistungen-co2-quotenhandel";
import * as EN from "@/lib/i18n/en/leistungen-co2-quotenhandel";

const SERVICE_PATH = "/leistungen/co2-und-quotenhandel";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getLocaleContent(DE, EN);
  return pageMetadata({
    locale: locale as Locale,
    path: SERVICE_PATH,
    title: c.CO2_QUOTENHANDEL_SEO.title,
    description: c.CO2_QUOTENHANDEL_SEO.metaDescription,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Co2QuotenhandelPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const tLeistungen = await getTranslations("leistungen");
  const c = await getLocaleContent(DE, EN);

  return (
    <ServicePageLayout
      kicker={tLeistungen("kicker")}
      title={c.CO2_QUOTENHANDEL_SEO.h1}
      breadcrumbs={await leistungenBreadcrumbs(tNav("co2Trading"))}
      currentPath={SERVICE_PATH}
      servicePath={SERVICE_PATH}
      serviceDescription={c.CO2_QUOTENHANDEL_SEO.metaDescription}
    >
      {c.CO2_QUOTENHANDEL_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"}
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block" aria-labelledby="co2-services-heading">
        <h2 id="co2-services-heading" className="subpage__heading">
          {c.CO2_QUOTENHANDEL_SERVICES_HEADING}
        </h2>
        <p className="subpage__text">{c.CO2_QUOTENHANDEL_SERVICES_INTRO}</p>
        <ServiceBulletList items={[...c.CO2_QUOTENHANDEL_SERVICES]} />
      </section>

      <RelatedTopicsSection topics={[...c.CO2_QUOTENHANDEL_RELATED_TOPICS]} />

      <ServiceCtaSection id="service-cta-end" {...c.CO2_QUOTENHANDEL_CTA} />
    </ServicePageLayout>
  );
}
