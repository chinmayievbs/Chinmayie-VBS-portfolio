import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';
import data from '../data.json';

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4"><span className="text-gradient drop-shadow-md">Experience</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                        My professional journey and internships.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {data.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="card-3d rounded-2xl p-8 mb-8 flex flex-col md:flex-row gap-6 items-start hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group"
                        >
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.4)] flex-shrink-0 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                <Briefcase size={28} className="text-white" />
                            </div>

                            <div className="flex-1 text-left">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                    <h3 className="text-2xl font-bold text-slate-100 drop-shadow-sm">{exp.role}</h3>
                                </div>
                                <h4 className="text-purple-400 font-semibold text-lg mb-4 tracking-wide">{exp.company}</h4>
                                <p className="text-slate-400 leading-relaxed text-md font-light">
                                    {exp.description}
                                </p>
                                {exp.links && (
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        {exp.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm px-4 py-1.5 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-full hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/50 transition-all duration-300 shadow-sm border border-slate-700/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                                            >
                                                {link.name}
                                                <ExternalLink size={14} className="ml-1.5" />
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
