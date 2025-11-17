"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedinIn,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

interface SocialMediaProps {
  theme?: "light" | "dark";
}

export default function SocialMedia({ theme }: SocialMediaProps) {
  const [open, setOpen] = useState(false);

  const icons = [
    { icon: <FaFacebookF />, link: "https://facebook.com", bg: "#1877F2" },
    { icon: <FaInstagram />, link: "https://instagram.com", bg: "#E1306C" },
    { icon: <FaWhatsapp />, link: "https://wa.me", bg: "#25D366" },
    { icon: <FaEnvelope />, link: "mailto:example@gmail.com", bg: "#EA4335" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com", bg: "#0A66C2" },
  ];

  const themeClasses =
    theme === "light"
      ? "bg-white border-white text-gray-900"
      : "bg-gray-800 border-gray-900 text-white";

  return (
    <>
      {/* ======= Desktop  ======= */}
      <div
        className={`hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-50 py-6 px-3 rounded-t-full rounded-b-full border-4 ${themeClasses}`}
      >
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition-transform duration-300 text-white"
            style={{ backgroundColor: item.bg }}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* ======= Mobile  ======= */}
      <div className="md:hidden fixed right-6 bottom-20 z-50">
        <div className="relative w-12 h-12">
          {icons.map((item, index) => {
            const angle = (index / (icons.length - 1)) * (Math.PI / 2);
            const radius = open ? 80 : 0;

            const x = Math.cos(angle + Math.PI) * radius;
            const y = Math.sin(angle + Math.PI) * radius;

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute w-10 h-10 flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-500"
                style={{
                  backgroundColor: item.bg,
                  transform: `translate(${x}px, ${y}px)`,
                  opacity: open ? 1 : 0,
                }}
              >
                {item.icon}
              </a>
            );
          })}

          {/* open and close  */}
          <button
            onClick={() => setOpen(!open)}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ${themeClasses}`}
          >
            {open ? <FaTimes /> : <FaPlus />}
          </button>
        </div>
      </div>
    </>
  );
}
