import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import AddressSection from "@/components/molecules/AddressSection";

export default function AtomicDesign() {
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
      <AddressSection
        titel="Atomic Design"
        text="A structured way to build complex interfaces from simple components."
      />

      {/* Main Card */}
      <div
        className={`max-w-5xl mx-auto rounded-2xl border ds-bg-alt ds-border-color shadow-lg p-8 mb-12`}
      >
        <Title size="2xl" className="font-semibold mb-4">
          Atomic Design
        </Title>
        <Text>
          Atomic Design is a methodology for creating scalable and reusable UI
          systems by breaking interfaces into smaller building blocks. It
          encourages structured thinking and improves maintainability in large
          frontend applications.
        </Text>
      </div>

      {/* Levels Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {levels.map((level, index) => (
          <div
            key={index}
            className={`rounded-2xl border ds-bg-alt ds-border-color p-6 shadow-md hover:shadow-xl transition duration-300`}
          >
            <Title size="lg" className="font-semibold mb-3">
              {" "}
              {level.title}
            </Title>
            <Text size="sm" className=" leading-relaxed mb-4">
              {" "}
              {level.description}
            </Text>
            <Text
              size="sm"
              className=" px-3 py-2 rounded-lg border ds-border-color"
            >
              {level.example}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
