type Props = {
  id: string;
  label: string;
  hint?: string;
  value: boolean;
  yesLabel: string;
  noLabel: string;
  onChange: (value: boolean) => void;
};

export function CalculatorYesNoToggle({
  id,
  label,
  hint,
  value,
  yesLabel,
  noLabel,
  onChange,
}: Props) {
  return (
    <div className="erloesrechner__field">
      <span className="erloesrechner__label" id={`${id}-label`}>
        {label}
      </span>
      <div className="erloesrechner__toggle" role="group" aria-labelledby={`${id}-label`}>
        <button
          type="button"
          className={`erloesrechner__toggle-btn${value ? " erloesrechner__toggle-btn--active" : ""}`}
          aria-pressed={value}
          onClick={() => onChange(true)}
        >
          {yesLabel}
        </button>
        <button
          type="button"
          className={`erloesrechner__toggle-btn${!value ? " erloesrechner__toggle-btn--active" : ""}`}
          aria-pressed={!value}
          onClick={() => onChange(false)}
        >
          {noLabel}
        </button>
      </div>
      {hint ? <p className="erloesrechner__hint">{hint}</p> : null}
    </div>
  );
}
