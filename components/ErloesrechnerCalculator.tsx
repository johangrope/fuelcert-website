"use client";

import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import {
  formatDecimalDraft,
  isDecimalInputDraft,
  parseNumericInput,
  roundToSingleDecimal,
} from "@/lib/calculator-common";
import {
  DEFAULT_ERLOESRECHNER_INPUT,
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

export function ErloesrechnerCalculator() {
  const locale = useLocale();
  const t = useTranslations("calculatorH2");
  const tCommon = useTranslations("common");
  const numberLocale = locale === "en" ? "en-GB" : "de-DE";
  const drivetrainOptions = useMemo(
    () =>
      [
        { value: "brennstoffzelle" as Drivetrain, label: t("drivetrainFuelCell") },
        { value: "verbrennungsmotor" as Drivetrain, label: t("drivetrainCombustion") },
      ] as const,
    [t],
  );
  const [input, setInput] = useState<ErloesrechnerInput>(DEFAULT_ERLOESRECHNER_INPUT);
  const [emissionsFactorDraft, setEmissionsFactorDraft] = useState(
    formatDecimalDraft(DEFAULT_ERLOESRECHNER_INPUT.emissionsFactor),
  );

  const results = useMemo(() => calculateErloesrechner(input), [input]);

  const update = <K extends keyof ErloesrechnerInput>(key: K, value: ErloesrechnerInput[K]) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="erloesrechner">
      <p className="erloesrechner__scope-note" role="note">
        {t("scopeNote")}
      </p>

      <div className="erloesrechner__grid">
        <section className="erloesrechner__panel erloesrechner__panel--inputs" aria-labelledby="erloesrechner-inputs-heading">
          <h2 id="erloesrechner-inputs-heading" className="erloesrechner__panel-title">
            {tCommon("assumptions")}
          </h2>

          <div className="erloesrechner__fields">
            <div className="erloesrechner__field">
              <label className="erloesrechner__label" htmlFor="hydrogen-kg">
                {t("hydrogenKg")}
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
              <p className="erloesrechner__hint">
                {t("rangeHint", {
                  min: HYDROGEN_KG_MIN.toLocaleString(numberLocale),
                  max: HYDROGEN_KG_MAX.toLocaleString(numberLocale),
                })}
              </p>
            </div>

            <div className="erloesrechner__field">
              <label className="erloesrechner__label" htmlFor="emissions-factor">
                {t("emissionsFactor")}
              </label>
              <input
                id="emissions-factor"
                className="erloesrechner__input"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={emissionsFactorDraft}
                onChange={(e) => {
                  const value = e.target.value;
                  if (!isDecimalInputDraft(value)) return;
                  setEmissionsFactorDraft(value);
                  const parsed = parseNumericInput(value, NaN);
                  if (Number.isFinite(parsed)) {
                    update(
                      "emissionsFactor",
                      clamp(roundToSingleDecimal(parsed), EMISSIONS_FACTOR_MIN, EMISSIONS_FACTOR_MAX),
                    );
                  }
                }}
                onBlur={() => {
                  const parsed = clamp(
                    roundToSingleDecimal(
                      parseNumericInput(emissionsFactorDraft, input.emissionsFactor),
                    ),
                    EMISSIONS_FACTOR_MIN,
                    EMISSIONS_FACTOR_MAX,
                  );
                  update("emissionsFactor", parsed);
                  setEmissionsFactorDraft(formatDecimalDraft(parsed));
                }}
              />
              <p className="erloesrechner__hint">
                {t("emissionsHint", { min: EMISSIONS_FACTOR_MIN, max: EMISSIONS_FACTOR_MAX })}
              </p>
            </div>

            <div className="erloesrechner__field">
              <label className="erloesrechner__label" htmlFor="year">
                {t("year")}
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
              <p className="erloesrechner__hint">{t("yearHint")}</p>
            </div>

            <div className="erloesrechner__field">
              <label className="erloesrechner__label" htmlFor="drivetrain">
                {t("drivetrain")}
              </label>
              <select
                id="drivetrain"
                className="erloesrechner__select"
                value={input.drivetrain}
                onChange={(e) => update("drivetrain", e.target.value as Drivetrain)}
              >
                {drivetrainOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="erloesrechner__hint">{t("drivetrainHint")}</p>
            </div>

            <div className="erloesrechner__field">
              <div className="erloesrechner__slider-header">
                <label className="erloesrechner__label" htmlFor="no-cap-price">
                  {t("noCapPrice")}
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
                  {t("rfnboPrice")}
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
            {tCommon("result")}
          </h2>

          <div className="erloesrechner__results-table-wrap">
            <table className="erloesrechner__results-table">
              <caption className="erloesrechner__results-caption">
                {t("resultsCaption", {
                  kg: input.hydrogenKg.toLocaleString(numberLocale),
                  year: input.year,
                })}
              </caption>
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col">{t("colNoCap")}</th>
                  <th scope="col">{t("colRfnbo")}</th>
                  <th scope="col">{t("colTotal")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{t("specificRevenue")}</th>
                  <td>{formatSpecificRevenue(results.specificNoCap)}</td>
                  <td>{formatSpecificRevenue(results.specificSubquota)}</td>
                  <td className="erloesrechner__highlight">{formatSpecificRevenue(results.specificTotal)}</td>
                </tr>
                <tr>
                  <th scope="row">{t("totalRevenue")}</th>
                  <td>{formatTotalRevenue(results.totalNoCap)}</td>
                  <td>{formatTotalRevenue(results.totalSubquota)}</td>
                  <td className="erloesrechner__highlight">{formatTotalRevenue(results.totalTotal)}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
      </div>

      <p className="erloesrechner__disclaimer">{tCommon("liabilityDisclaimer")}</p>
    </div>
  );
}
