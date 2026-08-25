import Link from "next/link";
import { Player } from "./components/Player";
import { SiteChrome } from "./components/SiteChrome";

export default function HomePage() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden">
      <div
        aria-hidden="true"
        className="hero-bg home-bg fixed inset-0 -z-20"
      />

      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-gradient-to-b from-black/20 via-transparent to-black/70"
      />

      <div
        aria-hidden="true"
        className="grain fixed inset-0 -z-10 opacity-30"
      />

      <SiteChrome />

      <section className="relative z-10 flex min-h-dvh flex-col items-center px-6 pt-[52vh] pb-44 text-center">
        <div className="w-full max-w-2xl">

          {/* PICK YOUR SHOR */}
          <div className="w-full">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/50">
              Pick your shor
            </p>

            <div className="grid gap-4 sm:grid-cols-2">

              {/* SHOR RADIO */}
              <Link
                href="/radio"
                className="group rounded-[28px] border border-white/10 bg-black/20 p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-black/30"
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

              {/* NAACHO SAALO */}
              <Link
                href="/naacho"
                className="group rounded-[28px] border border-white/10 bg-black/20 p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-black/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl text-white">
                    Naacho <span className="text-white/55">Saalo</span>
                  </span>

                  <span className="text-xs text-white/40 transition group-hover:translate-x-1 group-hover:text-white/80">
                    →
                  </span>
                </div>

                <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
                  baithna mana hai.
                </p>
              </Link>

              {/* ICONIC */}
              <Link
                href="/iconic"
                className="group rounded-[28px] border border-white/10 bg-black/20 p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-black/30 sm:col-span-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl text-white">
                    आइ<span className="text-white/55">CONIC</span>
                  </span>

                  <span className="text-xs text-white/40 transition group-hover:translate-x-1 group-hover:text-white/80">
                    →
                  </span>
                </div>

                <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
                  meri playlist, meri marzi.
                </p>
              </Link>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}