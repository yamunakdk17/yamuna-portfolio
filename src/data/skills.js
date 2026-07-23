import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaCode,
    FaServer,
} from "react-icons/fa";

import {
    SiJavascript,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostman,
} from "react-icons/si";


export const skillCategories = [
    {
        title: "Frontend Skills",
        skills: [
            {
                name: "React",
                icon: FaReact,
                color: "text-sky-400",
            },
            {
                name: "JavaScript",
                icon: SiJavascript,
                color: "text-yellow-400",
            },
            {
                name: "HTML5",
                icon: SiHtml5,
                color: "text-orange-500",
            },
            {
                name: "CSS3",
                icon: SiCss,
                color: "text-blue-500",
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                color: "text-cyan-400",
            },
        ],
    },


    {
        title: "Backend Skills",
        skills: [
            {
                name: "Node.js",
                icon: FaNodeJs,
                color: "text-green-500",
            },
            {
                name: "Express.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                image: true,
                color: "text-white",
            },
            {
                name: "MongoDB",
                icon: SiMongodb,
                color: "text-green-600",
            },
            {
                name: "REST APIs",
                icon: FaCode,
                color: "text-blue-400",
            },
        ],
    },


    {
        title: "Tools",
        skills: [
            {
                name: "Git",
                icon: FaGitAlt,
                color: "text-orange-500",
            },
            {
                name: "Postman",
                icon: SiPostman,
                color: "text-orange-400",
            },
            {
                name: "MongoDB Compass",
                icon: SiMongodb,
                color: "text-green-600",
            },
        ],
    },
];