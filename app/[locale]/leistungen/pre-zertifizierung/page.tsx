import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { RelatedTopicsSection } from "@/components/RelatedTopicsSection";
import { ServiceBulletList } from "@/components/ServiceBulletList";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { routing } from "@/i18n/routing";
import { leistungenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import * as DE from "@/lib/leistungen-pre-zertifizierung";
import * as EN from "@/lib/i18n/en/leistungen-pre-zertifizierung";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "preZert" });
  return {
    title: t("seo.title"),
    description: t("seo.metaDescription"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PreZertifizierungPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("preZert");
  const tLeistungen = await getTranslations("leistungen");
  const c = await getLocaleContent(DE, EN);

  return (
    <ServicePageLayout
      kicker={tLeistungen("kicker")}
      title={c.PRE_ZERTIFIZIERUNG_SEO.h1}
      breadcrumbs={await leistungenBreadcrumbs(t("breadcrumb"))}
    >
      {c.PRE_ZERTIFIZIERUNG_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={
            i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"
          }
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block" aria-labelledby="pre-zert-services-heading">
        <h2 id="pre-zert-services-heading" className="subpage__heading">
          {c.PRE_ZERTIFIZIERUNG_SERVICES_HEADING}
        </h2>
        <p className="subpage__text">{c.PRE_ZERTIFIZIERUNG_SERVICES_INTRO}</p>
        <ServiceBulletList items={[...c.PRE_ZERTIFIZIERUNG_SERVICES]} />
        <ServiceCtaSection id="pre-zert-cta-mid" variant="subtle" heading={c.PRE_ZERTIFIZIERUNG_CTA.heading} />
      </section>

      <section className="service-block" aria-labelledby="pre-zert-variants-heading">
        <h2 id="pre-zert-variants-heading" className="subpage__heading">
          {c.PRE_ZERTIFIZIERUNG_VARIANTS_HEADING}
        </h2>
        <div className="about-highlights">
          {c.PRE_ZERTIFIZIERUNG_VARIANTS.map((variant) => (
            <article key={variant.title} className="about-highlight">
              <h3 className="about-highlight__title">{variant.title}</h3>
              <p className="about-highlight__text">{variant.text}</p>
            </article>
          ))}
        </div>
      </section>

      <RelatedTopicsSection topics={[...c.PRE_ZERTIFIZIERUNG_RELATED_TOPICS]} />

      <ServiceCtaSection id="pre-zert-cta" {...c.PRE_ZERTIFIZIERUNG_CTA} />
    </ServicePageLayout>
  );
}
