import type { StaticImageData } from "next/image";
import logoBiogem from "@/assets/reference-biogem.png";
import logoGpJoule from "@/assets/reference-gp-joule.png";
import logoGutcert from "@/assets/reference-gutcert.png";
import logoKoehlerPappen from "@/assets/reference-koehler-pappen.png";
import logoRiessnerGase from "@/assets/reference-riessner-gase.png";
import logoRwe from "@/assets/reference-rwe.png";
import logoWunH2 from "@/assets/reference-wun-h2.png";

export type ReferenceLogo = {
  id: string;
  name: string;
  logo: StaticImageData;
  /** Freigabe erteilt – sonst auf der Startseite ausgeblendet */
  approved: boolean;
};

export const HOME_REFERENCE_LOGOS: ReferenceLogo[] = [
  { id: "rwe", name: "RWE", logo: logoRwe, approved: true },
  { id: "gp-joule", name: "GP JOULE", logo: logoGpJoule, approved: true },
  { id: "wun-h2", name: "WUN H2", logo: logoWunH2, approved: true },
  { id: "riessner-gase", name: "Riessner Gase", logo: logoRiessnerGase, approved: true },
  { id: "biogem", name: "bioGem express", logo: logoBiogem, approved: true },
  { id: "koehler-pappen", name: "Köhler Pappen", logo: logoKoehlerPappen, approved: true },
  { id: "gutcert", name: "GUTcert", logo: logoGutcert, approved: true },
];

export function getVisibleReferenceLogos(): ReferenceLogo[] {
  return HOME_REFERENCE_LOGOS.filter((item) => item.approved);
}
