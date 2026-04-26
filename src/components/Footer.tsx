import Logo from "./Logo";
import Flag from "./Flag";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-line/80 bg-coal text-brass clip-notch">
              <Logo className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold uppercase tracking-[0.18em] text-bone">
              144 <span className="text-brass">Academy</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
            California CCW certification, renewals, and advanced firearms
            training. Shasta County approved.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 border border-line/60 bg-coal/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-bone/85">
            <Flag className="h-3 w-[18px]" />
            Proudly American Owned & Operated
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
          <p>© {new Date().getFullYear()} 144 Academy. All rights reserved.</p>
          <p>
            Site by{" "}
            <span className="text-bone">CSolutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
