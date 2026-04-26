import Image from "next/image";
import { advancedTraining, site } from "@/data/site";
import Flag from "./Flag";

export default function AdvancedTraining() {
  return (
    <section
      id="training"
      className="relative overflow-hidden border-b border-line/60 bg-ink py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/gun-images/rifle-1.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,6,7,0.92) 0%, rgba(5,6,7,0.96) 50%, rgba(5,6,7,1) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2.5 font-display text-sm uppercase tracking-[0.22em] text-brass">
            <Flag className="h-3 w-[18px]" />
            Advanced Firearms Training
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-bone md:text-5xl">
            Beyond the permit. Real defensive skill.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-fog">
            For students who want more than the minimum. NRA-standard
            curriculum plus tactical and long-range disciplines, taught at
            ranges in and around Shasta County.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
          {advancedTraining.map((item, i) => (
            <div
              key={item.name}
              className="group relative flex flex-col gap-3 bg-coal p-6 transition-colors hover:bg-graphite"
            >
              <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-brass/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-bone">
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed text-fog">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Advanced training inquiry")}`}
            className="inline-flex items-center gap-2 border border-flame bg-flame px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:bg-flame-bright cursor-pointer"
          >
            Build a custom training plan
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 border border-line/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:border-brass hover:text-brass cursor-pointer"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
