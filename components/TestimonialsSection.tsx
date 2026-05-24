import { TestimonialCard } from "./TestimonialCard";
import { HOME_TESTIMONIALS } from "@/lib/home-testimonials";

export function TestimonialsSection() {
  return (
    <section id="kundenstimmen" className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading" className="testimonials__title">
          Kundenstimmen
        </h2>
        <p className="testimonials__intro">Was Kunden über die Zusammenarbeit mit FuelCert sagen.</p>
        <div className="testimonials__grid">
          {HOME_TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
