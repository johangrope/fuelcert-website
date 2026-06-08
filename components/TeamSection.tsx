import type { UEBER_UNS_TEAM } from "@/lib/ueber-uns-team";
import { TeamMemberCard } from "./TeamMemberCard";

type Member = (typeof UEBER_UNS_TEAM)[number];

type Props = {
  members: readonly Member[];
  title?: string;
};

export function TeamSection({ members, title = "Das Team hinter FuelCert" }: Props) {
  return (
    <section className="service-block about-team" aria-labelledby="about-team-heading">
      <h2 id="about-team-heading" className="subpage__heading">
        {title}
      </h2>
      <div className="about-team__grid">
        {members.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
