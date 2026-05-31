/** THG-Erlösrechner für Biomethan als Bio-CNG */

import {
  CALCULATOR_YEAR_DEFAULT,
  CALCULATOR_YEAR_OPTIONS,
  THG_PRICE_DEFAULT,
  THG_PRICE_MAX,
  THG_PRICE_MIN,
  clamp,
} from "./calculator-common";

export const FOSSILER_REFERENZWERT = 94; // gCO2/MJ
export const ANRECHNUNGSFAKTOR_BIO_CNG = 1;
export const BIO_CNG_KWH_DIVISOR = 1.1;

export const KWH_MIN = 1;
export const KWH_MAX = 100_000_000;
export const KWH_DEFAULT = 1;

export const EMISSIONS_DEFAULT = 0;
export const EMISSIONS_MIN = -150;
export const EMISSIONS_MAX = 94;

/** THG-Quote je Verpflichtungsjahr (Anteil, z. B. 0,12 = 12 %) */
export const BIOMETHAN_YEAR_THG_QUOTE: Record<number, number> = {
  2026: 0.12,
  2027: 0.175,
  2028: 0.195,
  2029: 0.225,
  2030: 0.265,
  2031: 0.3,
  2032: 0.33,
  2033: 0.36,
  2034: 0.38,
  2035: 0.41,
  2036: 0.46,
  2037: 0.51,
  2038: 0.56,
  2039: 0.61,
  2040: 0.65,
};

export type BiomethanFuelMode = "bio-cng";
/** Perspektivisch: "bio-lng" | "strom" */

export type BiomethanErloesrechnerInput = {
  year: number;
  kwh: number;
  emissionsGco2PerMj: number;
  thgPricePerTonne: number;
  fuelMode: BiomethanFuelMode;
};

export type BiomethanErloesrechnerResult = {
  year: number;
  thgQuote: number;
  anrechnungsfaktor: number;
  kwh: number;
  energieGj: number;
  effectiveEmissions: number;
  tatsaechlicheEmissionen: number;
  nettoThg: number;
  handelbareThg: number;
  thgPricePerTonne: number;
  thgWert: number;
  specificRevenuePerKwh: number;
  absoluteRevenue: number;
};

export const DEFAULT_BIOMETHAN_INPUT: BiomethanErloesrechnerInput = {
  year: CALCULATOR_YEAR_DEFAULT,
  kwh: KWH_DEFAULT,
  emissionsGco2PerMj: EMISSIONS_DEFAULT,
  thgPricePerTonne: THG_PRICE_DEFAULT,
  fuelMode: "bio-cng",
};

export { CALCULATOR_YEAR_OPTIONS as BIOMETHAN_YEAR_OPTIONS, THG_PRICE_MIN, THG_PRICE_MAX };

export function getThgQuoteForYear(year: number): number {
  return BIOMETHAN_YEAR_THG_QUOTE[year] ?? BIOMETHAN_YEAR_THG_QUOTE[CALCULATOR_YEAR_DEFAULT];
}

/** Bio-CNG: Energie in GJ aus Brennwert-kWh */
export function calculateEnergieGjBioCng(kwh: number): number {
  return (kwh / BIO_CNG_KWH_DIVISOR / 1000) * 3.6;
}

export function calculateBiomethanErloesrechner(
  input: BiomethanErloesrechnerInput,
): BiomethanErloesrechnerResult {
  const kwh = Math.max(0, input.kwh);
  const thgQuote = getThgQuoteForYear(input.year);
  const anrechnungsfaktor = ANRECHNUNGSFAKTOR_BIO_CNG;
  const effectiveEmissions = input.emissionsGco2PerMj;

  const energieGj = calculateEnergieGjBioCng(kwh);
  const tatsaechlicheEmissionen = energieGj * effectiveEmissions;
  const nettoThg =
    (energieGj * (FOSSILER_REFERENZWERT * (1 - thgQuote) - effectiveEmissions)) / 1000;
  const handelbareThg = nettoThg * anrechnungsfaktor;
  const thgWert = handelbareThg * input.thgPricePerTonne;

  const specificRevenuePerKwh = kwh > 0 ? thgWert / kwh : 0;

  return {
    year: input.year,
    thgQuote,
    anrechnungsfaktor,
    kwh,
    energieGj,
    effectiveEmissions,
    tatsaechlicheEmissionen,
    nettoThg,
    handelbareThg,
    thgWert,
    thgPricePerTonne: input.thgPricePerTonne,
    specificRevenuePerKwh,
    absoluteRevenue: thgWert,
  };
}

export function sanitizeBiomethanInput(
  input: BiomethanErloesrechnerInput,
): BiomethanErloesrechnerInput {
  return {
    ...input,
    kwh: clamp(input.kwh, KWH_MIN, KWH_MAX),
    emissionsGco2PerMj: clamp(input.emissionsGco2PerMj, EMISSIONS_MIN, EMISSIONS_MAX),
    thgPricePerTonne: clamp(input.thgPricePerTonne, THG_PRICE_MIN, THG_PRICE_MAX),
    fuelMode: "bio-cng",
  };
}
