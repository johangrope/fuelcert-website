export type NewsTickerItem = {
  text: string;
  href: string;
};

export const NEWS_TICKER = {
  enabled: true,
  label: "Aktuell",
  ariaLabel: "Aktuelle Meldungen",
  items: [
    {
      text: "GModG endgültig beschlossen — Bundesrat verzichtet auf Vermittlungsverfahren · Grüngasquote und Bio-Treppe kommen · Neue Perspektiven für Biomethan und Wasserstoff",
      href: "/news/gmodg-beschlossen-biomethan-wasserstoff-nachweisfuehrung",
    },
  ],
} as const;
