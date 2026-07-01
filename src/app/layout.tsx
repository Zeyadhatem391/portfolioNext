import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProvider from "@/Providers/AppProvider";
import { PortfolioHero } from "@/assets/images/images";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeyad Hatem | Front-End Developer",
  description:
    "Portfolio of Zeyad Hatem, a Front-End Developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore my projects, skills, and experience.",

  openGraph: {
    title: "Zeyad Hatem | Front-End Developer",
    description:
      "Explore my portfolio showcasing React, Next.js, TypeScript, and modern web development projects.",
    url: "https://your-domain.com",
    images: [
      {
        url: PortfolioHero.src,
        alt: "Zeyad Hatem Portfolio",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
