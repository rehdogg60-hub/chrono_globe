# ChronoGlobe: Faith & History Explorer

ChronoGlobe: Faith & History Explorer is a premium browser-based 3D globe game for exploring Biblical history, Christian church history, American Christian heritage, world history, and ancient civilizations.

Players can choose a mode, search locations, click glowing globe markers, fly to landmarks, read polished event cards, answer quizzes, track progress locally, and take a guided tour across the timeline.

## Features

- Game-style start screen and mode selection
- Cinematic Three.js Earth with animated markers and starfield
- Searchable globe navigation with event and city lookup
- 53 curated events across five history categories
- Event cards with era, category badge, references, quiz, and next/previous navigation
- Guided tour mode
- Local progress tracking with `localStorage`
- Pause/menu screen with reset and return-to-start options
- Responsive layout for desktop and mobile browsers

## Run Locally

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Then open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

## Build

Create the production build:

```bash
npm run build
```

The production files are generated in:

```text
dist/
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub Pages Deployment

This project is configured with `base: "./"` in `vite.config.ts`, so the production build uses relative asset paths. That makes the same `dist/` output suitable for GitHub Pages project sites, Ko-fi downloads, and itch.io HTML uploads.

To deploy manually:

1. Run `npm install`.
2. Run `npm run build`.
3. Upload or publish the contents of `dist/` to GitHub Pages.

For a GitHub Actions workflow, build with:

```bash
npm ci
npm run build
```

Then deploy the generated `dist/` folder.

## Ko-fi Upload Notes

The packaged Ko-fi release is:

```text
ChronoGlobe_Faith_History_Explorer_KoFi.zip
```

Inside the ZIP, the playable web build lives in:

```text
web/
```

For Ko-fi digital downloads, upload the ZIP as the downloadable file. For itch.io HTML games, upload the ZIP or the `web/` folder contents and make sure `web/index.html` is used as the entry point.

## Release Folder

The release bundle is prepared in:

```text
ChronoGlobe_Release/
  web/
  README.md
  LICENSE.txt
  CREDITS.md
```

The `web/` folder is a standalone static build and can be uploaded to GitHub Pages, itch.io, Netlify, or any static web host.

## Usage Note

ChronoGlobe is provided as a static browser game. Event summaries are educational overview text and should be reviewed by the publisher before commercial release if exact denominational, historical, or academic wording is important.
