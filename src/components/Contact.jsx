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
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-blue-600 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                    <div className="md:w-1/2 p-10 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-blue-100 mb-8">
                                I'm open to new opportunities and collaborations. Feel free to reach out!
                            </p>

                            <div className="space-y-4">
                                <a href={`mailto:${data.personalInfo.links.email}`} className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Mail size={20} />
                                    </div>
                                    <span>Send an email</span>
                                </a>
                                <a href={data.personalInfo.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Linkedin size={20} />
                                    </div>
                                    <span>LinkedIn</span>
                                </a>
                                <a href={data.personalInfo.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Github size={20} />
                                    </div>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm text-blue-200">
                                © {new Date().getFullYear()} {data.personalInfo.name}
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2 bg-gray-50 p-10">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            {status.error && (
                                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                                    <AlertCircle size={16} />
                                    {status.error}
                                </div>
                            )}

                            {status.submitted ? (
                                <div className="flex items-center justify-center gap-2 text-green-600 font-medium bg-green-50 p-3 rounded-lg">
                                    <CheckCircle size={20} />
                                    Message Sent Successfully!
                                </div>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={status.submitting}
                                    className={`w-full font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${status.submitting
                                            ? 'bg-gray-400 cursor-not-allowed text-white'
                                            : 'bg-gray-900 text-white hover:bg-black'
                                        }`}
                                >
                                    {status.submitting ? 'Sending...' : 'Send Message'}
                                    {!status.submitting && <Send size={18} />}
                                </button>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
