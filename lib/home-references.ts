import type { StaticImageData } from "next/image";
import logoBiogem from "@/assets/reference-biogem.png";
import logoGutcert from "@/assets/reference-gutcert.png";
import logoKoehlerPappen from "@/assets/reference-koehler-pappen.png";
import logoRiessnerGase from "@/assets/reference-riessner-gase.png";
import logoRwe from "@/assets/reference-rwe.png";
import logoWunH2 from "@/assets/reference-wun-h2.png";

export type ReferenceLogo = {
  id: string;
  name: string;
  logo: StaticImageData;
};

export const HOME_REFERENCE_LOGOS: ReferenceLogo[] = [
  { id: "biogem", name: "bioGem express", logo: logoBiogem },
  { id: "koehler-pappen", name: "Köhler Pappen", logo: logoKoehlerPappen },
  { id: "gutcert", name: "GUTcert", logo: logoGutcert },
  { id: "wun-h2", name: "WUN H2", logo: logoWunH2 },
  { id: "rwe", name: "RWE", logo: logoRwe },
  { id: "riessner-gase", name: "Riessner Gase", logo: logoRiessnerGase },
];
