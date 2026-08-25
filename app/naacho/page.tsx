import Link from "next/link";
import { SiteChrome } from "../components/SiteChrome";
import { Player } from "../components/Player";

export default function NaachoPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <div
  aria-hidden="true"
  className="hero-bg naacho-bg fixed inset-0 -z-20"
/>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-gradient-to-b from-black/35 via-transparent to-black/80"
      />

      <div
        aria-hidden="true"
        className="grain fixed inset-0 -z-10 opacity-30"
      />

      <SiteChrome naacho />

      <div className="safe-top safe-left fixed z-50 flex items-center gap-4">
        <Link
          href="/"
          className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
        >
          ← Home
        </Link>
      </div>

      <Player room="naacho" />
    </main>
  );
}