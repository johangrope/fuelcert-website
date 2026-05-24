import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import type { OverviewPageConfig } from "@/lib/types";

type Props = OverviewPageConfig & {
  breadcrumbs: Crumb[];
  children: ReactNode;
};

export function OverviewPageLayout({ breadcrumbs, kicker, h1, intro, children }: Props) {
  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <div className="container subpage__inner subpage__inner--wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="subpage__kicker">{kicker}</p>
          <h1 className="subpage__title">{h1}</h1>
          <p className="subpage__lead">{intro}</p>
          {children}
          <p className="subpage__cta">
            <Link href="/kontakt" className="subpage__back-link">
              Kontakt aufnehmen →
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
