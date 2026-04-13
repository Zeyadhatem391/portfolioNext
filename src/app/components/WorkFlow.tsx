import Link from "next/link";

interface WorkFlowProps {
  theme?: "light" | "dark";
}

export default function WorkFlow({ theme }: WorkFlowProps) {
  const isLight = theme === "light";

  const sectionBg = isLight ? "bg-white" : "bg-gray-900";
  const textPrimary = isLight ? "text-gray-900" : "text-white";
  const textSecondary = isLight ? "text-gray-600" : "text-gray-400";
  const cardBg = isLight ? "bg-white" : "bg-gray-800";
  const borderColor = isLight ? "border-gray-200" : "border-gray-800";

  const articles = [
    {
      title: "Git Flow",
      slug: "gitFlow",
      docLink: "https://your-doc-link.com/git-flow",
    },
    {
      title: "Design System",
      slug: "designSystem",
      docLink: "https://your-doc-link.com/design-system",
    },
    {
      title: "Atomic Design",
      slug: "atomicDesign",
      docLink: "https://your-doc-link.com/atomic-design",
    },
  ];

  return (
    <section className={`w-full min-h-screen px-6 md:px-28 py-20 ${sectionBg}`} id="articles">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary}`}>
          Engineering Articles
        </h2>
        <p className={`mt-4 text-lg ${textSecondary}`}>
          Deep dives into workflow, architecture, and frontend systems
        </p>
        <div className="w-24 h-1 mx-auto mt-6 bg-blue-600 rounded-full"></div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {articles.map((article) => (
          <div
            key={article.slug}
            className={`rounded-2xl border ${borderColor} ${cardBg} p-8 shadow-md hover:shadow-xl transition duration-300`}
          >
            {/* Title Row */}
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${textPrimary}`}>
                {article.title}
              </h3>

              <Link
                href={`/articles/#${article.slug}`}
                className={`text-2xl ${textSecondary} hover:translate-x-2 transition`}
              >
                →
              </Link>
            </div>

            {/* Description */}
            <p className={`text-sm ${textSecondary} mb-6`}>
              Read detailed explanation and personal insights about{" "}
              {article.title}.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              {/* Read Article */}
              <Link
                href={`/articles/${article.slug}`}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
              >
                Read Article
              </Link>

              {/* Documentation */}
              <a
                href={article.docLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 text-sm rounded-lg border ${borderColor} ${textPrimary} hover:bg-blue-600 hover:text-white transition`}
              >
                Documentation
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Link
          href="/articles"
          className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
}
