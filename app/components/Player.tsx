"use client";

import { useEffect, useState } from "react";

type Track = {
  id: string;
  title: string;
  artist: string;
};

/* =========================
   SHOR RADIO
   ========================= */

const SHOR_TRACKS: Track[] = [
  {
    id: "3jxNbVmugKWFFc3YAVl0sD",
    title: "Aabaad Barbaad",
    artist: "Pritam · Arijit Singh",
  },
  {
    id: "3vCzLB6kS2lGcIpm1OOUsy",
    title: "Ishq Hai",
    artist: "Anurag Saikia · Romy · Varun Jain",
  },
  {
    id: "2sT0eosuhBEkw8dz6qFxUo",
    title: "Aise Kyun",
    artist: "Anurag Saikia · Raghav Chaitanya · Nikhita Gandhi",
  },
  {
    id: "6gUWYLF4r3wUmdOQ8eymh7",
    title: "Dil Se Dil",
    artist: "Vishal Chandrashekhar · Shashwat Singh",
  },
  {
    id: "3g5JKHCtMyjEXJY2ZotLoA",
    title: "Sahiba",
    artist: "Shashwat Sachdev · Romy · Pawni Pandey",
  },
  {
    id: "4vHRQnzGcKEtqsLH70tAms",
    title: "Raanjhan",
    artist: "Sachet-Parampara · Parampara Tandon",
  },
  {
    id: "7G5wpuR61ABrT7R1snos7C",
    title: "Kalank – Title Track",
    artist: "Pritam · Arijit Singh",
  },
  {
    id: "2mVqfKbKGmxVXlVswhlI5T",
    title: "Chaap Tilak",
    artist: "Abida Parveen · Rahat Fateh Ali Khan",
  },
  {
    id: "4gOjXXEwYz2WS9s6ixgUtd",
    title: "Tani Sun La",
    artist: "Vaibhav Bundhoo · Traditional",
  },
  {
    id: "6hVq4MGBhPIniEmpGbJIWR",
    title: "Hardum Humdum",
    artist: "Pritam · Arijit Singh",
  },
  {
    id: "2QophXhN2Ls2URfoPmiviC",
    title: "Kho Gaye",
    artist: "Taaruk Raina · Mismatched Cast",
  },
  {
    id: "4SrVkrpAyykhbVnATbfvPV",
    title: "Dhadak – Title Track",
    artist: "Ajay Gogavale · Shreya Ghoshal",
  },
  {
    id: "2tEV3uJ6RlBiZPWaS7aJmb",
    title: "Pehli Baar",
    artist: "Ajay Gogavale",
  },
  {
    id: "743ja6r6aTqAL00ynZGG2q",
    title: "Ei Srabon",
    artist: "Rupam Islam · Anupam Roy",
  },
  {
    id: "77FL46gBFDDbKHJpQwc1b3",
    title: "Jawl Phoring",
    artist: "Silajit · Anupam Roy",
  },
  {
    id: "78KKYDENYsw6jYfuEZsqJl",
    title: "Saathiya",
    artist: "A.R. Rahman · Sonu Nigam · Gulzar",
  },
  {
    id: "3Bq7CnWgfvplEzGSVXUvOe",
    title: "Ay Hairathe",
    artist: "A.R. Rahman · Hariharan · Alka Yagnik",
  },
];

/* =========================
   NAACHO SAALO
   ========================= */

