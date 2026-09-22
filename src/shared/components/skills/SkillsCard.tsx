import { BorderBeam } from "@/components/ui/border-beam";
import { SkillCategory } from "@/data/skills";


export default function SkillsCard({ category, skills }: SkillCategory) {
  
  return (
    <div
      className={`relative p-6 rounded-2xl border-2 ds-border-color ds-bg-alt overflow-hidden  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]`}
    >
      <h1 className="font-bold mb-2 ds-text-3xl">{category}</h1>

      <div className="grid grid-cols-3 gap-6 pt-3">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="relative flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <span
                className="
                      pointer-events-none absolute -top-10 left-1/2 z-20
                      -translate-x-1/2 translate-y-2
                      whitespace-nowrap rounded-md
                      bg-gray-900 px-2.5 py-1
                      text-xs font-medium text-white
                      opacity-0 shadow-lg
                      transition-all duration-200
                      group-hover:translate-y-0 group-hover:opacity-100
                      dark:bg-white dark:text-gray-900
                    "
              >
                {skill.name}
              </span>

              <div className="flex cursor-pointer items-center justify-center transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-110 ">
                <Icon size={30} color={skill.color} />
              </div>
            </div>
          );
        })}
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
