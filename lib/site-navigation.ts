import type { NavDropdownConfig, NavLinkItem } from "./types";
import { filterNavDropdowns } from "./nav-visibility";

export const MAIN_NAV_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export const NAV_DROPDOWNS: NavDropdownConfig[] = filterNavDropdowns([
  {
    id: "leistungen",
    label: "Leistungen",
    href: "/leistungen",
    variant: "flat",
    items: [
      { label: "Pre-Zertifizierung", href: "/leistungen/pre-zertifizierung" },
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
    variant: "flat",
    // Geplante Anwendungsbereiche: siehe lib/planned-nav.ts (nicht live)
    items: [
      { label: "THG-Quote", href: "/anwendungsbereiche/thg-quote" },
      { label: "Emissionshandel (ETS I)", href: "/anwendungsbereiche/emissionshandel-ets-1" },
      { label: "Nationaler Emissionshandel (nEHS)", href: "/anwendungsbereiche/emissionshandel-nehs" },
    ],
  },
  {
    id: "wissen",
    label: "Wissen & News",
    href: "/wissen",
    variant: "flat",
    items: [
      { label: "Erlösrechner Wasserstoff (RFNBO)", href: "/wissen/erloesrechner" },
      { label: "Erlösrechner Biomethan (Bio-CNG)", href: "/wissen/erloesrechner-biomethan-bio-cng" },
      { label: "News", href: "/news" },
      // Geplante Wissensartikel: siehe lib/planned-nav.ts (nicht live)
    ],
  },
]);

/** Strip locale prefix so nav active state works for /en/... routes. */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return pathname === "/en" ? "/" : pathname.slice(3) || "/";
  }
  return pathname;
}

export function isNavSectionActive(pathname: string, href: string): boolean {
  const path = stripLocalePrefix(pathname);
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}
