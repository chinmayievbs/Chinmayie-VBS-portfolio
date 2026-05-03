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

                <div className="max-w-5xl mx-auto space-y-12">
                    {Object.entries(data.skills).map(([category, skills], categoryIndex) => (
                        <div key={categoryIndex}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-xl font-bold text-gray-700 mb-6 border-l-4 border-blue-600 pl-4"
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
                                        className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 text-gray-700 font-medium hover:text-blue-600 hover:border-blue-100 transition-all cursor-default"
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
