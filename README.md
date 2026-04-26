# 144 Academy — California CCW Certification

Marketing site for 144 Academy: California CCW certification, renewals, and advanced firearms training out of Redding, Shasta County.

Built by [CSolutions](https://carloscrespo.info) as a lead-stage proposal.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deployment

Push to `main` and connect the repo to a Vercel project. No environment variables required for the current build.

## Project layout

```
src/
  app/
    layout.tsx      # root layout, fonts, metadata
    page.tsx        # landing page composition
    globals.css     # Tailwind 4 + design tokens
  components/       # section components
  data/site.ts      # editable copy, courses, contact
public/images/      # owner photo, range photos, training videos
```

## Updating content

All copy lives in `src/data/site.ts` — phone, email, course pricing, and the advanced training list. Update there and the page reflects the changes.
