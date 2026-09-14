import {

    User,
    Mail,
    Award,
    Code2,
    FolderGit2,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaLinkedinIn,
    FaGithub,
} from "@/assets/icons/icons";

export const Menu = {
    Sections: [
        {
            id: "about",
            name: "About",
            icon: User,
        },
        {
            id: "skills",
            name: "Skills",
            icon: Code2,
        },
        {
            id: "certification",
            name: "Certifications",
            icon: Award,
        },
        {
            id: "projects",
            name: "Projects",
            icon: FolderGit2,
        },
        {
            id: "contact",
            name: "Contact",
            icon: Mail,
        },
    ],

    "Social Links": [
        {
            name: "Facebook",
            icon: FaFacebookF,
            link: "https://www.facebook.com/share/19wmyZPHU6/?mibextid=wwXIfr",
            bg: "#1877F2",
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            link: "https://www.instagram.com/zeyad_hatme",
            bg: "#E1306C",
        },
        {
            name: "WhatsApp",
            icon: FaWhatsapp,
            link: "https://wa.me/+201112079745",
            bg: "#25D366",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedinIn,
            link: "https://www.linkedin.com/in/zeyad-hatem-b95034340",
            bg: "#0A66C2",
        },
        {
            name: "GitHub",
            icon: FaGithub,
            link: "https://github.com/Zeyadhatem391",
            bg: "#181717",
        },
    ],
};