const NAACHO_TRACKS: Track[] = [
  {
    id: "2IVpapKaryZc8YbCkwF0sV",
    title: "Tattad Tattad",
    artist: "Sanjay Leela Bhansali · Aditya Narayan",
  },
  {
    id: "0YKEBiwNh4VGsuf99aNfLa",
    title: "Anarkali Disco Chali",
    artist: "Mamta Sharma · Sukhwinder Singh",
  },
  {
    id: "4Q6VtqpbcW8YMTfAefpWv3",
    title: "Appadipodu",
    artist: "Vidyasagar · KK · Anuradha Sriram",
  },
  {
    id: "2bL5T9oWnvc8iSxV1sAcAA",
    title: "One Two Three Four",
    artist: "Vishal-Shekhar · Vishal Dadlani · Hamsika Iyer",
  },
  {
    id: "0FOniWOTfxWVJHncU9Dvst",
    title: "Dreamum Wakeupum",
    artist: "Sowmya Raoh · Amit Trivedi",
  },
  {
    id: "4jSb1vp0Mh3PfaELzGhGU9",
    title: "Tinku Jiya",
    artist: "Mamta Sharma · Javed Ali",
  },
  {
    id: "5abF4FI366vQdn3ALwBmLS",
    title: "Hoth Rasiley",
    artist: "Anand Raj Anand · Shankar Mahadevan · Shreya Ghoshal",
  },
  {
    id: "0hL7tvMKBLW30sige6ctu7",
    title: "Chokra Jawaan",
    artist: "Amit Trivedi · Vishal Dadlani · Sunidhi Chauhan",
  },
  {
    id: "4NtaQSiRgkQ2Af8GSW0B0t",
    title: "Billo Rani",
    artist: "Pritam · Richa Sharma",
  },
  {
    id: "0nkF0CojMczlSHMddiib6n",
    title: "Dil Dance Maare",
    artist: "Vishal-Shekhar · Sukhwinder Singh · Udit Narayan",
  },
  {
    id: "67VHAZo2eUry9rcCeTGlhs",
    title: "Dil Mein Baji Guitar",
    artist: "Mika Singh · Pritam",
  },
  {
    id: "4OjfYKfJ0F38w0Dn6goVkU",
    title: "Jalebi Bai",
    artist: "Ritu Pathak · Gorisha Gogoi · Anand Raj Anand",
  },
  {
    id: "1XfsjpesA33pLLCaWxAX1Q",
    title: "Dhanno",
    artist: "Mika Singh · Sunidhi Chauhan",
  },
  {
    id: "72HdutlIHBZJ7WT1xVAAZT",
    title: "Kajra Re",
    artist: "Shankar-Ehsaan-Loy · Alisha Chinai · Shankar Mahadevan",
  },
  {
    id: "6VbmeIWTbNHM5uqoW7GTE4",
    title: "Sheila Ki Jawani",
    artist: "Vishal-Shekhar · Sunidhi Chauhan · Vishal Dadlani",
  },
  {
    id: "5YY8EsBdUYAg1NJQIvgCEj",
    title: "Ghagra",
    artist: "Pritam · Rekha Bhardwaj · Vishal Dadlani",
  },
  {
    id: "2YMM8URWpyGIrT0sKBLtD3",
    title: "Beedi",
    artist: "Vishal Bhardwaj · Sukhwinder Singh · Sunidhi Chauhan",
  },
  {
    id: "4GVNaX8tB7X14lv2hnUm3e",
    title: "Tune Maari Entriyaan",
    artist: "Sohail Sen · Vishal Dadlani · KK · Neeti Mohan",
  },
  {
    id: "6G8LGTxKurKEzGW3DV6HEH",
    title: "Chingam Chabake",
    artist: "Shankar-Ehsaan-Loy · Shankar Mahadevan",
  },
  {
    id: "7hNYvX0qAKrxtVr1jGDmvR",
    title: "Gallan Goodiyaan",
    artist: "Shankar-Ehsaan-Loy · Yashita Sharma · Farhan Akhtar",
  },
  {
    id: "3CXHPRFNic9WOsazT4huOJ",
    title: "Aa Re Pritam Pyaare",
    artist: "Sajid-Wajid · Mamta Sharma · Sarosh Sami",
  },
  {
    id: "1ZmaJl1kHdTxbzji59LD2c",
    title: "Dhating Naach",
    artist: "Pritam · Neha Kakkar · Nakash Aziz",
  },
  {
    id: "0hY9eA74QrMCJuWEx7fo9y",
    title: "Kurchi Madathapetti",
    artist: "Thaman S · Sri Krishna · Sahithi Chaganti",
  },
  {
    id: "0kQpLj2M2ngqDnGuFeHvg4",
    title: "Malhari",
    artist: "Sanjay Leela Bhansali · Vishal Dadlani",
  },
  {
    id: "7iW9pTNgp2HtlRJinoYuiA",
    title: "Emosanal Attyachaar",
    artist: "Band Master Rangeela · Rasila",
  },
];

