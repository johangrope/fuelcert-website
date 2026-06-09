/** Step-wise regulatory values for the THG-Quote overview table (Stand: Juni 2026). */

type Step = { from: number; value: number };

function stepValue(year: number, steps: Step[]): number {
  let result = steps[0]?.value ?? 0;
  for (const step of steps) {
    if (year >= step.from) result = step.value;
  }
  return result;
}

const THG_QUOTE_STEPS: Step[] = [
  { from: 2026, value: 12 },
  { from: 2027, value: 15 },
  { from: 2028, value: 17.5 },
  { from: 2029, value: 21 },
  { from: 2030, value: 25 },
  { from: 2031, value: 27 },
  { from: 2032, value: 29 },
  { from: 2033, value: 31 },
  { from: 2034, value: 33 },
  { from: 2035, value: 35 },
  { from: 2036, value: 37 },
  { from: 2037, value: 40 },
  { from: 2038, value: 43 },
  { from: 2039, value: 47 },
  { from: 2040, value: 53 },
];

const RFNBO_SUBQUOTA_STEPS: Step[] = [
  { from: 2026, value: 0.1 },
  { from: 2028, value: 0.5 },
  { from: 2030, value: 1.5 },
  { from: 2032, value: 2 },
  { from: 2034, value: 3 },
  { from: 2035, value: 5 },
  { from: 2037, value: 7 },
  { from: 2039, value: 9 },
  { from: 2040, value: 12 },
];

const ADVANCED_BIOFUEL_SUBQUOTA_STEPS: Step[] = [
  { from: 2026, value: 2 },
  { from: 2028, value: 2.5 },
  { from: 2030, value: 3 },
];

const FOOD_FEED_CAP_STEPS: Step[] = [
  { from: 2026, value: 4.4 },
  { from: 2028, value: 3.5 },
  { from: 2030, value: 3 },
];

const RFNBO_FACTOR_STEPS: Step[] = [
  { from: 2026, value: 3 },
  { from: 2035, value: 2.5 },
  { from: 2036, value: 2 },
  { from: 2037, value: 1.5 },
  { from: 2038, value: 1 },
];

const ELECTRICITY_FACTOR_STEPS: Step[] = [
  { from: 2026, value: 3 },
  { from: 2032, value: 2.5 },
  { from: 2033, value: 2 },
  { from: 2034, value: 1.5 },
  { from: 2035, value: 1 },
];

export type ThgQuoteTableRow = {
  year: number;
  thgQuote: number;
  rfnboSubquota: number;
  advancedBiofuelSubquota: number;
  foodFeedCap: number;
  rfnboFactor: number;
  electricityFactor: number;
};

export const THG_QUOTE_TABLE_YEARS = Array.from({ length: 15 }, (_, i) => 2026 + i);

export const THG_QUOTE_TABLE_ROWS: ThgQuoteTableRow[] = THG_QUOTE_TABLE_YEARS.map((year) => ({
  year,
  thgQuote: stepValue(year, THG_QUOTE_STEPS),
  rfnboSubquota: stepValue(year, RFNBO_SUBQUOTA_STEPS),
  advancedBiofuelSubquota: stepValue(year, ADVANCED_BIOFUEL_SUBQUOTA_STEPS),
  foodFeedCap: stepValue(year, FOOD_FEED_CAP_STEPS),
  rfnboFactor: stepValue(year, RFNBO_FACTOR_STEPS),
  electricityFactor: stepValue(year, ELECTRICITY_FACTOR_STEPS),
}));

export function formatRegulatoryTableValue(
  value: number,
  suffix: "%" | "×",
  locale = "de-DE",
): string {
  const formatted = Number.isInteger(value)
    ? String(value)
    : value.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return suffix === "×" ? `${formatted}×` : `${formatted} %`;
}
