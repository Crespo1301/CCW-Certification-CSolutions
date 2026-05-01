import Logo from "./Logo";
import Flag from "./Flag";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 pt-12 md:px-8">
        <div className="flex flex-col gap-6 border border-line/80 bg-coal/70 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8 md:py-10">
          <div className="max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              CSolutions Template
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-bone">
              This design and others are available at carloscrespo.info.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fog">
              If you want a custom version for your business, reach out and we can turn this template into a full site built around your market and offer.
            </p>
          </div>
          <a
            href="https://carloscrespo.info"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-flame bg-flame px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:bg-flame-bright cursor-pointer"
          >
            Reach Out
          </a>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-line/80 bg-coal text-brass clip-notch">
              <Logo className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold uppercase tracking-[0.18em] text-bone">
              Defense <span className="text-brass">Template</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
            Reusable landing-page template for a certification, instruction, or firearms training business.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 border border-line/60 bg-coal/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-bone/85">
            <Flag className="h-3 w-[18px]" />
            Replace with the real trust statement
          </div>
        </div>

        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-bone/90">
            <li>
              <a
                className="transition-colors hover:text-brass cursor-pointer"
                href={`tel:${site.phoneTel}`}
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                className="break-all transition-colors hover:text-brass cursor-pointer"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
            <li className="text-fog">{site.city}</li>
          </ul>
        </div>

        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Follow
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/90 transition-colors hover:text-brass cursor-pointer"
              >
                Instagram {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs uppercase tracking-[0.16em] text-mute md:flex-row md:items-center md:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Site by{" "}
            <a
              href="https://carloscrespo.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone transition-colors hover:text-brass"
            >
              CSolutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
