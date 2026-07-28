import FadeIn from "../animations/FadeIn";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaCode,
    

} from "react-icons/fa";

import {
    SiJavascript,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiMongodb,
    SiPostman,
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend Skills",
        skills: [
            {
                name: "React",
                icon: <FaReact className="text-sky-400 text-4xl" />,
            },
            {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-400 text-4xl" />,
            },
            {
                name: "HTML5",
                icon: <SiHtml5 className="text-orange-500 text-4xl" />,
            },
            {
                name: "CSS3",
                icon: <SiCss className="text-blue-500 text-4xl" />,
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
            },
        ],
    },

    {
        title: "Backend Skills",
        skills: [
            {
                name: "Node.js",
                icon: <FaNodeJs className="text-green-500 text-4xl" />,
            },
            {
                name: "Express.js",
                icon: (
                    <img
                        src="/express.png"
                        alt="Express.js"
                        className="w-12 h-12 object-contain"
                    />
                ),
            },
            {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-600 text-4xl" />,
            },
            {
                name: "REST APIs",
                icon: <FaCode className="text-blue-400 text-4xl" />,
            },
        ],
    },

    {
        title: "Tools",
        skills: [
            {
                name: "Git",
                icon: <FaGitAlt className="text-orange-500 text-4xl" />,
            },
            {
                name: "Postman",
                icon: <SiPostman className="text-orange-400 text-4xl" />,
            },
           
            
            {
                name: "MongoDB Compass",
                icon: <SiMongodb className="text-green-600 text-4xl" />,
            },

           
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative py-24 bg-black overflow-hidden"
        >
            {/* Background */}
            <div className="absolute top-20 left-0 w-80 h-80 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/10 blur-3xl rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                <FadeIn>
                    <div className="text-center mb-16">

                        <h2 className="text-5xl font-bold text-white mb-4">
                            My Skills
                        </h2>

                        <p className="text-white/60 max-w-2xl mx-auto">
                            Technologies and tools I use to build responsive,
                            modern and scalable web applications.
                        </p>

                    </div>
                </FadeIn>

                <div className="space-y-12">

                    {skillCategories.map((category, index) => (

                        <FadeIn key={index} delay={index * 100}>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                                <h3 className="text-3xl font-semibold text-white mb-8">
                                    {category.title}
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                                    {category.skills.map((skill) => (

                                        <div
                                            key={skill.name}
                                            className="bg-[#111] border border-white/10 rounded-2xl  w-32 h-36 flex flex-col items-center justify-center hover:border-primary hover:-translate-y-2 transition-all duration-300"                                        >

                                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">                                                {skill.icon}
                                            </div>

                                            <h4 className="mt-4 text-base text-white font-medium text-center">                                                {skill.name}
                                            </h4>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </FadeIn>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;