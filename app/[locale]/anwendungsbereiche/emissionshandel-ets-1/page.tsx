import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ApplicationCtaSection } from "@/components/ApplicationCtaSection";
import { Ets1FlowSection } from "@/components/Ets1FlowSection";
import { Ets1IntroFigure } from "@/components/Ets1IntroFigure";
import { GroupedRelatedTopicsSection } from "@/components/GroupedRelatedTopicsSection";
import { ServiceBulletList } from "@/components/ServiceBulletList";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { routing } from "@/i18n/routing";
import { anwendungenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import * as DE from "@/lib/anwendungsbereiche-emissionshandel-ets-1";
import * as EN from "@/lib/i18n/en/anwendungsbereiche-emissionshandel-ets-1";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getLocaleContent(DE, EN);
  return {
    title: c.ETS1_SEO.title,
    description: c.ETS1_SEO.metaDescription,
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Ets1Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tApp = await getTranslations("anwendungsbereiche");
  const tNav = await getTranslations("nav");
  const c = await getLocaleContent(DE, EN);

  return (
    <ServicePageLayout
      kicker={tApp("kicker")}
      title={c.ETS1_SEO.h1}
      breadcrumbs={await anwendungenBreadcrumbs(tNav("ets"))}
      wide
    >
      <div className="thg-quote-intro">
        <div className="thg-quote-intro__text">
          {c.ETS1_INTRO.map((paragraph, i) => (
            <p
              key={i}
              className={i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <Ets1IntroFigure alt={c.ETS1_INTRO_VISUAL.alt} caption={c.ETS1_INTRO_VISUAL.caption} />
      </div>

      <section className="service-block" aria-labelledby="ets1-economic-heading">
        <h2 id="ets1-economic-heading" className="subpage__heading">
          {c.ETS1_ECONOMIC.heading}
        </h2>
        {c.ETS1_ECONOMIC.paragraphs.map((paragraph, i) => (
          <p key={i} className="subpage__text">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="service-block" aria-labelledby="ets1-support-heading">
        <h2 id="ets1-support-heading" className="subpage__heading">
          {c.ETS1_SUPPORT.heading}
        </h2>
        <p className="subpage__text">{c.ETS1_SUPPORT.intro}</p>
        <ServiceBulletList items={[...c.ETS1_SUPPORT.bullets]} />
      </section>

      <section className="service-block" aria-labelledby="ets1-fuels-heading">
        <h2 id="ets1-fuels-heading" className="subpage__heading">
          {c.ETS1_SUSTAINABLE_FUELS.heading}
        </h2>
        {c.ETS1_SUSTAINABLE_FUELS.paragraphs.map((paragraph, i) => (
          <p key={i} className="subpage__text">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="service-block" aria-labelledby="ets1-allocation-heading">
        <h2 id="ets1-allocation-heading" className="subpage__heading">
          {c.ETS1_FREE_ALLOCATION.heading}
        </h2>
        {c.ETS1_FREE_ALLOCATION.paragraphs.map((paragraph, i) => (
          <p key={i} className="subpage__text">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="service-block" aria-labelledby="ets1-cbam-heading">
        <h2 id="ets1-cbam-heading" className="subpage__heading">
          {c.ETS1_CBAM.heading}
        </h2>
        {c.ETS1_CBAM.paragraphs.map((paragraph, i) => (
          <p key={i} className="subpage__text">
            {paragraph}
          </p>
        ))}
      </section>

      <Ets1FlowSection
        locale={locale}
        heading={c.ETS1_FLOW.heading}
        intro={c.ETS1_FLOW.intro}
        blocks={c.ETS1_FLOW.blocks}
        figureAlt={c.ETS1_FLOW.figure.alt}
        figureCaption={c.ETS1_FLOW.figure.caption}
        enlargeLabel={c.ETS1_FLOW.figure.enlargeLabel}
        closeLabel={c.ETS1_FLOW.figure.closeLabel}
        externalLink={c.ETS1_FLOW.dehstLink}
      />

      <GroupedRelatedTopicsSection
        heading={c.ETS1_RELATED_HEADING}
        intro={c.ETS1_RELATED_INTRO}
        groups={c.ETS1_RELATED_GROUPS}
      />

      <ApplicationCtaSection id="ets1-cta" {...c.ETS1_CTA} />
    </ServicePageLayout>
  );
}
