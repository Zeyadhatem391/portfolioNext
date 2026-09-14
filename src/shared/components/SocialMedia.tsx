"use client";

import { useState } from "react";
import { FaPlus, FaTimes } from "@/assets/icons/icons";
import { Menu } from "@/data/SearchMenu";

export default function SocialMedia() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-20 z-50">
      <div className="relative h-12 w-12">
        {Menu["Social Links"].map((social, index) => {
          const Icon = social.icon;

          const angle =
            (index / (Menu["Social Links"].length - 1.5)) * (Math.PI / 2);

          const radius = open ? 85 : 0;

          const x = Math.cos(angle + Math.PI) * radius;
          const y = Math.sin(angle + Math.PI) * radius;

          return (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="absolute flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-all duration-500"
              style={{
                backgroundColor: social.bg,
                transform: `translate(${x}px, ${y}px)`,
                opacity: open ? 1 : 0,
              }}
            >
              <Icon />
            </a>
          );
        })}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close social links" : "Open social links"}
          className="absolute flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 ds-bg-alt ds-text-base ds-border-color"
        >
          {open ? <FaTimes /> : <FaPlus />}
        </button>
      </div>
    </div>
  );
}
