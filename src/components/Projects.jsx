import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import data from '../data.json';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 float-3d animate-blob"></div>
            <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 float-3d animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4"><span className="text-gradient">Featured Projects</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        A selection of projects that showcase my experience and technical capabilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {data.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group card-3d rounded-2xl overflow-hidden flex flex-col h-full"
                        >
                            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                <Code size={48} className="text-white opacity-50 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 flex-grow relative z-10 text-md">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50/80 text-blue-600 border border-blue-100 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-gray-100/50 mt-auto">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                                    >
                                        <Github size={18} />
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
