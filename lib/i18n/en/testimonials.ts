import type { Testimonial, TestimonialId } from "@/lib/testimonials";

type TestimonialCopy = Pick<Testimonial, "quote" | "name" | "role" | "portraitAlt">;

export const TESTIMONIALS_EN: Record<TestimonialId, TestimonialCopy> = {
  balling: {
    quote:
      "FuelCert has reliably found buyers for biomethane and GHG quotas for us and handled the regulatory process. FuelCert's expertise at the interface between legislation and practice is real added value for companies in the quota market.",
    name: "Thomas Balling",
    role: "Managing director of several biomethane plants, board German Biogas Association",
    portraitAlt: "Portrait of Thomas Balling",
  },
  heigl: {
    quote:
      "In a two-part webinar, Ms Sailer used her expertise to explain the complex interconnections of H2 regulation and certification clearly and comprehensibly. We were extremely satisfied with the delivery and content and recommend Ms Sailer without reservation.",
    name: "Dr Matthias Heigl",
    role: "Thüga Aktiengesellschaft",
    portraitAlt: "Portrait of Dr Matthias Heigl",
  },
  michalke: {
    quote:
      "Katharina broke down complex legal texts for our technical team into tangible, digitisable criteria. I would recommend anyone establishing a proof management system in the energy market to have Katharina design the system from a regulatory perspective.",
    name: "Petra Michalke",
    role: "Global Talent Pool Manager, Siemens Energy",
    portraitAlt: "Portrait of Petra Michalke",
  },
  reinholz: {
    quote:
      "Katharina advised non-European stakeholders on a national hydrogen standard and supported our clients in investments in biofuel and hydrogen projects. She finds creative solutions to complex challenges. Her work impressed me – I would work with her again anytime.",
    name: "Toni Reinholz",
    role: "Head of Renewable Energies, German Energy Agency (dena)",
    portraitAlt: "Portrait of Toni Reinholz",
  },
  effing: {
    quote:
      "Certifying the first hydrogen cavern storage facility under REDcert was new territory for us too. FuelCert supported us in this innovative and demanding project with high technical expertise, clear regulatory understanding and great reliability. We can recommend FuelCert without reservation.",
    name: "Christian Effing",
    role: "RWE Gas Storage West GmbH",
    portraitAlt: "Portrait of Christian Effing",
  },
  riessner: {
    quote:
      "Our starting position was individual and complex in many respects. FuelCert addressed these particular challenges with high expertise, great flexibility and a very solution-oriented approach. The collaboration was extremely valuable and practical for us.",
    name: "Dr Thilo Rießner",
    role: "Managing director of WUN H2 GmbH and Rießner-Gase GmbH",
    portraitAlt: "Portrait of Dr Thilo Rießner",
  },
  horst: {
    quote:
      "Despite being commissioned at very short notice, FuelCert calculated the emissions value for our electrolyser in accordance with the delegated act for RFNBOs. The balance was prepared professionally and on time and gave us a robust figure. This allowed us to meet our deadlines without any problems.",
    name: "Patrick Horst",
    role: "Manager Site Development & Cooperation, GP JOULE Hydrogen GmbH",
    portraitAlt: "Portrait of Patrick Horst",
  },
};

export function localizeTestimonials(
  items: Testimonial[],
  locale: string,
): Testimonial[] {
  if (locale !== "en") return items;
  return items.map((item) => ({
    ...item,
    ...TESTIMONIALS_EN[item.id],
  }));
}
