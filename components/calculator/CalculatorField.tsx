import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  hint?: string;
  children: ReactNode;
};

export function CalculatorField({ id, label, hint, children }: Props) {
  return (
    <div className="erloesrechner__field">
      <label className="erloesrechner__label" htmlFor={id}>
        {label}
      </label>
      {children}
      {hint ? <p className="erloesrechner__hint">{hint}</p> : null}
    </div>
  );
}
