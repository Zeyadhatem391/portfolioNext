import Link from "next/link";
import { articles } from "@/data/articles";
import WorkFlowCard from "@/components/molecules/WorkFlowCard";
import AddressSection from "@/components/molecules/AddressSection";

export default function WorkFlow() {
  return (
    <section className="w-full min-h-screen px-6 md:px-28 py-20 " id="articles">
      <AddressSection
        titel="Engineering Articles"
        text="Deep dives into workflow, architecture, and frontend systems"
      />

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {articles.map((article) => (
          <WorkFlowCard key={article.id} {...article} />
        ))}
      </div>

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
