import type { Testimonial } from "@/lib/home-testimonials";
import portraitEffing from "@/assets/portrait-effing.png";
import portraitRiessner from "@/assets/portrait-riessner.png";

export const HOME_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Certifying the first hydrogen cavern storage facility under REDcert was new territory for us too. FuelCert supported us in this innovative and demanding project with high technical expertise, clear regulatory understanding and great reliability. We can recommend FuelCert without reservation.",
    name: "Christian Effing",
    role: "RWE Gas Storage West GmbH",
    portrait: portraitEffing,
    portraitAlt: "Portrait of Christian Effing",
  },
  {
    quote:
      "Our starting position was individual and complex in many respects. FuelCert addressed these particular challenges with high expertise, great flexibility and a very solution-oriented approach. The collaboration was extremely valuable and practical for us.",
    name: "Dr. Thilo Rießner",
    role: "Managing director of WUN H2 GmbH and Rießner-Gase GmbH",
    portrait: portraitRiessner,
    portraitAlt: "Portrait of Dr. Thilo Rießner",
  },
];
