"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "@/assets/icons/icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isLight = resolvedTheme === "light";

  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`
        group
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        overflow-hidden
        rounded-full
        transition-all
        duration-500
        active:scale-90
        hover:scale-105
        shadow-md

        md:h-10
        md:w-10

        ${
          isLight
            ? "bg-gray-200 hover:bg-gray-300"
            : "bg-gray-900 hover:bg-gray-800"
        }
      `}
    >
      {/* Glow */}
      <span
        className={`
          absolute
          inset-0
          rounded-full
          transition-all
          duration-500
          ${
            isLight
              ? "bg-gray-300/20 scale-100"
              : "bg-sky-800/10 scale-125"
          }
        `}
      />

      {/* Icon */}
      <span
        className={`
          relative
          z-10
          flex
          items-center
          justify-center
          transition-all
          duration-500
          ${
            isLight
              ? "rotate-0 scale-100"
              : "rotate-180 scale-95"
          }
        `}
      >
        {isLight ? (
          <FaSun
            size={18}
            className="ds-text-alt transition-transform duration-500 group-hover:rotate-12"
          />
        ) : (
          <FaMoon
            size={18}
            className="text-white transition-transform duration-500 group-hover:-rotate-12"
          />
        )}
      </span>
    </button>
  );
}