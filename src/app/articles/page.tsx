"use client";
import { useState } from "react";
import DesignSystem from "./components/DesignSystem";
import ModeSwitcher from "@/app/components/ModeSwitcher";
import AtomicDesign from "./components/AtomicDesign";
import GitFlow from "./components/GitFlow";
import StarsBackground from "../components/StarsBackground";
import ScrollToTop from "../components/ScrollToTop";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleModeChange = (newMode: "light" | "dark") => {
    setTheme(newMode);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newMode);
  };

  return (
    <>
      <StarsBackground theme={theme} />
      <section className="w-full  px-6 md:px-28 py-20 ">
        <GitFlow />
        <AtomicDesign />
        <DesignSystem />

        <SocialMedia />
        <ScrollToTop />
        <ModeSwitcher theme={theme} onToggle={handleModeChange} />
      </section>
    </>
  );
}
