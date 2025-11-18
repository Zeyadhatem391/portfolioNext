"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface ProjectsProps {
  theme?: "light" | "dark";
}

interface Project {
  title: string;
  img: string;
  tech: string[];
  desc: string;
  demoLink?: string;
  githubLink?: string;
}

export default function Projects({ theme }: ProjectsProps) {
  const bgPrimary = theme === "light" ? "bg-gray-100" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const cardBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-700";

  const projects: Project[] = [
    {
      title: "PopFlix",
      img: "/images/popflix.png",
      tech: ["JavaScript", "Bootstrap", "React", "Laravel", "MySQL"],
      desc: "Movie discovery platform to explore, search, and save favorite films by genres, ratings, and release years.",
      demoLink: "https://popflix-ff5ab.web.app/",
      githubLink: "https://github.com/Zeyadhatem391/Popfilex_Laravel",
    },
    {
      title: "Task Manager",
      img: "/images/task_m.png",
      tech: ["TypeScript", "TailwindCSS", "Next", "Laravel", "MySQL"],
      desc: "Another project built with TypeScript and modern UI/UX patterns.",
      demoLink: "",
      githubLink: "https://github.com/Zeyadhatem391",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section
        className={`w-full min-h-screen px-6 md:px-28 py-16 ${bgPrimary}`}
        id="projects"
      >
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className={`text-5xl font-bold mb-4 ${textColor}`}>Projects</h2>
          <p className={`text-lg opacity-70 ${textColor}`}>
            Building projects that make an impact
          </p>
          <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          {projects.map((project, index) => (
            <div key={index} className="relative w-[90%] md:w-[85%] group">
              {/* Blue animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-blue-600 animate-borderLoop pointer-events-none"></div>

              <div
                className={`rounded-xl overflow-hidden shadow-lg border ${borderColor} ${cardBg} project-card`}
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
                    <h3 className={`text-2xl font-semibold ${textColor}`}>
                      {project.title}
                    </h3>
                    <FiChevronDown
                      className={`text-3xl text-blue-500 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <p className={`mt-1 opacity-70 ${textColor}`}>
                    Web Application
                  </p>

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
                        ? "max-h-40 mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className={`text-sm leading-relaxed ${textColor}`}>
                      {project.desc}
                    </p>
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
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba(0, 0, 255, 0.15);
        }
      `}</style>
    </>
  );
}
