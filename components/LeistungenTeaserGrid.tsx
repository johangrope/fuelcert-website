import { ALL_LEISTUNG_SLUGS, leistungPath } from "@/lib/leistungen";
import { LEISTUNGEN_CARD_TEASERS } from "@/lib/leistungen-overview";
import type { ServiceIconId } from "./ServiceIcon";
import { LeistungTeaserCard } from "./LeistungTeaserCard";

const CARD_ICONS: Record<string, ServiceIconId> = {
  "zertifizierung-redcert-iscc-certifhy": "zertifizierung",
  "nachweisfuehrung-und-register": "nachweisfuehrung",
  "co2-und-quotenhandel": "co2-quotenhandel",
  "berichterstattung-und-meldepflichten": "berichterstattung",
};

export function LeistungenTeaserGrid() {
  return (
    <div className="leistung-teaser-grid" role="list">
      {ALL_LEISTUNG_SLUGS.map((slug) => {
        const card = LEISTUNGEN_CARD_TEASERS[slug];
        return (
          <LeistungTeaserCard
            key={slug}
            icon={CARD_ICONS[slug]}
            title={card.title}
            description={card.description}
            href={leistungPath(slug)}
          />
        );
      })}
    </div>
  );
}
