"use client";
import { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { menu } from "@/data/menuNavbar";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50 ds-bg-primary">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wide px-5 py-3 ds-text-alt"
          >
            ZH
          </Link>

          <div className="flex gap-6 items-center">
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

            <button className="ds-text-base" onClick={() => setOpen(!open)}>
              {open ? (
                <FaTimes className="w-5 h-5 md:w-7 md:h-6" />
              ) : (
                <FaBars className="w-5 h-5 md:w-7 md:h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-[55px] left-0 w-full md:hidden z-50 transform transition-all duration-500 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        } ds-bg-primary ds-text-base shadow-lg`}
      >
        <ul className="flex flex-col">
          {menu.map((item, index) => (
            <li key={index} className="border-b ds-border-color ">
              <a
                href={item.path}
                onClick={() => setOpen(false)}
                className="block py-4 px-6 text-lg font-semibold transition ds-nav-hover"
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

      <div
        className={`fixed top-0 left-0 h-full w-72 hidden md:block z-50 transform transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        } ds-bg-primary ds-text-base shadow-xl`}
      >
        <div className="pt-20">
          <ul className="flex flex-col">
            {menu.map((item, index) => (
              <li key={index} className="border-b  ds-border-color">
                <a
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="block py-4 px-8 text-lg font-semibold transition ds-nav-hover"
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
    </>
  );
}
