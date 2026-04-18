"use client";
import { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { menu } from "@/data/menuNavbar";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50 ds-bg-primary  ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-10">
          <a
            href=""
            className="text-2xl font-extrabold tracking-wide px-5 py-3 ds-text-alt "
          >
            ZH
          </a>

          <div className="flex gap-4">
            <button
              onClick={toggleTheme}
              className="transition-all duration-500 hover:scale-110 ds-text-base"
            >
              {theme === "light" ? (
                <FaSun className="w-5 h-5 md:w-7 md:h-6" />
              ) : (
                <FaMoon className="w-5 h-5 md:w-7 md:h-6" />
              )}
            </button>

            <button className="ds-text-base" onClick={() => setOpen(true)}>
              <FaBars className="w-5 h-5 md:w-7 md:h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE POPUP MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center ">
          <div className="w-80 rounded-2xl shadow-2xl overflow-hidden animate-pop relative p-2 ds-bg-primary ds-text-base">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl transition hover:text-red-500 "
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>

            <ul className="flex flex-col text-left mt-10 w-full">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="group cursor-pointer w-full hover:bg-blue-50 transition-all duration-200 border-b border-gray-100 last:border-none"
                >
                  <a
                    href={item.path}
                    className="block py-4 px-6 text-lg font-semibold transition  group-hover:text-blue-600"
                  >
                    {item.name === "Exp"
                      ? "Experiences"
                      : item.name === "Cer"
                        ? "Certifications"
                        : item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
