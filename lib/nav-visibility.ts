import type { NavDropdownConfig } from "./types";

/**
 * Hrefs hidden from header navigation and overview teasers until ready for launch.
 * Pages remain routable; remove entries here to show them again.
 */
export const NAV_HIDDEN_HREFS = new Set<string>([
  // Wissen
  "/wissen/rfnbo-zertifizierung",
  "/wissen/redcert-iscc-certifhy-unterschiede",
  "/wissen/thg-und-massenbilanz",
  "/wissen/udb-nabisy-und-registerfuehrung",
  "/wissen/rfnbo-anforderungen-red-iii",
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
