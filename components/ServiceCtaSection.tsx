import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  heading: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
  /** Unique id prefix for heading (avoids duplicate ids when CTA appears twice) */
  id?: string;
  /** e.g. service-cta--inline after bullet lists */
  className?: string;
  /** Compact CTA after bullet lists: heading + button only, no box */
  variant?: "default" | "subtle";
};

export async function ServiceCtaSection({
  heading,
  text,
  buttonLabel,
  href = "/kontakt",
  id = "service-cta",
  className,
  variant = "default",
}: Props) {
  const t = await getTranslations("common");
  const resolvedButtonLabel = buttonLabel ?? t("contact");
  const headingId = `${id}-heading`;
  const sectionClass = ["service-cta", variant === "subtle" && "service-cta--subtle", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass} aria-labelledby={headingId}>
      <h2 id={headingId} className="service-cta__title">
        {heading}
      </h2>
      {variant === "default" && text ? <p className="service-cta__text">{text}</p> : null}
      <Link href={href} className="service-cta__button">
        {resolvedButtonLabel}
      </Link>
    </section>
  );
}
