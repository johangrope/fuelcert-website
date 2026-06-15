"use client";

import { useLocale } from "next-intl";
import { useMemo } from "react";
import {
  TESTIMONIALS,
  getAboutTestimonials,
  getHomeTestimonials,
  type Testimonial,
} from "@/lib/testimonials";
import { localizeTestimonials } from "@/lib/i18n/en/testimonials";

function useLocalizedTestimonials(): Testimonial[] {
  const locale = useLocale();
  return useMemo(() => localizeTestimonials(TESTIMONIALS, locale), [locale]);
}

export function useHomeTestimonials(): Testimonial[] {
  const items = useLocalizedTestimonials();
  return useMemo(() => getHomeTestimonials(items), [items]);
}

export function useAboutTestimonials(): Testimonial[] {
  const items = useLocalizedTestimonials();
  return useMemo(() => getAboutTestimonials(items), [items]);
}
