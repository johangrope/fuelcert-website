import type { StaticImageData } from "next/image";
import portraitBalling from "@/assets/portrait-balling.png";
import portraitHeigl from "@/assets/portrait-heigl.png";
import portraitMichalke from "@/assets/portrait-michalke.png";
import portraitReinholz from "@/assets/portrait-reinholz.png";
import portraitEffing from "@/assets/portrait-effing.png";
import portraitRiessner from "@/assets/portrait-riessner.png";

export type TestimonialId =
  | "balling"
  | "heigl"
  | "michalke"
  | "reinholz"
  | "effing"
  | "riessner";

export type Testimonial = {
  id: TestimonialId;
  quote: string;
  name: string;
  role: string;
  portrait: StaticImageData;
  portraitAlt: string;
  /** Freigabe erteilt – sonst nirgends sichtbar */
  approved: boolean;
  showOnHome: boolean;
  showOnAbout: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "balling",
    quote:
      "Johan hat für uns zuverlässig Abnehmer für Biomethan und THG-Quoten gefunden und die behördliche Abwicklung übernommen. Seine Expertise an der Schnittstelle von Gesetzgebung und Praxis ist für Unternehmen im Quotenmarkt ein echter Mehrwert.",
    name: "Thomas Balling",
    role: "Geschäftsführer mehrerer Biomethananlagen, Präsidium Fachverband Biogas",
    portrait: portraitBalling,
    portraitAlt: "Portrait von Thomas Balling",
    approved: true,
    showOnHome: true,
    showOnAbout: true,
  },
  {
    id: "heigl",
    quote:
      "Im Rahmen eines zweiteiligen Webinars hat Frau Sailer mit ihrer Fachkompetenz die komplexen Zusammenhänge der H2-Regulatorik und Zertifizierung anschaulich und verständlich vermittelt. Wir waren mit der Durchführung und den vermittelten Inhalten außerordentlich zufrieden und empfehlen Frau Sailer uneingeschränkt weiter.",
    name: "Dr. Matthias Heigl",
    role: "Thüga Aktiengesellschaft",
    portrait: portraitHeigl,
    portraitAlt: "Portrait von Dr. Matthias Heigl",
    approved: true,
    showOnHome: true,
    showOnAbout: true,
  },
  {
    id: "michalke",
    quote:
      "Katharina hat komplexe Gesetzestexte für unser technisches Team auf greifbare und digitalisierbare Kriterien heruntergebrochen. Ich würde jedem, der ein System für die Nachweisführung auf dem Energiemarkt etablieren will, empfehlen, das System von Katharina regulatorisch konzipieren zu lassen.",
    name: "Petra Michalke",
    role: "Global Talent Pool Manager, Siemens Energy",
    portrait: portraitMichalke,
    portraitAlt: "Portrait von Petra Michalke",
    approved: true,
    showOnHome: false,
    showOnAbout: true,
  },
  {
    id: "reinholz",
    quote:
      "Katharina hat außereuropäische Interessensgruppen bei einem nationalen Wasserstoffstandard beraten und unsere Mandanten bei Investitionen in Biokraftstoff- und Wasserstoffprojekte unterstützt. Sie findet kreative Lösungen für komplexe Herausforderungen. Ihre Arbeit hat mich beeindruckt – ich würde jederzeit wieder mit ihr zusammenarbeiten.",
    name: "Toni Reinholz",
    role: "Teamleiter Erneuerbare Energien, Deutsche Energie-Agentur",
    portrait: portraitReinholz,
    portraitAlt: "Portrait von Toni Reinholz",
    approved: true,
    showOnHome: false,
    showOnAbout: true,
  },
  {
    id: "effing",
    quote:
      "Die Zertifizierung des ersten Kavernenspeichers für Wasserstoff nach REDcert war auch für uns Neuland. FuelCert hat uns in diesem innovativen und anspruchsvollen Projekt mit hoher fachlicher Kompetenz, klarem regulatorischem Verständnis und großer Verlässlichkeit begleitet. Wir können FuelCert uneingeschränkt weiterempfehlen.",
    name: "Christian Effing",
    role: "RWE Gas Storage West GmbH",
    portrait: portraitEffing,
    portraitAlt: "Portrait von Christian Effing",
    approved: false,
    showOnHome: false,
    showOnAbout: false,
  },
  {
    id: "riessner",
    quote:
      "Unsere Ausgangssituation war in vielerlei Hinsicht individuell und komplex. FuelCert hat sich diesen besonderen Herausforderungen mit hoher fachlicher Kompetenz, großer Flexibilität und einer sehr lösungsorientierten Herangehensweise angenommen. Die Zusammenarbeit war für uns äußerst wertvoll und praxisnah.",
    name: "Dr. Thilo Rießner",
    role: "Geschäftsführer der WUN H2 GmbH und der Rießner-Gase GmbH",
    portrait: portraitRiessner,
    portraitAlt: "Portrait von Dr. Thilo Rießner",
    approved: false,
    showOnHome: false,
    showOnAbout: false,
  },
];

export function getHomeTestimonials(items: Testimonial[]): Testimonial[] {
  return items.filter((item) => item.approved && item.showOnHome);
}

export function getAboutTestimonials(items: Testimonial[]): Testimonial[] {
  return items.filter((item) => item.approved && item.showOnAbout);
}
