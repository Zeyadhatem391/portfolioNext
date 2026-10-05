"use client";

import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface SkilsIconProps {
  url: string;
  name: string;

}

export default function SkilsIcon({ url,name }: SkilsIconProps) {
  const [hasError, setHasError] = useState(false);

  let domain = "";

  try {
    domain = new URL(url).hostname;
  } catch {
    domain = "";
  }

  if (!domain || hasError) {
    return (
      <div className="group relative w-fit cursor-pointer">
        <span
          className="
            pointer-events-none absolute bottom-full left-1/2 z-20 mb-2
            -translate-x-1/2 translate-y-1
            whitespace-nowrap rounded-md
            bg-gray-900 px-2.5 py-1
            text-xs font-medium text-white
            opacity-0 shadow-lg
            transition-all duration-200
            group-hover:translate-y-0 group-hover:opacity-100
            dark:bg-white dark:text-gray-900
          "
        >
          {domain || "Invalid URL"}
        </span>

        <div className="flex size-12 items-center justify-center transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-110">
          <LinkIcon className="size-10 text-green-600" />
        </div>
      </div>
    );
  }

  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  return (
    <div className="group relative w-fit cursor-pointer">
      <span
        className="
          pointer-events-none absolute bottom-full left-1/2 z-20 mb-2
          -translate-x-1/2 translate-y-1
          whitespace-nowrap rounded-md
          bg-gray-900 px-2.5 py-1
          text-xs font-medium text-white
          opacity-0 shadow-lg
          transition-all duration-200
          group-hover:translate-y-0 group-hover:opacity-100
          dark:bg-white dark:text-gray-900
        "
      >
        {name}
      </span>

     <Link href={url} target="_blank">
      <div className="flex size-11 items-center justify-center transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-110">
        <Image
          src={faviconUrl}
          alt={`${name} icon`}
          width={35}
          height={35}
          onError={() => setHasError(true)}
          className="size-9 object-contain rounded-xl"
        />
      </div>
     </Link>
    </div>
  );
}
