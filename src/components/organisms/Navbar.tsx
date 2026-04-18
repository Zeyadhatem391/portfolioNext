"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { menu } from "@/data/menuNavbar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50 ds-bg-primary ds-text-base ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <a
            href=""
            className="text-2xl font-extrabold tracking-wide px-5 py-3 ds-text-alt "
          >
            ZH
          </a>

          <ul className="hidden lg:flex items-center">
            {menu.map((item, index) => (
              <li
                key={index}
                className="group relative cursor-pointer py-5 px-5"
              >
                <a
                  href={item.path}
                  className="text-xl font-semibold transition-all duration-300   group-hover:text-blue-600"
                >
                  {item.name}
                </a>
                <span className="absolute left-1/2 -bottom-1 w-0 h-[3px] rounded-full transition-all duration-300  bg-blue-600 group-hover:w-full group-hover:left-0" />
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden text-2xl ds-text-base"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
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
