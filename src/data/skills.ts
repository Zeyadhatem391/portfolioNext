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
  FaShieldAlt,
  FaGlobe,
} from "@/assets/icons/icons";


import { SkillCategory } from "@/types/skills"


export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
      { icon: SiMui, name: "Material UI", color: "#007FFF" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      { icon: SiThreedotjs, name: "Three JS", color: "#000000" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { icon: SiPhp, name: "PHP", color: "#777BB4" },
      { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    ],
  },
  {
    category: "Tools / Others",
    skills: [
      { icon: SiGit, name: "Git", color: "#F05032" },
      { icon: SiGithub, name: "GitHub", color: "#181717" },
      { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
      { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    ],
  },
  {
    category: "Packages",
    skills: [
      { icon: SiZod, name: "Zod", color: "#7C3AED" },
      { icon: SiReacthookform, name: "React Hook Form", color: "#EC5990" },
      { icon: SiRedux, name: "Redux Toolkit", color: "#764ABC" },
      { icon: SiReactquery, name: "TanStack Query", color: "#FF4154" },
      { icon: FaShieldAlt, name: "Next Auth", color: "#6366F1" },
      { icon: FaGlobe, name: "Next Intl", color: "#10B981" },
    ],
  },
];