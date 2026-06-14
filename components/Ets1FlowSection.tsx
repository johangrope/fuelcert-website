import { Ets1FlowInfographic } from "./Ets1FlowInfographic";

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
  heading: string;
  intro: string;
  blocks: readonly TextBlock[];
  figureAlt: string;
  figureCaption: string;
  enlargeLabel: string;
  closeLabel: string;
  externalLink: ExternalLink;
};

export function Ets1FlowSection({
  locale,
  heading,
  intro,
  blocks,
  figureAlt,
  figureCaption,
  enlargeLabel,
  closeLabel,
  externalLink,
}: Props) {
  return (
    <section className="service-block thg-quote-revenue" aria-labelledby="ets1-flow-heading">
      <h2 id="ets1-flow-heading" className="subpage__heading">
        {heading}
      </h2>
      <p className="subpage__text thg-quote-revenue__intro">{intro}</p>

      <div className="thg-quote-revenue__layout">
        <div className="thg-quote-revenue__content">
          {blocks.map((block) => (
            <div key={block.heading} className="thg-quote-revenue__block">
              <h3 className="thg-quote-revenue__subheading">{block.heading}</h3>
              {block.paragraphs.map((paragraph, i) => (
                <p key={i} className="subpage__text thg-quote-revenue__text">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        <Ets1FlowInfographic
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
