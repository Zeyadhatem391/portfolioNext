import Link from "next/link";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { Articles } from "@/types/articles";

export default function WorkFlowCard({ title, slug, docLink }: Articles) {
  return (
    <div
      className={`rounded-2xl border ds-border-color ds-bg-alt p-8 shadow-md hover:shadow-xl transition duration-300`}
    >
      {/* Title Row */}
      <div className="flex justify-between items-center mb-4">
        <Title size="xl" className="font-semibold">
          {title}
        </Title>

        <Link
          href={`/articles/#${slug}`}
          className={`text-2xl  hover:translate-x-2 transition`}
        >
          →
        </Link>
      </div>

      {/* Description */}
      <Text size="sm" className="mb-6">
        Read detailed explanation and personal insights about {title}.
      </Text>

      {/* Buttons */}
      <div className="flex gap-4">
        {/* Read Article */}
        <Link
          href={`/articles/#${slug}`}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
        >
          Read Article
        </Link>

        {/* Documentation */}
        <a
          href={docLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 text-sm rounded-lg border ds-border-color ds-text-base hover:bg-blue-600 hover:text-white transition`}
        >
          Documentation
        </a>
      </div>
    </div>
  );
}
