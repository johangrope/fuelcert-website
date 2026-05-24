import type { StaticImageData } from "next/image";
import portraitEffing from "@/assets/portrait-effing.png";
import portraitRiessner from "@/assets/portrait-riessner.png";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  portrait: StaticImageData;
  portraitAlt: string;
};

export const HOME_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Die Zertifizierung des ersten Kavernenspeichers für Wasserstoff nach REDcert war auch für uns Neuland. FuelCert hat uns in diesem innovativen und anspruchsvollen Projekt mit hoher fachlicher Kompetenz, klarem regulatorischem Verständnis und großer Verlässlichkeit begleitet. Wir können FuelCert uneingeschränkt weiterempfehlen.",
    name: "Christian Effing",
    role: "RWE Gas Storage West GmbH",
    portrait: portraitEffing,
    portraitAlt: "Portrait von Christian Effing",
  },
  {
    quote:
      "Unsere Ausgangssituation war in vielerlei Hinsicht individuell und komplex. FuelCert hat sich diesen besonderen Herausforderungen mit hoher fachlicher Kompetenz, großer Flexibilität und einer sehr lösungsorientierten Herangehensweise angenommen. Die Zusammenarbeit war für uns äußerst wertvoll und praxisnah.",
    name: "Dr. Thilo Rießner",
    role: "Geschäftsführer der WUN H2 GmbH und der Rießner-Gase GmbH",
    portrait: portraitRiessner,
    portraitAlt: "Portrait von Dr. Thilo Rießner",
  },
];
