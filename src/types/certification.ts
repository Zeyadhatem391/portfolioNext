import type { StaticImageData } from "next/image";

export interface Certification {
    id: number;
    title: string;
    date: string;
    img: StaticImageData;
    desc: string;
    demoLink?: string;
}