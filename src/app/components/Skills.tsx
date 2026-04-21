import AddressSection from "@/components/molecules/AddressSection";
import { skillsData } from "@/data/skills";
import SkillsCard from "@/components/molecules/SkillsCard";

export default function Skills() {
  return (
    <section className="w-full min-h-screen px-6 md:px-28 py-16 " id="skills">
      <AddressSection titel="Skills" text="Technologies I master every day" />

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {skillsData.map((category, index) => (
          <SkillsCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
}
