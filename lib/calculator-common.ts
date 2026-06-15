/** Gemeinsame Hilfen für FuelCert-Erlösrechner */

export const CALCULATOR_LIABILITY_DISCLAIMER =
  "Haftungsausschluss: Die berechneten Werte dienen ausschließlich der unverbindlichen Orientierung. FuelCert übernimmt keine Gewähr für Richtigkeit, Vollständigkeit oder Aktualität der Ergebnisse und haftet nicht für Entscheidungen oder Schäden, die auf Basis dieses Rechners getroffen bzw. entstehen.";

export const THG_PRICE_MIN = 50;
export const THG_PRICE_MAX = 600;
export const THG_PRICE_DEFAULT = 450;

export const CALCULATOR_YEAR_MIN = 2026;
export const CALCULATOR_YEAR_MAX = 2040;
export const CALCULATOR_YEAR_DEFAULT = 2026;

export const CALCULATOR_YEAR_OPTIONS = Array.from(
  { length: CALCULATOR_YEAR_MAX - CALCULATOR_YEAR_MIN + 1 },
  (_, i) => CALCULATOR_YEAR_MIN + i,
);

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function parseNumericInput(value: string, fallback: number): number {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : fallback;
}

/** Erlaubt Zwischenzustände beim Tippen (z. B. „-“, „-0,“) – höchstens eine Nachkommastelle */
export function isDecimalInputDraft(value: string): boolean {
  return /^-?\d*([.,]\d?)?$/.test(value);
}

export function formatDecimalDraft(value: number): string {
  return String(value).replace(".", ",");
}

export function roundToSingleDecimal(value: number): number {
  return Math.round(value * 10) / 10;
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

const decimal4Formatter = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 4,
});

export function formatTotalRevenue(value: number): string {
  return currencyFormatter.format(value);
}

export function formatSliderCurrency(value: number, unit: string): string {
  return `${decimalFormatter.format(value)} ${unit}`;
}

export function formatSpecificRevenuePerKwh(value: number): string {
  return `${decimal4Formatter.format(value)} €/kWh`;
}

/** Spezifischer Erlös aus €/kWh (Brennwert) in €/MWh umrechnen (× 1.000), 2 Nachkommastellen */
export function formatSpecificRevenuePerMwhFromKwh(valuePerKwh: number): string {
  return `${decimalFormatter.format(valuePerKwh * 1000)} €/MWh`;
}

export function formatPercent(value: number): string {
  return `${(value * 100).toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} %`;
}

export function formatNumber(value: number, decimals = 2): string {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatTonnes(value: number): string {
  return `${formatNumber(value, 3)} t CO₂eq`;
}
