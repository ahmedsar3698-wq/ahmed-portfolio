import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHubActivity } from './components/GitHubActivity';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section for Navbar indicator
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      {/* Short Initial Loader */}
      <LoadingScreen />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      <div className="relative min-h-screen w-full bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-hidden">
        {/* Background Cyber-Grid Layer */}
        <div className="fixed inset-0 pointer-events-none cyber-grid z-0 opacity-40"></div>

        {/* Atmospheric Backlight Blurs */}
        <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00f5ff]/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
        <div className="fixed top-1/3 -right-40 w-[600px] h-[500px] bg-[#818cf8]/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
        <div className="fixed bottom-1/4 -left-40 w-[600px] h-[500px] bg-[#c084fc]/10 rounded-full blur-[160px] pointer-events-none z-0"></div>

        {/* Navigation */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Sections */}
        <main className="relative z-10 w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <GitHubActivity />
          <ExperienceTimeline />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
