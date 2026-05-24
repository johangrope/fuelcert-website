import { TeaserCard } from "./TeaserCard";
import type { TeaserItem } from "@/lib/types";

type Props = { items: TeaserItem[] };

export function TeaserGrid({ items }: Props) {
  return (
    <div className="teaser-grid">
      {items.map((item) => (
        <TeaserCard key={item.href} title={item.title} description={item.description} href={item.href} />
      ))}
    </div>
  );
}
