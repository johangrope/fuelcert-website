import type { UEBER_UNS_TEAM } from "@/lib/ueber-uns-team";
import { TeamMemberCard } from "./TeamMemberCard";

type Member = (typeof UEBER_UNS_TEAM)[number];

type Props = {
  members: readonly Member[];
};

export function TeamSection({ members }: Props) {
  return (
    <section className="service-block about-team" aria-labelledby="about-team-heading">
      <h2 id="about-team-heading" className="subpage__heading">
        Das Team hinter FuelCert
      </h2>
      <div className="about-team__grid">
        {members.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
