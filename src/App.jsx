import React, { useState, useRef, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CircleAvatar from './components/CircleAvatar';
import './App.css'; // Ensure default styles are loaded if any, but we primarily use index.css

function App() {
  const containerRef = useRef(null);
  const [isDark, setIsDark] = useState(false); // Track state if needed, though classList is imperative

  // Initial styles
  const [imageStyle, setImageStyle] = useState({ width: '50%', opacity: 1 });
  const [avatarStyle, setAvatarStyle] = useState({ opacity: 0, transform: 'scale(0)', pointerEvents: 'none' });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = containerRef.current.scrollTop;
      const maxScroll = 400; // Maximum scroll distance for full transition

      // Calculate progress (0 to 1)
      const progress = Math.min(scrollPosition / maxScroll, 1);

      if (scrollPosition > 50) {
        // Shrink the image section smoothly
        const startWidth = 50; // 50%
        const currentWidth = startWidth - (startWidth * progress);

        setImageStyle({
          width: `${currentWidth}%`,
          opacity: 1 - progress,
        });

        // Show and scale the circular avatar
        setAvatarStyle({
          opacity: progress,
          transform: `scale(${progress})`,
          pointerEvents: progress > 0.5 ? 'auto' : 'none',
        });
      } else {
        // Reset to original state
        setImageStyle({ width: '50%', opacity: 1 });
        setAvatarStyle({ opacity: 0, transform: 'scale(0)', pointerEvents: 'none' });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
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
      ref={containerRef}
      className="relative overflow-y-auto h-screen scroll-smooth font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100"
    >
      <CircleAvatar style={avatarStyle} />
      <HeroSection imageStyle={imageStyle} onToggleDark={toggleDark} onMoreClick={scrollToAbout} />
      <AboutSection />
    </div>
  );
}

export default App;
