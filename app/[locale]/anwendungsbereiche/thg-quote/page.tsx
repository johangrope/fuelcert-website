import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ApplicationCtaSection } from "@/components/ApplicationCtaSection";
import { GroupedRelatedTopicsSection } from "@/components/GroupedRelatedTopicsSection";
import { RegulatoryOverviewTable } from "@/components/RegulatoryOverviewTable";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TextWithLinks } from "@/components/TextWithLinks";
import { ThgQuoteIntroFigure } from "@/components/ThgQuoteIntroFigure";
import { ThgQuoteRevenueSection } from "@/components/ThgQuoteRevenueSection";
import { routing } from "@/i18n/routing";
import { anwendungenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import * as DE from "@/lib/anwendungsbereiche-thg-quote";
import * as EN from "@/lib/i18n/en/anwendungsbereiche-thg-quote";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getLocaleContent(DE, EN);
  return {
    title: c.THG_QUOTE_SEO.title,
    description: c.THG_QUOTE_SEO.metaDescription,
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ThgQuotePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tApp = await getTranslations("anwendungsbereiche");
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("nav");
  const c = await getLocaleContent(DE, EN);

  return (
    <ServicePageLayout
      kicker={tApp("kicker")}
      title={c.THG_QUOTE_SEO.h1}
      breadcrumbs={await anwendungenBreadcrumbs(tNav("thgQuote"))}
      backHref="/anwendungsbereiche"
      backLabel={tCommon("backToAnwendungsbereiche")}
      wide
    >
      <div className="thg-quote-intro">
        <div className="thg-quote-intro__text">
          {c.THG_QUOTE_INTRO.map((paragraph, i) => (
            <p
              key={i}
              className={i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <ThgQuoteIntroFigure
          alt={c.THG_QUOTE_OPTIONS_VISUAL.alt}
          caption={c.THG_QUOTE_OPTIONS_VISUAL.caption}
        />
      </div>

      <section className="service-block" aria-labelledby="thg-what-heading">
        <h2 id="thg-what-heading" className="subpage__heading">
          {c.THG_QUOTE_WHAT_IS.heading}
        </h2>
        {c.THG_QUOTE_WHAT_IS.paragraphs.map((paragraph, i) =>
          typeof paragraph === "string" ? (
            <p key={i} className="subpage__text">
              {paragraph}
            </p>
          ) : (
            <TextWithLinks key={i} segments={paragraph} />
          ),
        )}
      </section>

      <section className="service-block" aria-labelledby="thg-fulfillment-heading">
        <h2 id="thg-fulfillment-heading" className="subpage__heading">
          {c.THG_QUOTE_FULFILLMENT.heading}
        </h2>
        {c.THG_QUOTE_FULFILLMENT.paragraphs.map((paragraph, i) => (
          <p key={i} className="subpage__text">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="service-block" aria-labelledby="thg-options-heading">
        <h2 id="thg-options-heading" className="subpage__heading">
          {c.THG_QUOTE_OPTIONS_HEADING}
        </h2>
        <div className="about-highlights about-highlights--application">
          {c.THG_QUOTE_FULFILLMENT_OPTIONS.map((option) => (
            <article key={option.title} className="about-highlight">
              <h3 className="about-highlight__title">{option.title}</h3>
              <p className="about-highlight__text">{option.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ThgQuoteRevenueSection
        locale={locale}
        heading={c.THG_QUOTE_REVENUE.heading}
        blocks={c.THG_QUOTE_REVENUE.blocks}
        figureAlt={c.THG_QUOTE_REVENUE.figure.alt}
        figureCaption={c.THG_QUOTE_REVENUE.figure.caption}
        enlargeLabel={c.THG_QUOTE_REVENUE.figure.enlargeLabel}
        closeLabel={c.THG_QUOTE_REVENUE.figure.closeLabel}
        calculatorsHeading={c.THG_QUOTE_REVENUE.calculators.heading}
        calculatorsIntro={c.THG_QUOTE_REVENUE.calculators.intro}
        calculatorLinks={c.THG_QUOTE_REVENUE.calculators.links}
        customsCalculator={c.THG_QUOTE_REVENUE.customsCalculator}
      />

      <section className="service-block" aria-labelledby="thg-relevance-heading">
        <h2 id="thg-relevance-heading" className="subpage__heading">
          {c.THG_QUOTE_RELEVANCE.heading}
        </h2>
        {c.THG_QUOTE_RELEVANCE.paragraphs.map((paragraph, i) => (
          <p key={i} className="subpage__text">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="service-block" aria-labelledby="thg-table-heading">
        <h2 id="thg-table-heading" className="subpage__heading">
          {c.THG_QUOTE_TABLE_SECTION.heading}
        </h2>
        <p className="subpage__text">{c.THG_QUOTE_TABLE_SECTION.intro}</p>
        <RegulatoryOverviewTable
          caption={c.THG_QUOTE_TABLE_SECTION.caption}
          note={c.THG_QUOTE_TABLE_SECTION.note}
          columns={c.THG_QUOTE_TABLE_COLUMNS}
          yearLabel={c.THG_QUOTE_TABLE_SECTION.yearLabel}
          numberLocale={c.THG_QUOTE_TABLE_SECTION.numberLocale}
        />
      </section>

      <GroupedRelatedTopicsSection
        heading={c.THG_QUOTE_RELATED_HEADING}
        intro={c.THG_QUOTE_RELATED_INTRO}
        groups={c.THG_QUOTE_RELATED_GROUPS}
      />

      <ApplicationCtaSection id="thg-quote-cta" {...c.THG_QUOTE_CTA} />
    </ServicePageLayout>
  );
}
