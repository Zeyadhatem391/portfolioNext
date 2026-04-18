import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import AddressSection from "@/components/molecules/AddressSection";

export default function GitFlow() {
  const branches = [
    {
      title: "1. main",
      description:
        "The production-ready branch. It always reflects stable and deployable code.",
      details:
        "Hotfix and release branches are merged into main after validation.",
      example: "Used for: Production deployments",
    },
    {
      title: "2. develop",
      description:
        "The integration branch where features are combined and tested together.",
      details:
        "All feature branches are created from develop and merged back into it.",
      example: "Used for: Ongoing development",
    },
    {
      title: "3. feature/*",
      description: "Branches created to develop new features independently.",
      details:
        "Created from develop and merged back into develop after completion.",
      example: "Example: feature/login-system",
    },
    {
      title: "4. release/*",
      description: "Branches created to prepare a new production release.",
      details:
        "Used for final testing, version bumping, and small fixes before merging into main and develop.",
      example: "Example: release/v1.2.0",
    },
    {
      title: "5. hotfix/*",
      description:
        "Branches created to quickly fix critical bugs in production.",
      details: "Created from main and merged back into both main and develop.",
      example: "Example: hotfix/payment-bug",
    },
  ];

  return (
    <div id="gitFlow">
      <AddressSection
        titel="Git Flow"
        text="A branching strategy for managing scalable and structured development workflows."
      />
      {/* Main Explanation Card */}
      <div
        className={`max-w-5xl mx-auto rounded-2xl border ds-bg-alt ds-border-color shadow-lg p-8 mb-12`}
      >
        <Title size="2xl" className="font-semibold mb-4">
          What is Git Flow?
        </Title>
        <Text className="leading-relaxed">
          Git Flow is a structured branching model that defines how teams manage
          features, releases, and hotfixes in a predictable way. It works best
          for projects with scheduled releases and multiple contributors,
          providing clear separation between development and production code.
        </Text>
      </div>

      {/* Branches Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {branches.map((branch, index) => (
          <div
            key={index}
            className={`rounded-2xl border ds-bg-alt ds-border-color p-6 shadow-md hover:shadow-xl transition duration-300`}
          >
            <Title size="lg" className="font-semibold mb-3">
              {" "}
              {branch.title}
            </Title>
            <Text size="sm" className=" leading-relaxed mb-3">
              {" "}
              {branch.description}
            </Text>
            <Text size="sm" className=" leading-relaxed mb-4">
              {" "}
              {branch.details}
            </Text>

            <div
              className={`text-xs px-3 py-2 rounded-lg border ds-border-color ds-text-secondary `}
            >
              {branch.example}
            </div>
          </div>
        ))}
      </div>

      {/* Optional Insight Card */}
      <div
        className={`max-w-5xl mx-auto rounded-2xl border ds-bg-alt ds-border-color shadow-lg p-8 mt-12`}
      >
        <Title size="xl" className="font-semibold mb-4">
          When to Use Git Flow
        </Title>
        <Text>
          Git Flow is ideal for large teams and projects with structured release
          cycles. However, for small teams or fast-moving startups, simpler
          strategies like GitHub Flow or Trunk-Based Development may be more
          efficient.
        </Text>
      </div>
    </div>
  );
}
