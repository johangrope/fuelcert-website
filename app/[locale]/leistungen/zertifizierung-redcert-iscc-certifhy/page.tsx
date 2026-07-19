import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ServiceBulletList } from "@/components/ServiceBulletList";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { routing, type Locale } from "@/i18n/routing";
import { leistungenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import { pageMetadata } from "@/lib/seo";
import * as DE from "@/lib/leistungen-zertifizierung";
import * as EN from "@/lib/i18n/en/leistungen-zertifizierung";

const SERVICE_PATH = "/leistungen/zertifizierung-redcert-iscc-certifhy";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = await getLocaleContent(DE, EN);
  return pageMetadata({
    locale: locale as Locale,
    path: SERVICE_PATH,
    title: c.ZERTIFIZIERUNG_SEO.title,
    description: c.ZERTIFIZIERUNG_SEO.metaDescription,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ZertifizierungPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tLeistungen = await getTranslations("leistungen");
  const tNav = await getTranslations("nav");
  const c = await getLocaleContent(DE, EN);

  return (
    <ServicePageLayout
      kicker={tLeistungen("kicker")}
      title={c.ZERTIFIZIERUNG_SEO.h1}
      breadcrumbs={await leistungenBreadcrumbs(tNav("certification"))}
      currentPath={SERVICE_PATH}
      servicePath={SERVICE_PATH}
      serviceDescription={c.ZERTIFIZIERUNG_SEO.metaDescription}
    >
      {c.ZERTIFIZIERUNG_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"}
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block" aria-labelledby="service-scope-heading">
        <h2 id="service-scope-heading" className="subpage__heading">
          {c.ZERTIFIZIERUNG_SERVICES_HEADING}
        </h2>
        <p className="subpage__text">{c.ZERTIFIZIERUNG_SERVICES_INTRO}</p>
        <ServiceBulletList items={[...c.ZERTIFIZIERUNG_SERVICES]} />
      </section>

      <ServiceCtaSection id="service-cta-end" {...c.ZERTIFIZIERUNG_CTA} />
    </ServicePageLayout>
  );
}
