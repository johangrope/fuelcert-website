import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ServiceBulletList } from "@/components/ServiceBulletList";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { routing } from "@/i18n/routing";
import { leistungenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import * as DE from "@/lib/leistungen-nachweisfuehrung";
import * as EN from "@/lib/i18n/en/leistungen-nachweisfuehrung";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getLocaleContent(DE, EN);
  return {
    title: c.NACHWEISFUEHRUNG_SEO.title,
    description: c.NACHWEISFUEHRUNG_SEO.metaDescription,
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function NachweisfuehrungPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const tLeistungen = await getTranslations("leistungen");
  const c = await getLocaleContent(DE, EN);

  return (
    <ServicePageLayout
      kicker={tLeistungen("kicker")}
      title={c.NACHWEISFUEHRUNG_SEO.h1}
      breadcrumbs={await leistungenBreadcrumbs(tNav("proofManagement"))}
    >
      {c.NACHWEISFUEHRUNG_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"}
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block" aria-labelledby="nachweis-services-heading">
        <h2 id="nachweis-services-heading" className="subpage__heading">
          {c.NACHWEISFUEHRUNG_SERVICES_HEADING}
        </h2>
        <p className="subpage__text">{c.NACHWEISFUEHRUNG_SERVICES_INTRO}</p>
        <ServiceBulletList items={[...c.NACHWEISFUEHRUNG_SERVICES]} />
      </section>

      <ServiceCtaSection id="service-cta-end" {...c.NACHWEISFUEHRUNG_CTA} />
    </ServicePageLayout>
  );
}
