"use client";

import { useTranslations } from "next-intl";
import { ReferenceLogoItem } from "./ReferenceLogoItem";
import { HOME_REFERENCE_LOGOS } from "@/lib/home-references";

export function ReferencesSection() {
  const t = useTranslations("home");

  return (
    <section id="referenzen" className="references" aria-labelledby="references-intro">
      <div className="container references__inner">
        <p id="references-intro" className="references__intro">
          {t("referencesIntro")}
        </p>

        <div className="references__strip-wrap" aria-label="Referenzlogos">
          <div className="references__strip">
            <ul className="references__list">
              {HOME_REFERENCE_LOGOS.map((item) => (
                <ReferenceLogoItem key={item.id} item={item} />
              ))}
            </ul>
            <ul className="references__list references__list--clone" aria-hidden="true">
              {HOME_REFERENCE_LOGOS.map((item) => (
                <ReferenceLogoItem key={`${item.id}-clone`} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
