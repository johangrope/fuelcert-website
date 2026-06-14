import { NehsFlowFigure } from "./NehsFlowFigure";
import { ServiceBulletList } from "./ServiceBulletList";

type ObligationsBlock = {
  heading: string;
  bullets: readonly string[];
  paragraphs: readonly string[];
};

type TextBlock = {
  heading: string;
  paragraphs: readonly string[];
};

type ExternalLink = {
  label: string;
  hint: string;
  href: string;
};

type Props = {
  locale: string;
  practice: { heading: string; intro: string };
  obligations: ObligationsBlock;
  implementation: TextBlock;
  figureAlt: string;
  figureCaption: string;
  enlargeLabel: string;
  closeLabel: string;
  externalLink: ExternalLink;
};

export function NehsFlowSection({
  locale,
  practice,
  obligations,
  implementation,
  figureAlt,
  figureCaption,
  enlargeLabel,
  closeLabel,
  externalLink,
}: Props) {
  return (
    <section className="service-block thg-quote-revenue" aria-labelledby="nehs-process-heading">
      <div className="thg-quote-revenue__layout">
        <div className="thg-quote-revenue__content">
          <div className="thg-quote-revenue__block">
            <h2 id="nehs-process-heading" className="subpage__heading thg-quote-revenue__section-heading">
              {practice.heading}
            </h2>
            <p className="subpage__text thg-quote-revenue__text">{practice.intro}</p>
          </div>

          <div className="thg-quote-revenue__block">
            <h3 className="thg-quote-revenue__subheading">{obligations.heading}</h3>
            <ServiceBulletList items={[...obligations.bullets]} />
            {obligations.paragraphs.map((paragraph, i) => (
              <p key={i} className="subpage__text thg-quote-revenue__text">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="thg-quote-revenue__block">
            <h3 className="thg-quote-revenue__subheading">{implementation.heading}</h3>
            {implementation.paragraphs.map((paragraph, i) => (
              <p key={i} className="subpage__text thg-quote-revenue__text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <NehsFlowFigure
          locale={locale}
          alt={figureAlt}
          caption={figureCaption}
          enlargeLabel={enlargeLabel}
          closeLabel={closeLabel}
        />
      </div>

      <p className="thg-quote-revenue__external">
        <a
          href={externalLink.href}
          className="thg-quote-revenue__external-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {externalLink.label}
        </a>
        <span className="thg-quote-revenue__external-hint">{externalLink.hint}</span>
      </p>
    </section>
  );
}
