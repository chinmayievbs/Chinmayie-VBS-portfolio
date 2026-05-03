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
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h2 className="text-purple-400 font-bold text-xl tracking-widest mb-2 uppercase drop-shadow-sm">Hello, I'm</h2>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 whitespace-nowrap tracking-tight">
                            <span className="text-gradient drop-shadow-lg">{data.personalInfo.name}</span>
                        </h1>
                        <h3 className="text-2xl md:text-4xl text-slate-200 font-medium mb-6 drop-shadow-md">
                            {data.personalInfo.role}
                        </h3>
                        <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                            {data.personalInfo.bio}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mb-10">
                            <a
                                href="#projects"
                                className="group px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={data.personalInfo.links.resume}
                                className="group px-8 py-3.5 bg-slate-800/50 backdrop-blur-md text-white border border-slate-700 rounded-full font-semibold transition-all hover:bg-slate-700/50 hover:border-slate-500 hover:shadow-lg flex items-center justify-center gap-2"
                                download
                            >
                                Download Resume
                                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                            </a>
                        </div>

                        <div className="flex gap-5 justify-center md:justify-start">
                            {Object.entries(data.personalInfo.links).map(([key, url]) => {
                                if (key === 'email' || key === 'resume' || key === 'coverLetter') return null;
                                return (
                                    <a
                                        key={key}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3.5 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 text-slate-300 rounded-full hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-500/50 transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="relative float-3d"
                    >
                        {/* Glowing backdrop for image */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        
                        <div className="card-3d w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-700/50 relative shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                            <img 
                                src="/profile.jpg" 
                                alt="Profile" 
                                className="w-full h-full object-cover z-10 transition-transform duration-700 hover:scale-110"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = "https://via.placeholder.com/400x400.png?text=Add+profile.jpg+to+public+folder";
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
