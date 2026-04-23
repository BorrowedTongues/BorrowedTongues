# Borrowed Tongues

Static music website for **Borrowed Tongues** — acid punk in constructed languages, adapted from public domain literature. Built with Astro + Tailwind CSS v4, hosted on GitHub Pages.

Live site: [borrowedtongues.github.io/borrowed-tongues](https://borrowedtongues.github.io/borrowed-tongues/)

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321/borrowed-tongues/](http://localhost:4321/borrowed-tongues/)

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
4. Paste that URL as the `soundcloudUrl` value for the track in `releases.ts`

For playlists (albums), use the playlist embed URL from **Share → Embed** on the playlist page, and set it as `soundcloudPlaylistUrl`.

---

## Placeholder handling

- **No cover art file?** The site shows a styled placeholder with the release title.
- **`soundcloudUrl` starts with `REPLACE`?** The site shows a "Coming Soon" block instead of a broken iframe.
- **`lyrics` is placeholder text (`[...]`)?** The lyrics expander is hidden entirely.

---

## Deploy

Push to `main`. GitHub Actions handles the build and deployment via the workflow in `.github/workflows/deploy.yml`. No manual steps needed.

**First-time setup:** In the GitHub repo settings, go to **Pages → Source** and set it to **GitHub Actions**.

---

## Stack

- [Astro](https://astro.build/) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com/) — utility styling via `@tailwindcss/vite`
- TypeScript (strict)
- GitHub Actions for CI/CD
- `@astrojs/sitemap` for automatic sitemap generation

All content lives in `src/config/releases.ts`. No CMS, no backend.
