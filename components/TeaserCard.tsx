import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
};

export function TeaserCard({ title, description, href }: Props) {
  return (
    <article className="teaser-card">
      <h2 className="teaser-card__title">
        <Link href={href} className="teaser-card__title-link">
          {title}
        </Link>
      </h2>
      <p className="teaser-card__text">{description}</p>
      <Link href={href} className="teaser-card__link">
        Mehr erfahren &gt;
      </Link>
    </article>
  );
}
