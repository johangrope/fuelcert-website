import Image from "next/image";
import nehsIntroImage from "@/assets/nehs-intro.png";

type Props = {
  alt: string;
  caption: string;
};

export function NehsIntroFigure({ alt, caption }: Props) {
  return (
    <figure className="thg-quote-intro__figure">
      <Image
        className="thg-quote-intro__img"
        src={nehsIntroImage}
        alt={alt}
        sizes="(max-width: 960px) 100vw, 42vw"
        priority
      />
      <figcaption className="thg-quote-intro__caption">{caption}</figcaption>
    </figure>
  );
}
