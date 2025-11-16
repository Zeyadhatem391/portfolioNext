"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

interface ScrollToTopProps {
  theme?: "light" | "dark";
}

export default function ScrollToTop({ theme  }: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // theme classes
  const themeClasses =
    theme === "light"
      ? "bg-white text-gray-900 border border-gray-200"
      : "bg-gray-800 text-white border border-gray-700";

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 
        ${themeClasses} ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
}
