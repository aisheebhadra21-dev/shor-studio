import { SiteChrome } from "../components/SiteChrome";
import { Player } from "../components/Player";

export default function IconicPage() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden">
      <div
        aria-hidden="true"
        className="hero-bg iconic-bg fixed inset-0 -z-20"
      />

      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-gradient-to-b from-black/20 via-transparent to-black/70"
      />

      <div
        aria-hidden="true"
        className="grain fixed inset-0 -z-10 opacity-30"
      />

      <SiteChrome room="iconic" />

      <section className="relative z-10 flex min-h-dvh flex-col items-center px-6 pt-[23vh] pb-44 text-center">
        <div className="w-full max-w-2xl">
        </div>
      </section>

      <Player room="iconic" />
    </main>
  );
}