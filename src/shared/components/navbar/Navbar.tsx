import { ThemeToggle } from "./ThemeButton";
import LanguageSwitcher from "./LanguageSwitcher";
import ButtonContact from "./ButtonContact";
import SearchMenu from "./SearchMenu";
import Link from "next/link";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full backdrop-blur-md shadow-md ds-bg-primary">
      <nav className="relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="px-5 py-3 text-2xl font-extrabold tracking-wide ds-text-alt"
          >
            ZH
          </Link>

          <div className="flex items-center gap-3">
            <SearchMenu />

            <div className="flex items-center gap-1.5 sm:gap-3">
              <div className="flex h-5 items-center border-l border-gray-800/20 pl-1.5 dark:border-gray-100/20 sm:pl-2">
                <LanguageSwitcher />
              </div>

              <ThemeToggle />

              <ButtonContact />
            </div>
          </div>
        </div>
        <ScrollProgress className="absolute bottom-0 left-0 top-auto" />
      </nav>
    </div>
  );
}
