import type { StaticImageData } from "next/image";

export interface Certification {
    title: string;
    date: string;
    img: StaticImageData;
    desc: string;
    demoLink?: string;
}