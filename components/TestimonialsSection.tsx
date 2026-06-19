"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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
        <p className="testimonials__intro">
          {t("testimonialsIntroPrefix")}
          <Link href="/ueber-uns" className="subpage__inline-link">
            {t("testimonialsIntroLink")}
          </Link>
          {t("testimonialsIntroSuffix")}
        </p>
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
