# Visit Sanctuary

A local Next.js app inviting prospective residents to experience Sanctuary and Austin for a day, weekend, or week.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000.

Three linked editions are available: `/now` (Austin trip and community introduction during construction), `/future` (the original polished vision), and `/sxsw` (add a visit before, between, or after SXSW plans). `/` displays the current `/now` invitation. The navigation at the top of every page links all three. Copy and itineraries live in `app/visit-content.ts`; the shared accessible page and local inquiry form live in `app/visit-page.tsx`.

`npm run build` produces a static site in `out/`, ready for a future static host. This project has not been published. `npm run typecheck` checks TypeScript. With the local server running and Chrome installed, `node scripts/verify.mjs` checks desktop/mobile interactions and writes screenshots.

## Included

Responsive landing page; day/weekend/week itinerary tabs with keyboard navigation; synchronized inquiry duration; interest selection; expandable FAQs; validated form; editable local request preview and clipboard copy. The form does not send, store, or transmit personal data. Reloading clears the request. A real submission service or explicit email handoff can be connected when approved.

## Content and assets

Brand and community context: https://sanctuary.co and https://sanctuary.co/community, reviewed September 10, 2026. Logo and Suisse font files are copied from the user's existing public Sanctuary website for this Sanctuary project.

- `public/images/sanctuary.webp`: https://sanctuary-website.s3.us-east-2.amazonaws.com/1.webp — architectural rendering, labeled in the page.
- `public/images/trails.webp`: https://sanctuary-website.s3.us-east-2.amazonaws.com/amenity.walking.trails.webp — Sanctuary vision imagery, labeled in the page.
- `public/images/austin.jpg`: https://images.unsplash.com/photo-1531218150217-54595bc2b934 — Austin skyline, downloaded at 1400px.
- `public/images/logo.svg`: https://sanctuary.co/sanctuary.logo.white.svg
- `public/fonts/`: original Sanctuary public Suisse files, retained for brand continuity; confirm the existing font license covers the eventual destination domain.

Austin trail context: https://www.austintexas.gov/parks/locations/ann-and-roy-butler-hike-and-bike-trail-and-boardwalk-lady-bird-lake

Itineraries and the community-team invitation are newly authored editorial copy, not published schedules or testimonials. Team confirmation is needed for visit arrangements, availability, costs, lodging, and resident introductions. Renderings do not imply completed facilities.
