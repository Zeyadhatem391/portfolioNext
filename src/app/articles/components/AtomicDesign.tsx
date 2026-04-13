interface AtomicDesignProps {
  theme?: "light" | "dark";
}

export default function AtomicDesign({ theme = "dark" }: AtomicDesignProps) {
  const isLight = theme === "light";

  const textPrimary = isLight ? "text-gray-900" : "text-white";
  const textSecondary = isLight ? "text-gray-600" : "text-gray-400";
  const cardBg = isLight ? "bg-white" : "bg-gray-900";
  const borderColor = isLight ? "border-gray-200" : "border-gray-800";

  const levels = [
    {
      title: "1. Atoms",
      description:
        "Basic building blocks of UI. Smallest reusable elements that cannot be broken down further.",
      example: "Example: Button, Input, Label",
    },
    {
      title: "2. Molecules",
      description:
        "Combination of atoms working together as a single unit with simple functionality.",
      example: "Example: Search input (Input + Button)",
    },
    {
      title: "3. Organisms",
      description:
        "Groups of molecules forming complex UI sections with specific responsibilities.",
      example: "Example: Navbar, Product Card",
    },
    {
      title: "4. Templates",
      description:
        "Layout structures that define content placement without real data.",
      example: "Example: Blog Layout, Dashboard Layout",
    },
    {
      title: "5. Pages",
      description:
        "Final UI instances where templates are filled with real content and data.",
      example: "Example: Home Page, Product Details Page",
    },
  ];

  return (
    <div className="mt-24" id="atomicDesign">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary}`}>
          Atomic Design
        </h2>
        <p className={`mt-4 text-lg ${textSecondary}`}>
          A structured way to build complex interfaces from simple components.
        </p>
        <div className="w-24 h-1 mx-auto mt-6 bg-blue-600 rounded-full"></div>
      </div>
      {/* Main Card */}
      <div
        className={`max-w-5xl mx-auto rounded-2xl border ${borderColor} ${cardBg} shadow-lg p-8 mb-12`}
      >
        <h3 className={`text-2xl font-semibold mb-4 ${textPrimary}`}>
          Atomic Design
        </h3>
        <p className={`${textSecondary} leading-relaxed`}>
          Atomic Design is a methodology for creating scalable and reusable UI
          systems by breaking interfaces into smaller building blocks. It
          encourages structured thinking and improves maintainability in large
          frontend applications.
        </p>
      </div>

      {/* Levels Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {levels.map((level, index) => (
          <div
            key={index}
            className={`rounded-2xl border ${borderColor} ${cardBg} p-6 shadow-md hover:shadow-xl transition duration-300`}
          >
            <h4 className={`text-lg font-semibold mb-3 ${textPrimary}`}>
              {level.title}
            </h4>

            <p className={`${textSecondary} text-sm leading-relaxed mb-4`}>
              {level.description}
            </p>

            <div
              className={`text-xs px-3 py-2 rounded-lg border ${borderColor} ${textSecondary}`}
            >
              {level.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
