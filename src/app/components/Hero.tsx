"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Portfolio from "@/assets/images/Portfolio.webp";
import HeroSection from "@/assets/images/hero-bg.webp";

export default function Hero() {
  const phrases = ["Full Stack Developer", "Web Developer", "Computer Science"];
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

    const changePhraseTimeout = setTimeout(
      () => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      },
      current.length * 150 + 1000,
    );

    return () => {
      clearInterval(typeInterval);
      clearTimeout(changePhraseTimeout);
    };
  }, [currentPhrase]);

  return (
    <div
      className="w-full min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch   pt-15 relative bg-cover bg-center bg-no-repeat"
      id="home"
      style={{
        backgroundImage: `url(${HeroSection.src})`,
      }}
    >
      {/* صورة */}
      <div
        className={`w-full lg:w-1/2  flex items-center justify-center p-8 order-first lg:order-last`}
      >
        <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
          <Image
            src={Portfolio}
            alt="zeyad hatem"
            fill
            className="object-contain rounded-lg "
          />
        </div>
      </div>

      {/* نصوص الكارد */}
      <div
        className={`w-full lg:w-1/2  p-8 md:p-16 flex flex-col justify-center order-last lg:order-first`}
      >
        <Title size="5xl" className="font-bold mb-4">
          Hi, I&apos;m <span className="text-blue-600">Zeyad Hatem</span>
        </Title>
        <Title size="4xl" className="font-semibold mb-6 ">
          {displayedText}
          <span className="blinking-cursor">|</span>
        </Title>
        <Text size="xl" className="mb-8">
          Passionate Computer Science Developer crafting efficient,
          user-friendly web applications that make a real impact.
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            className="py-4 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 text-center bg-blue-600 text-white hover:bg-blue-700 "
            href="#contact"
          >
            Contact me
          </a>
          <a
            className="py-4 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 text-center border border-blue-600 text-blue-600 hover:bg-blue-50"
            href="#projects"
          >
            Latest Works
          </a>
        </div>
      </div>
    </div>
  );
}
