import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import data from '../data.json';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-3d animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-3d animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4"><span className="text-gradient">Experience</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
                            className="card-3d rounded-2xl p-8 mb-8 flex flex-col md:flex-row gap-6 items-start"
                        >
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl shadow-lg flex-shrink-0 flex items-center justify-center transform transition-transform hover:scale-110 hover:rotate-6">
                                <Briefcase size={28} className="text-white" />
                            </div>

                            <div className="flex-1 text-left">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                    <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                                </div>
                                <h4 className="text-blue-600 font-semibold text-lg mb-4">{exp.company}</h4>
                                <p className="text-gray-600 leading-relaxed text-md">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
