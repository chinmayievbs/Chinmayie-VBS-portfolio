import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen } from 'lucide-react';
import data from '../data.json';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
                            About Me
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full"></div>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            {data.personalInfo.bio}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Stats & Current Learnings */}
                        <div className="bg-blue-50 p-8 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <BookOpen className="text-blue-600" />
                                <h3 className="text-xl font-bold text-gray-800">Currently Learning</h3>
                            </div>
                            <ul className="space-y-3">
                                {data.personalInfo.learning.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-700">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Fun Fact */}
                        <div className="bg-purple-50 p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden">
                            <Sparkles className="absolute top-4 right-4 text-purple-200" size={48} />
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="text-2xl">⚡</span> Fun Fact
                            </h3>
                            <p className="text-gray-700 italic relative z-10">
                                "{data.personalInfo.funFact}"
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-center">
                        <div className="px-8 py-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                            <h3 className="text-blue-600 font-bold text-3xl mb-1">{data.projects.length}+</h3>
                            <p className="text-gray-500 font-medium text-sm">Projects</p>
                        </div>
                        <div className="px-8 py-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                            <h3 className="text-purple-600 font-bold text-3xl mb-1">{data.certifications.length}+</h3>
                            <p className="text-gray-500 font-medium text-sm">Certifications</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
