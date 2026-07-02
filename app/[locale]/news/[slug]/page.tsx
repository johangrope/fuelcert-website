import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { newsArticleBreadcrumbs } from "@/lib/i18n/breadcrumbs";
import { getLocaleContent } from "@/lib/i18n/resolve";
import * as DE from "@/lib/news";
import * as EN from "@/lib/i18n/en/news";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    DE.ALL_NEWS_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = await getLocaleContent(DE, EN);
  const post = c.getNewsPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const c = await getLocaleContent(DE, EN);
  const post = c.getNewsPost(slug);

  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <div className="container subpage__inner subpage__inner--news-article">
          <Breadcrumbs items={await newsArticleBreadcrumbs(post.title)} />
          <p className="subpage__kicker">{c.NEWS_SEO.kicker}</p>
          <h1 className="subpage__title">{post.title}</h1>

          <time className="news-article__date" dateTime={post.date}>
            {post.dateLabel}
          </time>

          {post.image ? (
            <figure className="news-article__figure">
              <Image
                className="news-article__img"
                src={post.image}
                alt={post.imageAlt ?? post.title}
                sizes="(max-width: 960px) 100vw, 46rem"
                priority
              />
              {post.imageCaption ? (
                <figcaption className="news-article__caption">{post.imageCaption}</figcaption>
              ) : null}
            </figure>
          ) : null}

          <p className="subpage__lead">{post.intro}</p>

          {post.infobox ? (
            <aside className="news-infobox" aria-label={post.infobox.title}>
              <p className="news-infobox__title">{post.infobox.title}</p>
              <ul className="news-infobox__list">
                {post.infobox.items.map((item) => (
                  <li key={item} className="news-infobox__item">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}

          <div className="news-article__body">
            {post.blocks
              ? post.blocks.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <h2 key={i} className="subpage__heading news-article__heading">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={i} className="news-article__list">
                        {block.items.map((item) => (
                          <li key={item} className="news-article__list-item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "download") {
                    return (
                      <p key={i} className="news-article__download-wrap">
                        <a
                          className="news-article__download"
                          href={block.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="news-article__download-icon" aria-hidden="true">
                            ↓
                          </span>
                          {block.label}
                        </a>
                      </p>
                    );
                  }
                  return (
                    <p key={i} className="subpage__text">
                      {block.text}
                    </p>
                  );
                })
              : post.paragraphs.map((paragraph, i) => (
                  <p key={i} className="subpage__text">
                    {paragraph}
                  </p>
                ))}
          </div>

          <p className="subpage__cta subpage__cta--back">
            <Link href="/news" className="subpage__back-link">
              ← {c.NEWS_SEO.backToOverview}
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
