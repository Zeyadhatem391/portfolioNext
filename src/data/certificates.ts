import { Certification } from "@/types/certification"

import Huma from "@/assets/images/huma.webp"
import Nti from "@/assets/images/nti.webp"
import Dtm from "@/assets/images/dtm.webp"




export const Certifications: Certification[] = [
    {
        title: "Huma Volve",
        date: "19/2/2026 - 5/12/2025",
        img: Huma,
        desc: "Practical training on real projects and simulations of the work environment and teamwork.",
        demoLink:
            "https://drive.google.com/drive/folders/1d_m0wAhjN1ZMxexNxSmh2bfrS-efKBLK",
    },
    {
        title: "NTI",
        date: "31/8/2025 - 25/9/2025",
        img: Nti,
        desc: "Full Stack Web Development training with hands-on experience.",
        demoLink:
            "https://drive.google.com/drive/folders/1uRaLfSiZY_RVPGxgPCZ-cVCXTyij2bU4?usp=sharing",
    },
    {
        title: "Intern training",
        date: "06/8/2024 - 24/11/2024",
        img: Dtm,
        desc: "Hands-on experience in modern full stack web development.",
        demoLink:
            "https://drive.google.com/drive/folders/1-VVPHAivFw_JouhUB4CczJkgDyxCI5Yx?usp=sharing",
    },
];