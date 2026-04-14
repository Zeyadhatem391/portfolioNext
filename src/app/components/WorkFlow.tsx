import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import AddressSection from "@/components/molecules/AddressSection";
import Link from "next/link";

export default function WorkFlow() {
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
    <section className="w-full min-h-screen px-6 md:px-28 py-20 " id="articles">
      {/* Title */}
      <AddressSection
        titel="Engineering Articles"
        text="Deep dives into workflow, architecture, and frontend systems"
      />

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {articles.map((article) => (
          <div
            key={article.slug}
            className={`rounded-2xl border ds-border-color ds-bg-alt p-8 shadow-md hover:shadow-xl transition duration-300`}
          >
            {/* Title Row */}
            <div className="flex justify-between items-center mb-4">
              <Title size="xl" className="font-semibold">
                {article.title}
              </Title>

              <Link
                href={`/articles/#${article.slug}`}
                className={`text-2xl  hover:translate-x-2 transition`}
              >
                →
              </Link>
            </div>

            {/* Description */}
            <Text size="sm" className="mb-6">
              Read detailed explanation and personal insights about{" "}
              {article.title}.
            </Text>

            {/* Buttons */}
            <div className="flex gap-4">
              {/* Read Article */}
              <Link
                href={`/articles/#${article.slug}`}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
              >
                Read Article
              </Link>

              {/* Documentation */}
              <a
                href={article.docLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 text-sm rounded-lg border ds-border-color ds-text-base hover:bg-blue-600 hover:text-white transition`}
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
