export default function RangeReel() {
  return (
    <section className="relative overflow-hidden border-b border-line/60 bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.22em] text-brass">
              From the Range
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-bone md:text-5xl">
              Real training. Real rounds downrange.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-fog">
            Live-fire is a core part of every certification. Below: a quick
            look at training drills and platforms students see during
            advanced courses.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <div className="relative aspect-video overflow-hidden border border-line/80 bg-coal md:col-span-7 ring-rule">
            <video
              className="h-full w-full object-cover"
              src="/images/training-montage/montage-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/owner-headshot-with-rifle.jpg"
              aria-label="Training montage from 144 Academy"
            />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-line/80 bg-ink/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-flame" />
              Training Montage
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden border border-line/80 bg-coal md:col-span-5 ring-rule">
            <video
              className="h-full w-full object-cover"
              src="/images/gun-images/gattling-gun-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Range platform showcase"
            />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-line/80 bg-ink/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Platforms
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
