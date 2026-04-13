interface GitFlowProps {
  theme?: "light" | "dark";
}

export default function GitFlow({ theme = "dark" }: GitFlowProps) {
  const isLight = theme === "light";

  const textPrimary = isLight ? "text-gray-900" : "text-white";
  const textSecondary = isLight ? "text-gray-600" : "text-gray-400";
  const cardBg = isLight ? "bg-white" : "bg-gray-900";
  const borderColor = isLight ? "border-gray-200" : "border-gray-800";

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
      description:
        "Branches created to develop new features independently.",
      details:
        "Created from develop and merged back into develop after completion.",
      example: "Example: feature/login-system",
    },
    {
      title: "4. release/*",
      description:
        "Branches created to prepare a new production release.",
      details:
        "Used for final testing, version bumping, and small fixes before merging into main and develop.",
      example: "Example: release/v1.2.0",
    },
    {
      title: "5. hotfix/*",
      description:
        "Branches created to quickly fix critical bugs in production.",
      details:
        "Created from main and merged back into both main and develop.",
      example: "Example: hotfix/payment-bug",
    },
  ];

  return (
    <div  id="gitFlow">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary}`}>
          Git Flow
        </h2>
        <p className={`mt-4 text-lg ${textSecondary}`}>
          A branching strategy for managing scalable and structured development workflows.
        </p>
        <div className="w-24 h-1 mx-auto mt-6 bg-blue-600 rounded-full"></div>
      </div>

      {/* Main Explanation Card */}
      <div
        className={`max-w-5xl mx-auto rounded-2xl border ${borderColor} ${cardBg} shadow-lg p-8 mb-12`}
      >
        <h3 className={`text-2xl font-semibold mb-4 ${textPrimary}`}>
          What is Git Flow?
        </h3>
        <p className={`${textSecondary} leading-relaxed`}>
          Git Flow is a structured branching model that defines how teams manage
          features, releases, and hotfixes in a predictable way. It works best
          for projects with scheduled releases and multiple contributors,
          providing clear separation between development and production code.
        </p>
      </div>

      {/* Branches Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {branches.map((branch, index) => (
          <div
            key={index}
            className={`rounded-2xl border ${borderColor} ${cardBg} p-6 shadow-md hover:shadow-xl transition duration-300`}
          >
            <h4 className={`text-lg font-semibold mb-3 ${textPrimary}`}>
              {branch.title}
            </h4>

            <p className={`${textSecondary} text-sm leading-relaxed mb-3`}>
              {branch.description}
            </p>

            <p className={`${textSecondary} text-sm leading-relaxed mb-4`}>
              {branch.details}
            </p>

            <div
              className={`text-xs px-3 py-2 rounded-lg border ${borderColor} ${textSecondary}`}
            >
              {branch.example}
            </div>
          </div>
        ))}
      </div>

      {/* Optional Insight Card */}
      <div
        className={`max-w-5xl mx-auto rounded-2xl border ${borderColor} ${cardBg} shadow-lg p-8 mt-12`}
      >
        <h4 className={`text-xl font-semibold mb-4 ${textPrimary}`}>
          When to Use Git Flow
        </h4>
        <p className={`${textSecondary} leading-relaxed`}>
          Git Flow is ideal for large teams and projects with structured release
          cycles. However, for small teams or fast-moving startups, simpler
          strategies like GitHub Flow or Trunk-Based Development may be more
          efficient.
        </p>
      </div>
    </div>
  );
}