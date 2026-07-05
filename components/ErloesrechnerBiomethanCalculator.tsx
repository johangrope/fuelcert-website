"use client";

import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { CalculatorField } from "./calculator/CalculatorField";
import { CalculatorSlider } from "./calculator/CalculatorSlider";
import { CalculatorYesNoToggle } from "./calculator/CalculatorYesNoToggle";
import {
  clamp,
  formatDecimalDraft,
  formatSpecificRevenuePerMwh,
  formatTotalRevenue,
  isDecimalInputDraft,
  parseNumericInput,
} from "@/lib/calculator-common";
import {
  ADVANCED_BIOFUEL_PRICE_MAX,
  ADVANCED_BIOFUEL_PRICE_MIN,
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
  const locale = useLocale();
  const t = useTranslations("calculatorBiomethan");
  const tCommon = useTranslations("common");
  const numberLocale = locale === "en" ? "en-GB" : "de-DE";

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

  return (
    <div className="erloesrechner">
      <p className="erloesrechner__scope-note" role="note">
        {t("scopeNote")}
      </p>

      <div className="erloesrechner__grid">
        <section
          className="erloesrechner__panel erloesrechner__panel--inputs"
          aria-labelledby="biomethan-inputs-heading"
        >
          <h2 id="biomethan-inputs-heading" className="erloesrechner__panel-title">
            {tCommon("assumptions")}
          </h2>

          <div className="erloesrechner__fields">
            <CalculatorField id="biomethan-year" label={t("year")} hint={t("yearHint")}>
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
              label={t("calorificVolume")}
              hint={t("rangeHint", {
                min: KWH_MIN.toLocaleString(numberLocale),
                max: KWH_MAX.toLocaleString(numberLocale),
              })}
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
              label={t("emissionsValue")}
              hint={t("emissionsHint", { min: EMISSIONS_MIN, max: EMISSIONS_MAX })}
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

            <CalculatorYesNoToggle
              id="biomethan-advanced-biofuel"
              label={t("advancedBiofuelQuestion")}
              hint={t("advancedBiofuelHint")}
              value={input.isAdvancedBiofuel}
              yesLabel={tCommon("yes")}
              noLabel={tCommon("no")}
              onChange={(value) => update("isAdvancedBiofuel", value)}
            />

            <CalculatorSlider
              id="biomethan-thg-price"
              label={t("thgPrice")}
              min={THG_PRICE_MIN}
              max={THG_PRICE_MAX}
              value={input.thgPricePerTonne}
              unit="€/t"
              onChange={(value) => update("thgPricePerTonne", value)}
            />

            <CalculatorSlider
              id="biomethan-advanced-price"
              label={t("advancedBiofuelPrice")}
              min={ADVANCED_BIOFUEL_PRICE_MIN}
              max={ADVANCED_BIOFUEL_PRICE_MAX}
              step={1}
              value={input.advancedBiofuelPricePerGj}
              unit="€/GJ"
              onChange={(value) => update("advancedBiofuelPricePerGj", value)}
            />
          </div>
        </section>

        <section
          className="erloesrechner__panel erloesrechner__panel--results"
          aria-labelledby="biomethan-results-heading"
        >
          <h2 id="biomethan-results-heading" className="erloesrechner__panel-title">
            {tCommon("result")}
          </h2>

          <div className="erloesrechner__results-table-wrap">
            <table className="erloesrechner__results-table" data-mobile-layout="stacked">
              <caption className="erloesrechner__results-caption">
                {t("resultsCaption", {
                  kwh: results.kwh.toLocaleString(numberLocale),
                  year: results.year,
                })}
              </caption>
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col">{t("colNoCap")}</th>
                  <th scope="col">{t("colAdvanced")}</th>
                  <th scope="col">{t("colTotal")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{t("specificRevenue")}</th>
                  <td data-label={t("colNoCap")}>{formatSpecificRevenuePerMwh(results.specificNoCap)}</td>
                  <td data-label={t("colAdvanced")}>
                    {formatSpecificRevenuePerMwh(results.specificAdvancedSubquota)}
                  </td>
                  <td className="erloesrechner__highlight" data-label={t("colTotal")}>
                    {formatSpecificRevenuePerMwh(results.specificTotal)}
                  </td>
                </tr>
                <tr>
                  <th scope="row">{t("totalRevenue")}</th>
                  <td data-label={t("colNoCap")}>{formatTotalRevenue(results.totalNoCap)}</td>
                  <td data-label={t("colAdvanced")}>{formatTotalRevenue(results.totalAdvancedSubquota)}</td>
                  <td className="erloesrechner__highlight" data-label={t("colTotal")}>
                    {formatTotalRevenue(results.totalTotal)}
                  </td>
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
