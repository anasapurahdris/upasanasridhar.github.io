Upasana Sridhar's research portfolio, built with Astro.

Quick start:

```bash
cd www
npm install
npm run dev
```

Build for production:

```bash
npm run build
# preview the built site
npm run preview
```

Notes:
- Milestone 1 established the site structure and visual design.
- Milestone 2 adds verified professional content and links to external scholarly profiles.
- Configure `site` in `astro.config.mjs` when you know the production URL.

Application materials:
- Edit `src/data/applicationMaterials.ts` to update PDF paths and labels. The CV path is shared by the homepage, navigation, and `/application-materials/` page.
- Store new PDFs in `public/application_materials/`. Existing filenames and the mentoring statement at `public/Mentoring a Diverse Student Body.pdf` are preserved to avoid breaking URLs.
- The teaching portfolio is currently missing. Add `public/application_materials/Teaching Portfolio.pdf` and replace its `null` path in the list; missing entries are omitted from the page.
- Application Materials links select a PDF in the embedded viewer, with download and direct-open links as fallbacks. Without JavaScript, the document list still links directly to the PDFs. Homepage and navigation CV links remain direct PDF links.
