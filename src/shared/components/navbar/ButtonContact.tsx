"use client";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scrollToSection";
import { useTranslations } from "next-intl";

function ButtonContact() {
  const t = useTranslations("Navbar");

  return (
    <Button
      className="
              h-9 cursor-pointer px-3
              text-sm font-semibold
              sm:h-10 sm:px-5 sm:text-md
            "
      onClick={() => scrollToSection("contact")}
    >
      {t("btn")}
    </Button>
  );
}

export default ButtonContact;
