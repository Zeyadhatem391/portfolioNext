"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "@/assets/icons/icons";

export default function ScrollToTop() {
const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY >= 220);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110  ds-bg-alt ds-text-base ds-border-color"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
}
