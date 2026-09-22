"use client";
import { FaExternalLinkAlt } from "@/assets/icons/icons";
import useReveal from "@/animations/Reveal";
import { Certification } from "@/data/certificates";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";

export default function CertificationCard({
  title,
  img,
  demoLink,
  date,
  desc,
}: Certification) {
  useReveal(".Reveal-Section");
  return (
    <div className="relative w-[90%] group Reveal-Section overflow-hidden">

      <div
        className={`rounded-xl overflow-hidden shadow-lg border ds-border-color ds-bg-alt`}
      >
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <a
            href={demoLink}
            className="absolute z-40 top-4 right-4 p-3 rounded-full text-white bg-black/60 hover:bg-blue-600/50"
            target="_blank"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>

        <div className="p-6 relative">
          <div className="flex items-center justify-between cursor-pointer">
            <h1 className="font-semibold ds-text-2xl">{title}</h1>
          </div>

          <div className="mt-1 text-green-400">{date}</div>

          <div className={`transition-all duration-500 overflow-hidden `}>
            <p className="ds-text-sm">{desc}</p>
          </div>
        </div>
         <BorderBeam
        duration={10}
        size={400}
        borderWidth={3}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={10}
        delay={3}
        size={400}
        borderWidth={4}
        className="from-transparent via-blue-500 to-transparent"
      />
      </div>
    </div>
  );
}
