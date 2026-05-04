import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import data from '../data.json';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "d032c6bf-d5ef-4802-a47c-586fbc71cb6f",
                    ...formData
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus({ submitting: false, submitted: true, error: null });
                setFormData({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
            } else {
                setStatus({ submitting: false, submitted: false, error: result.message || "Something went wrong!" });
            }
        } catch (error) {
            setStatus({ submitting: false, submitted: false, error: "Failed to send message. Please try again later." });
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6 relative inline-block">
                            Get In Touch
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
                        </p>
                    </div>

                    <div className="card-3d rounded-[2rem] overflow-hidden flex flex-col md:flex-row border border-white/10">
                        {/* Contact Info Sidebar */}
                        <div className="md:w-5/12 p-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-2xl flex flex-col justify-between border-r border-white/5">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                                
                                <div className="space-y-8">
                                    <motion.a 
                                        whileHover={{ x: 10 }}
                                        href={`mailto:${data.personalInfo.links.email}`} 
                                        className="flex items-center gap-5 group"
                                    >
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Email Me</p>
                                            <p className="text-slate-200 font-medium group-hover:text-purple-400 transition-colors">{data.personalInfo.links.email}</p>
                                        </div>
                                    </motion.a>

                                    <motion.a 
                                        whileHover={{ x: 10 }}
                                        href={data.personalInfo.links.linkedin} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="flex items-center gap-5 group"
                                    >
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                            <Linkedin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">LinkedIn</p>
                                            <p className="text-slate-200 font-medium group-hover:text-blue-400 transition-colors">Chinmayie V B S</p>
                                        </div>
                                    </motion.a>

                                    <motion.a 
                                        whileHover={{ x: 10 }}
                                        href={data.personalInfo.links.github} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="flex items-center gap-5 group"
                                    >
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                            <Github size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">GitHub</p>
                                            <p className="text-slate-200 font-medium group-hover:text-white transition-colors">Chinnima28</p>
                                        </div>
                                    </motion.a>
                                </div>
                            </div>

                            <div className="mt-12 pt-12 border-t border-white/5">
                                <p className="text-slate-500 text-sm italic">
                                    "Code is like humor. When you have to explain it, it’s bad."
                                </p>
                                <p className="text-slate-400 text-sm font-bold mt-4">
                                    © {new Date().getFullYear()} {data.personalInfo.name}
                                </p>
                            </div>
                        </div>

                        {/* Form Area */}
                        <div className="md:w-7/12 p-10 bg-white/5">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-slate-600"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-slate-600"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-slate-600 resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                {status.error && (
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex items-center gap-3 text-red-400 text-sm bg-red-400/10 p-4 rounded-2xl border border-red-400/20"
                                    >
                                        <AlertCircle size={18} />
                                        {status.error}
                                    </motion.div>
                                )}

                                {status.submitted ? (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex items-center justify-center gap-3 text-emerald-400 font-bold bg-emerald-400/10 p-5 rounded-2xl border border-emerald-400/20"
                                    >
                                        <CheckCircle size={24} />
                                        Message Sent Successfully!
                                    </motion.div>
                                ) : (
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={status.submitting}
                                        className={`w-full font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl ${status.submitting
                                                ? 'bg-slate-700 cursor-not-allowed text-slate-400'
                                                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-purple-500/20'
                                            }`}
                                    >
                                        {status.submitting ? 'Sending...' : 'Send Message'}
                                        {!status.submitting && <Send size={20} />}
                                    </motion.button>
                                )}
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
