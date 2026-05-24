type Props = {
  items: string[];
};

export function ServiceBulletList({ items }: Props) {
  return (
    <ul className="service-list">
      {items.map((item) => (
        <li key={item} className="service-list__item">
          {item}
        </li>
      ))}
    </ul>
  );
}
