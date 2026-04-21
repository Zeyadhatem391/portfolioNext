import Title from "../atoms/Title";
import { SkillCategory } from "@/types/skills";

export default function SkillsCard({ category, skills }: SkillCategory) {
  return (
    <div
      className={`relative p-6 rounded-2xl border-2 ds-border-color ds-bg-alt overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]`}
    >
      <span className="absolute inset-0 border-2 border-blue-500 rounded-2xl animate-borderLoop pointer-events-none"></span>
      <Title size="3xl" className="font-bold mb-2">
        {category}
      </Title>
      <div className="grid grid-cols-3 gap-6">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="relative flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110"
            >
              {/* Tooltip */}
              <span
                className="
          absolute -top-10 px-3 py-1 text-sm rounded-md
          bg-black text-white whitespace-nowrap
          opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300
          pointer-events-none
        "
              >
                {skill.name}
              </span>

              <Icon size={40} color={skill.color} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
