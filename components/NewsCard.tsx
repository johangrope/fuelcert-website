import { Link } from "@/i18n/navigation";
import type { NewsPost } from "@/lib/news";
import { newsPath } from "@/lib/news";

type Props = {
  post: NewsPost;
  readMoreLabel: string;
};

export function NewsCard({ post, readMoreLabel }: Props) {
  const href = newsPath(post.slug);

  return (
    <article className="news-card">
      <time className="news-card__date" dateTime={post.date}>
        {post.dateLabel}
      </time>
      <h2 className="news-card__title">
        <Link href={href} className="news-card__title-link">
          {post.title}
        </Link>
      </h2>
      <p className="news-card__teaser">{post.teaser}</p>
      <Link href={href} className="news-card__more">
        {readMoreLabel}
        <span aria-hidden="true"> →</span>
      </Link>
    </article>
  );
}
