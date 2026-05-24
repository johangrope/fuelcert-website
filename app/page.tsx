import Image from "next/image";
import { LeistungenSection } from "@/components/LeistungenSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SiteHeader } from "@/components/SiteHeader";
import heroImage from "@/assets/hero-h2-wind.png";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container hero__grid">
            <div className="hero__content">
              <h1 id="hero-heading" className="hero__title">
                Zertifizierung und regulatorische Beratung für erneuerbare Kraft- und Brennstoffe
              </h1>
              <p className="hero__lead">
                FuelCert unterstützt Unternehmen bei Zertifizierung, Nachweisführung und regulatorischen Fragen rund
                um RFNBO, grünen Wasserstoff, Biomethan und angrenzende Compliance-Themen.
              </p>
            </div>
            <div className="hero__media">
              <Image
                className="hero__img"
                src={heroImage}
                alt="Wasserstoffspeicher und Windenergieanlagen"
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
