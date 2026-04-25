type Props = { className?: string };

export function TargetBoard({ className }: Props) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden
    >
      <g stroke="var(--bone-2)" strokeOpacity={0.5}>
        <rect x="20" y="20" width="200" height="200" />
        <line x1="20" y1="120" x2="220" y2="120" strokeDasharray="2 6" />
        <line x1="120" y1="20" x2="120" y2="220" strokeDasharray="2 6" />
      </g>
      <g stroke="var(--accent)">
        <circle cx="120" cy="120" r="46" />
        <circle cx="120" cy="120" r="22" />
        <circle cx="120" cy="120" r="3" fill="var(--accent)" />
        <line x1="74" y1="120" x2="166" y2="120" />
        <line x1="120" y1="74" x2="120" y2="166" />
      </g>
      <g
        fill="var(--bone-2)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        letterSpacing="0.12em"
      >
        <text x="22" y="14">TARGET BOARD</text>
        <text x="178" y="14">REF · OEM</text>
        <text x="22" y="234">±0.1°</text>
      </g>
    </svg>
  );
}
