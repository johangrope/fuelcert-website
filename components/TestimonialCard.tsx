import Image from "next/image";
import type { Testimonial } from "@/lib/home-testimonials";

type Props = Pick<Testimonial, "quote" | "name" | "role" | "portrait" | "portraitAlt">;

export function TestimonialCard({ quote, name, role, portrait, portraitAlt }: Props) {
  return (
    <figure className="testimonial-card">
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
