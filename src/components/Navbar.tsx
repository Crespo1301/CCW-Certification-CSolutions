import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/site";

const links = [
  { href: "#courses", label: "Courses" },
  { href: "#training", label: "Advanced Training" },
  { href: "#instructor", label: "Instructor" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-bone transition-colors hover:text-brass"
        >
          <span className="grid h-9 w-9 place-items-center border border-line/80 bg-coal text-brass clip-notch">
            <Logo className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold uppercase tracking-[0.18em]">
            144 <span className="text-brass">Academy</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-[0.16em] text-fog transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${site.phoneTel}`}
          className="group inline-flex items-center gap-2 border border-flame bg-flame px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-bone transition-colors hover:bg-flame-bright cursor-pointer"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="hidden sm:inline">{site.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
