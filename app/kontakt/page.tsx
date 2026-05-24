import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { KONTAKT } from "@/lib/static-pages";

export const metadata: Metadata = {
  title: `${KONTAKT.title} | FuelCert`,
  description: KONTAKT.metaDescription,
};

export default function KontaktPage() {
  return (
    <>
      <SiteHeader />
      <main id="kontakt" className="subpage">
        <div className="container subpage__inner">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Kontakt" }]} />
          <p className="subpage__kicker">Kontakt</p>
          <h1 className="subpage__title">{KONTAKT.title}</h1>
          <p className="subpage__lead">{KONTAKT.intro}</p>

          <section className="subpage__block contact-block" aria-labelledby="contact-data">
            <h2 id="contact-data" className="subpage__heading">
              Kontaktdaten
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

          <p className="subpage__cta">
            <Link href="/" className="subpage__back-link">
              ← Zur Startseite
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
