import { ALL_LEISTUNG_SLUGS, leistungPath } from "@/lib/leistungen";
import { getLocalizedLeistungenCards } from "@/lib/i18n/content-access";
import type { ServiceIconId } from "./ServiceIcon";
import { LeistungTeaserCard } from "./LeistungTeaserCard";

const CARD_ICONS: Record<string, ServiceIconId> = {
  "pre-zertifizierung": "zertifizierung",
  "zertifizierung-redcert-iscc-certifhy": "zertifizierung",
  "nachweisfuehrung-und-register": "nachweisfuehrung",
  "co2-und-quotenhandel": "co2-quotenhandel",
  "berichterstattung-und-meldepflichten": "berichterstattung",
};

export async function LeistungenTeaserGrid() {
  const cards = await getLocalizedLeistungenCards();

  return (
    <div className="leistung-teaser-grid" role="list">
      {ALL_LEISTUNG_SLUGS.map((slug) => {
        const card = cards[slug];
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
