import type { Project } from "@/data/projects";

/**
 * Designed placeholder covers — one art-directed SVG motif per project,
 * swapped for real screenshots/demos via ImageKit later.
 */
export function ProjectCover({
  motif,
  index,
  className,
}: {
  motif: Project["motif"];
  index: number;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-raise to-ink ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 640 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        fill="none"
      >
        {motif === "graph" && (
          <g stroke="var(--color-violet)" strokeOpacity="0.45">
            <path d="M120 300 L250 180 L410 240 L520 110" />
            <path d="M250 180 L340 90 L520 110" />
            <path d="M120 300 L340 320 L410 240" />
            <path d="M340 90 L410 240" strokeDasharray="4 6" />
            {[
              [120, 300],
              [250, 180],
              [340, 90],
              [410, 240],
              [520, 110],
              [340, 320],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={i === 3 ? 10 : 6}
                fill="var(--color-ink)"
                strokeWidth="1.5"
              />
            ))}
            <circle cx="410" cy="240" r="22" strokeOpacity="0.2" />
            <circle cx="410" cy="240" r="34" strokeOpacity="0.1" />
          </g>
        )}
        {motif === "scan" && (
          <g>
            {Array.from({ length: 11 }).map((_, i) => (
              <rect
                key={i}
                x="140"
                y={70 + i * 26}
                width={i % 4 === 0 ? 220 : i % 3 === 0 ? 300 : 360}
                height="8"
                rx="4"
                fill="var(--color-violet)"
                fillOpacity={i === 4 || i === 5 ? 0.5 : 0.14}
              />
            ))}
            <rect
              x="120"
              y="166"
              width="400"
              height="44"
              rx="6"
              stroke="var(--color-violet)"
              strokeOpacity="0.6"
            />
            <path
              d="M540 188 h40 M560 168 v40"
              stroke="var(--color-violet)"
              strokeOpacity="0.6"
            />
          </g>
        )}
        {motif === "memory" && (
          <g fill="var(--color-violet)">
            {Array.from({ length: 14 }).map((_, col) =>
              Array.from({ length: 9 }).map((_, row) => {
                const x = 90 + col * 36;
                const y = 60 + row * 34;
                const d = Math.hypot(col - 8, row - 4);
                const lit = d < 2.4;
                return (
                  <circle
                    key={`${col}-${row}`}
                    cx={x}
                    cy={y}
                    r={lit ? 5 : 2.5}
                    fillOpacity={lit ? 0.75 : 0.14}
                  />
                );
              }),
            )}
            <circle
              cx={90 + 8 * 36}
              cy={60 + 4 * 34}
              r="52"
              fill="none"
              stroke="var(--color-violet)"
              strokeOpacity="0.3"
              strokeDasharray="3 6"
            />
          </g>
        )}
        {motif === "route" && (
          <g stroke="var(--color-violet)">
            <path
              d="M110 320 C 200 300, 180 160, 300 170 S 460 260, 540 90"
              strokeOpacity="0.55"
              strokeWidth="2"
              strokeDasharray="8 10"
            />
            <circle cx="110" cy="320" r="9" fill="var(--color-ink)" strokeOpacity="0.8" />
            <circle cx="300" cy="170" r="7" fill="var(--color-ink)" strokeOpacity="0.6" />
            <circle cx="540" cy="90" r="9" fill="var(--color-violet)" fillOpacity="0.8" stroke="none" />
            <circle cx="540" cy="90" r="20" strokeOpacity="0.25" fill="none" />
          </g>
        )}
      </svg>
      <span className="absolute right-5 bottom-3 font-mono text-6xl font-bold text-snow/[0.06]">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}
