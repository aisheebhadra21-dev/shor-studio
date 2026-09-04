"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function KolkataClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

      setTime(formatted);
    };

    update();

    const id = window.setInterval(update, 1000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="safe-top safe-left fixed z-40 translate-y-[5px] text-[10px] font-medium uppercase tracking-[0.14em] text-white/80">
      {time || "Kolkata"}
    </div>
  );
}

export function SiteChrome({
  room,
}: {
  room?: "radio" | "naacho" | "iconic" | "soft" | "romantic" | "beauty" | "sensual";
}) {
  return (
    <>
      {/* Clock — homepage only */}
{!room && <KolkataClock />}

{/* Home button — room pages only */}
{room && (
  <Link
    href="/"
    className="safe-top safe-left fixed z-40 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-white/75 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
  >
    ← Home
  </Link>
)}
      {/* Listening indicator */}
      <div className="safe-top fixed left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-black/20 px-2 py-1.5 text-[7px] uppercase tracking-[0.10em] text-white/70 backdrop-blur-md sm:px-2.5 sm:py-1.5 sm:text-[8px] sm:tracking-[0.14em]">
        <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#ef9b37]" />
        listening now
      </div>

      {/* Spotify + About */}
      <div className="safe-top safe-right fixed z-40 flex items-center gap-1 translate-x-1 sm:gap-2 sm:translate-x-0">
        <a
          href="https://open.spotify.com/playlist/2TXfUUl8lRIbF0S9qSoeOZ"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-black/20 px-2.5 py-2 text-[9px] uppercase tracking-[0.15em] text-white/75 backdrop-blur-md transition hover:bg-white/15 hover:text-white"
        >
          Spotify
        </a>

        <a
          href="#about"
          className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-white/75 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
        >
          About
        </a>
      </div>

{/* Shor & Studio logo */}
<div
  className={`pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 opacity-95 
    ${
      room
        ? "top-[10%] sm:top-[11%]"
        : "top-[10%] sm:top-[6%]"
    }
    ${
  room === "sensual"
    ? "max-sm:top-[9%]"
    : room
      ? "max-sm:top-[12%]"
      : "max-sm:top-[10%]"
}`}
>
  <Image
    src="/shor-logo.png"
    alt="शोर & Studio"
    width={420}
    height={180}
    priority
    className={
  room
    ? "h-auto w-[min(72vw,300px)] brightness-95 drop-shadow-[0_8px_22px_rgba(0,0,0,.5)] sm:w-[min(34vw,320px)]"
    : "h-auto w-[min(35vw,330px)] max-sm:w-[min(112vw,360px)] brightness-95 max-sm:brightness-110 drop-shadow-[0_8px_22px_rgba(0,0,0,.5)]"
}
  />
</div>
</>
  );
}      
