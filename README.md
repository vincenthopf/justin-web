# The Real Dealmaker — Astro redesign

This project rebuilds the existing site content with the Astro web framework using a mobile-first, dark/light aware design and the accent color `#6F00FF`.

## Getting started

```bash
npm install
npm run dev
```

## Analytics environment variables

Copy `.env.example` to `.env` (or configure the variables in Vercel):

```
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
PUBLIC_CLARITY_ID=XXXXXXXXXX
```

Scripts load only in production builds when the IDs are present.

## Content

All page and blog content is sourced from the Markdown files in `src/content`. Update those files to edit site copy while keeping the design system intact.

## Deployment

The project is ready for Vercel. After installing dependencies, run `npm run build` to verify that the static output is generated correctly.
