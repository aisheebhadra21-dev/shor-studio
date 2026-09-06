import Link from "next/link";
import { Player } from "./components/Player";
import { SiteChrome } from "./components/SiteChrome";

export default function HomePage() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden">
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

      <section className="relative z-10 flex min-h-dvh flex-col items-center px-6 pb-44 pt-[54vh] text-center sm:pt-[62vh]">
        <div className="w-full max-w-2xl">

          <p className="font-poppins mb-6 -mt-6 text-[12.8px] font-semibold leading-relaxed text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.9),0_0_4px_rgba(0,0,0,0.8)] max-sm:mt-0.5 max-sm:text-[14px] max-sm:text-white/65">
  Welcome to Aishee’s multiverse. Mood badlo, mahol badlo, playlist badlo —
  and most importantly, bas enjoy karo.
</p>

{/* PICK YOUR SHOR */}
          <p className="font-poppins mb-5 mt-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white sm:mt-10.5 max-sm:text-white/70">
            Pick your shor
          </p>

          <div className="grid gap-4 sm:grid-cols-2">

            {/* SHOR RADIO */}
            <Link
              href="/radio"
              className="group rounded-[28px] border border-white/10 bg-black/20 p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-black/30 sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl text-white">
                  <span className="text-[22.4px] sm:text-[19.4px]">शोर</span>{" "}
<span className="font-poppins text-white/55">Radio</span>
                </span>

                <span className="text-xs text-white/40 transition group-hover:translate-x-1 group-hover:text-white/80">
                  →
                </span>
              </div>

              <p className="font-poppins mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
                beautiful chaos.
              </p>
            </Link>

           {/* NAACHO SAALO */}
            <Link
              href="/naacho"
              className="group rounded-[28px] border border-white/10 bg-black/20 p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-black/30 sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl text-white">
  <span className="font-poppins">Naacho</span>{" "}
  <span className="font-poppins text-white/55">Saalo</span>
</span>

                <span className="text-xs text-white/40 transition group-hover:translate-x-1 group-hover:text-white/80">
                  →
                </span>
              </div>

              <p className="font-poppins mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
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
<span className="text-[22.9px] sm:text-[19.9px]">आइ</span>
                  <span className="font-poppins text-white/55">CONIC</span>
                </span>

                <span className="text-xs text-white/40 transition group-hover:translate-x-1 group-hover:text-white/80">
                  →
                </span>
              </div>

              <p className="font-poppins mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
                meri playlist, meri marzi.
              </p>
            </Link>

            {/* PEAK सुन्दरता */}
            <Link
              href="/beauty"
              className="group rounded-[28px] border border-white/10 bg-black/20 p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-black/30 sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl text-white">
  <span className="font-poppins">Peak</span>{" "}
  <span className="text-[22.4px] text-white/55 sm:text-[19.4px]">सुन्दरता</span>
</span>

                <span className="text-xs text-white/40 transition group-hover:translate-x-1 group-hover:text-white/80">
                  →
                </span>
              </div>

              <p className="font-poppins mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
                nazar sambhal ke.
              </p>
            </Link>

            {/* DEKHO, MAGAR PYAAR SE */}
            <Link
              href="/romantic"
              className="group rounded-[28px] border border-white/10 bg-black/20 p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-black/30 sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl text-white">
                  <span className="text-[22.4px] sm:text-[19.4px]">देखो,</span>{" "}

<span className="font-poppins text-white/55">Magar Pyaar Se</span>
                </span>

                <span className="text-xs text-white/40 transition group-hover:translate-x-1 group-hover:text-white/80">
                  →
                </span>
              </div>

              <p className="font-poppins mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
                mera dil machal gayo re.
              </p>
            </Link>

            {/* ISHQ VISHQ */}
            <Link
              href="/soft"
              className="group rounded-[28px] border border-white/10 bg-black/20 p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-black/30 sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl text-white">
                  <span className="text-[22.4px] sm:text-[19.4px]">इश्क़</span>{" "}
<span className="font-poppins text-white/55">- Vishq</span>
                </span>

                <span className="text-xs text-white/40 transition group-hover:translate-x-1 group-hover:text-white/80">
                  →
                </span>
              </div>

              <p className="font-poppins mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
                shor nahi, sirf ishq.
              </p>
            </Link>

 {/* KASHISH — THE OTHER SIDE */}

<Link
  href="/sensual"
  className="group rounded-[28px] border border-white/10 bg-black/20 p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-black/30 sm:col-span-2"
>
  <div className="flex items-center justify-between">
    <span className="text-xl text-white">
      <span className="text-[22.4px] sm:text-[19.4px]">कशिश</span>{" "}
<span className="font-poppins text-white/55">- The Other Side</span>
    </span>

<span className="text-xs text-white/40 transition group-hover:translate-x-1 group-hover:text-white/80">
  →
</span>
  </div>

  <p className="font-poppins mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
    kuchh der aur.
  </p>
</Link>

          </div>
        </div>
      </section>
    </main>
  );
}