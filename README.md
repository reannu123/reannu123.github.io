# Reannu Instrella — Portfolio Website

The revived legacy portfolio for Reannu Instrella. It packages four shipped
flagships around a freelance offering for web applications, dashboards/internal
tools, automation, and Dockerized or self-hostable delivery.

## Status

This is an active **revival** of the original public portfolio. A separate
greenfield **Portfolio Website v2** is queued next; it will not replace this
site until it has its own verified, portfolio-ready stopping point.

## Stack

- React 19 + TypeScript 6
- Vite 8
- Oxlint
- Proportionate Feature-Sliced Design layers: `app`, `pages`, `widgets`,
  `entities`, and `shared`

## Run locally

Requires Node.js 20.19 or later.

```bash
npm install
npm run dev
```

The local development server runs on `http://localhost:5173`.

## Verify

```bash
npm run lint
npm run build
npm run preview
```

Confirm the hero, selected-project links, mobile navigation, temporary-profile
notice, résumé link, and contact links in a browser.

## Update temporary profile details

The visible profile details and contact links are intentionally centralised in:

`src/shared/config/portfolio.ts`

The temporary résumé is stored at:

`public/resume/Reannu_Instrella_Resume.pdf`

Replace that file with the current PDF and update the matching copy/config when
the material is ready. The old `.pdf.old` copy is retained in `docs/legacy/`
for historical reference only.

## Deployment

`npm run deploy` builds the static site and publishes `dist/` with `gh-pages`.
The custom-domain file is kept in `public/CNAME`, so it is carried into the
deployment output. Confirm the GitHub Pages source/branch before publishing.

## Known limitations

- The résumé and profile details are temporary pending current user-provided
  content.
- This revival intentionally stays a compact SPA. New information architecture
  and richer case-study content belong in the queued Portfolio Website v2.
