import { Certification } from "@/types/certification"
import { Huma, Nti, Dtm, Zikola } from "@/assets/images/images";

export const Certifications: Certification[] = [
    {
        id: 1,
        title: "Intern training",
        date: "06/8/2024 - 24/11/2024",
        img: Dtm,
        desc: "Hands-on experience in modern full stack web development.",
        demoLink:
            "https://drive.google.com/drive/folders/1-VVPHAivFw_JouhUB4CczJkgDyxCI5Yx?usp=sharing",
    },
    {
        id: 2,
        title: "NTI",
        date: "31/8/2025 - 25/9/2025",
        img: Nti,
        desc: "Full Stack Web Development training with hands-on experience.",
        demoLink:
            "https://drive.google.com/drive/folders/1uRaLfSiZY_RVPGxgPCZ-cVCXTyij2bU4?usp=sharing",
    },
    {
        id: 3,
        title: "Huma Volve",
        date: "19/2/2026 - 5/12/2025",
        img: Huma,
        desc: "Practical training on real projects and simulations of the work environment and teamwork.",
        demoLink:
            "https://drive.google.com/drive/folders/1d_m0wAhjN1ZMxexNxSmh2bfrS-efKBLK",
    },

    {
        id: 4,
        title: "Zikola",
        date: "13/8/2026 - 6/5/2026",
        img: Zikola,
        desc: "Hands-on experience in advanced Frontend Development, focusing on modern technologies and real-world development practices.",
        demoLink:
            "https://drive.google.com/drive/folders/13MQh6LNICLI86BN_hzhuYJuNynVmrryd",
    },
];