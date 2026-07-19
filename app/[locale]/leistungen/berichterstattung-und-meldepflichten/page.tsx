import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { RelatedTopicsSection } from "@/components/RelatedTopicsSection";
import { ServiceBulletGroups } from "@/components/ServiceBulletGroups";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { routing, type Locale } from "@/i18n/routing";
import { leistungenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import { pageMetadata } from "@/lib/seo";
import * as DE from "@/lib/leistungen-berichterstattung";
import * as EN from "@/lib/i18n/en/leistungen-berichterstattung";

const SERVICE_PATH = "/leistungen/berichterstattung-und-meldepflichten";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getLocaleContent(DE, EN);
  return pageMetadata({
    locale: locale as Locale,
    path: SERVICE_PATH,
    title: c.BERICHTERSTATTUNG_SEO.title,
    description: c.BERICHTERSTATTUNG_SEO.metaDescription,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function BerichterstattungPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const tLeistungen = await getTranslations("leistungen");
  const c = await getLocaleContent(DE, EN);

  return (
    <ServicePageLayout
      kicker={tLeistungen("kicker")}
      title={c.BERICHTERSTATTUNG_SEO.h1}
      breadcrumbs={await leistungenBreadcrumbs(tNav("reporting"))}
      currentPath={SERVICE_PATH}
      servicePath={SERVICE_PATH}
      serviceDescription={c.BERICHTERSTATTUNG_SEO.metaDescription}
    >
      <p className="subpage__lead service-page__intro">{c.BERICHTERSTATTUNG_INTRO}</p>

      <section className="service-block" aria-labelledby="berichte-services-heading">
        <h2 id="berichte-services-heading" className="subpage__heading">
          {c.BERICHTERSTATTUNG_SERVICES_HEADING}
        </h2>
        <p className="subpage__text">{c.BERICHTERSTATTUNG_SERVICES_INTRO}</p>
        <ServiceBulletGroups groups={c.BERICHTERSTATTUNG_SERVICE_GROUPS} />
      </section>

      <RelatedTopicsSection topics={[...c.BERICHTERSTATTUNG_RELATED_TOPICS]} />

      <ServiceCtaSection id="service-cta-end" {...c.BERICHTERSTATTUNG_CTA_END} />
    </ServicePageLayout>
  );
}
