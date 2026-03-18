import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import CertificationSection from './components/CertificationSection';
import ContactSection from './components/ContactSection';

import Navigation from './components/Navigation';
import './App.css'; 

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="mainContainer"
      className="relative overflow-y-auto h-screen scroll-smooth font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100"
    >

      <HeroSection onToggleDark={toggleDark} onMoreClick={scrollToAbout} />
      <AboutSection />
      <WorkSection />
      <CertificationSection />
      <ContactSection />
      <Navigation />
    </div>
  );
}

export default App;
