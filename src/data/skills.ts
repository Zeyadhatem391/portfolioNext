export interface Skill {
  name: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "React", url: "https://react.dev/" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "Three JS", url: "https://threejs.org/" },
      { name: "Next Intl", url: "https://next-intl.dev/" },
    ],
  },
  {
    category: "UI / Styling",
    skills: [
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
      { name: "Tailwind", url: "https://tailwindcss.com/" },
      { name: "Material UI", url: "https://mui.com/material-ui/" },
      { name: "Shadcn", url: "https://ui.shadcn.com/" },
      { name: "Magic UI", url: "https://magicui.design/" },
      { name: "React Bits", url: "https://reactbits.dev/" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP", url: "https://www.php.net/" },
      { name: "Laravel", url: "https://laravel.com/" },
      { name: "MySQL", url: "https://www.mysql.com/" },
      { name: "MongoDB", url: "https://www.mongodb.com/" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", url: "https://git-scm.com/" },
      { name: "GitHub", url: "https://github.com/" },
      { name: "Figma", url: "https://www.figma.com/" },
      { name: "Firebase", url: "https://firebase.google.com/" },
    ],
  },
  {
    category: "Packages",
    skills: [
      { name: "Zustand", url: "https://zustand-demo.pmnd.rs/" },
      { name: "Zod", url: "https://zod.dev/" },
      { name: "React Hook Form", url: "https://react-hook-form.com/" },
      { name: "Redux Toolkit", url: "https://redux-toolkit.js.org/" },
      { name: "TanStack Query", url: "https://tanstack.com/query/latest" },
      { name: "Next Auth", url: "https://authjs.dev/" },
    ],
  },
];
