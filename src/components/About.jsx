import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen } from 'lucide-react';
import data from '../data.json';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6 relative inline-block">
                            About Me
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            {data.personalInfo.bio}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Stats & Current Learnings */}
                        <div className="card-3d p-8 rounded-3xl group hover:border-purple-500/30 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform">
                                    <BookOpen size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Currently Learning</h3>
                            </div>
                            <ul className="space-y-4">
                                {data.personalInfo.learning.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-300 group/item">
                                        <span className="mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform"></span>
                                        <span className="group-hover/item:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Fun Fact */}
                        <div className="card-3d p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden group hover:border-pink-500/30 transition-all duration-500">
                            <Sparkles className="absolute -top-4 -right-4 text-pink-500/10 group-hover:text-pink-500/20 transition-colors" size={120} />
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-3xl">⚡</span> Fun Fact
                            </h3>
                            <p className="text-xl text-slate-300 italic relative z-10 leading-relaxed">
                                "{data.personalInfo.funFact}"
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <div className="px-10 py-6 card-3d rounded-2xl group hover:border-blue-500/30 transition-all">
                            <h3 className="text-blue-400 font-bold text-4xl mb-2 group-hover:scale-110 transition-transform">{data.projects.length}+</h3>
                            <p className="text-slate-400 font-medium text-sm uppercase tracking-widest">Projects</p>
                        </div>
                        <div className="px-10 py-6 card-3d rounded-2xl group hover:border-purple-500/30 transition-all">
                            <h3 className="text-purple-400 font-bold text-4xl mb-2 group-hover:scale-110 transition-transform">{data.certifications.length}+</h3>
                            <p className="text-slate-400 font-medium text-sm uppercase tracking-widest">Certifications</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
