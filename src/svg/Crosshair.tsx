type Props = {
  size?: number;
  className?: string;
  color?: string;
};

export function Crosshair({
  size = 18,
  className,
  color = "currentColor",
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={1.25}
      strokeLinecap="square"
      aria-hidden
    >
      <line x1="16" y1="2" x2="16" y2="11" />
      <line x1="16" y1="21" x2="16" y2="30" />
      <line x1="2" y1="16" x2="11" y2="16" />
      <line x1="21" y1="16" x2="30" y2="16" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  );
}
