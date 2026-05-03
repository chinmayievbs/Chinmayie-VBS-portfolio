import React from 'react';
import { motion } from 'framer-motion';
import data from '../data.json';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Skills</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Here are the technologies and tools I work with.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                    {/* Background decoration */}
                    <div className="absolute top-1/2 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-3d animate-blob hidden md:block"></div>
                    <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-3d animate-blob animation-delay-4000 hidden md:block"></div>

                    {Object.entries(data.skills).map(([category, skills], categoryIndex) => (
                        <div key={categoryIndex} className="card-3d p-8 rounded-2xl">
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4"
                            >
                                {category}
                            </motion.h3>
                            <div className="flex flex-wrap gap-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-6 py-3 bg-white/50 backdrop-blur-md rounded-xl shadow-sm border border-white/60 text-gray-700 font-semibold hover:text-blue-600 hover:scale-105 hover:shadow-lg transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
