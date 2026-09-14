"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@teispace/next-themes";

import { Button } from "@/components/ui/button";
import { playSound } from "@/lib/sound";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    playSound("old-camera.wav");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="cursor-pointer rounded-md hover:bg-gray-800/10 dark:hover:bg-gray-300/10"
      onClick={toggleTheme}
    >
      <Sun
        className="
          h-[1.2rem] w-[1.2rem]
          transform-gpu
          scale-100 rotate-0
          transition-all duration-300 ease-in-out
          dark:scale-0 dark:-rotate-90
        "
      />

      <Moon
        className="
          absolute
          h-[1.2rem] w-[1.2rem]
          transform-gpu
          scale-0 rotate-90
          transition-all duration-300 ease-in-out
          dark:scale-100 dark:rotate-0
        "
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
