import { Link } from "@/i18n/navigation";

type Action = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type Props = {
  heading: string;
  text?: string;
  actions: readonly Action[];
  id?: string;
};

export function ApplicationCtaSection({ heading, text, actions, id = "application-cta" }: Props) {
  const headingId = `${id}-heading`;

  return (
    <section className="service-cta application-cta" aria-labelledby={headingId}>
      <h2 id={headingId} className="service-cta__title">
        {heading}
      </h2>
      {text ? <p className="service-cta__text">{text}</p> : null}
      <div className="application-cta__actions">
        {actions.map((action) => (
          <Link
            key={`${action.href}-${action.label}`}
            href={action.href}
            className={
              action.variant === "secondary"
                ? "application-cta__button application-cta__button--secondary"
                : "service-cta__button application-cta__button"
            }
          >
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
