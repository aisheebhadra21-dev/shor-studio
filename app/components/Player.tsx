"use client";

import { useEffect, useState } from "react";

const TRACKS = [
  { id: "3jxNbVmugKWFFc3YAVl0sD", title: "Aabaad Barbaad", artist: "Pritam · Arijit Singh" },
  { id: "3vCzLB6kS2lGcIpm1OOUsy", title: "Ishq Hai", artist: "Anurag Saikia · Romy · Varun Jain" },
  { id: "2sT0eosuhBEkw8dz6qFxUo", title: "Aise Kyun", artist: "Anurag Saikia · Raghav Chaitanya · Nikhita Gandhi" },
  { id: "6gUWYLF4r3wUmdOQ8eymh7", title: "Dil Se Dil", artist: "Vishal Chandrashekhar · Shashwat Singh" },
  { id: "3g5JKHCtMyjEXJY2ZotLoA", title: "Sahiba", artist: "Shashwat Sachdev · Romy · Pawni Pandey" },
  { id: "4vHRQnzGcKEtqsLH70tAms", title: "Raanjhan", artist: "Sachet-Parampara · Parampara Tandon" },
  { id: "7G5wpuR61ABrT7R1snos7C", title: "Kalank – Title Track", artist: "Pritam · Arijit Singh" },
  { id: "2mVqfKbKGmxVXlVswhlI5T", title: "Chaap Tilak", artist: "Abida Parveen · Rahat Fateh Ali Khan" },
  { id: "4gOjXXEwYz2WS9s6ixgUtd", title: "Tani Sun La", artist: "Vaibhav Bundhoo · Traditional" },
  { id: "6hVq4MGBhPIniEmpGbJIWR", title: "Hardum Humdum", artist: "Pritam · Arijit Singh" },
  { id: "2QophXhN2Ls2URfoPmiviC", title: "Kho Gaye", artist: "Taaruk Raina · Mismatched Cast" },
  { id: "4SrVkrpAyykhbVnATbfvPV", title: "Dhadak – Title Track", artist: "Ajay Gogavale · Shreya Ghoshal" },
  { id: "2tEV3uJ6RlBiZPWaS7aJmb", title: "Pehli Baar", artist: "Ajay Gogavale" },
  { id: "743ja6r6aTqAL00ynZGG2q", title: "Ei Srabon", artist: "Rupam Islam · Anupam Roy" },
  { id: "77FL46gBFDDbKHJpQwc1b3", title: "Jawl Phoring", artist: "Silajit · Anupam Roy" },
  { id: "78KKYDENYsw6jYfuEZsqJl", title: "Saathiya", artist: "A.R. Rahman · Sonu Nigam · Gulzar" },
  { id: "3Bq7CnWgfvplEzGSVXUvOe", title: "Ay Hairathe", artist: "A.R. Rahman · Hariharan · Alka Yagnik" },
];

function KolkataClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

      setTime(formatted);
    };

    update();

    const id = window.setInterval(update, 1000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="safe-top safe-left fixed z-40 translate-y-[5px] text-[10px] font-medium uppercase tracking-[0.14em] text-white/80">
      {time || "Kolkata"}
    </div>
  );
}

function RadioHeader({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="mb-8 flex items-start justify-between gap-4 px-2 sm:items-end sm:gap-0">
      <div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,.9)]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/70">
            Shor Radio
          </span>
        </div>

        <p className="mt-1 text-[10px] italic tracking-[0.08em] text-white/45">
          songs for beautiful chaos
        </p>
      </div>

      <span className="shrink-0 whitespace-nowrap pt-1 text-[8px] uppercase tracking-[0.12em] text-white/40 sm:pt-0 sm:text-[9px] sm:tracking-[0.16em]">
        {String(currentIndex + 1).padStart(2, "0")} / 17
      </span>
    </div>
  );
}
export function SpotifyPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrack = TRACKS[currentIndex];

  const nextTrack = () => {
    setCurrentIndex((index) => (index + 1) % TRACKS.length);
  };

  const previousTrack = () => {
    setCurrentIndex(
      (index) => (index - 1 + TRACKS.length) % TRACKS.length
    );
  };

  return (
    <section className="safe-bottom fixed z-30 left-1/2 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 sm:translate-y-0">
      <RadioHeader currentIndex={currentIndex} />

      <div className="glass overflow-hidden rounded-[26px] p-1 sm:rounded-[28px]">
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black/20">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                    <iframe
            key={currentTrack.id}
            title={`Shor Radio — ${currentTrack.title}`}
            src={`https://open.spotify.com/embed/track/${currentTrack.id}?utm_source=generator`}
            width="100%"
            height="152"
            frameBorder="0"
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="block h-[152px] w-full"
          />
        </div>

        <div className="flex items-center justify-between px-2 pt-2">
          <button
            onClick={previousTrack}
            type="button"
            className="shrink-0 rounded-full px-2 py-1.5 text-[8px] uppercase tracking-[0.12em] text-white/50 transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-[9px] sm:tracking-[0.16em]"
          >
            ← Previous
          </button>

          <div className="min-w-0 px-3 text-center">
            <p className="truncate text-[10px] font-medium uppercase tracking-[0.12em] text-white/70">
              {currentTrack.title}
            </p>

            <p className="mt-0.5 truncate text-[9px] text-white/35">
              {currentTrack.artist}
            </p>
          </div>

          <button
            onClick={nextTrack}
            type="button"
            className="shrink-0 rounded-full px-2 py-1.5 text-[8px] uppercase tracking-[0.12em] text-white/50 transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-[9px] sm:tracking-[0.16em]"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}

export function Player() {
  return <SpotifyPlayer />;
}

export { KolkataClock };