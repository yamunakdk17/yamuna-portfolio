import FadeIn from "../animations/FadeIn";

import {
    FaReact,
    FaNodeJs,
    FaCode,
} from "react-icons/fa";

import {
    SiJavascript,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiMongodb,
    SiDjango,
    SiMysql,
    SiPython,
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
                name: "Python",
                icon: <SiPython className="text-blue-500 text-4xl" />,
            },
            {
                name: "Django",
                icon: <SiDjango className="text-green-500 text-4xl" />,
            },
            {
                name: "REST APIs",
                icon: <FaCode className="text-blue-400 text-4xl" />,
            },
        ],
    },

    {
        title: "Database Skills",
        skills: [
            {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-600 text-4xl" />,
            },
            {
                name: "MySQL",
                icon: <SiMysql className="text-blue-500 text-4xl" />,
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

                {/* Heading */}
                <FadeIn>
                    <div className="text-center mb-16">

                        <h2 className="text-5xl font-bold text-white mb-4">
                            My Skills
                        </h2>

                        <p className="text-white/60 max-w-2xl mx-auto">
                            Technologies I use to build responsive,
                            modern and scalable web applications.
                        </p>

                    </div>
                </FadeIn>

                {/* Skill Categories */}
                <div className="space-y-12">

                    {skillCategories.map((category, index) => (

                        <FadeIn
                            key={category.title}
                            delay={index * 100}
                        >

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                                {/* Category Title */}
                                <h3 className="text-3xl font-semibold text-white mb-8">
                                    {category.title}
                                </h3>

                                {/* Skills */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                                    {category.skills.map((skill) => (

                                        <div
                                            key={skill.name}
                                            className="bg-[#111] border border-white/10 rounded-2xl w-32 h-36 flex flex-col items-center justify-center hover:border-primary hover:-translate-y-2 transition-all duration-300"
                                        >

                                            {/* Icon */}
                                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                                                {skill.icon}
                                            </div>

                                            {/* Skill Name */}
                                            <h4 className="mt-4 text-base text-white font-medium text-center">
                                                {skill.name}
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