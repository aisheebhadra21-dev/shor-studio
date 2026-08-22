import Link from "next/link";
import { SiteChrome } from "./components/SiteChrome";

export default function HomePage() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden">
      <div aria-hidden="true" className="hero-bg fixed inset-0 -z-20" />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-gradient-to-b from-black/35 via-transparent to-black/80"
      />
      <div aria-hidden="true" className="grain fixed inset-0 -z-10 opacity-30" />

      <SiteChrome />

      <section className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mt-32 text-[11px] italic tracking-[0.12em] text-white/55 sm:text-xs">
          music for beautiful chaos
        </p>

        <div className="mt-20 w-full max-w-2xl">
          <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/55">
            Pick your shor
          </p>

          <Link
            href="/radio"
            className="group mx-auto block max-w-sm rounded-[28px] border border-white/10 bg-black/20 p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-black/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-xl text-white">
                शोर <span className="text-white/55">Radio</span>
              </span>

              <span className="text-xs text-white/40 transition group-hover:translate-x-1 group-hover:text-white/80">
                →
              </span>
            </div>

            <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
              beautiful chaos
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}