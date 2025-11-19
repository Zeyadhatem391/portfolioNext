import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiTypescript,
  SiJavascript,
  SiBootstrap,
  SiThreedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFirebase,
  SiFigma,
} from "react-icons/si";

interface SkillsProps {
  theme?: "light" | "dark";
}

export default function Skills({ theme }: SkillsProps) {
  const bgPrimary = theme === "light" ? "bg-gray-100" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const cardBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-700";

  // Skills categorized
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { icon: <SiNextdotjs size={40} color="#61DAFB" />, name: "Next.js" },
        { icon: <SiReact size={40} color="#61DAFB" />, name: "React" },
        { icon: <SiTailwindcss size={40} color="#38BDF8" />, name: "Tailwind" },
        { icon: <SiMui size={40} color="#007FFF" />, name: "Material UI" },
        {
          icon: <SiTypescript size={40} color="#3178C6" />,
          name: "TypeScript",
        },
        {
          icon: <SiJavascript size={40} color="#F7DF1E" />,
          name: "JavaScript",
        },
        { icon: <SiBootstrap size={40} color="#7952B3" />, name: "Bootstrap" },
        { icon: <SiThreedotjs size={40} color="#000000" />, name: "Three JS" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { icon: <SiPhp size={40} color="#777BB4" />, name: "PHP" },
        { icon: <SiLaravel size={40} color="#FF2D20" />, name: "Laravel" },
        { icon: <SiMysql size={40} color="#4479A1" />, name: "MySQL" },
        { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB" },
      ],
    },
    {
      category: "Tools / Others",
      skills: [
        { icon: <SiGit size={40} color="#F05032" />, name: "Git" },
        { icon: <SiGithub size={40} color="#181717" />, name: "GitHub" },
        { icon: <SiFirebase size={40} color="#FFCA28" />, name: "Firebase" },
        { icon: <SiFigma size={40} color="#F24E1E" />, name: "Figma" },
      ],
    },
  ];

  return (
    <section
      className={`w-full min-h-screen px-6 md:px-28 py-16 ${bgPrimary}`}
      id="skills"
    >
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className={`text-5xl font-bold mb-4 ${textColor}`}>Skills</h2>
        <p className={`text-lg opacity-70 ${textColor}`}>
          Technologies I master every day
        </p>
        <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className={`
              relative p-6 rounded-2xl border-2 ${borderColor} ${cardBg} overflow-hidden
              group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]
            `}
          >
            {/* Border Animation Loop */}
            <span className="absolute inset-0 border-2 border-blue-500 rounded-2xl animate-borderLoop pointer-events-none"></span>

            {/* Category Title */}
            <h3 className={`text-3xl font-bold mb-5 ${textColor}`}>
              {category.category}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Border Animation Keyframes */}
      <style>
        {`
          @keyframes borderLoop {
            0% { clip-path: inset(0 100% 100% 0); }
            25% { clip-path: inset(0 0 100% 0); }
            50% { clip-path: inset(0 0 0 0); }
            75% { clip-path: inset(100% 0 0 0); }
            100% { clip-path: inset(0 100% 100% 0); }
          }
          .animate-borderLoop {
            animation: borderLoop 3s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
