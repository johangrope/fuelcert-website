import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ErloesrechnerCalculator } from "@/components/ErloesrechnerCalculator";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { routing } from "@/i18n/routing";
import { wissenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import * as DE from "@/lib/erloesrechner-content";
import * as EN from "@/lib/i18n/en/erloesrechner-content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = await getLocaleContent(DE, EN);
  return {
    title: c.ERLOESRECHNER_SEO.title,
    description: c.ERLOESRECHNER_SEO.metaDescription,
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ErloesrechnerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tWissen = await getTranslations("wissen");
  const c = await getLocaleContent(DE, EN);

  return (
    <ServicePageLayout
      kicker={tWissen("kicker")}
      title={c.ERLOESRECHNER_SEO.h1}
      wide
      breadcrumbs={await wissenBreadcrumbs(c.ERLOESRECHNER_SEO.h1)}
    >
      {c.ERLOESRECHNER_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={
            i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"
          }
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block erloesrechner-section" aria-label={c.ERLOESRECHNER_SEO.h1}>
        <ErloesrechnerCalculator />
      </section>

      <section className="service-block" aria-labelledby="erloesrechner-assumptions-heading">
        <h2 id="erloesrechner-assumptions-heading" className="subpage__heading">
          {c.ERLOESRECHNER_ASSUMPTIONS_HEADING}
        </h2>
        <ul className="erloesrechner__assumptions-list">
          {c.ERLOESRECHNER_ASSUMPTIONS.map((item) => (
            <li key={item} className="subpage__text">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <ServiceCtaSection id="erloesrechner-cta" {...c.ERLOESRECHNER_CTA} />
    </ServicePageLayout>
  );
}
