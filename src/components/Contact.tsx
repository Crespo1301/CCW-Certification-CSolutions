import { site } from "@/data/site";
import Flag from "./Flag";

const channels = [
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneTel}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="1" />
        <path d="m22 7-10 7L2 7" />
      </>
    ),
  },
  {
    label: "Location",
    value: site.city,
    href: "https://maps.google.com/",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-line/60 bg-coal py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(70% 50% at 50% 0%, rgba(193,39,45,0.18), transparent 60%)",
          }}
        />
        <div className="absolute -right-12 top-12 hidden h-72 w-96 rotate-3 opacity-[0.06] md:block">
          <Flag className="h-full w-full" variant="muted" />
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center justify-center gap-2.5 font-display text-sm uppercase tracking-[0.22em] text-brass">
            <Flag className="h-3 w-[18px]" />
            Ready to train?
            <Flag className="h-3 w-[18px]" />
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-bone md:text-5xl">
            Reach out. Reserve your seat.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-fog">
            Update this area with the final preferred contact path, response expectation, and any region-specific
            enrollment notes.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex flex-col gap-3 bg-graphite p-6 transition-colors hover:bg-steel cursor-pointer"
            >
              <span className="grid h-10 w-10 place-items-center border border-line/80 bg-coal text-brass transition-colors group-hover:border-brass">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {c.icon}
                </svg>
              </span>
              <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-mute">
                {c.label}
              </span>
              <span className="break-all text-base font-semibold text-bone transition-colors group-hover:text-brass">
                {c.value}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 border border-flame bg-flame px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:bg-flame-bright cursor-pointer"
          >
            Call {site.phone}
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Course inquiry")}`}
            className="inline-flex items-center gap-2 border border-line/80 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:border-brass hover:text-brass cursor-pointer"
          >
            Email {site.email}
          </a>
        </div>
      </div>
      <div className="relative mt-20 flex h-1.5 w-full" aria-hidden="true">
        <div className="h-full flex-1 bg-[#b22234]" />
        <div className="h-full flex-1 bg-bone/95" />
        <div className="h-full flex-1 bg-[#3c3b6e]" />
        <div className="h-full flex-1 bg-bone/95" />
        <div className="h-full flex-1 bg-[#b22234]" />
      </div>
    </section>
  );
}
