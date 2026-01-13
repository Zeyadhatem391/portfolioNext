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
  date: string;
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
      title: "NTI",
      date: "31/8/25 - 25/9/25",
      img: "/images/nti.jpeg",
      desc: "Full Stack Web Development training with hands-on experience.",
      demoLink:
        "https://drive.google.com/drive/folders/1uRaLfSiZY_RVPGxgPCZ-cVCXTyij2bU4?usp=sharing",
    },
    {
      title: "Intern training",
      date: "06/8/24 - 24/11/24",
      img: "/images/dtm.jpeg",
      desc: "Hands-on experience in modern full stack web development.",
      demoLink:
        "https://drive.google.com/drive/folders/1-VVPHAivFw_JouhUB4CczJkgDyxCI5Yx?usp=sharing",
    },
  ];

  return (
    <>
      <section
        className={`w-full min-h-screen px-6 md:px-28 py-16 ${bgPrimary}`}
        id="certification"
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

        {/* Certification Grid */}
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
                    target="_blank"
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
                    {Certification.date}
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
