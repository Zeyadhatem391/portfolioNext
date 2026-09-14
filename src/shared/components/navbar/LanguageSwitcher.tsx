"use client";

import { Link } from "@/i18n/navigation";
import { Check, Globe2 } from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

const LanguageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        className="flex h-9 items-center gap-2 rounded-md px-2.5 text-sm transition-colors hover:bg-gray-800/10 dark:hover:bg-gray-300/10"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={`Change language. Current language: ${locale}`}
      >
        <Globe2 className="h-4 w-4" />

        <span className="hidden font-bold sm:inline">
          {locale.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full z-50 mt-2 min-w-36 overflow-hidden rounded-md border bg-white dark:bg-black p-1 shadow-md"
          role="menu"
          aria-label="Language options"
        >
          <Link
            href="/"
            locale="ar"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between rounded-sm px-3 py-2 text-sm transition-colors hover:bg-muted"
            role="menuitem"
            aria-current={locale === "ar" ? "true" : undefined}
          >
            <span>
              <span className="font-medium pl-2">AR</span>
              <span className="pl-2">العربية</span>
            </span>

            {locale === "ar" && (
              <Check className="h-4 w-4" aria-hidden="true" />
            )}
          </Link>

          <Link
            href="/"
            locale="en"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between rounded-sm px-3 py-2 text-sm transition-colors hover:bg-muted"
            role="menuitem"
            aria-current={locale === "en" ? "true" : undefined}
          >
            <span>
              <span className="font-medium pl-2">EN</span>
              <span className="pl-2">English</span>
            </span>

            {locale === "en" && (
              <Check className="h-4 w-4" aria-hidden="true" />
            )}
          </Link>
        </div>
      )}
    </div>
  );
};

export default LanguageButton;
