type FlagProps = {
  className?: string;
  variant?: "color" | "muted";
};

export default function Flag({ className = "h-4 w-6", variant = "color" }: FlagProps) {
  const red = variant === "muted" ? "#7a2226" : "#b22234";
  const blue = variant === "muted" ? "#1f2a4a" : "#3c3b6e";
  const white = variant === "muted" ? "#cfcfcf" : "#ffffff";

  return (
    <svg
      className={className}
      viewBox="0 0 38 20"
      role="img"
      aria-label="American flag"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="38" height="20" fill={red} />
      {[1, 3, 5, 7, 9, 11].map((i) => (
        <rect
          key={i}
          x="0"
          y={i * (20 / 13)}
          width="38"
          height={20 / 13}
          fill={white}
        />
      ))}
      <rect width="15.2" height={20 * (7 / 13)} fill={blue} />
      <g fill={white}>
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((_, col) => {
            const xStart = row % 2 === 0 ? 1.2 : 2.4;
            const cx = xStart + col * 2.4;
            const cy = 0.9 + row * 1.15;
            return <circle key={`${row}-${col}`} cx={cx} cy={cy} r="0.45" />;
          })
        )}
      </g>
    </svg>
  );
}

export function StarsField({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="stars-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <polygon
            points="10,3 11.5,7.5 16,7.5 12.3,10.3 13.7,15 10,12 6.3,15 7.7,10.3 4,7.5 8.5,7.5"
            fill="currentColor"
            opacity="0.18"
          />
        </pattern>
      </defs>
      <rect width="200" height="100" fill="url(#stars-pattern)" />
    </svg>
  );
}
