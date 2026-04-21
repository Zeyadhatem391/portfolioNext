"use client";
import Image from "next/image";
import { useState } from "react";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { Project } from "@/types/projects";

import { FiChevronDown, FaGithub } from "@/assets/icons/icons";

export default function ProjectCard({
  id,
  img,
  title,
  subtitle,
  tech,
  demoLink,
  githubLink,
  desc,
  list,
}: Project) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="relative w-[90%] md:w-[85%] group">
      <div className="absolute inset-0 rounded-xl border-2 border-blue-600 animate-borderLoop pointer-events-none"></div>

      <div
        className={`rounded-xl overflow-hidden shadow-lg border ds-border-color ds-bg-alt project-card`}
      >
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 relative">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleProject(id)}
          >
            <Title size="2xl" className="font-semibold">
              {title}
            </Title>
            <FiChevronDown
              className={`text-3xl text-blue-500 transition-transform duration-300 ${
                openIndex === id ? "rotate-180" : ""
              }`}
            />
          </div>

          <Text className="mt-1 ">{subtitle}</Text>

          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5 mt-5">
            <a
              href={demoLink || "#"}
              className="px-5 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-all"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href={githubLink || "#"}
              className="flex items-center gap-2 px-5 py-2 border border-blue-500 text-blue-500 text-sm rounded-full hover:bg-blue-600 hover:text-white transition-all"
              target="_blank"
            >
              <FaGithub />
              GitHub
            </a>
          </div>

          <div
            className={`transition-all duration-500 overflow-hidden ${
              openIndex === id
                ? "max-h-60 mt-4 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <Text size="sm" className="leading-relaxed">
              {desc}
            </Text>

            {list && (
              <ul className="mt-3 space-y-1 text-sm leading-relaxed list-disc list-inside ds-text-base">
                {Object.values(list).map((item, i) => (
                  <li key={i} className="opacity-90">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
