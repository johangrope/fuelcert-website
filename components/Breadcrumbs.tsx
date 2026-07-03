import Link from "next/link";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export type Crumb = { label: string; href?: string };

type Props = { items: Crumb[] };

export async function Breadcrumbs({ items }: Props) {
  const locale = (await getLocale()) as Locale;

  return (
    <nav className="subpage__breadcrumb" aria-label="Brotkrumen">
      <JsonLd data={breadcrumbJsonLd(items, locale)} />
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="subpage__breadcrumb-part">
          {i > 0 && (
            <span className="subpage__crumb-sep" aria-hidden="true">
              /
            </span>
          )}
          {item.href ? (
            <Link href={item.href} className="subpage__crumb">
              {item.label}
            </Link>
          ) : (
            <span className="subpage__crumb subpage__crumb--current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
