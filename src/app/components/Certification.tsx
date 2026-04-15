"use client";
import Image from "next/image";
import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Certifications } from "@/data/certificates";

import AOS from "aos";
import AddressSection from "@/components/molecules/AddressSection";
import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/Text";
import CertificationCard from "@/components/molecules/CertificationCard";

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
          {Certifications.map((Certification) => (
            <CertificationCard key={Certification.id} {...Certification} />
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
