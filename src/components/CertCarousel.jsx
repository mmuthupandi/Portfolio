import React, { useState, useEffect, useRef } from 'react';
import CertCard from './CertCard';
import CertModal from './CertModal';

const certificates = [
  {
    id: 1,
    title: "Crash Course on Python",
    provider: "Google & Coursera",
    desc: "Authorized by Google and offered through Coursera (Sep 2024)",
    image: "/Crash Course on Python.png",
    alt: "Google Crash Course on Python Certificate"
  },
  {
    id: 2,
    title: "Using Python to Interact with the Operating System",
    provider: "Google & Coursera",
    desc: "Authorized by Google and offered through Coursera (Dec 2025)",
    image: "/using python to interact with os.png",
    alt: "Google Using Python to Interact with the Operating System Certificate"
  },
  {
    id: 3,
    title: "Python",
    provider: "GUVI & HCL",
    desc: "Certificate of achievement for the successful completion of Python programming (Nov 2023)",
    image: "/Python guvi.png",
    alt: "Python Certificate of Completion"
  },
  {
    id: 4,
    title: "Digital Skills: Digital Marketing",
    provider: "FutureLearn & Accenture",
    desc: "Introduction to digital marketing strategies, techniques, and practical tools (Jul 2024)",
    image: "/Digital Marketing.jpeg",
    alt: "Digital Skills Digital Marketing certificate"
  },
  {
    id: 5,
    title: "Build your own Ticketing App",
    provider: "GUVI & HCL",
    desc: "#LearnWithGUVI Season Two - Build your own Ticketing App in a Week (Oct 2024)",
    image: "/Learnwithguvi.png",
    alt: "Build your own Ticketing App certificate"
  }
];

export default function CertCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCert, setSelectedCert] = useState(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldAnimate(!mediaQuery.matches);

    const handleChange = (e) => {
      setShouldAnimate(!e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && shouldAnimate && !selectedCert) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, [isAutoPlaying, shouldAnimate, selectedCert]);

  // Pause auto-play on hover or focus
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  const handleFocus = () => setIsAutoPlaying(false);
  const handleBlur = () => setIsAutoPlaying(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleCardClick = (cert) => {
    setSelectedCert(cert);
    setIsAutoPlaying(false);
  };

  const handleModalClose = () => {
    setSelectedCert(null);
    setIsAutoPlaying(true);
  };

  // Keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      nextSlide();
    }
  };

  // Touch/swipe support with improved gesture detection
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [startTime, setStartTime] = useState(0);

  const minSwipeDistance = 50;
  const maxSwipeTime = 300; // Maximum time for a swipe gesture

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setStartTime(Date.now());
    setIsAutoPlaying(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const swipeTime = Date.now() - startTime;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    const isValidSwipe = swipeTime < maxSwipeTime;

    if (isValidSwipe) {
      if (isLeftSwipe) {
        nextSlide();
      } else if (isRightSwipe) {
        prevSlide();
      }
    }

    // Resume autoplay after a delay
    setTimeout(() => setIsAutoPlaying(true), 1000);
  };

  return (
    <>
      <div
        className="relative w-full"
        role="region"
        aria-label="Certifications carousel"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="relative overflow-hidden rounded-xl mx-auto max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ touchAction: 'pan-x' }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out will-change-transform"
            style={{
              transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
            }}
          >
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="w-full flex-shrink-0 flex justify-center"
                style={{
                  width: '100%',
                  minHeight: '350px'
                }}
              >
                <div className="w-full px-1 sm:px-6">
                  <CertCard
                    certificate={cert}
                    isActive={index === currentIndex}
                    onClick={() => handleCardClick(cert)}
                    shouldAnimate={shouldAnimate}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-white/20 dark:text-white shadow-xl hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation"
          aria-label="Previous certificate"
          tabIndex={0}
        >
          <span className="material-icons text-xl">chevron_left</span>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-white/20 dark:text-white shadow-xl hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation"
          aria-label="Next certificate"
          tabIndex={0}
        >
          <span className="material-icons text-xl">chevron_right</span>
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-4 sm:space-x-3 sm:mt-8">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation ${index === currentIndex
                ? 'bg-primary shadow-lg shadow-primary/30 scale-110'
                : 'bg-gray-300 dark:bg-white/20 dark:hover:bg-white/30 hover:bg-gray-400 hover:scale-105'
                }`}
              aria-label={`Go to certificate ${index + 1}: ${certificates[index].title}`}
              tabIndex={0}
            />
          ))}
        </div>

        {/* Screen Reader Announcements */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          Showing certificate {currentIndex + 1} of {certificates.length}: {certificates[currentIndex].title}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertModal
          certificate={selectedCert}
          onClose={handleModalClose}
          onNext={() => {
            const nextIndex = (currentIndex + 1) % certificates.length;
            setCurrentIndex(nextIndex);
            setSelectedCert(certificates[nextIndex]);
          }}
          onPrev={() => {
            const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
            setCurrentIndex(prevIndex);
            setSelectedCert(certificates[prevIndex]);
          }}
        />
      )}
    </>
  );
}
