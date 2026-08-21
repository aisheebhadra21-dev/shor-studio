# Shor & Studio

A single-page nostalgic Indian music site built with Next.js App Router, TypeScript and Tailwind CSS v4.

## Music

The homepage uses the official Spotify playlist embed for:

https://open.spotify.com/playlist/2TXfUUl8lRIbF0S9qSoeOZ

This keeps Spotify responsible for playback and lets the playlist remain the source of truth. Update the playlist in Spotify and the embedded player reflects it without editing the site code.

The site intentionally does not download, re-host, or extract Spotify audio. The Spotify player remains visible and links back to Spotify.

For a custom Spotify playback implementation, Spotify's Web Playback SDK requires user authentication and a Premium account, and Spotify currently documents restrictions including non-commercial use and prohibiting synchronization of Spotify recordings with visual media. See the official developer documentation before choosing that route.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Assets

- `public/bg/scene-wide.png` — desktop landscape background
- `public/bg/scene-tall.png` — mobile portrait background
- `public/shor-studio-logo.png` — transparent hand-painted logo
