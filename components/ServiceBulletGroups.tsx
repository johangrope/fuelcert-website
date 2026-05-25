import { ServiceBulletList } from "./ServiceBulletList";

export type ServiceBulletGroup = {
  heading: string;
  items: readonly string[];
};

type Props = {
  groups: readonly ServiceBulletGroup[];
};

export function ServiceBulletGroups({ groups }: Props) {
  return (
    <div className="service-bullet-groups">
      {groups.map((group) => (
        <div key={group.heading} className="service-bullet-group">
          <h3 className="service-bullet-group__heading">{group.heading}</h3>
          <ServiceBulletList items={[...group.items]} />
        </div>
      ))}
    </div>
  );
}
