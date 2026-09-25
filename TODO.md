# TODO

Tracks every placeholder currently in the site. Nothing here blocks the site from running, but none of it is real content yet.

## Photos

- [ ] `index.html` hero — now a full-bleed background **video** (placeholder, verified gym footage, battle ropes, but not Kamil) instead of a photo, per request. Replace with real video of Kamil training/working with a client. Poster image (shown before the video loads, and as the `prefers-reduced-motion` fallback) still needs a real photo too, min. 1200x1500px, save as `assets/img/kamil-wojnicz-hero.webp` (per CLAUDE.md, `.webp` only)
- [ ] `index.html` work section — replace 3 stock placeholders (Płetfale, Przygotowanie Fizyczne, Fizjoterapia cards) with real photos, save as `.webp` in `assets/img/`
- [x] `pletfale.html` hero — now uses `assets/img/pletfale/plywanie-hover.mp4` as a full-bleed background video (poster: `kamil-wojnicz-basen.webp`), matching `index.html`'s hero pattern.
- [ ] `pletfale.html` "Poziomy nauki" cards — 2 of 3 use real video (`plywanie-lekcja.mp4`, `plywanie-nauka.mp4`); the 3rd (Doskonalenie techniki) still uses a repeat `.webp` placeholder, replace with real photo/video, save as `.webp`/`.mp4`
- [x] `pletfale.html` "Dla kogo" second split (photo left, Unsplash placeholder + "Zajęcia prowadzę w małych grupach..." text) — removed per request; the page now has one "Dla kogo są zajęcia" split, followed by the pricing panel.
- [x] `przygotowanie-fizyczne.html` hero — now a full-bleed background video of Kamil training (`assets/img/przygotowanie-fizyczne/przygotowanie-fizyczne-hero.mp4`, compressed from the supplied 1080p `KamilHero.mp4`; poster is a frame from the same clip, `przygotowanie-fizyczne-hero-poster.webp`), matching the homepage and Płetfale hero pattern.
- [ ] `fizjoterapia.html` split section — replace stock manual-therapy photo (Unsplash) with a real photo from Kamil's practice, save as `.webp`
- [ ] `index.html` "W akcji" gallery — 1 of 3 stock placeholders replaced (`kamil-wojnicz-basen.webp`); 2 remain, replace with real photos from sessions, save as `.webp`
- [ ] `pletfale.html` "Z basenu" gallery — 1 of 3 stock placeholders replaced (`kamil-wojnicz-basen.webp`); 2 remain, replace with real Płetfale class photos, save as `.webp`
- [ ] `przygotowanie-fizyczne.html` "Z sali" gallery — replace 4 stock placeholders with real training-session photos, save as `.webp`
- [ ] `fizjoterapia.html` "Ruch i regeneracja" gallery — replace 2 stock placeholders with real photos, save as `.webp`
- [ ] `przygotowanie-fizyczne.html` process steps — replace 3 stock placeholders with real photos, save as `.webp`
- [ ] `fizjoterapia.html` "Co leczę" aside — replace stock placeholder with a real photo, save as `.webp`

## SEO

- [ ] Confirm real domain. `kamilwojnicz.pl` is a placeholder used in every `canonical`, `og:url`, the JSON-LD `url`, `robots.txt`, and `sitemap.xml` — replace everywhere once the real domain is known.
- [ ] Add real `telephone` / `streetAddress` to the homepage's `LocalBusiness` JSON-LD once available (currently omitted rather than faked).
- [ ] Once Przygotowanie Fizyczne / Fizjoterapia pages get real content, update their `sitemap.xml` priority and `og:image` if a themed photo replaces the generic gym stock photo.

## Pricing

- [x] `pletfale.html` "Cennik zajęć" section — real prices set. Zajęcia indywidualne: karnet 4x 30/45/60 min = 600/800/1100 zł, plus pojedyncza lekcja 30 min = 200 zł. Zajęcia dwuosobowe: karnet 4x 30/45/60 min = 400/550/700 zł per person. The asterisk note says prices don't include the pool entry ticket.
- [ ] `pletfale.html` "Cennik zajęć" — confirm the intro sentence ("Dokładną cenę i terminy ustalamy indywidualnie...") and the 3 "Zajęcia dwuosobowe" feature bullets. Both are still draft copy; only the indywidualne bullets have been updated to real ones.

## Content

- [ ] About me section (`index.html`) — add real certifications, qualifications, years of experience. No fake numbers were added; the section currently has bio prose only.
- [ ] Contact info (footer, all pages) — add real phone number, email, and full address. Currently shows "dane wkrótce" (details soon).
- [ ] Social links (footer, all pages) — add real Instagram, Facebook, and TikTok URLs (currently `href="#"`). A 4th placeholder slot is reserved in the footer for a future platform.

## Subpages

- [x] `pletfale.html` — redesigned to mirror `index.html`'s section structure (bleed-video hero, work-style card grid, about-photo split, gallery) with the page's own blue theme, per request; now also has a "Cennik zajęć" pricing panel placed right after "Dla kogo są zajęcia" (see Pricing above). Still needs: real class schedule, group sizes.
- [x] `przygotowanie-fizyczne.html` — prose content built (hero, offer, audience, CTA), dark/amber theme. Still needs: real pricing, session length, package options.
- [x] `fizjoterapia.html` — content built (text-only hero, "Co leczę" conditions list, "Jak wygląda wizyta" image+text split, CTA), violet theme. Still needs: confirm real treated-conditions list, real practice photo.

## Rename tracking

- [x] "Akademia Pływania" renamed to "Płetfale" sitewide (nav, headings, copy, filename `akademia-plywania.html` → `pletfale.html`, CLAUDE.md). Flagging here per request in case anything was missed on a future pass.
- [x] "Trening Personalny" renamed to "Przygotowanie Fizyczne" sitewide (nav, headings, copy, filename `trening-personalny.html` → `przygotowanie-fizyczne.html`, asset folder `assets/img/trening-personalny/` → `assets/img/przygotowanie-fizyczne/`, CLAUDE.md). This also retires the previously-planned separate "Motoryka" 4th service — this page now covers that ground under its real name, so the site stays at 3 offer pages. Flagging here per request in case anything was missed on a future pass.
