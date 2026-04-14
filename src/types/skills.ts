import { IconType } from "react-icons";

export interface Skill {
  icon: IconType;
  name: string;
  color: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}