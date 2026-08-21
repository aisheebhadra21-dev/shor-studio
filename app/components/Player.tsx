"use client";

import { useEffect, useState } from "react";

const SPOTIFY_PLAYLIST_ID = "2TXfUUl8lRIbF0S9qSoeOZ";
const SPOTIFY_PLAYLIST_URL = `https://open.spotify.com/playlist/${SPOTIFY_PLAYLIST_ID}`;

function KolkataClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };

    update();
    const id = window.setInterval(update, 1000);

    return () => window.clearInterval(id);
  }, []);

  const [hours, rest] = time.split(":");
  const [minutes, meridiem] = (rest ?? "").split(" ");

  return (
    <div className="safe-top safe-left fixed z-40 text-[11px] font-medium uppercase tracking-[0.16em] text-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,.65)]">
      {time ? (
        <>
          <span>{hours}</span>
          <span className="clock-colon mx-[2px]">:</span>
          <span>{minutes}</span>
          <span className="ml-1 text-white/55">{meridiem}</span>
        </>
      ) : (
        "Kolkata"
      )}
    </div>
  );
}

function RadioHeader() {
  return (
    <div className="mb-3 flex items-end justify-between px-2">
      <div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,.9)]" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/70">
            Shor Radio
          </span>
        </div>

        <p className="mt-1 text-[10px] italic tracking-[0.08em] text-white/45">
          songs for beautiful chaos
        </p>
      </div>

      <a
        href={SPOTIFY_PLAYLIST_URL}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md transition hover:border-white/30 hover:bg-white/10 hover:text-white"
      >
        Open playlist ↗
      </a>
    </div>
  );
}

export function SpotifyPlayer() {
  return (
    <section className="safe-bottom fixed z-30 w-[calc(100%-2rem)] max-w-2xl">
      <RadioHeader />

      <div className="glass overflow-hidden rounded-[26px] p-2 sm:rounded-[28px] sm:p-2.5">
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black/20">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <iframe
            title="Shor & Studio — Favourites on Spotify"
            src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block h-[352px] w-full sm:h-[152px]"
          />
        </div>
      </div>
    </section>
  );
}

export function Player() {
  return <SpotifyPlayer />;
}

export { KolkataClock };