import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import type { OverviewPageConfig } from "@/lib/types";

type Props = OverviewPageConfig & {
  breadcrumbs: Crumb[];
  children: ReactNode;
  /** Extra class on inner container, e.g. subpage__inner--leistungen */
  innerClassName?: string;
  /** Default true – overview subpages show a simple footer link */
  showFooterCta?: boolean;
};

export async function OverviewPageLayout({
  breadcrumbs,
  kicker,
  h1,
  intro,
  children,
  innerClassName,
  showFooterCta = true,
}: Props) {
  const t = await getTranslations("common");
  const innerClass = ["container", "subpage__inner", "subpage__inner--wide", innerClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <div className={innerClass}>
          <Breadcrumbs items={breadcrumbs} />
          <p className="subpage__kicker">{kicker}</p>
          <h1 className="subpage__title">{h1}</h1>
          <p className="subpage__lead">{intro}</p>
          {children}
          {showFooterCta && (
            <p className="subpage__cta">
              <Link href="/kontakt" className="subpage__back-link">
                {t("contactCta")}
              </Link>
            </p>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
