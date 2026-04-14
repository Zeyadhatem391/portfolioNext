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
  SiZod,
  SiReactquery,
  SiRedux,
  SiReacthookform,
} from "react-icons/si";

import { useEffect } from "react";
import AOS from "aos";
import { FaGlobe, FaShieldAlt } from "react-icons/fa";
import AddressSection from "@/components/molecules/AddressSection";
import Title from "@/components/atoms/Title";



export default function Skills() {
  

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease",
    });
  }, []);

  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { icon: <SiNextdotjs size={40} color="#000000" />, name: "Next.js" },
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
    {
      category: "Packages",
      skills: [
        { icon: <SiZod size={40} color="#7C3AED" />, name: "Zod" },
        {
          icon: <SiReacthookform size={40} color="#EC5990" />,
          name: "React Hook Form",
        },
        { icon: <SiRedux size={40} color="#764ABC" />, name: "Redux Toolkit" },
        {
          icon: <SiReactquery size={40} color="#FF4154" />,
          name: "TanStack Query",
        },
        { icon: <FaShieldAlt size={40} color="#6366F1" />, name: "Next Auth" },
        { icon: <FaGlobe size={40} color="#10B981" />, name: "Next Intl" },
      ],
    },
  ];

  return (
    <section className="w-full min-h-screen px-6 md:px-28 py-16 " id="skills">
      <AddressSection titel="Skills" text="Technologies I master every day" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="fade-up">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className={`relative p-6 rounded-2xl border-2 ds-border-color ds-bg-alt overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]`}
           
          >
            <span className="absolute inset-0 border-2 border-blue-500 rounded-2xl animate-borderLoop pointer-events-none"></span>
            <Title size="3xl" className="font-bold mb-2">{category.category}</Title>
            <div className="grid grid-cols-3 gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  {/* Tooltip */}
                  <span
                    className={`
                      absolute -top-10 px-3 py-1 text-sm rounded-md
                      bg-black text-white whitespace-nowrap
                      opacity-0 translate-y-2
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300
                      pointer-events-none
                    `}
                  >
                    {skill.name}
                  </span>

                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

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
