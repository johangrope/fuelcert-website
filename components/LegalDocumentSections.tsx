import type { DatenschutzLink, DatenschutzSection, DatenschutzSubsection } from "@/lib/datenschutz";

function LegalLinks({ links }: { links: readonly DatenschutzLink[] }) {
  return (
    <ul className="legal-page__list legal-page__list--links">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function LegalSubsection({ subsection }: { subsection: DatenschutzSubsection }) {
  return (
    <div className="legal-page__subsection">
      {subsection.heading ? <h3 className="legal-page__subheading">{subsection.heading}</h3> : null}
      {subsection.paragraphs?.map((paragraph, i) => (
        <p key={i} className="subpage__text">
          {paragraph}
        </p>
      ))}
      {subsection.bullets ? (
        <ul className="legal-page__list">
          {subsection.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {subsection.links ? <LegalLinks links={subsection.links} /> : null}
    </div>
  );
}

export function LegalDocumentSections({ sections }: { sections: readonly DatenschutzSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.heading}
          className="subpage__block legal-page__block"
          aria-labelledby={sectionId(section.heading)}
        >
          <h2 id={sectionId(section.heading)} className="subpage__heading">
            {section.heading}
          </h2>
          {section.paragraphs?.map((paragraph, i) => (
            <p key={i} className="subpage__text">
              {paragraph}
            </p>
          ))}
          {section.bullets ? (
            <ul className="legal-page__list">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.subsections?.map((subsection, i) => (
            <LegalSubsection key={subsection.heading ?? `subsection-${i}`} subsection={subsection} />
          ))}
          {section.links ? <LegalLinks links={section.links} /> : null}
        </section>
      ))}
    </>
  );
}

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, "-")
    .replace(/^-|-$/g, "");
}
