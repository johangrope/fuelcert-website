import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ErloesrechnerBiomethanCalculator } from "@/components/ErloesrechnerBiomethanCalculator";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { routing } from "@/i18n/routing";
import { wissenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import * as DE from "@/lib/erloesrechner-biomethan-content";
import * as EN from "@/lib/i18n/en/erloesrechner-biomethan-content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = await getLocaleContent(DE, EN);
  return {
    title: c.BIOMETHAN_ERLOESRECHNER_SEO.title,
    description: c.BIOMETHAN_ERLOESRECHNER_SEO.metaDescription,
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ErloesrechnerBiomethanPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("common");
  const tWissen = await getTranslations("wissen");
  const c = await getLocaleContent(DE, EN);

  return (
    <ServicePageLayout
      kicker={tWissen("kicker")}
      title={c.BIOMETHAN_ERLOESRECHNER_SEO.h1}
      wide
      backHref="/wissen"
      backLabel={t("backToWissen")}
      breadcrumbs={await wissenBreadcrumbs(c.BIOMETHAN_ERLOESRECHNER_SEO.h1)}
    >
      {c.BIOMETHAN_ERLOESRECHNER_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={
            i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"
          }
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block erloesrechner-section" aria-label={c.BIOMETHAN_ERLOESRECHNER_SEO.h1}>
        <ErloesrechnerBiomethanCalculator />
      </section>

      <section className="service-block" aria-labelledby="biomethan-assumptions-heading">
        <h2 id="biomethan-assumptions-heading" className="subpage__heading">
          {c.BIOMETHAN_ERLOESRECHNER_ASSUMPTIONS_HEADING}
        </h2>
        <ul className="erloesrechner__assumptions-list">
          {c.BIOMETHAN_ERLOESRECHNER_ASSUMPTIONS.map((item) => (
            <li key={item} className="subpage__text">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <ServiceCtaSection id="biomethan-erloesrechner-cta" {...c.BIOMETHAN_ERLOESRECHNER_CTA} />
    </ServicePageLayout>
  );
}
