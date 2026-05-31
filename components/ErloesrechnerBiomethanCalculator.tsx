"use client";

import { useMemo, useState } from "react";
import { CalculatorField } from "./calculator/CalculatorField";
import { CalculatorSlider } from "./calculator/CalculatorSlider";
import {
  CALCULATOR_LIABILITY_DISCLAIMER,
  clamp,
  formatDecimalDraft,
  formatNumber,
  formatPercent,
  formatSpecificRevenuePerMwhFromKwh,
  formatTonnes,
  formatTotalRevenue,
  isDecimalInputDraft,
  parseNumericInput,
} from "@/lib/calculator-common";
import { BIOMETHAN_ERLOESRECHNER_SCOPE_NOTE } from "@/lib/erloesrechner-biomethan-content";
import {
  BIOMETHAN_YEAR_OPTIONS,
  DEFAULT_BIOMETHAN_INPUT,
  EMISSIONS_MAX,
  EMISSIONS_MIN,
  KWH_MAX,
  KWH_MIN,
  THG_PRICE_MAX,
  THG_PRICE_MIN,
  calculateBiomethanErloesrechner,
  sanitizeBiomethanInput,
  type BiomethanErloesrechnerInput,
} from "@/lib/erloesrechner-biomethan";

export function ErloesrechnerBiomethanCalculator() {
  const [input, setInput] = useState<BiomethanErloesrechnerInput>(DEFAULT_BIOMETHAN_INPUT);
  const [emissionsDraft, setEmissionsDraft] = useState(
    formatDecimalDraft(DEFAULT_BIOMETHAN_INPUT.emissionsGco2PerMj),
  );

  const results = useMemo(
    () => calculateBiomethanErloesrechner(sanitizeBiomethanInput(input)),
    [input],
  );

  const update = <K extends keyof BiomethanErloesrechnerInput>(
    key: K,
    value: BiomethanErloesrechnerInput[K],
  ) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  const detailRows: { label: string; value: string }[] = [
    { label: "Verpflichtungsjahr", value: String(results.year) },
    { label: "THG-Quote", value: formatPercent(results.thgQuote) },
    { label: "Anrechnungsfaktor", value: formatNumber(results.anrechnungsfaktor, 1) },
    { label: "Brennwertmenge Biomethan", value: `${formatNumber(results.kwh, 0)} kWh` },
    { label: "Energie (GJ)", value: `${formatNumber(results.energieGj, 4)} GJ` },
    {
      label: "Effektiver Emissionswert",
      value: `${formatNumber(results.effectiveEmissions, 2)} gCO₂/MJ`,
    },
    {
      label: "Tatsächliche Emissionen",
      value: `${formatNumber(results.tatsaechlicheEmissionen, 2)} kg CO₂eq`,
    },
    { label: "Netto-THG", value: formatTonnes(results.nettoThg) },
    { label: "Handelbare THG", value: formatTonnes(results.handelbareThg) },
    { label: "THG-Preis", value: `${formatNumber(results.thgPricePerTonne, 0)} €/t CO₂eq` },
    { label: "THG-Wert", value: formatTotalRevenue(results.thgWert) },
  ];

  return (
    <div className="erloesrechner">
      <p className="erloesrechner__scope-note" role="note">
        {BIOMETHAN_ERLOESRECHNER_SCOPE_NOTE}
      </p>

      <div className="erloesrechner__grid">
        <section
          className="erloesrechner__panel erloesrechner__panel--inputs"
          aria-labelledby="biomethan-inputs-heading"
        >
          <h2 id="biomethan-inputs-heading" className="erloesrechner__panel-title">
            Annahmen
          </h2>

          <div className="erloesrechner__fields">
            <CalculatorField
              id="biomethan-year"
              label="Verpflichtungsjahr"
              hint="Steuert die THG-Quote gemäß Regulierung."
            >
              <select
                id="biomethan-year"
                className="erloesrechner__select"
                value={input.year}
                onChange={(e) => update("year", Number(e.target.value))}
              >
                {BIOMETHAN_YEAR_OPTIONS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </CalculatorField>

            <CalculatorField
              id="biomethan-kwh"
              label="Brennwertmenge Biomethan (kWh)"
              hint={`Bereich: ${KWH_MIN.toLocaleString("de-DE")} – ${KWH_MAX.toLocaleString("de-DE")} kWh`}
            >
              <input
                id="biomethan-kwh"
                className="erloesrechner__input"
                type="number"
                min={KWH_MIN}
                max={KWH_MAX}
                step={1}
                value={input.kwh}
                onChange={(e) => {
                  const parsed = parseNumericInput(e.target.value, input.kwh);
                  update("kwh", Math.max(KWH_MIN, Math.min(KWH_MAX, parsed)));
                }}
              />
            </CalculatorField>

            <CalculatorField
              id="biomethan-emissions"
              label="Emissionswert Biomethan (gCO₂/MJ)"
              hint={`Manuell eintragbar. Bereich: ${EMISSIONS_MIN} bis ${EMISSIONS_MAX} gCO₂/MJ.`}
            >
              <input
                id="biomethan-emissions"
                className="erloesrechner__input"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={emissionsDraft}
                onChange={(e) => {
                  const value = e.target.value;
                  if (!isDecimalInputDraft(value)) return;
                  setEmissionsDraft(value);
                  const parsed = parseNumericInput(value, NaN);
                  if (Number.isFinite(parsed)) {
                    update("emissionsGco2PerMj", clamp(parsed, EMISSIONS_MIN, EMISSIONS_MAX));
                  }
                }}
                onBlur={() => {
                  const parsed = clamp(
                    parseNumericInput(emissionsDraft, input.emissionsGco2PerMj),
                    EMISSIONS_MIN,
                    EMISSIONS_MAX,
                  );
                  update("emissionsGco2PerMj", parsed);
                  setEmissionsDraft(formatDecimalDraft(parsed));
                }}
              />
            </CalculatorField>

            <CalculatorSlider
              id="biomethan-thg-price"
              label="THG-Preis (€/t CO₂eq)"
              min={THG_PRICE_MIN}
              max={THG_PRICE_MAX}
              value={input.thgPricePerTonne}
              unit="€/t"
              onChange={(value) => update("thgPricePerTonne", value)}
            />
          </div>
        </section>

        <section
          className="erloesrechner__panel erloesrechner__panel--results"
          aria-labelledby="biomethan-results-heading"
        >
          <h2 id="biomethan-results-heading" className="erloesrechner__panel-title">
            Ergebnis
          </h2>

          <p className="erloesrechner__results-caption">
            Erlöse für {results.kwh.toLocaleString("de-DE")} kWh (Brennwert) als Bio-CNG im Jahr{" "}
            {results.year}
          </p>

          <div className="erloesrechner__highlights">
            <div className="erloesrechner__highlight-card">
              <p className="erloesrechner__highlight-label">Spezifischer Erlös</p>
              <p className="erloesrechner__highlight-value">
                {formatSpecificRevenuePerMwhFromKwh(results.specificRevenuePerKwh)}
              </p>
              <p className="erloesrechner__highlight-unit">€/MWh (Brennwert)</p>
            </div>
            <div className="erloesrechner__highlight-card erloesrechner__highlight-card--featured">
              <p className="erloesrechner__highlight-label">Absoluter Erlös</p>
              <p className="erloesrechner__highlight-value">{formatTotalRevenue(results.absoluteRevenue)}</p>
            </div>
          </div>

          <div className="erloesrechner__details">
            <h3 className="erloesrechner__details-title">Berechnungsdetails</h3>
            <table className="erloesrechner__details-table">
              <tbody>
                {detailRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <p className="erloesrechner__disclaimer">{CALCULATOR_LIABILITY_DISCLAIMER}</p>
    </div>
  );
}
