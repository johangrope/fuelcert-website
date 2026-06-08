import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type Props = {
  breadcrumbs: Crumb[];
  kicker: string;
  title: string;
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
  /** Breiterer Inhaltsbereich für z. B. Tabellen und Rechner */
  wide?: boolean;
};

export async function ServicePageLayout({
  breadcrumbs,
  kicker,
  title,
  children,
  backHref = "/leistungen",
  backLabel,
  wide = false,
}: Props) {
  const t = await getTranslations("common");
  const resolvedBackLabel = backLabel ?? t("backToServices");
  const innerClass = ["container", "subpage__inner", "service-page__inner", wide && "service-page__inner--wide"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <SiteHeader />
      <main className="subpage service-page">
        <div className={innerClass}>
          <Breadcrumbs items={breadcrumbs} />
          <p className="subpage__kicker">{kicker}</p>
          <h1 className="subpage__title">{title}</h1>
          {children}
          <p className="subpage__cta subpage__cta--back">
            <Link href={backHref} className="subpage__back-link">
              ← {resolvedBackLabel}
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
