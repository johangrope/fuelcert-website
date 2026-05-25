export type ServiceIconId =
  | "zertifizierung"
  | "nachweisfuehrung"
  | "co2-quotenhandel"
  | "berichterstattung";

type Props = {
  id: ServiceIconId;
  className?: string;
  size?: number;
};

const stroke = "currentColor";

export function ServiceIcon({ id, className, size = 28 }: Props) {
  const common = {
    className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "zertifizierung":
      return (
        <svg {...common}>
          <path
            d="M12 3.5 16.2 5.2v5.1c0 3.1-2.5 5.6-4.2 6.7-1.7-1.1-4.2-3.6-4.2-6.7V5.2L12 3.5z"
            stroke={stroke}
            strokeWidth="1.45"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 11.2 11 13l3.8-4.2"
            stroke={stroke}
            strokeWidth="1.45"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="8.2" r="1.1" fill={stroke} stroke="none" />
        </svg>
      );
    case "nachweisfuehrung":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="6.5" ry="2.25" stroke={stroke} strokeWidth="1.45" />
          <path
            d="M5.5 6v5.5c0 1.35 2.9 2.45 6.5 2.45s6.5-1.1 6.5-2.45V6"
            stroke={stroke}
            strokeWidth="1.45"
          />
          <path
            d="M5.5 11.5v5c0 1.35 2.9 2.45 6.5 2.45s6.5-1.1 6.5-2.45v-5"
            stroke={stroke}
            strokeWidth="1.45"
          />
          <path
            d="M8.5 14.5h7M10 17h4"
            stroke={stroke}
            strokeWidth="1.45"
            strokeLinecap="round"
          />
          <path
            d="M15.5 8.5h2.5v2.5"
            stroke={stroke}
            strokeWidth="1.45"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "co2-quotenhandel":
      return (
        <svg {...common}>
          <path
            d="M5 15.5a7 7 0 0 1 14 0"
            stroke={stroke}
            strokeWidth="1.45"
            strokeLinecap="round"
          />
          <path
            d="M12 15.5V9.5l4.2-1.8"
            stroke={stroke}
            strokeWidth="1.45"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="15.5" r="1.35" fill={stroke} stroke="none" />
          <path
            d="M7.5 15.5h1M15.5 15.5h1"
            stroke={stroke}
            strokeWidth="1.45"
            strokeLinecap="round"
          />
        </svg>
      );
    case "berichterstattung":
      return (
        <svg {...common}>
          <path
            d="M7.5 4.5h9a1.5 1.5 0 0 1 1.5 1.5v12.5H7.5V4.5z"
            stroke={stroke}
            strokeWidth="1.45"
            strokeLinejoin="round"
          />
          <path d="M9 8.5h6M9 11h6" stroke={stroke} strokeWidth="1.45" strokeLinecap="round" />
          <path
            d="M9.5 17v-4h2v4M12.5 17v-6h2v6M15.5 17v-2.5h2v2.5"
            stroke={stroke}
            strokeWidth="1.45"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
