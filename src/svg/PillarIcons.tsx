type Props = { className?: string };

// Compact 80×80 schematics that sit above each WhyUs pillar.

// 01 — Equipment: stacked, indexed target boards
export function PillarEquipment({ className }: Props) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden>
      {/* Back board */}
      <rect
        x="22"
        y="14"
        width="48"
        height="48"
        stroke="var(--rule)"
        strokeWidth={1}
      />
      {/* Mid board */}
      <rect
        x="16"
        y="20"
        width="48"
        height="48"
        stroke="var(--rule)"
        strokeOpacity={0.65}
        strokeWidth={1}
        fill="var(--bg)"
      />
      {/* Front board with target */}
      <rect
        x="10"
        y="26"
        width="48"
        height="48"
        stroke="var(--bone-2)"
        strokeWidth={1}
        fill="var(--bg)"
      />
      <line
        x1="10"
        y1="50"
        x2="58"
        y2="50"
        stroke="var(--rule)"
        strokeDasharray="2 4"
      />
      <line
        x1="34"
        y1="26"
        x2="34"
        y2="74"
        stroke="var(--rule)"
        strokeDasharray="2 4"
      />
      <circle cx="34" cy="50" r="11" stroke="var(--accent)" />
      <circle cx="34" cy="50" r="5" stroke="var(--accent)" />
      <circle cx="34" cy="50" r="1.5" fill="var(--accent)" />
    </svg>
  );
}

// 02 — Procedure: a small step graph (1 → 2 → 3 with branches)
export function PillarProcedure({ className }: Props) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden>
      <g stroke="var(--rule)" strokeWidth={1}>
        {/* Connectors */}
        <line x1="14" y1="40" x2="34" y2="40" />
        <line x1="46" y1="40" x2="66" y2="40" />
        <line x1="40" y1="22" x2="40" y2="34" />
        <line x1="40" y1="46" x2="40" y2="58" />
      </g>
      <g stroke="var(--accent)" fill="var(--bg)">
        {/* Node 1 */}
        <rect x="6" y="34" width="12" height="12" />
        {/* Node 2 (center) */}
        <rect
          x="32"
          y="34"
          width="16"
          height="12"
          stroke="var(--accent)"
          strokeWidth={1.25}
          fill="var(--bg)"
        />
        {/* Node 3 */}
        <rect x="62" y="34" width="12" height="12" />
        {/* Top branch */}
        <rect
          x="34"
          y="14"
          width="12"
          height="8"
          stroke="var(--rule)"
          strokeWidth={1}
        />
        {/* Bottom branch */}
        <rect
          x="34"
          y="58"
          width="12"
          height="8"
          stroke="var(--rule)"
          strokeWidth={1}
        />
      </g>
      {/* Highlight dot in center node */}
      <circle cx="40" cy="40" r="1.5" fill="var(--accent)" />
      <text
        x="40"
        y="76"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        letterSpacing="0.16em"
        fill="var(--bone-2)"
      >
        OEM · REF
      </text>
    </svg>
  );
}

// 03 — Documentation: a signed page with a seal
export function PillarDocumentation({ className }: Props) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden>
      {/* Page back */}
      <rect
        x="20"
        y="12"
        width="42"
        height="56"
        stroke="var(--rule)"
        strokeOpacity={0.55}
        fill="var(--bg-2)"
      />
      {/* Page front */}
      <rect
        x="14"
        y="8"
        width="42"
        height="56"
        stroke="var(--bone-2)"
        fill="var(--bg)"
      />
      {/* Header bar */}
      <rect x="18" y="14" width="34" height="2" fill="var(--accent)" />
      {/* Body lines */}
      <g stroke="var(--rule)">
        <line x1="18" y1="22" x2="50" y2="22" />
        <line x1="18" y1="28" x2="46" y2="28" />
        <line x1="18" y1="34" x2="50" y2="34" />
        <line x1="18" y1="40" x2="42" y2="40" />
        <line x1="18" y1="46" x2="48" y2="46" />
      </g>
      {/* Signature scribble */}
      <path
        d="M 18 56 q 4 -4 8 -2 q 4 2 8 -2 q 4 -2 8 2"
        stroke="var(--bone)"
        strokeWidth={1}
        fill="none"
      />
      {/* Seal */}
      <circle
        cx="58"
        cy="58"
        r="12"
        stroke="var(--accent)"
        fill="var(--bg)"
      />
      <circle cx="58" cy="58" r="9" stroke="var(--accent)" strokeOpacity={0.5} />
      <text
        x="58"
        y="61"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="5.5"
        letterSpacing="0.16em"
        fill="var(--accent)"
      >
        SIGNED
      </text>
    </svg>
  );
}
