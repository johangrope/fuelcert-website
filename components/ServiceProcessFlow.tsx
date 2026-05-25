export type ServiceProcessStep = {
  title: string;
  text: string;
};

type Props = {
  steps: readonly ServiceProcessStep[];
};

export function ServiceProcessFlow({ steps }: Props) {
  return (
    <ol className="service-process-flow">
      {steps.map((step, index) => (
        <li key={step.title} className="service-process-step">
          <span className="service-process-step__num" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="service-process-step__body">
            <p className="service-process-step__title">{step.title}</p>
            <p className="service-process-step__text">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
