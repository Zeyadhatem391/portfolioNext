import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import AddressSection from "@/components/molecules/AddressSection";

export default function DesignSystem() {
  return (
    <div className="mt-24" id=" designSystem">
      <AddressSection
        titel="Design System"
        text="A scalable approach to building consistent and reusable UI components."
      />
      <div
        className={`max-w-5xl mx-auto rounded-2xl border ds-bg-alt ds-border-color shadow-lg p-8 mb-12`}
      >
        <Title size="2xl" className="font-semibold mb-4">
          Design System
        </Title>
        <Text>
          A structured approach to building consistent UI components using
          reusable tokens, variables, and scalable styling patterns. It helps
          maintain visual consistency and improves collaboration across teams.
        </Text>
      </div>

      {/* Inner Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div
          className={`rounded-2xl border ds-bg-alt ds-border-color p-6 shadow-md hover:shadow-xl transition duration-300`}
        >
          <Title size="xl" className="font-semibold mb-3">
            variables.css
          </Title>
          <Text>
            Centralized design tokens including colors, spacing, typography, and
            theme values. Enables easy theming and scalable UI consistency.
          </Text>
        </div>

        {/* Card 2 */}
        <div
          className={`rounded-2xl border ds-bg-alt ds-border-color p-6 shadow-md hover:shadow-xl transition duration-300`}
        >
          <Title size="xl" className="font-semibold mb-3">
            globals.css
          </Title>
          <Text>
            Global styling rules, base resets, typography system, and layout
            foundations to ensure a clean and predictable design structure.
          </Text>
        </div>
      </div>
    </div>
  );
}
