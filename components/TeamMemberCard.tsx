import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  bio: string;
  email: string;
  linkedinLabel: string;
  linkedinHref: string;
  portrait: StaticImageData;
  portraitPosition?: string;
};

export function TeamMemberCard({
  name,
  bio,
  email,
  linkedinLabel,
  linkedinHref,
  portrait,
  portraitPosition = "center 20%",
}: Props) {
  return (
    <article className="team-member">
      <div className="team-member__portrait-wrap">
        <Image
          src={portrait}
          alt={`Porträt ${name}`}
          className="team-member__portrait"
          fill
          sizes="(max-width: 640px) 280px, 320px"
          style={{ objectPosition: portraitPosition }}
          priority
        />
      </div>
      <div className="team-member__body">
        <h3 className="team-member__name">{name}</h3>
        <p className="team-member__bio">{bio}</p>
        <ul className="team-member__contact">
          <li>
            <a href={`mailto:${email}`} className="team-member__link">
              {email}
            </a>
          </li>
          <li>
            <a
              href={linkedinHref}
              className="team-member__link team-member__link--linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkedinLabel}
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
