"use client";

import { FaSun, FaMoon } from "react-icons/fa";

interface ModeSwitcherProps {
  theme: "light" | "dark";
  onToggle: (mode: "light" | "dark") => void;
}

export default function ModeSwitcher({ theme, onToggle }: ModeSwitcherProps) {
  return (
    <button
      onClick={() => onToggle(theme === "light" ? "dark" : "light")}
      className={`fixed top-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 ${
        theme === "light"
          ? "bg-white text-gray-900 border border-gray-200"
          : "bg-gray-800 text-white border border-gray-700"
      }`}
    >
      {theme === "light" ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
    </button>
  );
}
