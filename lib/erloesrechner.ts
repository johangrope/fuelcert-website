/** THG-Erlösrechner für grünen Wasserstoff (RFNBO / strombasiert) */

export const FOSSILER_REFERENZWERT = 94; // gCO2/MJ
export const HEIZWERT_H2_MJ_PER_KG = 120;
export const EFFIZIENZFAKTOR_BRENNSTOFFZELLE = 0.4;

export const HYDROGEN_KG_MIN = 1;
export const HYDROGEN_KG_MAX = 1_000_000;
export const HYDROGEN_KG_DEFAULT = 1000;

export const EMISSIONS_FACTOR_MIN = -100;
export const EMISSIONS_FACTOR_MAX = 28.1;
export const EMISSIONS_FACTOR_DEFAULT = 5;

export const YEAR_MIN = 2026;
export const YEAR_MAX = 2040;
export const YEAR_DEFAULT = 2026;

export const NO_CAP_PRICE_MIN = 50;
export const NO_CAP_PRICE_MAX = 600;
export const NO_CAP_PRICE_DEFAULT = 450;

export const RFNBO_PRICE_MIN = 0;
export const RFNBO_PRICE_MAX = 120;
export const RFNBO_PRICE_DEFAULT = 80;

export type Drivetrain = "brennstoffzelle" | "verbrennungsmotor";

export const DRIVETRAIN_OPTIONS: { value: Drivetrain; label: string }[] = [
  { value: "brennstoffzelle", label: "Brennstoffzellenfahrzeuge" },
  { value: "verbrennungsmotor", label: "Verbrennungsmotor" },
];

export const YEAR_PARAMS: Record<
  number,
  { thgQuote: number; factor: number }
> = {
  2026: { thgQuote: 0.12, factor: 3 },
  2027: { thgQuote: 0.175, factor: 3 },
  2028: { thgQuote: 0.195, factor: 3 },
  2029: { thgQuote: 0.225, factor: 3 },
  2030: { thgQuote: 0.265, factor: 3 },
  2031: { thgQuote: 0.3, factor: 3 },
  2032: { thgQuote: 0.33, factor: 3 },
  2033: { thgQuote: 0.36, factor: 3 },
  2034: { thgQuote: 0.38, factor: 3 },
  2035: { thgQuote: 0.41, factor: 3 },
  2036: { thgQuote: 0.46, factor: 3 },
  2037: { thgQuote: 0.51, factor: 2.5 },
  2038: { thgQuote: 0.56, factor: 2 },
  2039: { thgQuote: 0.61, factor: 1.5 },
  2040: { thgQuote: 0.65, factor: 1 },
};

export const YEAR_OPTIONS = Object.keys(YEAR_PARAMS).map(Number);

export type ErloesrechnerInput = {
  hydrogenKg: number;
  emissionsFactor: number;
  year: number;
  drivetrain: Drivetrain;
  noCapPricePerTonne: number;
  rfnboSubquotaPricePerGj: number;
};

export type ErloesrechnerResult = {
  specificNoCap: number;
  specificSubquota: number;
  specificTotal: number;
  totalNoCap: number;
  totalSubquota: number;
  totalTotal: number;
};

export const DEFAULT_ERLOESRECHNER_INPUT: ErloesrechnerInput = {
  hydrogenKg: HYDROGEN_KG_DEFAULT,
  emissionsFactor: EMISSIONS_FACTOR_DEFAULT,
  year: YEAR_DEFAULT,
  drivetrain: "brennstoffzelle",
  noCapPricePerTonne: NO_CAP_PRICE_DEFAULT,
  rfnboSubquotaPricePerGj: RFNBO_PRICE_DEFAULT,
};

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function calculateErloesrechner(input: ErloesrechnerInput): ErloesrechnerResult {
  const M = input.hydrogenKg;
  const EF = input.emissionsFactor;
  const { thgQuote, factor } = YEAR_PARAMS[input.year];
  const { noCapPricePerTonne, rfnboSubquotaPricePerGj, drivetrain } = input;

  const tatsaechlicheEmissionen = (EF * HEIZWERT_H2_MJ_PER_KG) / 1000 * M;
  const tatsaechlicheEmissionenBz =
    tatsaechlicheEmissionen * EFFIZIENZFAKTOR_BRENNSTOFFZELLE * factor;
  const tatsaechlicheEmissionenVm = tatsaechlicheEmissionen * factor;

  const referenzThgEmissionen =
    (FOSSILER_REFERENZWERT * HEIZWERT_H2_MJ_PER_KG) / 1000 * factor * M;
  const referenzThgZielwert = referenzThgEmissionen * (1 - thgQuote);

  const thgMinderungBz = referenzThgZielwert - tatsaechlicheEmissionenBz;
  const thgMinderungVm = referenzThgZielwert - tatsaechlicheEmissionenVm;

  const energiemenge = M * HEIZWERT_H2_MJ_PER_KG;

  const erloesNoCapBz = (thgMinderungBz / 1000) * noCapPricePerTonne;
  const erloesNoCapVm = (thgMinderungVm / 1000) * noCapPricePerTonne;
  const erloesUnterquote = (rfnboSubquotaPricePerGj / 1000) * energiemenge;

  const erloesNoCap =
    drivetrain === "brennstoffzelle" ? erloesNoCapBz : erloesNoCapVm;

  const specificNoCap = erloesNoCap / M;
  const specificSubquota = erloesUnterquote / M;

  return {
    specificNoCap,
    specificSubquota,
    specificTotal: specificNoCap + specificSubquota,
    totalNoCap: erloesNoCap,
    totalSubquota: erloesUnterquote,
    totalTotal: erloesNoCap + erloesUnterquote,
  };
}

const currencyFormatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const decimalFormatter = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatTotalRevenue(value: number): string {
  return currencyFormatter.format(value);
}

export function formatSpecificRevenue(value: number): string {
  return `${decimalFormatter.format(value)} €/kg H₂`;
}

export function formatSliderCurrency(value: number, unit: string): string {
  return `${decimalFormatter.format(value)} ${unit}`;
}
