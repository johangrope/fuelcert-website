import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LeistungenSection } from "@/components/LeistungenSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SiteHeader } from "@/components/SiteHeader";
import heroImage from "@/assets/hero-startseite.png";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container hero__grid">
            <div className="hero__content">
              <h1 id="hero-heading" className="hero__title">
                {t("heroTitle")}
              </h1>
              {t("heroLead") ? <p className="hero__lead">{t("heroLead")}</p> : null}
            </div>
            <div className="hero__media">
              <Image
                className="hero__img"
                src={heroImage}
                alt={t("heroImageAlt")}
                sizes="(max-width: 960px) 100vw, 47vw"
                priority
              />
            </div>
          </div>
        </section>

        <LeistungenSection />
        <TestimonialsSection />
        <ReferencesSection />
      </main>

      <SiteFooter />
    </>
  );
}
