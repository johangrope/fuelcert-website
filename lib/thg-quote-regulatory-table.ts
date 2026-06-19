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
  { from: 2027, value: 17.5 },
  { from: 2028, value: 19.5 },
  { from: 2029, value: 22.5 },
  { from: 2030, value: 26.5 },
  { from: 2031, value: 30 },
  { from: 2032, value: 33 },
  { from: 2033, value: 36 },
  { from: 2034, value: 38 },
  { from: 2035, value: 41 },
  { from: 2036, value: 46 },
  { from: 2037, value: 51 },
  { from: 2038, value: 56 },
  { from: 2039, value: 61 },
  { from: 2040, value: 65 },
];

const RFNBO_SUBQUOTA_STEPS: Step[] = [
  { from: 2026, value: 0.1 },
  { from: 2028, value: 0.5 },
  { from: 2030, value: 1.5 },
  { from: 2032, value: 3 },
  { from: 2033, value: 3.5 },
  { from: 2034, value: 4 },
  { from: 2035, value: 5 },
  { from: 2036, value: 6 },
  { from: 2037, value: 7 },
  { from: 2038, value: 8 },
  { from: 2039, value: 9 },
  { from: 2040, value: 10 },
];

const ADVANCED_BIOFUEL_SUBQUOTA_STEPS: Step[] = [
  { from: 2026, value: 2 },
  { from: 2027, value: 3 },
  { from: 2030, value: 3.5 },
  { from: 2031, value: 4 },
  { from: 2032, value: 4.5 },
  { from: 2033, value: 5 },
  { from: 2034, value: 5.5 },
  { from: 2035, value: 6 },
  { from: 2036, value: 6.5 },
  { from: 2037, value: 7 },
  { from: 2038, value: 7.5 },
  { from: 2039, value: 8 },
  { from: 2040, value: 9 },
];

const FOOD_FEED_CAP_STEPS: Step[] = [
  { from: 2026, value: 4.9 },
  { from: 2028, value: 4.6 },
  { from: 2029, value: 4.7 },
  { from: 2030, value: 4.9 },
  { from: 2031, value: 5 },
  { from: 2032, value: 5.5 },
  { from: 2033, value: 5.8 },
];

const WASTE_BIOFUEL_CAP_STEPS: Step[] = [
  { from: 2026, value: 1.9 },
  { from: 2031, value: 2 },
  { from: 2033, value: 2.3 },
  { from: 2035, value: 2.4 },
  { from: 2037, value: 2.6 },
  { from: 2039, value: 2.8 },
];

const RFNBO_FACTOR_STEPS: Step[] = [
  { from: 2026, value: 3 },
  { from: 2037, value: 2.5 },
  { from: 2038, value: 2 },
  { from: 2039, value: 1.5 },
  { from: 2040, value: 1 },
];

const ELECTRICITY_FACTOR_STEPS: Step[] = [
  { from: 2026, value: 3 },
  { from: 2032, value: 2.5 },
  { from: 2033, value: 2 },
  { from: 2034, value: 1.5 },
  { from: 2035, value: 1 },
];

const M3_N3_ELECTRICITY_FACTOR_STEPS: Step[] = [
  { from: 2026, value: 3 },
  { from: 2027, value: 4 },
  { from: 2035, value: 3.5 },
  { from: 2036, value: 3 },
  { from: 2037, value: 2.5 },
  { from: 2038, value: 2 },
  { from: 2039, value: 1.5 },
  { from: 2040, value: 1 },
];

export type ThgQuoteTableRow = {
  year: number;
  thgQuote: number;
  rfnboSubquota: number;
  advancedBiofuelSubquota: number;
  foodFeedCap: number;
  wasteBiofuelCap: number;
  rfnboFactor: number;
  electricityFactor: number;
  m3n3ElectricityFactor: number;
};

export const THG_QUOTE_TABLE_YEARS = Array.from({ length: 15 }, (_, i) => 2026 + i);

export const THG_QUOTE_TABLE_ROWS: ThgQuoteTableRow[] = THG_QUOTE_TABLE_YEARS.map((year) => ({
  year,
  thgQuote: stepValue(year, THG_QUOTE_STEPS),
  rfnboSubquota: stepValue(year, RFNBO_SUBQUOTA_STEPS),
  advancedBiofuelSubquota: stepValue(year, ADVANCED_BIOFUEL_SUBQUOTA_STEPS),
  foodFeedCap: stepValue(year, FOOD_FEED_CAP_STEPS),
  wasteBiofuelCap: stepValue(year, WASTE_BIOFUEL_CAP_STEPS),
  rfnboFactor: stepValue(year, RFNBO_FACTOR_STEPS),
  electricityFactor: stepValue(year, ELECTRICITY_FACTOR_STEPS),
  m3n3ElectricityFactor: stepValue(year, M3_N3_ELECTRICITY_FACTOR_STEPS),
}));

export function formatRegulatoryTableValue(
  value: number | null,
  suffix: "%" | "×",
  locale = "de-DE",
): string {
  if (value === null) return "—";
  const formatted = Number.isInteger(value)
    ? String(value)
    : value.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return suffix === "×" ? `${formatted}×` : `${formatted} %`;
}
