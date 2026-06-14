import Image from "next/image";
import etsIntroImage from "@/assets/ets-1-intro.png";

type Props = {
  alt: string;
  caption: string;
};

export function Ets1IntroFigure({ alt, caption }: Props) {
  return (
    <figure className="thg-quote-intro__figure">
      <Image
        className="thg-quote-intro__img"
        src={etsIntroImage}
        alt={alt}
        sizes="(max-width: 960px) 100vw, 42vw"
        priority
      />
      <figcaption className="thg-quote-intro__caption">{caption}</figcaption>
    </figure>
  );
}
