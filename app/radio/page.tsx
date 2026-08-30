import { SiteChrome } from "../components/SiteChrome";
import { Player } from "../components/Player";

export default function RadioPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* Shor Radio background */}
      <div
        aria-hidden="true"
        className="hero-bg radio-bg fixed inset-0 -z-20"
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-gradient-to-b from-black/35 via-transparent to-black/80"
      />

      {/* Grain */}
      <div
        aria-hidden="true"
        className="grain fixed inset-0 -z-10 opacity-30"
      />

      <SiteChrome room="radio" />

      <Player room="radio" />
    </main>
  );
}