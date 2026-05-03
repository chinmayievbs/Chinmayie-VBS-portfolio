import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import data from '../data.json';

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4"><span className="text-gradient drop-shadow-md">Featured Projects</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
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
                            className="group card-3d rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                        >
                            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative flex items-center justify-center overflow-hidden border-b border-slate-700/50">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/40 group-hover:to-purple-600/40 transition-colors duration-500"></div>
                                <Code size={48} className="text-purple-400 opacity-60 group-hover:scale-110 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-500 group-hover:rotate-12" />
                            </div>

                            <div className="p-8 flex flex-col flex-grow bg-slate-900/40 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 drop-shadow-sm">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-6 flex-grow relative z-10 text-md font-light leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 group-hover:border-purple-500/30 transition-colors shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-5 border-t border-slate-700/50 mt-auto">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-purple-400 transition-colors"
                                    >
                                        <Github size={18} />
                                        View Source Code
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
