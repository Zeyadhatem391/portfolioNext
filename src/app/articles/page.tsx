"use client";
import { useState } from "react";
import DesignSystem from "./components/DesignSystem";
import ModeSwitcher from "@/app/components/ModeSwitcher";
import AtomicDesign from "./components/AtomicDesign";
import GitFlow from "./components/GitFlow";
import StarsBackground from "../components/StarsBackground";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleModeChange = (newMode: "light" | "dark") => {
    setTheme(newMode);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newMode);
  };

  const isLight = theme === "light";

  const sectionBg = isLight ? "bg-gray-50" : "bg-gray-950";

  return (
    <>
      <StarsBackground theme={theme} />
      <section
        className={`w-full  px-6 md:px-28 py-20 ${sectionBg}`}
        id="workflow"
      >
        <GitFlow theme={theme} />
        <AtomicDesign theme={theme} />
        <DesignSystem theme={theme} />

        <ModeSwitcher theme={theme} onToggle={handleModeChange} />
      </section>
    </>
  );
}
