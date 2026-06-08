import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

type Topic = { label: string; href: string };

type Props = { topics: Topic[] };

export async function RelatedTopicsSection({ topics }: Props) {
  const t = await getTranslations("common");

  return (
    <section className="service-block service-block--related" aria-labelledby="related-topics-heading">
      <h2 id="related-topics-heading" className="subpage__heading">
        {t("relatedTopicsHeading")}
      </h2>
      <p className="subpage__text">{t("relatedTopicsIntro")}</p>
      <ul className="related-topics">
        {topics.map((topic) => (
          <li key={topic.href}>
            <Link href={topic.href} className="related-topics__link">
              {topic.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
