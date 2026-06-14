"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { ImageLightbox } from "./ImageLightbox";
import infographicDe from "@/assets/nehs-infographic-de.png";
import infographicEn from "@/assets/nehs-infographic-en.png";

type Props = {
  locale: string;
  alt: string;
  caption: string;
  enlargeLabel: string;
  closeLabel: string;
};

const INFOGRAPHICS: Record<string, StaticImageData> = {
  de: infographicDe,
  en: infographicEn,
};

export function NehsFlowFigure({ locale, alt, caption, enlargeLabel, closeLabel }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const src = INFOGRAPHICS[locale] ?? infographicDe;

  return (
    <>
      <figure className="thg-quote-revenue__figure">
        <button
          type="button"
          className="thg-quote-revenue__figure-trigger"
          onClick={() => setIsOpen(true)}
          aria-label={enlargeLabel}
        >
          <Image
            className="thg-quote-revenue__img"
            src={src}
            alt={alt}
            sizes="(max-width: 960px) 100vw, 46vw"
          />
          <span className="thg-quote-revenue__enlarge-hint" aria-hidden="true">
            {enlargeLabel}
          </span>
        </button>
        <figcaption className="thg-quote-revenue__caption">{caption}</figcaption>
      </figure>

      <ImageLightbox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        src={src}
        alt={alt}
        closeLabel={closeLabel}
      />
    </>
  );
}
