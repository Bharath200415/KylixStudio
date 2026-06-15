import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kylix Studio - Creative Design and Development Agency",
  description: "We build things that convert. A creative design and development agency based in Bangalore, India.",
  icons: {
    icon: "/logo-white.svg",
  },
  openGraph: {
    images: [
      {
        url: "/OGimage.png",
        width: 1200,
        height: 630,
        alt: "Kylix Studio - Creative Design and Development Agency",
      },
    ],
  },
};

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
      <body className="min-h-full flex flex-col"><LenisProvider>{children}</LenisProvider></body>
    </html>
  );
}
