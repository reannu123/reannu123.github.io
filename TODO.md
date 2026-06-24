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

- [x] Published the verified revival through draft PR #1 on 2026-06-25:
      https://github.com/reannu123/reannu123.github.io/pull/1
      GitHub Actions CI passed for `b464d4e`.
- [x] Merged PR #1 on 2026-06-25 and deployed the current static artifact to
      `gh-pages` (`74361a1`) with `reannuinstrella.tech` as its CNAME.
- [x] Verified the apex DNS records, GitHub Pages build, and public HTTP bundle
      for `reannuinstrella.tech` on 2026-06-25.
- [ ] Wait for GitHub Pages to issue the TLS certificate, enable HTTPS, and
      verify the HTTPS site before marking the revival complete.

## Later

- [ ] Build Portfolio Website v2 as the next separate greenfield flagship; do
      not let it block completion of this revival.
- [ ] Replace all temporary profile/resume copy and PDF once current details
      are supplied.

## Blocked

- Current résumé and personal-profile copy have not yet been supplied. Keep the
  temporary marker visible; this does not block a technically complete revival.
- No active external blocker. GitHub Pages is provisioning the TLS certificate
  for `reannuinstrella.tech`; HTTPS is not available yet. GitHub notes that
  certificate availability can take up to 24 hours after DNS changes.

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
- [x] Opened draft PR #1 and verified its GitHub Actions CI run passed on
      2026-06-25.
- [x] Merged PR #1 (`6ad7211`) and switched the GitHub Pages CNAME/deployment
      branch to `reannuinstrella.tech` on 2026-06-25.
- [x] Verified the four GitHub Pages apex A records, successful Pages build, and
      public HTTP bundle for `reannuinstrella.tech` on 2026-06-25.
