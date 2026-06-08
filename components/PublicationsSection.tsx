type Publication = {
  title: string;
  source: string;
  description: string;
  href: string;
};

type Props = {
  publications: readonly Publication[];
  title?: string;
  readArticleLabel?: string;
};

export function PublicationsSection({
  publications,
  title = "Veröffentlichungen und Fachbeiträge",
  readArticleLabel = "Beitrag lesen →",
}: Props) {
  return (
    <section className="service-block about-publications" aria-labelledby="about-publications-heading">
      <h2 id="about-publications-heading" className="subpage__heading">
        {title}
      </h2>
      <ul className="publication-list">
        {publications.map((item) => (
          <li key={item.href} className="publication-list__item">
            <a
              href={item.href}
              className="publication-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="publication-card__source">{item.source}</span>
              <span className="publication-card__title">{item.title}</span>
              <span className="publication-card__text">{item.description}</span>
              <span className="publication-card__cta">{readArticleLabel}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
