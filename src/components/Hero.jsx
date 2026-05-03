import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Code2, Database } from 'lucide-react';
import data from '../data.json';

const Hero = () => {
    // Helper to get icon based on key
    const getSocialIcon = (key) => {
        switch (key) {
            case 'github': return <Github size={20} />;
            case 'linkedin': return <Linkedin size={20} />;
            case 'leetcode': return <Code2 size={20} />; // Using Code2 as placeholder for LeetCode
            case 'geeksforgeeks': return <Database size={20} />; // Using Database as placeholder for GFG
            default: return null;
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-20 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">

                <div className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-blue-600 font-semibold text-lg mb-2">Hello, I'm</h2>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 whitespace-nowrap">
                            {data.personalInfo.name}
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-gray-600 font-medium mb-6">
                            {data.personalInfo.role}
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            {data.personalInfo.bio}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                            <a
                                href="#projects"
                                className="group px-8 py-3 bg-blue-600 text-white rounded-full font-medium transition hover:bg-blue-700 flex items-center justify-center gap-2"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={data.personalInfo.links.resume}
                                className="group px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-medium transition hover:border-gray-400 hover:shadow-sm flex items-center justify-center gap-2"
                                download
                            >
                                Download Resume
                                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                            </a>
                        </div>

                        <div className="flex gap-4 justify-center md:justify-start">
                            {Object.entries(data.personalInfo.links).map(([key, url]) => {
                                if (key === 'email' || key === 'resume' || key === 'coverLetter') return null;
                                return (
                                    <a
                                        key={key}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white text-gray-600 rounded-full shadow-sm hover:text-blue-600 hover:shadow-md transition-all"
                                        title={key.charAt(0).toUpperCase() + key.slice(1)}
                                    >
                                        {getSocialIcon(key)}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    {/* Placeholder for Profile Image or Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 text-6xl">CV</span>
                            {/* <img src="path/to/image.jpg" alt="Chinmayie" className="w-full h-full object-cover" /> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
