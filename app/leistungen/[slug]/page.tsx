import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ALL_LEISTUNG_SLUGS, getLeistung, type LeistungSlug } from "@/lib/leistungen";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ALL_LEISTUNG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getLeistung(slug);
  if (!data) return { title: "Seite nicht gefunden" };
  return {
    title: `${data.pageTitle} | FuelCert`,
    description: data.metaDescription,
  };
}

export default async function LeistungPage({ params }: Props) {
  const { slug } = await params;
  const data = getLeistung(slug);
  if (!data || !ALL_LEISTUNG_SLUGS.includes(slug as LeistungSlug)) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <div className="container subpage__inner">
          <nav className="subpage__breadcrumb" aria-label="Brotkrumen">
            <Link href="/" className="subpage__crumb">
              Home
            </Link>
            <span className="subpage__crumb-sep" aria-hidden="true">
              /
            </span>
            <Link href="/#leistungen" className="subpage__crumb">
              Leistungen
            </Link>
            <span className="subpage__crumb-sep" aria-hidden="true">
              /
            </span>
            <span className="subpage__crumb subpage__crumb--current">{data.menuLabel}</span>
          </nav>

          <p className="subpage__kicker">Leistungen</p>
          <h1 className="subpage__title">{data.pageTitle}</h1>
          <p className="subpage__lead">{data.teaser}</p>

          {data.sections.map((section, i) => (
            <section key={section.heading} className="subpage__block" aria-labelledby={`${slug}-sec-${i}`}>
              <h2 id={`${slug}-sec-${i}`} className="subpage__heading">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="subpage__text">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <p className="subpage__cta">
            <Link href="/#leistungen" className="subpage__back-link">
              ← Zurück zur Leistungsübersicht
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
