import { TeaserGrid } from "./TeaserGrid";
import type { TeaserItem } from "@/lib/types";

type Props = {
  title: string;
  intro: string;
  items: TeaserItem[];
};

export function GroupedTeaserSection({ title, intro, items }: Props) {
  return (
    <section className="grouped-section" aria-labelledby={slugId(title)}>
      <h2 id={slugId(title)} className="grouped-section__title">
        {title}
      </h2>
      <p className="grouped-section__intro">{intro}</p>
      <TeaserGrid items={items} />
    </section>
  );
}

function slugId(title: string) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9äöüß-]/gi, "");
}
