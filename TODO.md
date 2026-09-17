# TODO

Tracks every placeholder currently in the site. Nothing here blocks the site from running, but none of it is real content yet.

## Photos

- [ ] `index.html` hero — now a full-bleed background **video** (placeholder, verified gym footage, battle ropes, but not Kamil) instead of a photo, per request. Replace with real video of Kamil training/working with a client. Poster image (shown before the video loads, and as the `prefers-reduced-motion` fallback) still needs a real photo too, min. 1200x1500px, save as `assets/img/kamil-wojnicz-hero.webp` (per CLAUDE.md, `.webp` only)
- [ ] `index.html` work section — replace 3 stock placeholders (Płetfale, Trening Personalny, Fizjoterapia cards) with real photos, save as `.webp` in `assets/img/`
- [ ] `pletfale.html` hero — replace stock pool photo (Unsplash) with a real Płetfale photo, save as `.webp`
- [ ] `trening-personalny.html` hero — replace stock gym photo (same Unsplash photo as homepage hero) with a real training photo, save as `.webp`
- [ ] `fizjoterapia.html` split section — replace stock manual-therapy photo (Unsplash) with a real photo from Kamil's practice, save as `.webp`
- [ ] `index.html` "W akcji" gallery — replace 3 stock placeholders with real photos from sessions, save as `.webp`
- [ ] `pletfale.html` "Z basenu" gallery — replace 2 stock pool placeholders with real Płetfale class photos, save as `.webp`
- [ ] `trening-personalny.html` "Z sali" gallery — replace 4 stock placeholders with real training-session photos, save as `.webp`
- [ ] `fizjoterapia.html` "Ruch i regeneracja" gallery — replace 2 stock placeholders with real photos, save as `.webp`
- [ ] `pletfale.html` "Dla kogo" — replace stock aerial-wave placeholder with a real photo, save as `.webp`
- [ ] `trening-personalny.html` process steps — replace 3 stock placeholders with real photos, save as `.webp`
- [ ] `fizjoterapia.html` "Co leczę" aside — replace stock placeholder with a real photo, save as `.webp`

## SEO

- [ ] Confirm real domain. `kamilwojnicz.pl` is a placeholder used in every `canonical`, `og:url`, the JSON-LD `url`, `robots.txt`, and `sitemap.xml` — replace everywhere once the real domain is known.
- [ ] Add real `telephone` / `streetAddress` to the homepage's `LocalBusiness` JSON-LD once available (currently omitted rather than faked).
- [ ] Once Trening Personalny / Fizjoterapia pages get real content, update their `sitemap.xml` priority and `og:image` if a themed photo replaces the generic gym stock photo.

## Content

- [ ] About me section (`index.html`) — add real certifications, qualifications, years of experience. No fake numbers were added; the section currently has bio prose only.
- [ ] Contact info (footer, all pages) — add real phone number, email, and full address. Currently shows "dane wkrótce" (details soon).
- [ ] Social links (footer, all pages) — add real Instagram, Facebook, and TikTok URLs (currently `href="#"`). A 4th placeholder slot is reserved in the footer for a future platform.

## Subpages

- [x] `pletfale.html` — prose content built (hero, offer, audience, CTA). Still needs: real class schedule, group sizes, pricing.
- [x] `trening-personalny.html` — prose content built (hero, offer, audience, CTA). Still needs: real pricing, session length, package options.
- [x] `fizjoterapia.html` — content built (text-only hero, "Co leczę" conditions list, "Jak wygląda wizyta" image+text split, CTA), violet theme. Still needs: confirm real treated-conditions list, real practice photo.
- [ ] `motoryka.html` — not created yet. New 4th service page (Przygotowanie motoryczne / athletic-motor conditioning), distinct from Trening Personalny. Needs: nav link on all pages, homepage work-grid card (4th card, bento layout will need rework from 1+2 to fit 4), footer links, TODO/sitemap/robots entries once built. No color palette specified yet (the dark-amber palette originally listed here was corrected — it belongs to Trening Personalny, now applied there). Motoryka's own theme is still needed when it's built.

## Rename tracking

- [x] "Akademia Pływania" renamed to "Płetfale" sitewide (nav, headings, copy, filename `akademia-plywania.html` → `pletfale.html`, CLAUDE.md). Flagging here per request in case anything was missed on a future pass.
