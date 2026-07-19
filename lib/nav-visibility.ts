import type { NavDropdownConfig } from "./types";
import { PLANNED_NAV_HREFS } from "./planned-nav";

/** Category overview pages – not linked in navigation; redirect to home */
export const NAV_OVERVIEW_HREFS = ["/leistungen", "/anwendungsbereiche", "/wissen"] as const;

/**
 * Hrefs that must not be exposed until the page is live.
 * Source of truth for planned routes: lib/planned-nav.ts
 * Dynamic routes using these paths return notFound() and are omitted from
 * generateStaticParams / sitemap.
 */
export const NAV_HIDDEN_HREFS = new Set<string>(PLANNED_NAV_HREFS);

export function isNavItemVisible(href: string): boolean {
  return !NAV_HIDDEN_HREFS.has(href);
}

export function isNavOverviewHref(href: string): boolean {
  return (NAV_OVERVIEW_HREFS as readonly string[]).includes(href);
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
