import { Project } from "@/types/projects"
import Popflix from "@/assets/images/popflix.webp"
import Task from "@/assets/images/task_m.webp"
import Portfolio from "@/assets/images/old-portfolio.jpg"
import Faster from "@/assets/images/faster.webp"
import Grocery from "@/assets/images/egrocery.jpg"



export const projects: Project[] = [
    {
        id: 1,
        title: "PopFlix",
        subtitle: "Movies website",
        img: Popflix,
        tech: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React Query",
            "NextAuth",
            "Shadcn UI",
        ],

        desc: "A modern movie platform to explore films and actors with detailed information, search, filtering, and personalized features.",

        list: {
            1: "Browse trending and upcoming movies",
            2: "View movie details (cast, ratings, trailers)",
            3: "Actor pages with full filmography",
            4: "Search for movies and actors",
            5: "Authentication and favorites system",
            6: "Responsive UI with Tailwind CSS and Shadcn UI",
        },
        demoLink: "https://popflix-tau.vercel.app/",
        githubLink: "https://github.com/Zeyadhatem391/Popflix_Next",
    },
    {
        id: 2,
        title: "Grocery",
        subtitle: "Grocery E-commerce Website",
        img: Grocery,

        tech: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React Query",
            "NextAuth",
            "Stripe",
            "REST API",
        ],

        desc: "A modern grocery e-commerce platform for browsing and purchasing fresh vegetables and daily essentials with a seamless shopping and checkout experience.",

        list: {
            1: "Browse products by categories (Vegetables, Fruits, Dairy, etc.)",
            2: "Shopping cart with real-time updates",
            3: "Secure checkout process with shipping and payment integration",
            4: "Order tracking system with status updates",
        },

        demoLink: "https://grocere.netlify.app/",
        githubLink: "https://github.com/Abdulrahmanfawzy/grocery-next",
    },
    {
        id: 3,
        title: "Task Manager",
        subtitle: "Web Application",
        img: Task,
        tech: ["TypeScript", "TailwindCSS", "Next.js", "Laravel", "MySQL"],
        desc: "Another project built with TypeScript and modern UI/UX patterns.",
        demoLink: "https://task-manager-eight-gray.vercel.app/",
        githubLink: "https://github.com/Zeyadhatem391/task_manager",
    },
    {
        id: 4,
        title: "Portfolio",
        subtitle: "Old Portfolio",
        img: Portfolio,
        tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
        desc: "Responsive web application built with HTML, CSS, Bootstrap, JavaScript, and React.js, showcasing interactive UI components and modern frontend development skills.",
        demoLink: "https://portfolio-88fc5.web.app/",
        githubLink: "https://github.com/Zeyadhatem391/portfolio_old",
    },
    {
        id: 5,
        title: "Faster",
        subtitle: "NTI Task",
        img: Faster,
        tech: ["HTML", "CSS", "Bootstrap", "Responsive"],
        desc: "A responsive frontend web project developed as part of the NTI Full Stack Web Development training.The project was built using HTML, CSS, and Bootstrap, focusing on clean UI design, responsive layouts, and proper code structure.",
        demoLink: "https://zeyadhatem391.github.io/NTI_Faster/",
        githubLink: "https://github.com/Zeyadhatem391/NTI_Faster",
    },
];