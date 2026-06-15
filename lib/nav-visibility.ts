import type { NavDropdownConfig } from "./types";

/**
 * Hrefs hidden from header navigation and overview teasers until ready for launch.
 * Pages remain routable; remove entries here to show them again.
 */
export const NAV_HIDDEN_HREFS = new Set<string>([
  // Wissen – Fachartikel (Übersicht zeigt nur Erlösrechner)
  "/wissen/rfnbo-zertifizierung",
  "/wissen/redcert-iscc-certifhy-unterschiede",
  "/wissen/thg-und-massenbilanz",
  "/wissen/udb-nabisy-und-registerfuehrung",
  "/wissen/rfnbo-anforderungen-red-iii",
  "/wissen/ueberwachungsplan-im-eu-ets-1",
  "/wissen/emissionsbericht-im-eu-ets-1",
  "/wissen/unionsregister-im-emissionshandel",
  "/wissen/nachhaltige-brennstoffe-im-eu-ets-1",
  "/wissen/biomethan-im-emissionshandel",
  "/wissen/rfnbo-im-emissionshandel",
  "/wissen/kostenlose-zuteilung-im-eu-ets-1",
  "/wissen/cbam",
  "/wissen/ueberwachungsplan-im-nehs",
  "/wissen/emissionsbericht-im-nehs",
  "/wissen/nehs-register",
  "/wissen/biomethan-im-nehs",
  "/wissen/rfnbo-im-nehs",
  "/wissen/zusammenwirken-nehs-und-eu-ets-1",
  "/wissen/eu-ets-2",
  // Anwendungsbereiche – regulatorisch
  "/anwendungsbereiche/esg-und-nachhaltigkeitsnachweise",
  // Anwendungsbereiche – produktbezogen
  "/anwendungsbereiche/wasserstoff-und-derivate",
  "/anwendungsbereiche/biomethan-und-bio-lng",
  "/anwendungsbereiche/rfnbo",
]);

export function isNavItemVisible(href: string): boolean {
  return !NAV_HIDDEN_HREFS.has(href);
}

export function filterNavDropdowns(dropdowns: NavDropdownConfig[]): NavDropdownConfig[] {
  return dropdowns.map((dropdown) => {
    if (dropdown.variant === "flat") {
      return {
        ...dropdown,
        items: dropdown.items.filter((item) => isNavItemVisible(item.href)),
      };
    }

    return {
      ...dropdown,
      groups: dropdown.groups
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => isNavItemVisible(item.href)),
        }))
        .filter((group) => group.items.length > 0),
    };
  });
}
