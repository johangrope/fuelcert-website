import Image from "next/image";
import type { Testimonial } from "@/lib/testimonials";

type Props = Pick<Testimonial, "quote" | "name" | "role" | "portrait" | "portraitAlt"> & {
  className?: string;
};

export function TestimonialCard({ quote, name, role, portrait, portraitAlt, className }: Props) {
  return (
    <figure className={["testimonial-card", className].filter(Boolean).join(" ")}>
      <div className="testimonial-card__portrait-wrap">
        <Image
          src={portrait}
          alt={portraitAlt}
          className="testimonial-card__portrait"
          width={120}
          height={120}
          sizes="120px"
        />
      </div>
      <blockquote className="testimonial-card__quote">
        <p>„{quote}"</p>
      </blockquote>
      <figcaption className="testimonial-card__meta">
        <cite className="testimonial-card__name">{name}</cite>
        <p className="testimonial-card__role">{role}</p>
      </figcaption>
    </figure>
  );
}
