import Image from "next/image";
import { site, trustPoints } from "@/data/site";
import Flag, { StarsField } from "./Flag";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/60 bg-ink grain">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(80% 60% at 75% 20%, rgba(193,39,45,0.18), transparent 60%), radial-gradient(60% 50% at 15% 80%, rgba(201,161,74,0.12), transparent 60%)",
          }}
        />
        <div className="absolute -left-10 top-10 hidden h-72 w-96 -rotate-6 opacity-[0.07] md:block">
          <Flag className="h-full w-full" variant="muted" />
        </div>
        <div className="absolute inset-y-0 right-0 hidden w-[40%] text-bone opacity-30 md:block">
          <StarsField />
        </div>
      </div>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2.5 border border-line/80 bg-coal/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            <Flag className="h-3 w-[18px]" />
            {site.region}
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold uppercase leading-[1.02] tracking-tight text-bone sm:text-6xl md:text-7xl">
            Get California
            <br />
            <span className="text-brass">CCW Certified</span>
            <br />
            with confidence.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-fog md:text-lg">
            Full legal curriculum, live-fire qualification, and a real
            certificate of completion. Built for first-time applicants and
            renewals out of Redding, California.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 border border-flame bg-flame px-6 py-3.5 font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:bg-flame-bright cursor-pointer"
            >
              Enroll in a Course
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 border border-line/80 bg-transparent px-6 py-3.5 font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:border-brass hover:text-brass cursor-pointer"
            >
              Email the Instructor
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line/60 pt-8 sm:grid-cols-4">
            {trustPoints.map((t) => (
              <div key={t.label}>
                <dt className="font-display text-lg font-semibold uppercase tracking-wider text-bone">
                  {t.stat}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-mute">
                  {t.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden border border-line/80 bg-coal clip-notch ring-rule">
            <Image
              src="/images/owner-headshot-with-rifle.jpg"
              alt="144 Academy lead instructor on the range"
              fill
              priority
              sizes="(min-width: 1024px) 36rem, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 55%, rgba(5,6,7,0.85) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.22em] text-brass">
                  Lead Instructor
                </p>
                <p className="font-display text-xl font-semibold uppercase tracking-wider text-bone">
                  144 Academy
                </p>
              </div>
              <span className="inline-flex items-center gap-2 border border-brass/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-brass">
                <Flag className="h-2.5 w-4" />
                NRA Certified
              </span>
            </div>
          </div>

          <div className="absolute -left-3 -top-3 hidden h-24 w-24 border-l-2 border-t-2 border-flame md:block" />
          <div className="absolute -bottom-3 -right-3 hidden h-24 w-24 border-b-2 border-r-2 border-brass md:block" />
        </div>
      </div>

      <div className="relative">
        <div className="flex h-2 w-full" aria-hidden="true">
          <div className="h-full flex-1 bg-[#b22234]" />
          <div className="h-full flex-1 bg-bone/95" />
          <div className="h-full flex-1 bg-[#3c3b6e]" />
          <div className="h-full flex-1 bg-bone/95" />
          <div className="h-full flex-1 bg-[#b22234]" />
        </div>
        <p className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-fog md:px-8">
          <Flag className="h-3 w-[18px]" />
          <span>{site.discountNote}</span>
          <Flag className="h-3 w-[18px]" />
        </p>
      </div>
    </section>
  );
}
