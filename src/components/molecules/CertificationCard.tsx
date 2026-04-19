import Image from "@/components/atoms/Image";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Certification } from "@/types/certification";

export default function CertificationCard({
  title,
  img,
  demoLink,
  date,
  desc,
}: Certification) {
  return (
    <div className="relative w-[90%] md:w-[85%] group" data-aos="fade-up">
      {/* Blue animated border */}
      <div className="absolute inset-0 rounded-xl border-2 border-blue-600 animate-borderLoop pointer-events-none"></div>

      <div
        className={`rounded-xl overflow-hidden shadow-lg border ds-border-color ds-bg-alt project-card`}
      >
        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* <div className="relative z-40 "> */}
          <a
            href={demoLink}
            className="absolute z-40 top-4 right-4 p-3 rounded-full text-white bg-black/60 hover:bg-blue-600/50"
            target="_blank"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>

        <div className="p-6 relative">
          {/* Title + Arrow */}
          <div className="flex items-center justify-between cursor-pointer">
            <Title className="font-semibold" size="2xl">
              {title}
            </Title>
          </div>

          <div className="mt-1 text-green-400">{date}</div>

          {/* Description */}
          <div className={`transition-all duration-500 overflow-hidden `}>
            <Text size="sm">{desc}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
