import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AboutHighlights } from "@/components/AboutHighlights";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ServiceCtaSection } from "@/components/ServiceCtaSection";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { JsonLd } from "@/components/JsonLd";
import { routing, type Locale } from "@/i18n/routing";
import { homeCrumb } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import { pageMetadata } from "@/lib/seo";
import { foundersJsonLd } from "@/lib/structured-data";
import * as DE from "@/lib/ueber-uns";
import * as EN from "@/lib/i18n/en/ueber-uns";
import * as DE_TEAM from "@/lib/ueber-uns-team";
import * as EN_TEAM from "@/lib/i18n/en/ueber-uns-team";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = await getLocaleContent(DE, EN);
  return pageMetadata({
    locale: locale as Locale,
    path: "/ueber-uns",
    title: c.UEBER_UNS_SEO.title,
    description: c.UEBER_UNS_SEO.metaDescription,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function UeberUnsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tCommon = await getTranslations("common");
  const c = await getLocaleContent(DE, EN);
  const team = (await getLocaleContent(DE_TEAM, EN_TEAM)).UEBER_UNS_TEAM;
  const home = await homeCrumb();

  return (
    <ServicePageLayout
      kicker={t("kicker")}
      title={c.UEBER_UNS_SEO.h1}
      backHref="/"
      backLabel={tCommon("backToHome")}
      breadcrumbs={[home, { label: t("breadcrumb") }]}
    >
      <JsonLd data={foundersJsonLd()} />
      {c.UEBER_UNS_INTRO.map((paragraph, i) => (
        <p
          key={i}
          className={i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"}
        >
          {paragraph}
        </p>
      ))}

      <section className="service-block" aria-labelledby="about-highlights-heading">
        <h2 id="about-highlights-heading" className="subpage__heading">
          {t("highlightsTitle")}
        </h2>
        <AboutHighlights highlights={c.UEBER_UNS_HIGHLIGHTS} />
      </section>

      <TeamSection members={team} title={t("teamTitle")} />

      <PublicationsSection
        publications={c.UEBER_UNS_PUBLICATIONS}
        title={t("publicationsTitle")}
        readArticleLabel={tCommon("readArticle")}
      />

      <TestimonialsMarquee />

      <ServiceCtaSection id="about-cta" {...c.UEBER_UNS_CTA} />
    </ServicePageLayout>
  );
}
