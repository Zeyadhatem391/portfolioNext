"use client";
import Image from "next/image";
import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

interface CertificationProps {
  theme?: "light" | "dark";
}

interface Certification {
  title: string;
  subtitle: string;
  img: string;
  desc: string;
  demoLink?: string;
}

export default function Certification({ theme }: CertificationProps) {
  const bgPrimary = theme === "light" ? "bg-gray-100" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const cardBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-700";
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease",
    });
  }, []);
  const Certifications: Certification[] = [
    {
      title: "PopFlix",
      subtitle: "Movies website",
      img: "/images/popflix.webp",
      desc: "A full-featured movie discovery platform that allows users to explore.",
      demoLink: "",
    },
    {
      title: "Task Manager",
      subtitle: "Web Application",
      img: "/images/task_m.webp",
      desc: "Another project built with TypeScript and modern UI/UX patterns.",
      demoLink: "",
    },
    {
      title: "Portfolio",
      subtitle: "Old Portfolio",
      img: "/images/old-portfolio.jpg",
      desc: "Responsive web application built with HTML, CSS, Bootstrap, JavaScript",
      demoLink: "",
    },
    {
      title: "Faster",
      subtitle: "NTI Task",
      img: "/images/faster.webp",
      desc: "A responsive frontend web project developed as part of the NTI Full Stack Web Development .",
      demoLink: "",
    },
  ];

  return (
    <>
      <section
        className={`w-full min-h-screen px-6 md:px-28 py-16 ${bgPrimary}`}
        id="projects"
      >
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className={`text-5xl font-bold mb-4 ${textColor}`}>
            Certifications
          </h2>
          <p className={`text-lg opacity-70 ${textColor}`}>
            Certificates that reflect dedication and growth
          </p>
          <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
          {Certifications.map((Certification, index) => (
            <div
              key={index}
              className="relative w-[90%] md:w-[85%] group"
              data-aos="fade-up"
            >
              {/* Blue animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-blue-600 animate-borderLoop pointer-events-none"></div>

              <div
                className={`rounded-xl overflow-hidden shadow-lg border ${borderColor} ${cardBg} project-card`}
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={Certification.img}
                    alt={Certification.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* <div className="relative z-40 "> */}
                  <a
                    href={Certification.demoLink}
                    className="absolute z-50 top-4 right-4 p-3 rounded-full text-white bg-black/60 hover:bg-blue-600/50"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-6 relative">
                  {/* Title + Arrow */}
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className={`text-2xl font-semibold ${textColor}`}>
                      {Certification.title}
                    </h3>
                  </div>

                  <p className={`mt-1 opacity-70 ${textColor}`}>
                    {Certification.subtitle}
                  </p>

                  {/* Description */}
                  <div
                    className={`transition-all duration-500 overflow-hidden `}
                  >
                    <p className={`text-sm leading-relaxed ${textColor}`}>
                      {Certification.desc}
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