const ICONIC_TRACKS: Track[] = [
  {
    id: "7gYllw9VHAzfr825KXs3bE",
    title: "Shuddh Desi Romance",
    artist: "Various Artists",
  },
  {
    id: "1RqmsIhNAbTDliJwxqFR10",
    title: "Halla Re",
    artist: "Various Artists",
  },
  {
    id: "6z3p3Gm5FOH1n22ummzEh7",
    title: "Darling",
    artist: "Various Artists",
  },
  {
    id: "7xxxQG1BupSnOBo4qId9kl",
    title: "Drama Queen",
    artist: "Various Artists",
  },
  {
    id: "2N9938r4qmE9yvxLRS7mIq",
    title: "Fugly",
    artist: "Various Artists",
  },
  {
    id: "6iC7uWRaU8uuklZ6z7yC1c",
    title: "Aa Ante Amalapuram",
    artist: "Various Artists",
  },
  {
    id: "2qiKQzwbzOH5pMxhztkbLN",
    title: "Laila",
    artist: "Various Artists",
  },
  {
    id: "0V6i9XZ7NOfXQAygSaswnM",
    title: "Le Le Mazaa Le",
    artist: "Various Artists",
  },
  {
    id: "22HJ4YE3pSe2a5udrDRIWz",
    title: "Move Your Body",
    artist: "Various Artists",
  },
  {
    id: "1y8Ck6jFOyxNC59SrQJIn6",
    title: "Jhalla Wallah",
    artist: "Various Artists",
  },
  {
    id: "0kQpLj2M2ngqDnGuFeHvg4",
    title: "Malhari",
    artist: "Sanjay Leela Bhansali · Vishal Dadlani",
  },
   {
    id: "0bHnzW0bxdghfzdX0BhDht",
    title: "Matru Ki Bijlee Ka Mandola",
    artist: "Various Artists",
  },
   {
    id: "44OZwf1pS0nnoPJEz2pqAX",
    title: "Madhubala",
    artist: "Various Artists",
  },
  {
    id: "66uABCPRmFwGrvlVONVLFR",
    title: "Second Hand Jawaani",
    artist: "Various Artists",
  },
   {
    id: "5se64jXNVjK96bNOBxBkX7",
    title: "Wajle Ki Bara",
    artist: "Various Artists",
  },
  {
    id: "0hL7tvMKBLW30sige6ctu7",
    title: "Chokra Jawaan",
    artist: "Amit Trivedi · Vishal Dadlani · Sunidhi Chauhan",
  },
  {
    id: "2nNaw1QUcqiEX6pBFxcpp3",
    title: "Marjaani",
    artist: "Various Artists",
  },
  {
    id: "77J8eFNSZYInOg2Ap12Mpc",
    title: "Raat Ke Dhai Baje",
    artist: "Various Artists",
  },
  {
    id: "6RZwj2PZDqM6g7gmO6bOxw",
    title: "Do Dhaari Talwaar",
    artist: "Various Artists",
  },
  {
    id: "26VnEKps0l0JWIrdx2E62G",
    title: "Saalame",
    artist: "Various Artists",
  },
  {
    id: "1kptwDq9gbWOdmTm6C2bCm",
    title: "Jadoo Ki Jhappi",
    artist: "Various Artists",
  },
  {
    id: "5xJD9iDQV4yDbagNGmJOKN",
    title: "Main Aai Hoon U.P. Bihar Lootne",
    artist: "Various Artists",
  },
  {
    id: "1SdFBc40uBU5Pqylo05VIC",
    title: "Rang De Basanti",
    artist: "Various Artists",
  },
  {
    id: "4gC6xOiJLHTpIARRdmYMaQ",
    title: "Ra Ra Reddy",
    artist: "Various Artists",
  },
  {
    id: "77CwFcxkvpGOc86zVEATWO",
    title: "Baawre",
    artist: "Various Artists",
  },
  {
    id: "3nINntbMrOno977x5wRMMj",
    title: "Vacancy",
    artist: "Various Artists",
  },
  {
    id: "4wgR8jjv934KJhvGq8EpYR",
    title: "Ban Than Chali",
    artist: "Various Artists",
  },
  {
    id: "4AU7grlHjN1IuDsmU0fmGG",
    title: "Ranjana Ami Ar Ashbona",
    artist: "Various Artists",
  },
  {
    id: "6bRMrsjdHJ6W7zDEep3JlE",
    title: "Small Town Girl",
    artist: "Various Artists",
  },
  {
    id: "1OL60YxJPfB9Oph420fd57",
    title: "Engine Ki Seeti",
    artist: "Various Artists",
  },
  {
    id: "4DKIzK0M2OqWhoLv1J7RpX",
    title: "Faltu",
    artist: "Various Artists",
  },
  {
    id: "22X1WF93XonsAWnrKrRYSo",
    title: "Geet Gobindo",
    artist: "Various Artists",
  },
  {
    id: "3ICmTjj3HKXgFIKaXlj78N",
    title: "Badmaash Company – Title Track",
    artist: "Various Artists",
  },
];

