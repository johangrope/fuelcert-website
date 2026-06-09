"use client";

import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { CalculatorField } from "./calculator/CalculatorField";
import { CalculatorSlider } from "./calculator/CalculatorSlider";
import {
  clamp,
  formatDecimalDraft,
  formatSpecificRevenuePerMwhFromKwh,
  formatTotalRevenue,
  isDecimalInputDraft,
  parseNumericInput,
} from "@/lib/calculator-common";
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

            <CalculatorSlider
              id="biomethan-thg-price"
              label={t("thgPrice")}
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
            {tCommon("result")}
          </h2>

          <p className="erloesrechner__results-caption">
            {t("resultsCaption", {
              kwh: results.kwh.toLocaleString(numberLocale),
              year: results.year,
            })}
          </p>

          <div className="erloesrechner__highlights">
            <div className="erloesrechner__highlight-card">
              <p className="erloesrechner__highlight-label">{t("specificRevenue")}</p>
              <p className="erloesrechner__highlight-value">
                {formatSpecificRevenuePerMwhFromKwh(results.specificRevenuePerKwh)}
              </p>
              <p className="erloesrechner__highlight-unit">{t("specificRevenueUnit")}</p>
            </div>
            <div className="erloesrechner__highlight-card erloesrechner__highlight-card--featured">
              <p className="erloesrechner__highlight-label">{t("totalRevenue")}</p>
              <p className="erloesrechner__highlight-value">{formatTotalRevenue(results.absoluteRevenue)}</p>
            </div>
          </div>
        </section>
      </div>

      <p className="erloesrechner__disclaimer">{tCommon("liabilityDisclaimer")}</p>
    </div>
  );
}
