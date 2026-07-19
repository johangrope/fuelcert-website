import type { NavDropdownConfig, NavLinkItem } from "@/lib/types";
import { filterNavDropdowns } from "@/lib/nav-visibility";

export type NavMessageKey =
  | "home"
  | "about"
  | "contact"
  | "services"
  | "applications"
  | "knowledge"
  | "regulatoryAreas"
  | "productAreas"
  | "preCertification"
  | "certification"
  | "proofManagement"
  | "co2Trading"
  | "reporting"
  | "calculatorH2"
  | "calculatorBiomethan"
  | "news"
  | "thgQuote"
  | "ets"
  | "nehs"
  | "rfnbo";

export type NavTranslate = (key: NavMessageKey) => string;

export function buildMainNavLinks(t: NavTranslate): NavLinkItem[] {
  return [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/ueber-uns" },
    { label: t("contact"), href: "/kontakt" },
  ];
}

export function buildNavDropdowns(t: NavTranslate): NavDropdownConfig[] {
  return filterNavDropdowns([
    {
      id: "leistungen",
      label: t("services"),
      href: "/leistungen",
      variant: "flat",
      items: [
        { label: t("preCertification"), href: "/leistungen/pre-zertifizierung" },
        { label: t("certification"), href: "/leistungen/zertifizierung-redcert-iscc-certifhy" },
        { label: t("proofManagement"), href: "/leistungen/nachweisfuehrung-und-register" },
        { label: t("co2Trading"), href: "/leistungen/co2-und-quotenhandel" },
        { label: t("reporting"), href: "/leistungen/berichterstattung-und-meldepflichten" },
      ],
    },
    {
      id: "anwendungsbereiche",
      label: t("applications"),
      href: "/anwendungsbereiche",
      variant: "flat",
      // Geplante Anwendungsbereiche: siehe lib/planned-nav.ts (nicht live)
      items: [
        { label: t("thgQuote"), href: "/anwendungsbereiche/thg-quote" },
        { label: t("ets"), href: "/anwendungsbereiche/emissionshandel-ets-1" },
        { label: t("nehs"), href: "/anwendungsbereiche/emissionshandel-nehs" },
      ],
    },
    {
      id: "wissen",
      label: t("knowledge"),
      href: "/wissen",
      variant: "flat",
      items: [
        { label: t("calculatorH2"), href: "/wissen/erloesrechner" },
        { label: t("calculatorBiomethan"), href: "/wissen/erloesrechner-biomethan-bio-cng" },
        { label: t("news"), href: "/news" },
        // Geplante Wissensartikel: siehe lib/planned-nav.ts (nicht live)
      ],
    },
  ]);
}
