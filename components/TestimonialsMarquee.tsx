"use client";

import { useTranslations } from "next-intl";
import { TestimonialCard } from "./TestimonialCard";
import { useAboutTestimonials } from "@/lib/use-testimonials";

export function TestimonialsMarquee() {
  const t = useTranslations("home");
  const testimonials = useAboutTestimonials();

  if (testimonials.length === 0) return null;

  const items = [...testimonials, ...testimonials];

  return (
    <section
      className="testimonials-marquee service-block"
      aria-labelledby="about-testimonials-heading"
    >
      <h2 id="about-testimonials-heading" className="subpage__heading">
        {t("testimonialsTitle")}
      </h2>

      <div className="testimonials-marquee__viewport" aria-live="off">
        <div className="testimonials-marquee__track">
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="testimonials-marquee__item"
              aria-hidden={index >= testimonials.length ? true : undefined}
            >
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
