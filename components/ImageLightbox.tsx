"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useId, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  src: StaticImageData;
  alt: string;
  closeLabel: string;
};

export function ImageLightbox({ isOpen, onClose, src, alt, closeLabel }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div className="image-lightbox__panel" onClick={(event) => event.stopPropagation()}>
        <p id={titleId} className="image-lightbox__sr-only">
          {alt}
        </p>
        <button
          ref={closeRef}
          type="button"
          className="image-lightbox__close"
          onClick={onClose}
          aria-label={closeLabel}
        >
          ×
        </button>
        <Image
          className="image-lightbox__img"
          src={src}
          alt={alt}
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
