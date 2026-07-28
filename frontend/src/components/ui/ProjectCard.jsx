import React from "react";
import { ExternalLink, Code, TrendingUp } from "lucide-react";

const ProjectCard = ({ project }) => {
    const {
        title,
        description,
        image,
        tech,
        metrics,
        live,
        github,
        category,
    } = project;

    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden pb-2 hover:border-primary/30 transition-all duration-300">

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Buttons */}
                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                            title="Live Demo"
                        >
                            <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                    )}

                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                            title="GitHub"
                        >
                            <Code className="w-4 h-4 text-white" />
                        </a>
                    )}
                </div>

                {/* Category */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#A8FF8D] transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                    {tech?.map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Metrics */}
                {metrics && (
                    <div className="flex items-center mt-4 gap-2 pt-3 border-t border-white/10">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <p className="text-sm font-medium text-green-400">
                            {metrics}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;