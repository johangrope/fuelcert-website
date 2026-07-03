import type { ReactNode } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { serviceJsonLd } from "@/lib/structured-data";

type Props = {
  breadcrumbs: Crumb[];
  kicker: string;
  title: string;
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
  /** Breiterer Inhaltsbereich für z. B. Tabellen und Rechner */
  wide?: boolean;
  /** Wenn gesetzt, wird Service-JSON-LD (schema.org) ausgegeben. */
  servicePath?: string;
  /** Optionale Beschreibung für das Service-JSON-LD. */
  serviceDescription?: string;
};

export async function ServicePageLayout({
  breadcrumbs,
  kicker,
  title,
  children,
  backHref,
  backLabel,
  wide = false,
  servicePath,
  serviceDescription,
}: Props) {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;
  const resolvedBackLabel = backLabel ?? t("backToServices");
  const innerClass = ["container", "subpage__inner", "service-page__inner", wide && "service-page__inner--wide"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {servicePath ? (
        <JsonLd
          data={serviceJsonLd({
            name: title,
            description: serviceDescription,
            path: servicePath,
            locale,
          })}
        />
      ) : null}
      <SiteHeader />
      <main className="subpage service-page">
        <div className={innerClass}>
          <Breadcrumbs items={breadcrumbs} />
          <p className="subpage__kicker">{kicker}</p>
          <h1 className="subpage__title">{title}</h1>
          {children}
          {backHref ? (
            <p className="subpage__cta subpage__cta--back">
              <Link href={backHref} className="subpage__back-link">
                ← {resolvedBackLabel}
              </Link>
            </p>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
