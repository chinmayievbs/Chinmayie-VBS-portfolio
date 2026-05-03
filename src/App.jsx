import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-gray-50 text-gray-900 font-sans">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Certifications />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
