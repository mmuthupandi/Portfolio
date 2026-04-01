import React, { useState } from 'react';

export default function CertCard({ certificate, isActive, onClick, shouldAnimate }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [imageError, setImageError] = useState(false);

  const showOverlay = isHovered || isFocused;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 ${shouldAnimate ? 'ease-in-out' : ''
        } ${isActive
          ? 'scale-100 opacity-100 z-10'
          : 'scale-95 opacity-60 md:scale-90 md:opacity-70'
        }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-describedby={`cert-desc-${certificate.id}`}
      aria-label={`View ${certificate.title} certificate from ${certificate.provider}`}
    >
      <div
        className={`relative h-[280px] sm:h-[320px] lg:h-[350px] rounded-xl overflow-hidden transition-all duration-300 touch-manipulation ${isActive
          ? 'shadow-2xl shadow-primary/20 ring-2 ring-primary/30'
          : 'shadow-lg'
          } ${showOverlay ? 'transform -translate-y-2' : ''
          }`}
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: window.innerWidth > 640 ? 'blur(10px)' : 'none',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Certificate Image */}
        <div className="relative w-full h-full">
          {certificate.image.toLowerCase().endsWith('.pdf') ? (
            <embed
              src={`${certificate.image}#toolbar=0&navpanes=0&scrollbar=0`}
              type="application/pdf"
              className="w-full h-full object-contain p-2 object-center bg-gray-50 dark:bg-zinc-800/50 rounded-xl pointer-events-none"
            />
          ) : (
            <img
              src={certificate.image}
              alt={certificate.alt}
              className="w-full h-full object-contain p-2 object-center bg-gray-50 dark:bg-zinc-800/50 rounded-xl"
              loading="lazy"
            />
          )}

          {/* Hover/Focus View Details Overlay */}
          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 rounded-xl pointer-events-none ${showOverlay ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className={`flex flex-col items-center justify-center bg-primary/90 text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 transform ${showOverlay ? 'translate-y-0 scale-100' : 'translate-y-4 scale-75'
                }`}
            >
              <span className="font-bold tracking-wide">Click to view brief</span>
            </div>
          </div>

          {/* Focus Ring */}
          {isFocused && (
            <div className="absolute inset-0 ring-2 ring-primary ring-offset-2 ring-offset-transparent rounded-xl pointer-events-none" />
          )}
        </div>
      </div>

      {/* Hidden description for screen readers */}
      <div id={`cert-desc-${certificate.id}`} className="sr-only">
        {certificate.desc}
      </div>
    </div>
  );
}
