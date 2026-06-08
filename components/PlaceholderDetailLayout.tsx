import { Link } from "@/i18n/navigation";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import type { ContentSection } from "@/lib/types";

type Props = {
  breadcrumbs: Crumb[];
  kicker: string;
  title: string;
  intro: string;
  sections: ContentSection[];
  backHref: string;
  backLabel: string;
};

export async function PlaceholderDetailLayout({
  breadcrumbs,
  kicker,
  title,
  intro,
  sections,
  backHref,
  backLabel,
}: Props) {
  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <div className="container subpage__inner">
          <Breadcrumbs items={breadcrumbs} />
          <p className="subpage__kicker">{kicker}</p>
          <h1 className="subpage__title">{title}</h1>
          <p className="subpage__lead">{intro}</p>
          {sections.map((section, i) => (
            <section key={section.heading} className="subpage__block" aria-labelledby={`detail-sec-${i}`}>
              <h2 id={`detail-sec-${i}`} className="subpage__heading">
                {section.heading}
              </h2>
              <p className="subpage__text">{section.body}</p>
            </section>
          ))}
          <p className="subpage__cta">
            <Link href={backHref} className="subpage__back-link">
              ← {backLabel}
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
