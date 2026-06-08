"use client";

import { useLocale } from "next-intl";
import { useMemo } from "react";
import { HOME_TESTIMONIALS } from "@/lib/home-testimonials";
import { HOME_TESTIMONIALS as HOME_TESTIMONIALS_EN } from "@/lib/i18n/en/home-testimonials";
import type { Testimonial } from "@/lib/home-testimonials";

export function useHomeTestimonials(): Testimonial[] {
  const locale = useLocale();
  return useMemo(() => (locale === "en" ? HOME_TESTIMONIALS_EN : HOME_TESTIMONIALS), [locale]);
}
