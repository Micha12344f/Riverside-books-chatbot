# Website Folder

This folder now contains a proper Docusaurus-style documentation site structure for the Riverside Books chatbot.

It is not the chatbot runtime itself. Instead, it is the documentation and presentation layer for the project.

## What This Folder Is For

Use this folder when you want:

- a browsable website version of the project documentation
- a cleaner review surface than raw markdown files
- a place to expand public-facing project docs later

## What Is In Here

- `package.json`
  - website dependencies and scripts
- `docusaurus.config.js`
  - site configuration
- `sidebars.js`
  - documentation navigation
- `babel.config.js`
  - Docusaurus Babel preset
- `docs/docs/`
  - markdown documentation pages used by the site
- `src/pages/`
  - homepage content
- `src/css/`
  - site styling
- `static/`
  - static assets if needed later

## What Is Not Part Of This Website

The `Example` folder is intentionally not part of the arranged website structure for this pass.

You asked to ignore it, so the Docusaurus content is built around the real chatbot documentation instead.

## How To Run The Website

From inside `website/`:

```bash
npm install
npm start
```

That should run the Docusaurus dev server on port `3000`.

## What The Site Documents

The site content mirrors the real project documentation:

- project overview
- matching approach
- source-code guide
- live test runner
- notebook guide
- testing guide
- website-folder explanation
- scaling plan

## Relationship To The Main Project

The website is documentation-first.

The core chatbot still lives in:

- `main.py`
- `src/`
- `tests/`

So if you want to change chatbot behavior, edit the Python code first. The website is where you explain that behavior cleanly afterward.
