import { StaticImageData } from "next/image";

export interface Project {
     id: number;
    title: string;
    subtitle: string;
    img: StaticImageData;
    tech: string[];
    desc: string;
    list?: {
        [key: string]: string;
    };
    demoLink?: string;
    githubLink?: string;
}