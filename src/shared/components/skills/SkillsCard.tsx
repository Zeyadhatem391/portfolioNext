import { BorderBeam } from "@/components/ui/border-beam";
import { SkillCategory } from "@/data/skills";
import SkilsIcon from "./SkilsIcon";

export default function SkillsCard({ category, skills }: SkillCategory) {
  return (
    <div
      className="
        relative overflow-hidden rounded-2xl border-2
        p-6 transition-all duration-300
        ds-border-color ds-bg-alt
        hover:-translate-y-2
        hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]
      "
    >
      <h1 className="mb-2 font-bold ds-text-3xl">{category}</h1>

      <div className="grid grid-cols-3 gap-6 pt-3">
        {skills.map((skill) => (
          <SkilsIcon key={skill.name} url={skill.url} name={skill.name} />
        ))}
      </div>

      <BorderBeam
        duration={10}
        delay={3}
        size={400}
        borderWidth={3}
        className="from-transparent via-blue-500 to-transparent"
      />
    </div>
  );
}
