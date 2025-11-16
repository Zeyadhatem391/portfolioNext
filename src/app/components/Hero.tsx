"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroProps {
  theme?: "light" | "dark";
}

export default function Hero({ theme  }: HeroProps) {
  const bgPrimary = theme === "light" ? "bg-amber-500" : "bg-gray-900";
  const bgCard = theme === "light" ? "bg-white" : "bg-gray-800";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const btnPrimary =
    theme === "light"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-blue-500 text-white hover:bg-blue-600";
  const btnOutline =
    theme === "light"
      ? "border border-blue-600 text-blue-600 hover:bg-blue-50"
      : "border border-blue-500 text-blue-500 hover:bg-gray-700";

  const phrases = ["Full Stack Developer", "Web Developer", "UI/UX Designer"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const current = phrases[currentPhrase];
    setDisplayedText("");

    const typeInterval = setInterval(() => {
      setDisplayedText(current.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === current.length) clearInterval(typeInterval);
    }, 150); 

    const changePhraseTimeout = setTimeout(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, current.length * 150 + 1000); 

    return () => {
      clearInterval(typeInterval);
      clearTimeout(changePhraseTimeout);
    };
  }, [currentPhrase]);

  return (
    <div
      className={`w-full min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch ${bgPrimary} pt-15`}
    >
      {/* صورة */}
      <div
        className={`w-full lg:w-1/2 ${bgCard} flex items-center justify-center p-8 order-first lg:order-last`}
      >
        <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
          <Image
            src="/images/Portfolio.png"
            alt="zeyad hatem"
            fill
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* نصوص الكارد */}
      <div
        className={`w-full lg:w-1/2 ${bgCard} p-8 md:p-16 flex flex-col justify-center order-last lg:order-first`}
      >
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor}`}>
          Hi, I&apos;m <span className="text-blue-600">Zeyad Hatem</span>
        </h1>
        <h2 className={`text-2xl md:text-4xl font-semibold mb-6 ${textColor}`}>
          {displayedText}
          <span className="blinking-cursor">|</span>
        </h2>
        <p className={`mb-8 text-lg md:text-xl ${textColor}`}>
          I&apos;m a passionate developer specialized in Computer Science. I
          build efficient, user-friendly web applications that make a
          difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            className={`py-4 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 text-center ${btnPrimary}`}
            href="#contact"
          >
            Contact me
          </a>
          <a
            className={`py-4 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 text-center ${btnOutline}`}
            href="#project"
          >
            Latest Works
          </a>
        </div>
      </div>

      {/* CSS للـ blinking cursor */}
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            width: 1ch;
            animation: blink 1s steps(2, start) infinite;
          }
          @keyframes blink {
            to { visibility: hidden; }
          }
        `}
      </style>
    </div>
  );
}
