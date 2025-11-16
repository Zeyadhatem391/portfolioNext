"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavbarProps {
  theme?: "light" | "dark";
}

export default function Navbar({ theme  }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const menu = ["Home", "About", "Services", "Portfolio", "Contact"];

  // Theme classes
  const themeClasses =
    theme === "light"
      ? "bg-white/90 text-gray-900"
      : "bg-gray-800 text-white";

  const mobileThemeClasses =
    theme === "light"
      ? "bg-white text-gray-800"
      : "bg-gray-900 text-white";

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50 ${themeClasses}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <a
            href="#"
            className={`text-2xl font-bold tracking-wide p-5 ${theme === "light" ? "text-gray-900" : "text-white"}`}
          >
            Flowbite
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center">
            {menu.map((item, index) => (
              <li
                key={index}
                className="group relative cursor-pointer py-4 px-5"
              >
                <a
                  href="#"
                  className={`text-xl font-semibold transition-all duration-300 ${
                    theme === "light"
                      ? "text-gray-700 group-hover:text-blue-600"
                      : "text-gray-200 group-hover:text-blue-400"
                  }`}
                >
                  {item}
                </a>
                <span
                  className={`absolute left-1/2 -bottom-1 w-0 h-[3px] rounded-full transition-all duration-300 ${
                    theme === "light" ? "bg-blue-600 group-hover:w-full group-hover:left-0" : "bg-blue-400 group-hover:w-full group-hover:left-0"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            className={`md:hidden text-2xl ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* MOBILE POPUP MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div
            className={`w-80 rounded-2xl shadow-2xl overflow-hidden animate-pop relative ${mobileThemeClasses}`}
          >
            {/* Close Button */}
            <button
              className={`absolute top-4 right-4 text-2xl transition hover:text-red-500 ${
                theme === "light" ? "text-gray-700" : "text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>

            <ul className="flex flex-col text-left mt-10 w-full">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="group cursor-pointer w-full hover:bg-blue-50 transition-all duration-300 border-b border-gray-100 last:border-none"
                >
                  <a
                    href="#"
                    className={`block py-4 px-6 text-lg font-semibold transition ${
                      theme === "light"
                        ? "text-gray-800 group-hover:text-blue-600"
                        : "text-white group-hover:text-blue-400"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* POPUP ANIMATION */}
      <style>
        {`
          @keyframes pop {
            from { transform: scale(0.85); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-pop {
            animation: pop 0.25s ease-out;
          }
        `}
      </style>
    </>
  );
}
