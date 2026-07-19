import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ApplicationCtaSection } from "@/components/ApplicationCtaSection";
import { GroupedRelatedTopicsSection } from "@/components/GroupedRelatedTopicsSection";
import { NehsFlowSection } from "@/components/NehsFlowSection";
import { NehsIntroFigure } from "@/components/NehsIntroFigure";
import { ServiceBulletList } from "@/components/ServiceBulletList";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { routing, type Locale } from "@/i18n/routing";
import { anwendungenBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import { pageMetadata } from "@/lib/seo";
import * as DE from "@/lib/anwendungsbereiche-emissionshandel-nehs";
import * as EN from "@/lib/i18n/en/anwendungsbereiche-emissionshandel-nehs";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getLocaleContent(DE, EN);
  return pageMetadata({
    locale: locale as Locale,
    path: "/anwendungsbereiche/emissionshandel-nehs",
    title: c.NEHS_SEO.title,
    description: c.NEHS_SEO.metaDescription,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function NehsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tApp = await getTranslations("anwendungsbereiche");
  const tNav = await getTranslations("nav");
  const c = await getLocaleContent(DE, EN);

  return (
    <ServicePageLayout
      kicker={tApp("kicker")}
      title={c.NEHS_SEO.h1}
      breadcrumbs={await anwendungenBreadcrumbs(tNav("nehs"))}
      currentPath="/anwendungsbereiche/emissionshandel-nehs"
      wide
    >
      <div className="thg-quote-intro">
        <div className="thg-quote-intro__text">
          {c.NEHS_INTRO.map((paragraph, i) => (
            <p
              key={i}
              className={i === 0 ? "subpage__lead service-page__intro" : "subpage__text service-page__intro-secondary"}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <NehsIntroFigure alt={c.NEHS_INTRO_VISUAL.alt} caption={c.NEHS_INTRO_VISUAL.caption} />
      </div>

      <section className="service-block" aria-labelledby="nehs-economic-heading">
        <h2 id="nehs-economic-heading" className="subpage__heading">
          {c.NEHS_ECONOMIC.heading}
        </h2>
        {c.NEHS_ECONOMIC.paragraphs.map((paragraph, i) => (
          <p key={i} className="subpage__text">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="service-block" aria-labelledby="nehs-renewables-heading">
        <h2 id="nehs-renewables-heading" className="subpage__heading">
          {c.NEHS_RENEWABLES.heading}
        </h2>
        {c.NEHS_RENEWABLES.paragraphs.map((paragraph, i) => (
          <p key={i} className="subpage__text">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="service-block" aria-labelledby="nehs-interfaces-heading">
        <h2 id="nehs-interfaces-heading" className="subpage__heading">
          {c.NEHS_INTERFACES.heading}
        </h2>
        {c.NEHS_INTERFACES.paragraphs.map((paragraph, i) => (
          <p key={i} className="subpage__text">
            {paragraph}
          </p>
        ))}
      </section>

      <NehsFlowSection
        locale={locale}
        practice={{ heading: c.NEHS_FLOW.heading, intro: c.NEHS_FLOW.intro }}
        obligations={c.NEHS_OBLIGATIONS}
        implementation={c.NEHS_IMPLEMENTATION}
        figureAlt={c.NEHS_FLOW.figure.alt}
        figureCaption={c.NEHS_FLOW.figure.caption}
        enlargeLabel={c.NEHS_FLOW.figure.enlargeLabel}
        closeLabel={c.NEHS_FLOW.figure.closeLabel}
        externalLink={c.NEHS_FLOW.dehstLink}
      />

      <section className="service-block" aria-labelledby="nehs-support-heading">
        <h2 id="nehs-support-heading" className="subpage__heading">
          {c.NEHS_SUPPORT.heading}
        </h2>
        <p className="subpage__text">{c.NEHS_SUPPORT.intro}</p>
        <ServiceBulletList items={[...c.NEHS_SUPPORT.bullets]} />
      </section>

      <ApplicationCtaSection id="nehs-cta" {...c.NEHS_CTA} />

      <GroupedRelatedTopicsSection
        heading={c.NEHS_RELATED_HEADING}
        intro={c.NEHS_RELATED_INTRO}
        groups={c.NEHS_RELATED_GROUPS}
      />
    </ServicePageLayout>
  );
}
