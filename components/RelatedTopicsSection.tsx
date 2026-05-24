import Link from "next/link";

type Topic = { label: string; href: string };

type Props = { topics: Topic[] };

export function RelatedTopicsSection({ topics }: Props) {
  return (
    <section className="service-block service-block--related" aria-labelledby="related-topics-heading">
      <h2 id="related-topics-heading" className="subpage__heading">
        Weiterführende Themen
      </h2>
      <p className="subpage__text">
        Vertiefende Einordnungen finden Sie in unserem Wissensbereich – für Details zu Systemen, Bilanzen und
        regulatorischen Anforderungen.
      </p>
      <ul className="related-topics">
        {topics.map((topic) => (
          <li key={topic.href}>
            <Link href={topic.href} className="related-topics__link">
              {topic.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
