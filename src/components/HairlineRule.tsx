type Props = {
  width?: number;
  className?: string;
  vertical?: boolean;
  color?: "accent" | "rule" | "bone";
};

export function HairlineRule({
  width = 48,
  className = "",
  vertical = false,
  color = "accent",
}: Props) {
  const colorClass =
    color === "accent"
      ? "bg-accent"
      : color === "rule"
        ? "bg-rule"
        : "bg-bone";
  const dim = vertical
    ? { width: 1, height: width }
    : { width, height: 1 };
  return (
    <span
      aria-hidden
      className={`inline-block ${colorClass} ${className}`}
      style={dim}
    />
  );
}
