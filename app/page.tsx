import { Player } from "./components/Player";
import { SiteChrome } from "./components/SiteChrome";

export default function HomePage() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      <div aria-hidden="true" className="hero-bg fixed inset-0 -z-20" />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-gradient-to-b from-black/35 via-transparent to-black/80"
      />
      <div aria-hidden="true" className="grain fixed inset-0 -z-10 opacity-30" />
      <SiteChrome />
      <Player />
    </main>
  );
}
