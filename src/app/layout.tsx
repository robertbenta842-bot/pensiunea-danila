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

export const metadata: export const metadata: Metadata = {
  title: "Agropensiunea Dănilă",
  description: "Cazare în Poiana Ilvei; Drumetii; Gratare; Baby shower; Nunta; Dormit Poiana Ilvei; Pensiunea Dănilă; Pensiune Poiana Ilvei; Foișor; Pensiune Poiana Ilvei",
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: "Agropensiunea Dănilă",
    description: "Un colț de rai în Poiana Ilvei",
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
// app/layout.tsx

export const metadata = {
  title: 'Pensiune Poiana Ilvei - Cazare în Munții Bistriței',
  description: 'Pensiune în Poiana Ilvei. Cazare confortabilă cu priveliște la munte, mic dejun inclus și activități în natură.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}
