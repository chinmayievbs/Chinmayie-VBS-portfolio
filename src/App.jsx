import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-[#030712] text-slate-200 font-sans selection:bg-purple-500/30 overflow-x-hidden min-h-screen relative">
            <div className="fixed inset-0 z-0">
                <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
            </div>
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Certifications />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
