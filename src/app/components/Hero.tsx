"use client";
import { useEffect, useState } from "react";
import { PortfolioHero, HeroSection } from "@/assets/images/images";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Images from "@/components/atoms/Image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const phrases = ["Full Stack Developer", "Web Developer", "Computer Science"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

   const t = useTranslations("Hero");

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
      <div
        className={`w-full lg:w-1/2  flex items-center justify-center p-8 order-first lg:order-last`}
      >
        <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
          <Images src={PortfolioHero} alt="zeyad hatem" priority />
        </div>
      </div>

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
          {t("dec")}
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            className="py-4 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 text-center bg-blue-600 text-white hover:bg-blue-700 "
            href="#contact"
          >
            
          {t("btn1")}

          </a>
          <a
            className="py-4 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 text-center border border-blue-600 text-blue-600 hover:bg-blue-50"
            href="#projects"
          >
          
          {t("btn2")}

          </a>
        </div>
      </div>
    </div>
  );
}
