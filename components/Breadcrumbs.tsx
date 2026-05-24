import Link from "next/link";

export type Crumb = { label: string; href?: string };

type Props = { items: Crumb[] };

export function Breadcrumbs({ items }: Props) {
  return (
    <nav className="subpage__breadcrumb" aria-label="Brotkrumen">
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
