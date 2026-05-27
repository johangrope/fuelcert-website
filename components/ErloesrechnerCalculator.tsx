"use client";

import { useMemo, useState } from "react";
import {
  ERLOESRECHNER_LIABILITY_DISCLAIMER,
  ERLOESRECHNER_SCOPE_NOTE,
} from "@/lib/erloesrechner-content";
import {
  DEFAULT_ERLOESRECHNER_INPUT,
  DRIVETRAIN_OPTIONS,
  EMISSIONS_FACTOR_MAX,
  EMISSIONS_FACTOR_MIN,
  HYDROGEN_KG_MAX,
  HYDROGEN_KG_MIN,
  NO_CAP_PRICE_MAX,
  NO_CAP_PRICE_MIN,
  RFNBO_PRICE_MAX,
  RFNBO_PRICE_MIN,
  YEAR_OPTIONS,
  calculateErloesrechner,
  clamp,
  formatSliderCurrency,
  formatSpecificRevenue,
  formatTotalRevenue,
  type Drivetrain,
  type ErloesrechnerInput,
} from "@/lib/erloesrechner";

function parseNumericInput(value: string, fallback: number): number {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function ErloesrechnerCalculator() {
  const [input, setInput] = useState<ErloesrechnerInput>(DEFAULT_ERLOESRECHNER_INPUT);

  const results = useMemo(() => calculateErloesrechner(input), [input]);

  const update = <K extends keyof ErloesrechnerInput>(key: K, value: ErloesrechnerInput[K]) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="erloesrechner">
      <p className="erloesrechner__scope-note" role="note">
        {ERLOESRECHNER_SCOPE_NOTE}
      </p>

      <div className="erloesrechner__grid">
        <section className="erloesrechner__panel erloesrechner__panel--inputs" aria-labelledby="erloesrechner-inputs-heading">
          <h2 id="erloesrechner-inputs-heading" className="erloesrechner__panel-title">
            Annahmen
          </h2>

          <div className="erloesrechner__fields">
            <div className="erloesrechner__field">
              <label className="erloesrechner__label" htmlFor="hydrogen-kg">
                Menge Wasserstoff in kg
              </label>
              <input
                id="hydrogen-kg"
                className="erloesrechner__input"
                type="number"
                min={HYDROGEN_KG_MIN}
                max={HYDROGEN_KG_MAX}
                step={1}
                value={input.hydrogenKg}
                onChange={(e) =>
                  update(
                    "hydrogenKg",
                    clamp(parseNumericInput(e.target.value, input.hydrogenKg), HYDROGEN_KG_MIN, HYDROGEN_KG_MAX),
                  )
                }
              />
              <p className="erloesrechner__hint">Bereich: {HYDROGEN_KG_MIN.toLocaleString("de-DE")} – {HYDROGEN_KG_MAX.toLocaleString("de-DE")} kg</p>
            </div>

            <div className="erloesrechner__field">
              <label className="erloesrechner__label" htmlFor="emissions-factor">
                Emissionsfaktor des Wasserstoffs in gCO₂/MJ
              </label>
              <input
                id="emissions-factor"
                className="erloesrechner__input"
                type="number"
                min={EMISSIONS_FACTOR_MIN}
                max={EMISSIONS_FACTOR_MAX}
                step={0.1}
                value={input.emissionsFactor}
                onChange={(e) =>
                  update(
                    "emissionsFactor",
                    clamp(
                      parseNumericInput(e.target.value, input.emissionsFactor),
                      EMISSIONS_FACTOR_MIN,
                      EMISSIONS_FACTOR_MAX,
                    ),
                  )
                }
              />
              <p className="erloesrechner__hint">
                Manuell eintragbar, z. B. aus Zertifizierung oder Bilanzierung. Bereich: {EMISSIONS_FACTOR_MIN} bis {EMISSIONS_FACTOR_MAX} gCO₂/MJ.
              </p>
            </div>

            <div className="erloesrechner__field">
              <label className="erloesrechner__label" htmlFor="year">
                Verpflichtungsjahr
              </label>
              <select
                id="year"
                className="erloesrechner__select"
                value={input.year}
                onChange={(e) => update("year", Number(e.target.value))}
              >
                {YEAR_OPTIONS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <p className="erloesrechner__hint">Steuert THG-Quote und Jahresfaktor gemäß Regulierung.</p>
            </div>

            <div className="erloesrechner__field">
              <label className="erloesrechner__label" htmlFor="drivetrain">
                Antriebsart
              </label>
              <select
                id="drivetrain"
                className="erloesrechner__select"
                value={input.drivetrain}
                onChange={(e) => update("drivetrain", e.target.value as Drivetrain)}
              >
                {DRIVETRAIN_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="erloesrechner__hint">Beeinflusst die No-Cap-Quote; die RFNBO-Unterquote bleibt unverändert.</p>
            </div>

            <div className="erloesrechner__field">
              <div className="erloesrechner__slider-header">
                <label className="erloesrechner__label" htmlFor="no-cap-price">
                  Quotenpreis No-Cap in € je Tonne
                </label>
                <span className="erloesrechner__slider-value" aria-live="polite">
                  {formatSliderCurrency(input.noCapPricePerTonne, "€/t")}
                </span>
              </div>
              <input
                id="no-cap-price"
                className="erloesrechner__range"
                type="range"
                min={NO_CAP_PRICE_MIN}
                max={NO_CAP_PRICE_MAX}
                step={1}
                value={input.noCapPricePerTonne}
                onChange={(e) => update("noCapPricePerTonne", Number(e.target.value))}
              />
              <div className="erloesrechner__range-labels">
                <span>{NO_CAP_PRICE_MIN} €/t</span>
                <span>{NO_CAP_PRICE_MAX} €/t</span>
              </div>
            </div>

            <div className="erloesrechner__field">
              <div className="erloesrechner__slider-header">
                <label className="erloesrechner__label" htmlFor="rfnbo-price">
                  Quotenpreis RFNBO-Unterquote in € je GJ
                </label>
                <span className="erloesrechner__slider-value" aria-live="polite">
                  {formatSliderCurrency(input.rfnboSubquotaPricePerGj, "€/GJ")}
                </span>
              </div>
              <input
                id="rfnbo-price"
                className="erloesrechner__range"
                type="range"
                min={RFNBO_PRICE_MIN}
                max={RFNBO_PRICE_MAX}
                step={1}
                value={input.rfnboSubquotaPricePerGj}
                onChange={(e) => update("rfnboSubquotaPricePerGj", Number(e.target.value))}
              />
              <div className="erloesrechner__range-labels">
                <span>{RFNBO_PRICE_MIN} €/GJ</span>
                <span>{RFNBO_PRICE_MAX} €/GJ</span>
              </div>
            </div>
          </div>
        </section>

        <section className="erloesrechner__panel erloesrechner__panel--results" aria-labelledby="erloesrechner-results-heading">
          <h2 id="erloesrechner-results-heading" className="erloesrechner__panel-title">
            Ergebnis
          </h2>

          <div className="erloesrechner__results-table-wrap">
            <table className="erloesrechner__results-table">
              <caption className="erloesrechner__results-caption">
                Erlöse für {input.hydrogenKg.toLocaleString("de-DE")} kg H₂ im Jahr {input.year}
              </caption>
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col">No-Cap Quote</th>
                  <th scope="col">RFNBO-Unterquote</th>
                  <th scope="col">gesamt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">spezifischer Erlös</th>
                  <td>{formatSpecificRevenue(results.specificNoCap)}</td>
                  <td>{formatSpecificRevenue(results.specificSubquota)}</td>
                  <td className="erloesrechner__highlight">{formatSpecificRevenue(results.specificTotal)}</td>
                </tr>
                <tr>
                  <th scope="row">Gesamterlös</th>
                  <td>{formatTotalRevenue(results.totalNoCap)}</td>
                  <td>{formatTotalRevenue(results.totalSubquota)}</td>
                  <td className="erloesrechner__highlight">{formatTotalRevenue(results.totalTotal)}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
      </div>

      <p className="erloesrechner__disclaimer">{ERLOESRECHNER_LIABILITY_DISCLAIMER}</p>
    </div>
  );
}
