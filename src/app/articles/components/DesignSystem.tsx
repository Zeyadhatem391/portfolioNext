interface WorkFlowProps {
  theme?: "light" | "dark";
}
export default function DesignSystem({ theme = "dark" }: WorkFlowProps) {
  const isLight = theme === "light";

  const textPrimary = isLight ? "text-gray-900" : "text-white";
  const textSecondary = isLight ? "text-gray-600" : "text-gray-400";
  const cardBg = isLight ? "bg-white" : "bg-gray-900";
  const borderColor = isLight ? "border-gray-200" : "border-gray-800";

  return (
    <div className="mt-24" id=" designSystem">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary}`}>
          Design System
        </h2>
        <p className={`mt-4 text-lg ${textSecondary}`}>
         A scalable approach to building consistent and reusable UI components.
        </p>
        <div className="w-24 h-1 mx-auto mt-6 bg-blue-600 rounded-full"></div>
      </div>
      <div
        className={`max-w-5xl mx-auto rounded-2xl border ${borderColor} ${cardBg} shadow-lg p-8 mb-12`}
      >
        <h3 className={`text-2xl font-semibold mb-4 ${textPrimary}`}>
          Design System
        </h3>
        <p className={`${textSecondary} leading-relaxed`}>
          A structured approach to building consistent UI components using
          reusable tokens, variables, and scalable styling patterns. It helps
          maintain visual consistency and improves collaboration across teams.
        </p>
      </div>

      {/* Inner Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-6 shadow-md hover:shadow-xl transition duration-300`}
        >
          <h4 className={`text-xl font-semibold mb-3 ${textPrimary}`}>
            variables.css
          </h4>
          <p className={`${textSecondary} leading-relaxed`}>
            Centralized design tokens including colors, spacing, typography, and
            theme values. Enables easy theming and scalable UI consistency.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-6 shadow-md hover:shadow-xl transition duration-300`}
        >
          <h4 className={`text-xl font-semibold mb-3 ${textPrimary}`}>
            globals.css
          </h4>
          <p className={`${textSecondary} leading-relaxed`}>
            Global styling rules, base resets, typography system, and layout
            foundations to ensure a clean and predictable design structure.
          </p>
        </div>
      </div>
    </div>
  );
}
