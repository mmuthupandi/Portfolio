import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import CertificationSection from './components/CertificationSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';

import Navigation from './components/Navigation';
import IntroScreen from './components/IntroScreen';
import CursorDot from './components/CursorDot';
import WiringBackground from './components/WiringBackground';
import './App.css'; 

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <WiringBackground isDark={true} />
      <CursorDot />
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      <div
        id="mainContainer"
        className={`relative w-full font-display scroll-smooth text-slate-900 dark:text-slate-100 ${showIntro ? 'h-screen overflow-hidden pointer-events-none' : 'min-h-screen'}`}
      >

        <HeroSection onMoreClick={scrollToAbout} />
      <AboutSection />
      <WorkSection />
      <CertificationSection />
      <ResumeSection />
      <ContactSection />
      <Navigation />
      </div>
    </>
  );
}

export default App;
