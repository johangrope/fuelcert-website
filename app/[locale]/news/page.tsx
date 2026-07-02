import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { NewsCard } from "@/components/NewsCard";
import { OverviewPageLayout } from "@/components/OverviewPageLayout";
import { routing } from "@/i18n/routing";
import { newsOverviewBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import * as DE from "@/lib/news";
import * as EN from "@/lib/i18n/en/news";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  const c = await getLocaleContent(DE, EN);
  return {
    title: c.NEWS_SEO.title,
    description: c.NEWS_SEO.metaDescription,
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function NewsOverviewPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getLocaleContent(DE, EN);

  return (
    <OverviewPageLayout
      breadcrumbs={await newsOverviewBreadcrumbs()}
      kicker={c.NEWS_SEO.kicker}
      title={c.NEWS_SEO.h1}
      h1={c.NEWS_SEO.h1}
      intro={c.NEWS_SEO.intro}
      metaDescription={c.NEWS_SEO.metaDescription}
      innerClassName="subpage__inner--news"
    >
      <ul className="news-list" aria-label={c.NEWS_SEO.h1}>
        {c.NEWS_POSTS.map((post) => (
          <li key={post.slug} className="news-list__item">
            <NewsCard post={post} readMoreLabel={c.NEWS_SEO.readMore} />
          </li>
        ))}
      </ul>
    </OverviewPageLayout>
  );
}
