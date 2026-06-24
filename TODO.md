# Portfolio Website TODO

Last updated: 2026-06-25

## Project

- Name: Portfolio Website
- Path: `/home/reannu123/Projects/portfolio/reannu123.github.io`
- Status: active
- Stage: revival
- Portfolio role: Public bridge portfolio packaging four shipped flagships and
  the user's freelance positioning.

## Current Milestone

Revive the legacy public portfolio into a root-level, modern, responsive
single-page portfolio. It must present current project proof and service
positioning honestly while clearly marking old résumé/profile details as
temporary until the user replaces them.

## Definition Of Done

- [x] A developer can clone the repository root, install dependencies, and run
      the documented development/build commands on a supported Node version.
- [x] The app uses a proportionate FSD structure and no stale nested app root
      remains in the delivery path.
- [x] The site presents the four current flagship projects, service positioning,
      a temporary-profile notice, and a working contact path in the rendered
      page structure.
- [x] Displayed profile/resume details are marked temporary and the exact copy
      and PDF replacement paths are documented.
- [x] Lint, production build, and a manual visual browser smoke check pass; the
      README records setup, verification, limitations, and the v2 handoff.

## Now

- [x] Normalize the root layout and upgrade the frontend runtime.
- [x] Rebuild the page into FSD layers with current flagship proof and temporary
      profile/resume messaging.
- [x] Manual visual check passed at desktop and mobile widths by user
      confirmation on 2026-06-25.

## Next

- [ ] Publish the revived site through a focused GitHub change after the
      stopping point is verified.

## Later

- [ ] Build Portfolio Website v2 as the next separate greenfield flagship; do
      not let it block completion of this revival.
- [ ] Replace all temporary profile/resume copy and PDF once current details
      are supplied.

## Blocked

- Current résumé and personal-profile copy have not yet been supplied. Keep the
  temporary marker visible; this does not block a technically complete revival.

## Done

- [x] Cloned and inspected the public legacy repository on 2026-06-25.
- [x] Baseline build passed from the nested 2023 app on 2026-06-25. It uses
      React 18, Vite 4, Tailwind 3, TypeScript 4, and reports 15 dependency
      vulnerabilities; the root itself is not clone-and-run.
- [x] Normalized the app at the repository root on 2026-06-25; upgraded to
      React 19, Vite 8, TypeScript 6, and Oxlint, replaced legacy Tailwind with
      a compact CSS design system, and refactored into `app`, `pages`,
      `widgets`, `entities`, and `shared` layers.
- [x] Verified 2026-06-25: `npm run lint`, `npm run build`, root/resume HTTP
      responses, generated `dist/CNAME`, and a production dependency audit all
      passed. Browser-plugin visual interaction was intentionally stopped at
      the user's request; the user completed manual visual QA before publishing.
- [x] User manually verified the desktop and mobile presentation on 2026-06-25.
