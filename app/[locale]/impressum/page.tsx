import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { homeCrumb } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import { pageMetadata } from "@/lib/seo";
import * as DE from "@/lib/impressum";
import * as EN from "@/lib/i18n/en/impressum";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getLocaleContent(DE, EN);
  return pageMetadata({
    locale: locale as Locale,
    path: "/impressum",
    title: c.IMPRESSUM_SEO.title,
    description: c.IMPRESSUM_SEO.metaDescription,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tFooter = await getTranslations("footer");
  const tCommon = await getTranslations("common");
  const c = await getLocaleContent(DE, EN);
  const home = await homeCrumb();

  return (
    <>
      <SiteHeader />
      <main className="subpage legal-page">
        <div className="container subpage__inner legal-page__inner">
          <Breadcrumbs items={[home, { label: tFooter("imprint") }]} currentPath="/impressum" />
          <h1 className="subpage__title">{c.IMPRESSUM_SEO.h1}</h1>
          <p className="subpage__text legal-page__updated">{c.IMPRESSUM_UPDATED}</p>

          <section className="subpage__block legal-page__block" aria-labelledby="impressum-provider">
            <h2 id="impressum-provider" className="subpage__heading">
              {c.IMPRESSUM_PROVIDER.heading}
            </h2>
            <p className="subpage__text legal-page__address">
              {c.IMPRESSUM_PROVIDER.addressLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < c.IMPRESSUM_PROVIDER.addressLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          </section>

          <section className="subpage__block legal-page__block" aria-labelledby="impressum-representatives">
            <h2 id="impressum-representatives" className="subpage__heading">
              {c.IMPRESSUM_REPRESENTATIVES.heading}
            </h2>
            <ul className="legal-page__list">
              {c.IMPRESSUM_REPRESENTATIVES.names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </section>

          <section className="subpage__block legal-page__block" aria-labelledby="impressum-contact">
            <h2 id="impressum-contact" className="subpage__heading">
              {c.IMPRESSUM_CONTACT.heading}
            </h2>
            <p className="subpage__text">
              {c.IMPRESSUM_CONTACT.phoneLabel}:{" "}
              <a href={c.IMPRESSUM_CONTACT.phoneHref}>{c.IMPRESSUM_CONTACT.phone}</a>
              <br />
              {c.IMPRESSUM_CONTACT.emailLabel}:{" "}
              <a href={`mailto:${c.IMPRESSUM_CONTACT.email}`}>{c.IMPRESSUM_CONTACT.email}</a>
            </p>
          </section>

          <section className="subpage__block legal-page__block" aria-labelledby="impressum-vat">
            <h2 id="impressum-vat" className="subpage__heading">
              {c.IMPRESSUM_VAT.heading}
            </h2>
            <p className="subpage__text">{c.IMPRESSUM_VAT.text}</p>
          </section>

          <section className="subpage__block legal-page__block" aria-labelledby="impressum-economic-id">
            <h2 id="impressum-economic-id" className="subpage__heading">
              {c.IMPRESSUM_ECONOMIC_ID.heading}
            </h2>
            <p className="subpage__text">{c.IMPRESSUM_ECONOMIC_ID.text}</p>
          </section>

          <section className="subpage__block legal-page__block" aria-labelledby="impressum-editorial">
            <h2 id="impressum-editorial" className="subpage__heading">
              {c.IMPRESSUM_EDITORIAL.heading}
            </h2>
            <p className="subpage__text legal-page__address">
              {c.IMPRESSUM_EDITORIAL.lines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < c.IMPRESSUM_EDITORIAL.lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          </section>

          <section className="subpage__block legal-page__block" aria-labelledby="impressum-liability">
            <h2 id="impressum-liability" className="subpage__heading">
              {c.IMPRESSUM_LIABILITY.heading}
            </h2>
            {c.IMPRESSUM_LIABILITY.sections.map((section) => (
              <div key={section.heading} className="legal-page__subsection">
                <h3 className="legal-page__subheading">{section.heading}</h3>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="subpage__text">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </section>

          <p className="subpage__text legal-page__source">{c.IMPRESSUM_SOURCE}</p>

          <p className="subpage__cta">
            <Link href="/" className="subpage__back-link">
              ← {tCommon("backToHome")}
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
