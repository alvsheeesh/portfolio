# alvss.dev — Personal Portfolio

Personal portfolio of Álvaro Silva Chávez, live at [alvss.dev](https://alvss.dev). Bilingual (English/Spanish), built with [Astro 5](https://astro.build) and [Tailwind CSS 3](https://tailwindcss.com).

## Features

- **Dark mode by default** with a light/dark toggle (persisted in `localStorage`, applied before first paint to avoid flashes).
- **Custom lightweight i18n** — no framework: markup is annotated with `data-i18n` / `data-i18n-attr` attributes and translated client-side from flat EN/ES dictionaries in `src/i18n/translations.js`. Language choice persists across visits.
- **Data-driven projects page** — project cards (title, status, tags, preview image/PDF, links) are rendered from `src/data/projects.json`, with all copy resolved through i18n keys.
- **Scroll-reveal and entrance animations** driven by small vanilla JS helpers.
- SEO basics: canonical URLs, Open Graph/Twitter meta, sitemap, `robots.txt`.

## Project structure

```
src/
  pages/        # Routes: index, about, projects, cv, contact
  layouts/      # BaseLayout.astro (head, meta, header/footer shell)
  components/   # Header, Footer, LangToggle, ThemeToggle
  i18n/         # translations.js (EN/ES dictionaries) + i18n.js runtime
  data/         # projects.json (drives the projects page)
  styles/       # global.css (theme variables, utilities)
public/         # Static assets: images, PDFs, favicons, client scripts
```

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`   |
| `npm run preview` | Preview the production build locally     |
