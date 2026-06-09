import { Link } from "@/i18n/navigation";

type Topic = { label: string; href: string };

type Group = {
  heading: string;
  items: readonly Topic[];
  highlight?: boolean;
};

type Props = {
  heading: string;
  intro?: string;
  groups: readonly Group[];
};

export function GroupedRelatedTopicsSection({ heading, intro, groups }: Props) {
  return (
    <section className="service-block service-block--related" aria-labelledby="grouped-related-heading">
      <h2 id="grouped-related-heading" className="subpage__heading">
        {heading}
      </h2>
      {intro ? <p className="subpage__text">{intro}</p> : null}
      <div className="related-topics-groups">
        {groups.map((group) => (
          <div
            key={group.heading}
            className={`related-topics-group${group.highlight ? " related-topics-group--highlight" : ""}`}
          >
            <h3 className="related-topics-group__heading">{group.heading}</h3>
            <ul className="related-topics">
              {group.items.map((topic) => (
                <li key={topic.href}>
                  <Link href={topic.href} className="related-topics__link">
                    {topic.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
