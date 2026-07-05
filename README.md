# Xinwei Li Personal Homepage

This repository contains the MVP version of Xinwei Li's personal academic and professional homepage. The site is designed as a compact, research-oriented profile page for finance, capital markets, AI-enabled analysis, selected research cases, education, internships, publications, honors, and hobbies.

## Live Site

After GitHub Pages is enabled, the site can be published from the `main` branch and served as a static website.

Expected GitHub Pages URL:

```text
https://zoe-lweiweiaa.github.io/Xinwei-s_homepage/
```

## Sections

- About Me
- Education
- Internships
- Portfolio
- Publications
- Honors
- Hobbies

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Static assets under `assets/`
- Lightweight static checks with Node.js

## Local Preview

Run a local static server:

```bash
npm run serve
```

Then open:

```text
http://localhost:51837/
```

## Checks

Run the static homepage checks:

```bash
npm test
```

The check script validates key sections, links, assets, visible text, responsive CSS markers, and selected content requirements.

## Project Structure

```text
.
|-- assets/                  # Logos and local visual assets
|-- docs/                    # Design and implementation notes
|-- index.html               # Homepage markup
|-- styles.css               # Homepage styling
|-- script.js                # Small client-side enhancements
|-- tests/static-check.mjs   # Static validation script
`-- README.md
```

## Deployment

To deploy with GitHub Pages:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select branch `main`.
5. Select folder `/root`.
6. Save and wait for GitHub Pages to publish the site.
