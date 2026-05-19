import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agropensiunea Dănilă",
  description: "Cazare în Poiana Ilvei. Pensiune Poiana Ilvei. Drumeții, grătare, nunți, evenimente, Pensiunea Dănilă.",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

