import Image from "next/image";
import thgQuoteHydrogenImage from "@/assets/thg-quote-hydrogen-station.png";

type Props = {
  alt: string;
  caption: string;
};

export function ThgQuoteIntroFigure({ alt, caption }: Props) {
  return (
    <figure className="thg-quote-intro__figure">
      <Image
        className="thg-quote-intro__img"
        src={thgQuoteHydrogenImage}
        alt={alt}
        sizes="(max-width: 960px) 100vw, 42vw"
      />
      <figcaption className="thg-quote-intro__caption">{caption}</figcaption>
    </figure>
  );
}
