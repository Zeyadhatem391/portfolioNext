export default function Footer() {
  return (
    <footer>
      <div
        className={`mx-auto max-w-7xl px-6 py-6 ds-text-base
        flex flex-col items-center gap-5
        md:flex-row md:justify-between`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-wide ds-text-alt"
        >
          ZH
        </a>

        <span className="text-sm sm:text-center" >
          © 2026 Zeyad Hatem. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
