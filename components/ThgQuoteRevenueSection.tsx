import { Link } from "@/i18n/navigation";
import { ThgQuoteRevenueInfographic } from "./ThgQuoteRevenueInfographic";

type TextBlock = {
  heading: string;
  paragraphs: readonly string[];
};

type CalculatorLink = {
  label: string;
  href: string;
};

type ExternalLink = {
  label: string;
  hint: string;
  href: string;
};

type Props = {
  locale: string;
  heading: string;
  blocks: readonly TextBlock[];
  figureAlt: string;
  figureCaption: string;
  enlargeLabel: string;
  closeLabel: string;
  calculatorsHeading: string;
  calculatorsIntro: string;
  calculatorLinks: readonly CalculatorLink[];
  customsCalculator: ExternalLink;
};

export function ThgQuoteRevenueSection({
  locale,
  heading,
  blocks,
  figureAlt,
  figureCaption,
  enlargeLabel,
  closeLabel,
  calculatorsHeading,
  calculatorsIntro,
  calculatorLinks,
  customsCalculator,
}: Props) {
  return (
    <section className="service-block thg-quote-revenue" aria-labelledby="thg-revenue-heading">
      <h2 id="thg-revenue-heading" className="subpage__heading">
        {heading}
      </h2>

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

        <ThgQuoteRevenueInfographic
          locale={locale}
          alt={figureAlt}
          caption={figureCaption}
          enlargeLabel={enlargeLabel}
          closeLabel={closeLabel}
        />
      </div>

      <div className="thg-quote-revenue__cta">
        <h3 className="thg-quote-revenue__cta-heading">{calculatorsHeading}</h3>
        <p className="thg-quote-revenue__cta-intro">{calculatorsIntro}</p>
        <div className="thg-quote-revenue__cta-cards">
          {calculatorLinks.map((link) => (
            <Link key={link.href} href={link.href} className="thg-quote-revenue__cta-card">
              <span className="thg-quote-revenue__cta-card-label">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <p className="thg-quote-revenue__external">
        <a
          href={customsCalculator.href}
          className="thg-quote-revenue__external-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {customsCalculator.label}
        </a>
        <span className="thg-quote-revenue__external-hint">{customsCalculator.hint}</span>
      </p>
    </section>
  );
}
