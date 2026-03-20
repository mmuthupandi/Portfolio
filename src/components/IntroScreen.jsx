import React, { useState, useEffect } from 'react';

const greetings = [
  "Hello",      // English
  "வணக்கம்",   // Tamil
  "നമസ്കാരം",   // Malayalam
  "నమస్కారం",   // Telugu
  "ನಮಸ್ಕಾರ",   // Kannada
  "Bonjour",    // French
  "Hola",       // Spanish
  "Ciao",       // Italian
  "Olá",        // Portuguese
  "Hallo",      // German
  "नमस्ते",    // Hindi
  "こんにちは",  // Japanese
  "안녕하세요",    // Korean
  "您好",       // Chinese
  "مرحبا",      // Arabic
  "Welcome"     // English Final
];

const IntroScreen = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Cycle through greetings based on interval
    if (index < greetings.length - 1) {
      // Give more time to English ("Hello") and Tamil
      let delay = 160;
      if (index === 0 || index === 1) delay = 600;

      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      // Hold on the last word briefly, then slide the screen up
      const holdTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 800);

      // Unmount the component completely after the slide-up animation finishes
      const unmountTimer = setTimeout(() => {
        onComplete();
      }, 1600); // 800ms hold + 800ms slide duration

      return () => {
        clearTimeout(holdTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [index, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isFadingOut ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <div className="flex items-center justify-center w-full px-4 text-white font-display text-4xl md:text-6xl font-medium tracking-normal">
        <div className="relative flex items-center justify-center">
          {/* Pulsing dot indicator absolutely positioned to the left */}
          <div className="absolute -left-8 md:-left-12 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-pulse"></div>

          {/* Greeting text */}
          <h1 className="text-center">
            {greetings[index]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
