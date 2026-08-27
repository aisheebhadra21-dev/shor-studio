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

      <SiteChrome room="naacho" />

      <Player room="naacho" />
    </main>
  );
}