"use client";
import Image from "next/image";
import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Certifications } from "@/data/certificates";

import AOS from "aos";
import AddressSection from "@/components/molecules/AddressSection";
import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/Text";

export default function Certification() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <section
        className="w-full min-h-screen px-6 md:px-28 py-16 "
        id="certification"
      >
        {/* Title */}
        <AddressSection
          titel="Certifications"
          text="Certificates that reflect dedication and growth"
        />

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
                className={`rounded-xl overflow-hidden shadow-lg border ds-border-color ds-bg-alt project-card`}
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
                    <Title className="font-semibold" size="2xl">
                      {Certification.title}
                    </Title>
                  </div>

                  <Text className="mt-1 opacity-70">{Certification.date}</Text>

                  {/* Description */}
                  <div
                    className={`transition-all duration-500 overflow-hidden `}
                  >
                    <Text size="sm" variant="base" className=" leading-relaxed">
                      {Certification.desc}
                    </Text>
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
