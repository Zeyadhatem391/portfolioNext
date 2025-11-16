"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";
import ScrollToTop from "./components/ScrollToTop";
import ModeSwitcher from "./components/ModeSwitcher";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleModeChange = (newMode: "light" | "dark") => {
    setTheme(newMode);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newMode);
  };

  return (
    <>
      <Navbar theme={theme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Experience theme={theme} />
      <Skills theme={theme} />
      <Contact theme={theme} />
      <SocialMedia theme={theme} />
      <ScrollToTop theme={theme} />
      <ModeSwitcher theme={theme} onToggle={handleModeChange} />
      <CustomCursor />
    </>
  );
}
