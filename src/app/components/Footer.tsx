interface FooterProps {
  theme?: "light" | "dark";
}

export default function Footer({ theme = "light" }: FooterProps) {
  const bgPrimary = theme === "light" ? "bg-gray-100" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";

  return (
    <footer className={`${bgPrimary} shadow-xs`}>
      <div
        className={`mx-auto max-w-7xl px-6 py-6 ${textColor}
        flex flex-col items-center gap-5
        md:flex-row md:justify-between`}
      >
        {/* Logo */}
        <a
          href="#home"
          className={`text-2xl font-extrabold tracking-wide
          ${
            theme === "light" ? "text-gray-900" : "text-blue-500"
          } hover:text-blue-600 transition-colors`}
        >
          ZH
        </a>

        <span className={`text-sm sm:text-center ${textColor}`}>
          © 2026 Zeyad Hatem. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
