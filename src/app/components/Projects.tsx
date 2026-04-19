"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

import AOS from "aos";
import AddressSection from "@/components/molecules/AddressSection";
import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/Text";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease",
    });
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section
        className="w-full min-h-screen px-6 md:px-28 py-16 "
        id="projects"
      >
        {/* Title */}
        <AddressSection
          titel="Projects"
          text="Building projects that make an impact"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-[90%] md:w-[85%] group"
              data-aos="fade-up"
            >
              {/* Blue animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-blue-600 animate-borderLoop pointer-events-none"></div>

              <div
                className={`rounded-xl overflow-hidden shadow-lg border ds-border-color ds-bg-alt project-card`}
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 relative">
                  {/* Title + Arrow */}
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleProject(index)}
                  >
                    <Title size="2xl" className="font-semibold">
                      {project.title}
                    </Title>
                    <FiChevronDown
                      className={`text-3xl text-blue-500 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <Text className="mt-1 ">{project.subtitle}</Text>

                  {/* Tech Stack */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-5 mt-5">
                    <a
                      href={project.demoLink || "#"}
                      className="px-5 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-all"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink || "#"}
                      className="flex items-center gap-2 px-5 py-2 border border-blue-500 text-blue-500 text-sm rounded-full hover:bg-blue-600 hover:text-white transition-all"
                      target="_blank"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>

                  {/* Description */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      openIndex === index
                        ? "max-h-60 mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {/* Description */}
                    <Text size="sm" className="leading-relaxed">
                      {project.desc}
                    </Text>

                    {/* List */}
                    {project.list && (
                      <ul className="mt-3 space-y-1 text-sm leading-relaxed list-disc list-inside ds-text-base">
                        {Object.values(project.list).map((item, i) => (
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
          ))}
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes borderLoop {
          0% {
            clip-path: inset(0 100% 100% 0);
          }
          25% {
            clip-path: inset(0 0 100% 0);
          }
          50% {
            clip-path: inset(0 0 0 0);
          }
          75% {
            clip-path: inset(100% 0 0 0);
          }
          100% {
            clip-path: inset(0 100% 100% 0);
          }
        }
        .animate-borderLoop {
          animation: borderLoop 3s linear infinite;
        }
        .project-card {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba(0, 0, 255, 0.15);
        }
      `}</style>
    </>
  );
}
