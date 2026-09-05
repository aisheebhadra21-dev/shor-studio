import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shor & Studio",
  description: "A nostalgic Indian music room — colour, cassettes, cinema and sound.",
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#10152f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}