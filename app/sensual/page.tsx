import { Player } from "../components/Player";
import { SiteChrome } from "../components/SiteChrome";

export default function SensualPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="sensual-bg fixed inset-0 -z-20"
      />

      {/* DARK GRADIENT */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-gradient-to-b from-black/15 via-transparent to-black/70"
      />

      {/* GRAIN */}
      <div
        aria-hidden="true"
        className="grain fixed inset-0 -z-10 opacity-30"
      />

      <SiteChrome room="sensual" />

      <Player room="sensual" />
    </main>
  );
}