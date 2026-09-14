import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { PortfolioHero } from "@/assets/images/images";
import { NextIntlClientProvider } from "next-intl";
import AppProviders from "@/Providers/AppProvider";

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

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={direction}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProviders>
          <NextIntlClientProvider locale={locale}>
            {children}
          </NextIntlClientProvider>
        </AppProviders>
      </body>
    </html>
  );
}
