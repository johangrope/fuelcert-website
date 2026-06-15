"use client";

import { useTranslations } from "next-intl";
import { TestimonialCard } from "./TestimonialCard";
import { useHomeTestimonials } from "@/lib/use-home-testimonials";

export function TestimonialsSection() {
  const t = useTranslations("home");
  const testimonials = useHomeTestimonials();

  return (
    <section id="kundenstimmen" className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading" className="testimonials__title">
          {t("testimonialsTitle")}
        </h2>
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
