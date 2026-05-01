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
            Keep this slot for range footage, classroom footage, or still imagery once the real client media is
            ready.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <div className="relative aspect-video overflow-hidden border border-line/80 bg-coal md:col-span-7 ring-rule">
            <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_top,rgba(193,39,45,0.18),transparent_55%),linear-gradient(135deg,rgba(201,161,74,0.08),rgba(5,6,7,0.92))] px-8 text-center">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.22em] text-brass">
                  Media Placeholder
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-fog">
                  Drop in a short training montage, classroom video, or hero still.
                </p>
              </div>
            </div>
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-line/80 bg-ink/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Placeholder A
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden border border-line/80 bg-coal md:col-span-5 ring-rule">
            <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_bottom,rgba(60,59,110,0.18),transparent_55%),linear-gradient(135deg,rgba(201,161,74,0.05),rgba(5,6,7,0.94))] px-8 text-center">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.22em] text-brass">
                  Media Placeholder
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  Replace with secondary proof media, range photos, or certification imagery.
                </p>
              </div>
            </div>
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-line/80 bg-ink/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Placeholder B
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
