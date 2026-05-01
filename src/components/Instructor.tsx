import Image from "next/image";
import { site } from "@/data/site";
import Flag from "./Flag";

const credentials = [
  "Curriculum placeholder",
  "Live-fire qualification",
  "Tactical and defensive training",
  "Private coaching options",
];

export default function Instructor() {
  return (
    <section
      id="instructor"
      className="relative border-b border-line/60 bg-coal py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-line/80 bg-graphite ring-rule">
            <Image
              src="/images/template-placeholder.svg"
              alt="Instructor portrait placeholder"
              fill
              sizes="(min-width: 1024px) 28rem, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-6 right-6 flex items-center justify-between border border-line/80 bg-ink/95 px-5 py-4 clip-tag">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.22em] text-brass">
                Lead Instructor
              </p>
              <p className="font-display text-base font-semibold uppercase tracking-wide text-bone">
                Template Brand
              </p>
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-fog transition-colors hover:text-brass cursor-pointer"
            >
              {site.instagramHandle}
            </a>
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="inline-flex items-center gap-2.5 font-display text-sm uppercase tracking-[0.22em] text-brass">
            <Flag className="h-3 w-[18px]" />
            Train with confidence
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-bone md:text-5xl">
            Trained to teach. Built to keep people safe.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-fog">
            Replace this section with the instructor credentials, teaching style, and why local students should
            trust the business. Keep the language calm, competent, and specific to the actual market.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {credentials.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 border border-line/60 bg-graphite/60 px-4 py-3 text-sm text-bone/90"
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
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center gap-2 border border-flame bg-flame px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:bg-flame-bright cursor-pointer"
            >
              Call {site.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-line/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:border-brass hover:text-brass cursor-pointer"
            >
              Send a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
