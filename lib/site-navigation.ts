import type { NavDropdownConfig, NavLinkItem } from "./types";

export const MAIN_NAV_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export const NAV_DROPDOWNS: NavDropdownConfig[] = [
  {
    id: "leistungen",
    label: "Leistungen",
    href: "/leistungen",
    variant: "flat",
    items: [
      { label: "Zertifizierung", href: "/leistungen/zertifizierung-redcert-iscc-certifhy" },
      { label: "Nachweisführung und Registerführung", href: "/leistungen/nachweisfuehrung-und-register" },
      { label: "CO₂- und Quotenhandel", href: "/leistungen/co2-und-quotenhandel" },
      { label: "Berichte und Meldepflichten", href: "/leistungen/berichterstattung-und-meldepflichten" },
    ],
  },
  {
    id: "anwendungsbereiche",
    label: "Anwendungsbereiche",
    href: "/anwendungsbereiche",
    variant: "grouped",
    groups: [
      {
        groupLabel: "Regulatorische Bereiche",
        items: [
          { label: "THG-Quote", href: "/anwendungsbereiche/thg-quote" },
          { label: "Emissionshandel (ETS I)", href: "/anwendungsbereiche/emissionshandel-ets-1" },
          { label: "Nationaler Emissionshandel (nEHS)", href: "/anwendungsbereiche/emissionshandel-nehs" },
          { label: "ESG und Nachhaltigkeitsnachweise", href: "/anwendungsbereiche/esg-und-nachhaltigkeitsnachweise" },
        ],
      },
      {
        groupLabel: "Produktbezogene Bereiche",
        items: [
          { label: "Wasserstoff und Derivate", href: "/anwendungsbereiche/wasserstoff-und-derivate" },
          { label: "Biomethan und Bio-LNG", href: "/anwendungsbereiche/biomethan-und-bio-lng" },
          { label: "RFNBO und E-Fuels", href: "/anwendungsbereiche/rfnbo" },
        ],
      },
    ],
  },
  {
    id: "wissen",
    label: "Wissen",
    href: "/wissen",
    variant: "flat",
    items: [
      { label: "Erlösrechner Wasserstoff (RFNBO)", href: "/wissen/erloesrechner" },
      { label: "Erlösrechner Biomethan (Bio-CNG)", href: "/wissen/erloesrechner-biomethan-bio-cng" },
      { label: "RFNBO-Zertifizierung", href: "/wissen/rfnbo-zertifizierung" },
      { label: "REDcert, ISCC EU und CertifHy", href: "/wissen/redcert-iscc-certifhy-unterschiede" },
      { label: "THG- und Massenbilanz", href: "/wissen/thg-und-massenbilanz" },
      { label: "UDB, Nabisy und Registerführung", href: "/wissen/udb-nabisy-und-registerfuehrung" },
      { label: "RFNBO-Anforderungen nach RED III", href: "/wissen/rfnbo-anforderungen-red-iii" },
    ],
  },
];

export function isNavSectionActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
