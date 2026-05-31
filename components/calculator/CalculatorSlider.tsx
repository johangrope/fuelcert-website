import { formatSliderCurrency } from "@/lib/calculator-common";

type Props = {
  id: string;
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  unit: string;
  onChange: (value: number) => void;
};

export function CalculatorSlider({
  id,
  label,
  min,
  max,
  step = 1,
  value,
  unit,
  onChange,
}: Props) {
  return (
    <div className="erloesrechner__field">
      <div className="erloesrechner__slider-header">
        <label className="erloesrechner__label" htmlFor={id}>
          {label}
        </label>
        <span className="erloesrechner__slider-value" aria-live="polite">
          {formatSliderCurrency(value, unit)}
        </span>
      </div>
      <input
        id={id}
        className="erloesrechner__range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="erloesrechner__range-labels">
        <span>
          {min} {unit}
        </span>
        <span>
          {max} {unit}
        </span>
      </div>
    </div>
  );
}
