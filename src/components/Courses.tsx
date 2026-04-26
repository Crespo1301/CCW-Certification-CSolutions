import { courses, site } from "@/data/site";
import Flag from "./Flag";

export default function Courses() {
  return (
    <section id="courses" className="relative border-b border-line/60 bg-coal py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.22em] text-brass">
              Certification Courses
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-bone md:text-5xl">
              Two paths to a California carry permit
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-fog">
            Both courses include classroom instruction and live-fire
            qualification. Renewals are streamlined for current permit holders
            who need a fast turnaround.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {courses.map((c) => (
            <article
              key={c.id}
              className="group relative flex flex-col overflow-hidden border border-line/80 bg-graphite transition-colors hover:border-brass/60"
            >
              <div className="flex items-center justify-between border-b border-line/60 bg-steel/60 px-6 py-3">
                <span className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                  <Flag className="h-3 w-[18px]" />
                  {c.badge}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-mute">
                  {c.duration}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-bone md:text-3xl">
                    {c.name}
                  </h3>
                  <div className="flex items-baseline gap-1 text-bone">
                    <span className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                      ${c.price}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-fog">{c.description}</p>

                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-bone/90"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-none text-brass"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="inline-flex items-center gap-2 border border-flame bg-flame px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:bg-flame-bright cursor-pointer"
                  >
                    Reserve a seat
                  </a>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(c.name + " inquiry")}`}
                    className="inline-flex items-center gap-2 border border-line/80 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:border-brass hover:text-brass cursor-pointer"
                  >
                    Ask a question
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.16em] text-mute">
          Pricing reflects current rates. Group, family, and law enforcement
          inquiries welcome.
        </p>
      </div>
    </section>
  );
}
