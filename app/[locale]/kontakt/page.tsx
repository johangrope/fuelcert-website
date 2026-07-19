import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { homeCrumb } from "@/lib/i18n/breadcrumbs";
import { INITIAL_CONSULTATION_BOOKING_URL } from "@/lib/booking";
import { getLocaleContent } from "@/lib/i18n/resolve";
import { pageMetadata } from "@/lib/seo";
import { KONTAKT as KONTAKT_DE } from "@/lib/static-pages";
import { KONTAKT as KONTAKT_EN } from "@/lib/i18n/en/static-pages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const k = await getLocaleContent(KONTAKT_DE, KONTAKT_EN);
  return pageMetadata({
    locale: locale as Locale,
    path: "/kontakt",
    title: `${k.title} | FuelCert`,
    description: k.metaDescription,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function KontaktPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common");
  const tFooter = await getTranslations("footer");
  const k = await getLocaleContent(KONTAKT_DE, KONTAKT_EN);
  const home = await homeCrumb();

  return (
    <>
      <SiteHeader />
      <main id="kontakt" className="subpage">
        <div className="container subpage__inner">
          <Breadcrumbs items={[home, { label: t("breadcrumb") }]} currentPath="/kontakt" />
          <p className="subpage__kicker">{t("kicker")}</p>
          <h1 className="subpage__title">{k.title}</h1>
          <p className="subpage__lead">{k.intro}</p>

          <section className="subpage__block contact-block" aria-labelledby="contact-data">
            <h2 id="contact-data" className="subpage__heading">
              {k.sections[0].heading}
            </h2>
            <p className="subpage__text">
              <strong>FuelCert Sailer &amp; Grope GbR</strong>
              <br />
              Bismarckstraße 65
              <br />
              10627 Berlin
            </p>
            <p className="subpage__text">
              <a href="tel:+4915233560411">+49 (0) 152 33560411</a>
              <br />
              <a href="mailto:info@fuelcert.com">info@fuelcert.com</a>
            </p>
          </section>

          <p className="subpage__cta subpage__cta--action">
            <a
              href={INITIAL_CONSULTATION_BOOKING_URL}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {tFooter("bookCall")}
            </a>
          </p>

          <p className="subpage__cta subpage__cta--back">
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
