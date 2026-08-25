import Image from "next/image";
import Link from "next/link";
import { KolkataClock } from "./Player";

export function SiteChrome({
  room,
}: {
  room?: "radio" | "naacho" | "iconic";
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
      <div className="safe-top fixed left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-black/20 px-2.5 py-1.5 text-[8px] uppercase tracking-[0.14em] text-white/70 backdrop-blur-md">
        <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#ef9b37]" />
        listening now
      </div>

      {/* Spotify + About */}
      <div className="safe-top safe-right fixed z-40 flex items-center gap-1.5 translate-x-1 sm:gap-2 sm:translate-x-0">
        <a
          href="https://open.spotify.com/playlist/2TXfUUl8lRIbF0S9qSoeOZ"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-white/75 backdrop-blur-md transition hover:bg-white/15 hover:text-white"
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
      <div className="pointer-events-none fixed left-1/2 top-[10%] z-20 -translate-x-1/2 opacity-95 sm:top-[8%]">
        <Image
          src="/shor-logo.png"
          alt="शोर & Studio"
          width={420}
          height={180}
          priority
          className="h-auto w-[min(72vw,300px)] drop-shadow-[0_8px_22px_rgba(0,0,0,.5)] sm:w-[min(42vw,360px)]"
        />
      </div>
    </>
  );
}