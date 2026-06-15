import Image from "next/image";
import type { ReferenceLogo } from "@/lib/home-references";

type Props = { item: ReferenceLogo };

export function ReferenceLogoItem({ item }: Props) {
  return (
    <li className={`references__item references__item--${item.id}`}>
      <Image
        src={item.logo}
        alt={`Logo ${item.name}`}
        className="references__logo"
        sizes="320px"
      />
    </li>
  );
}
