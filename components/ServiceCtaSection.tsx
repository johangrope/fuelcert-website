import Link from "next/link";

type Props = {
  heading: string;
  text: string;
  buttonLabel?: string;
  href?: string;
};

export function ServiceCtaSection({
  heading,
  text,
  buttonLabel = "Kontakt aufnehmen",
  href = "/kontakt",
}: Props) {
  return (
    <section className="service-cta" aria-labelledby="service-cta-heading">
      <h2 id="service-cta-heading" className="service-cta__title">
        {heading}
      </h2>
      <p className="service-cta__text">{text}</p>
      <Link href={href} className="service-cta__button">
        {buttonLabel}
      </Link>
    </section>
  );
}
