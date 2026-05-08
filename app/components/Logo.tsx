import { COLORS } from "../data/brand";

type Props = {
  variant?: "color" | "white";
  width?: number;
};

export default function Logo({ variant = "color", width = 180 }: Props) {
  const main = variant === "white" ? COLORS.bg : COLORS.accent;
  const sub = variant === "white" ? COLORS.bg : COLORS.fg;
  return (
    <svg
      viewBox="0 0 220 80"
      style={{ width, height: "auto", display: "block" }}
      aria-label="Specialty Roofing"
    >
      <path d="M70 12 L110 26 L150 12 L150 18 L110 32 L70 18 Z" fill={main} />
      <text
        x="110"
        y="54"
        textAnchor="middle"
        fontFamily='"Playfair Display", serif'
        fontSize="28"
        fontWeight="700"
        fontStyle="italic"
        fill={main}
        letterSpacing="-0.5"
      >
        Specialty
      </text>
      <text
        x="110"
        y="70"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill={sub}
        letterSpacing="6"
      >
        ROOFING
      </text>
    </svg>
  );
}
