export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M32 4 L58 16 V34 C58 48 46 58 32 60 C18 58 6 48 6 34 V16 Z" />
      <path d="M32 14 V50" />
      <path d="M20 26 H44" />
      <path d="M20 38 H44" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
    </svg>
  );
}
