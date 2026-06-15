"use client";

import { useTranslations } from "next-intl";
import { ReferenceLogoItem } from "./ReferenceLogoItem";
import { getVisibleReferenceLogos } from "@/lib/home-references";

export function ReferencesSection() {
  const t = useTranslations("home");
  const logos = getVisibleReferenceLogos();

  if (logos.length === 0) return null;

  return (
    <section id="referenzen" className="references" aria-labelledby="references-intro">
      <div className="container references__inner">
        <p id="references-intro" className="references__intro">
          {t("referencesIntro")}
        </p>

        <div className="references__strip-wrap" aria-label="Referenzlogos">
          <div className="references__strip">
            <ul className="references__list">
              {logos.map((item) => (
                <ReferenceLogoItem key={item.id} item={item} />
              ))}
            </ul>
            <ul className="references__list references__list--clone" aria-hidden="true">
              {logos.map((item) => (
                <ReferenceLogoItem key={`${item.id}-clone`} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
