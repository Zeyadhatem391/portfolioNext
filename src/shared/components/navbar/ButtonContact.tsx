"use client";
import { RippleButton } from "@/components/ui/ripple-button";
import { scrollToSection } from "@/lib/scrollToSection";
import { useTranslations } from "next-intl";

function ButtonContact() {
  const t = useTranslations("Navbar");

  return (
    <RippleButton
      onClick={() => scrollToSection("contact")}
      className="h-9 cursor-pointer px-3 text-sm font-semibold sm:h-10 sm:px-5 sm:text-md bg-primary text-primary-foreground hover:bg-primary/80"
    >
      {t("btn")}
    </RippleButton>
  );
}

export default ButtonContact;
