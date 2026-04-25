# Borrowed Tongues

Static music website for **Borrowed Tongues** — acid punk in constructed languages, adapted from public domain literature. Built with Astro + Tailwind CSS v4, hosted on GitHub Pages.

Live site: [borrowedtongues.github.io/BorrowedTongues](https://borrowedtongues.github.io/BorrowedTongues/)

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321/BorrowedTongues/](http://localhost:4321/BorrowedTongues/)

---

## Adding a new release

1. **Edit `src/config/releases.ts`** — add a new object to the `releases` array.
   - Set `id` to a URL-friendly slug (e.g. `"my-new-release"`)
   - Set `type` to `"album"` or `"single"`
   - For albums, include `soundcloudPlaylistUrl` and list all tracks
   - Paste real SoundCloud embed URLs (see below)

2. **Add cover art** — drop the image into `public/images/` and reference its filename in `coverArt`.
   - Recommended: 1:1 square, at least 800×800px, JPG or PNG

3. **Push to `main`** — GitHub Actions builds and deploys automatically.

---

## How to get a SoundCloud embed URL

1. Go to your track on SoundCloud
2. Click **Share** → **Embed**
3. Copy the value of the `src` attribute from the `<iframe>` tag — it looks like:
   ```
   https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/12345678&...
   ```
4. Paste that full URL as the `soundcloudUrl` value for the track in `releases.ts`

For playlists (albums), use the playlist embed URL from **Share → Embed** on the playlist page, and set it as `soundcloudPlaylistUrl`.

---

## Adding images

All images go in `public/images/`. Drop the file in and push — the site updates automatically.

| Filename | Purpose | Notes |
|---|---|---|
| `seal.png` | Circular logo mark, shown as a faint watermark behind hero text | Any size; displayed at low opacity |
| `hero_background.png` | Optional hero background texture | Recommended 3:1 aspect ratio; displayed at low opacity |
| `portrait.png` | Artist portrait or abstract image on the About page | Any aspect ratio |
| `gawain-cover.png` | Cover art for the Gawain single | 1:1 square, min 800×800px |
| `[id]-cover.jpg` | Cover art for any release | Match filename to `coverArt` in `releases.ts` |

All images degrade gracefully: if a file is missing, no broken image icon appears. Missing cover art shows a styled title card. Missing `hero_background.png`, `seal.png`, or `portrait.png` are simply not shown.

---

## Placeholder handling

- **No cover art file?** The site shows a styled placeholder with the release title.
- **`soundcloudUrl` starts with `REPLACE`?** The site shows a "Coming Soon" block instead of a broken iframe.
- **`lyrics` is placeholder text (`[...]`)?** The lyrics expander is hidden entirely.

---

## Deploy

Push to `main`. GitHub Actions handles the build and deployment via the workflow in `.github/workflows/deploy.yml`. No manual steps needed.

**First-time setup:** In the GitHub repo settings, go to **Pages → Build and deployment → Source** and set it to **GitHub Actions**.

---

## Stack

- [Astro](https://astro.build/) v5 — static site generator
- [Tailwind CSS v4](https://tailwindcss.com/) — utility styling via `@tailwindcss/vite`
- TypeScript (strict)
- GitHub Actions for CI/CD
- `@astrojs/sitemap` for automatic sitemap generation

All content lives in `src/config/releases.ts`. No CMS, no backend.
