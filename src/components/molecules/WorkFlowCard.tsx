import Link from "next/link";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { Articles } from "@/types/articles";

export default function WorkFlowCard({ title, slug }: Articles) {
  return (
    <div
      className={`rounded-2xl border ds-border-color ds-bg-alt p-8 shadow-md hover:shadow-xl transition duration-300`}
    >
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

      <Text size="sm" className="mb-6">
        Read detailed explanation and personal insights about {title}.
      </Text>

      <div className="flex gap-4">
        <Link
          href={`/articles/#${slug}`}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
        >
          Read Article
        </Link>
      </div>
    </div>
  );
}
