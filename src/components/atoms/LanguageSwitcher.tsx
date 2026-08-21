"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const isEnglish = locale === "en";

  const toggleLanguage = () => {
    router.replace(pathname, {
      locale: isEnglish ? "ar" : "en",
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle Language"
      className="
       
        flex
        h-10
        w-10
        items-center
        justify-center
        overflow-hidden
        cursor-pointer
        rounded-full
        transition-all
        duration-500
        active:scale-90 hover:scale-105 shadow-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800"
    >
      <span className="text-sm font-bold transition-all duration-500">
        {isEnglish ? "AR" : "EN"}
      </span>
    </button>
  );
}
