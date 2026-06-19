export interface TeaserItem {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export interface ContentSection {
  heading: string;
  body: string;
}

export interface PageScaffold {
  slug: string;
  menuLabel: string;
  title: string;
  metaDescription: string;
  intro: string;
  sections: ContentSection[];
}

export interface OverviewPageConfig {
  title: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  intro: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavGroup {
  groupLabel?: string;
  items: NavLinkItem[];
}

export type NavDropdownConfig =
  | {
      id: string;
      label: string;
      /** Section path for active-state detection in navigation */
      href: string;
      /** When true, the top-level label links to the overview page */
      linkToOverview?: boolean;
      variant: "flat";
      items: NavLinkItem[];
    }
  | {
      id: string;
      label: string;
      href: string;
      linkToOverview?: boolean;
      variant: "grouped";
      groups: NavGroup[];
    };
