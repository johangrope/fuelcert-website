type TextSegment = { text: string };
type LinkSegment = { text: string; href: string; external?: boolean };

export type TextSegmentItem = TextSegment | LinkSegment;

function isLink(segment: TextSegmentItem): segment is LinkSegment {
  return "href" in segment;
}

type Props = {
  segments: readonly TextSegmentItem[];
  className?: string;
};

export function TextWithLinks({ segments, className = "subpage__text" }: Props) {
  return (
    <p className={className}>
      {segments.map((segment, i) =>
        isLink(segment) ? (
          <a
            key={i}
            href={segment.href}
            className="subpage__inline-link"
            {...(segment.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {segment.text}
          </a>
        ) : (
          <span key={i}>{segment.text}</span>
        ),
      )}
    </p>
  );
}
