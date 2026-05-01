# CLAUDE.md

Repo role: mockup or proposal repo, not a core maintained production client surface.

## Business Context

- Treat this repo as a sales or proposal asset.
- Shared workflow rules live in `/home/cresp3/Portfolio/AI-WORKFLOW.md`.

## Claude Role Here

- Use Claude for concepting, offer positioning, and page-level design direction.
- Let Codex handle implementation and reusable template work if this repo becomes active.

## Working Notes

- Keep this repo in the mockup lane unless explicitly promoted to active production work.

## Useful Commands

```bash
npm run dev
npm run build
npm run lint
npm run start
npm run stitch:init
npm run stitch:doctor
npm run stitch:proxy
```

## Shared AI Tooling

- Follow `AI-WORKFLOW.md` for the shared CSolutions AI stack.
- Use repo-local `.claude/skills/` for `code-review-graph`, `Impeccable`, and `mattpocock/skills` workflows.
- Use `.mcp.json` with `code-review-graph` after running `code-review-graph build` so exploration and reviews stay token-efficient.
- Use OpenSpec for larger changes that benefit from proposal, spec, and task artifacts.
