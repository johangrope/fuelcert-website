import Link from "next/link";
import type { ServiceIconId } from "./ServiceIcon";
import { ServiceIcon } from "./ServiceIcon";

type Props = {
  icon: ServiceIconId;
  title: string;
  description: string;
  href: string;
};

export function LeistungTeaserCard({ icon, title, description, href }: Props) {
  return (
    <article className="leistung-teaser" role="listitem">
      <Link href={href} className="leistung-teaser__link">
        <span className="leistung-teaser__icon-wrap" aria-hidden="true">
          <ServiceIcon id={icon} size={42} />
        </span>
        <h2 className="leistung-teaser__title">{title}</h2>
        <p className="leistung-teaser__text">{description}</p>
        <span className="leistung-teaser__cta">Mehr erfahren &gt;</span>
      </Link>
    </article>
  );
}