/* =========================
   TYPES
   ========================= */

type PlayerProps = {
  room?: "radio" | "naacho" | "iconic";
};

/* =========================
   KOLKATA CLOCK
   ========================= */

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

/* =========================
   HEADER
   ========================= */

function RadioHeader({
  currentIndex,
  title,
  tagline,
  playlistUrl,
  trackCount,
}: {
  currentIndex: number;
  title: string;
  tagline: string;
  playlistUrl: string;
  trackCount: number;
}) {
  return (
    <div className="mb-8 flex items-start justify-between gap-4 px-2">
      <div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,.9)]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/70">
            {title}
          </span>
        </div>

        <p className="mt-1 text-[10px] italic tracking-[0.08em] text-white/45">
          {tagline}
        </p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[7px] font-medium uppercase tracking-[0.18em] text-white/55 backdrop-blur-md transition hover:bg-white/10 hover:text-white sm:px-3.5 sm:py-2 sm:text-[8px]"
        >
          Open full playlist ↗
        </a>

        <span className="whitespace-nowrap text-[8px] uppercase tracking-[0.12em] text-white/40 sm:text-[9px] sm:tracking-[0.16em]">
          {String(currentIndex + 1).padStart(2, "0")} / {trackCount}
        </span>
      </div>
    </div>
  );
}

/* =========================
   PLAYER
   ========================= */

export function SpotifyPlayer({ room = "radio" }: PlayerProps) {
  const isNaacho = room === "naacho";
  const isIconic = room === "iconic";

  const tracks = isIconic
    ? ICONIC_TRACKS
    : isNaacho
      ? NAACHO_TRACKS
      : SHOR_TRACKS;

  const title = isIconic
    ? "आइCONIC"
    : isNaacho
      ? "Naacho Saalo"
      : "Shor Radio";

  const tagline = isIconic
    ? "meri playlist, meri marzi."
    : isNaacho
      ? "baithna mana hai."
      : "songs for beautiful chaos";

  const playlistUrl = isIconic
    ? "https://open.spotify.com/playlist/4kmf3m2TEK7Enn974vQtkI"
    : isNaacho
      ? "https://open.spotify.com/playlist/74Fd1VZoB3BiiBDbiVqNmK"
      : "https://open.spotify.com/playlist/2TXfUUl8lRIbF0S9qSoeOZ";

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTrack = tracks[currentIndex];

  const nextTrack = () => {
    setCurrentIndex((index) => (index + 1) % tracks.length);
  };

  const previousTrack = () => {
    setCurrentIndex(
      (index) => (index - 1 + tracks.length) % tracks.length
    );
  };

  return (
    <section className="safe-bottom fixed left-1/2 z-30 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 sm:translate-y-0">
      <div className="translate-y-6">
        <RadioHeader
          currentIndex={currentIndex}
          title={title}
          tagline={tagline}
          playlistUrl={playlistUrl}
          trackCount={tracks.length}
        />
      </div>

      <div className="glass overflow-hidden rounded-[26px] p-1 sm:rounded-[28px]">
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black/20">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <iframe
            key={currentTrack.id}
            title={`${title} — ${currentTrack.title}`}
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

export function Player({ room = "radio" }: PlayerProps) {
  return <SpotifyPlayer room={room} />;
}

export { KolkataClock };