"use client";
import { Briefcase } from "@/assets/icons/icons";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { Experience } from "@/types/experiences";
import useReveal from "@/animations/Reveal";

export default function ExperienceCard({ title, date, desc }: Experience) {
  useReveal(".Reveal-Section");
  return (
    <div className="timeline-line Reveal-Section">
      <div className="moving-line" />
      <div
        className={` card w-full p-5 rounded-xl border-2 ds-border-color ds-bg-alt duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]`}
      >
        <div className="flex items-center gap-3 mb-3">
          <Briefcase size={48} className="text-blue-600" />
          <Title size="2xl" className="font-bold">
            {title}
          </Title>
        </div>

        <div className="text-green-400 text-xl font-semibold mb-2">{date}</div>

        <Text size="lg" className="leading-relaxed">
          {desc}
        </Text>
      </div>
    </div>
  );
}
