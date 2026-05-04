import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import data from '../data.json';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-6 relative inline-block">
                        Certifications
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Professional certifications and achievements that validate my technical expertise.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {data.certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="block group card-3d p-8 rounded-3xl transition-all duration-500 hover:border-blue-500/30 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Award size={80} />
                            </div>

                            <div className="flex items-start justify-between mb-8">
                                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                                    <Award size={32} />
                                </div>
                                <div className="p-2 rounded-full bg-white/5 text-slate-400 group-hover:text-blue-400 transition-colors">
                                    <ExternalLink size={20} />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                                {cert.title}
                            </h3>
                            <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">
                                {cert.issuer}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
