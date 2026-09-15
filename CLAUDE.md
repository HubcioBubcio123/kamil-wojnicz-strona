# CLAUDE.md

Guidance for Claude Code working in this repo.

## Project

Website for personal trainer based in Otwock, Poland. Three subpages plus homepage:

- **Homepage** — intro, trainer bio, contact/CTA
- **Akademia Pływania** (Swimming Academy)
- **Trening Personalny** (Personal Training)
- **Fizjoterapia** (Physiotherapy)

Target audience: local clients in Otwock and nearby area. Content language: Polish.

## Tech stack

- HTML (semantic, hand-written, no framework)
- CSS via SCSS (compiled to CSS, no CSS framework like Bootstrap/Tailwind)
- Vanilla JavaScript (no framework, no build-heavy JS libraries unless explicitly requested)

No React, Vue, Next.js, jQuery, or CSS frameworks. Keep dependencies minimal.

## File structure

```
/
├── index.html
├── akademia-plywania.html
├── trening-personalny.html
├── fizjoterapia.html
├── scss/
│   ├── main.scss
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── components/
├── css/            (compiled output, gitignored or committed per project setup)
├── js/
│   └── main.js
└── assets/
    ├── img/
    └── fonts/
```

Adjust as pages/components grow, but keep SCSS partials organized by component/section, not one giant file.

## Design rules — hard constraints

- **No AI-gradient backgrounds.** No purple/blue mesh gradients, no generic "AI startup" gradient blobs.
- **No "eyebrow" text.** No small uppercase label sitting above headings (e.g. "OUR SERVICES" above an `<h2>`). Write direct headings instead.
- **No glowing buttons.** No box-shadow glow/bloom effects on buttons or CTAs. Buttons get flat or subtle-shadow styling, not neon glow.
- Avoid generic templated SaaS-landing-page look. Design should feel like a real local trainer's site, not a SaaS product.

## Code style

- SCSS: use variables for colors/spacing/breakpoints, mixins for repeated patterns (e.g. media queries). Avoid deep nesting (max ~3 levels).
- HTML: semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), proper heading hierarchy, alt text on images.
- JS: vanilla, no unnecessary abstraction. Only add JS for actual interactivity (nav toggle, form handling, etc.) — don't add JS for things CSS can do.
- Mobile-first responsive design.
- Polish diacritics (ą, ć, ę, ł, ń, ó, ś, ź, ż) must render correctly — ensure UTF-8 encoding declared in HTML.

## What not to do

- Don't introduce a JS/CSS framework without being asked.
- Don't add AI-gradient hero sections, eyebrow labels, or glowing button effects — ever, even if it's a common default.
- Don't over-engineer: this is a small marketing/brochure site, not an app. No unnecessary build tooling beyond SCSS compilation.
