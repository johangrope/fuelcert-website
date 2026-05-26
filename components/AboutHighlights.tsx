type Highlight = {
  title: string;
  text: string;
};

type Props = {
  highlights: readonly Highlight[];
};

export function AboutHighlights({ highlights }: Props) {
  return (
    <div className="about-highlights">
      {highlights.map((item) => (
        <article key={item.title} className="about-highlight">
          <h3 className="about-highlight__title">{item.title}</h3>
          <p className="about-highlight__text">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
