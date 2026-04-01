import React, { useEffect, useRef } from 'react';

export default function CertModal({ certificate, onClose, onNext, onPrev }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const imageRef = useRef(null);

  // Focus trap
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    modal.focus();

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    modal.addEventListener('keydown', handleTabKey);
    return () => modal.removeEventListener('keydown', handleTabKey);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onPrev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleDownload = async () => {
    try {
      const response = await fetch(certificate.image);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Extract original file extension, fallback to png
      const extension = certificate.image.split('.').pop()?.split('?')[0] || 'png';
      link.download = `${certificate.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${extension}`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(certificate.image, '_blank');
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        style={{ backdropFilter: 'blur(8px)' }}
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] rounded-xl flex flex-col focus:outline-none bg-white/95 dark:bg-[#0b1116]/95 border border-primary/20 backdrop-blur-xl overflow-hidden"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
          <div className="flex-1 min-w-0">
            <h2 id="modal-title" className="text-xl font-bold dark:text-white text-slate-900 mb-1 truncate">
              {certificate.title}
            </h2>
            <p className="text-primary text-sm font-medium">
              {certificate.provider}
            </p>
          </div>

          <div className="flex items-center space-x-2 ml-4">
            {/* Navigation Buttons */}
            <button
              onClick={onPrev}
              className="p-2 flex justify-center items-center rounded-lg dark:bg-white/10 bg-gray-100 dark:text-white text-slate-800 hover:bg-primary/20 hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Previous certificate"
            >
              <span className="material-icons text-xl">chevron_left</span>
            </button>

            <button
              onClick={onNext}
              className="p-2 flex justify-center items-center rounded-lg dark:bg-white/10 bg-gray-100 dark:text-white text-slate-800 hover:bg-primary/20 hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Next certificate"
            >
              <span className="material-icons text-xl">chevron_right</span>
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="p-2 flex justify-center items-center rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
              title="Download certificate"
              aria-label="Download certificate"
            >
              <span className="material-icons text-xl">download</span>
            </button>

            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 flex justify-center items-center rounded-lg dark:bg-white/10 bg-gray-100 dark:text-white text-slate-800 hover:bg-red-500/20 hover:text-red-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Close modal"
            >
              <span className="material-icons text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Image Container - scrollable so tall portrait images don't push header away */}
        <div className="flex-1 overflow-y-auto flex items-center justify-center p-6">
          {certificate.image.toLowerCase().endsWith('.pdf') ? (
            <embed
              key={`embed-${certificate.id}`}
              src={`${certificate.image}#view=FitH`}
              type="application/pdf"
              className="w-full h-full min-h-[60vh] object-contain rounded-lg shadow-2xl"
            />
          ) : (
            <>
              {/* Reset error state gracefully by using a key to remount the image tag on source change */}
              <img
                key={`img-${certificate.id}`}
                ref={imageRef}
                src={certificate.image}
                alt={certificate.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
                onLoad={(e) => {
                  e.currentTarget.style.display = 'block';
                  e.currentTarget.nextElementSibling?.classList.add('hidden');
                }}
              />
              
              {/* Fallback content */}
              <div 
                key={`fallback-${certificate.id}`}
                className="hidden text-center text-slate-500 dark:text-white/70"
              >
                <div className="text-6xl mb-4">📜</div>
                <div className="text-lg font-medium mb-2">{certificate.title}</div>
                <div className="text-base text-primary mb-2">{certificate.provider}</div>
                <div className="text-sm dark:text-gray-300 text-gray-600">{certificate.desc}</div>
                <div className="mt-4 text-xs text-gray-400">
                  Certificate preview could not be loaded. Please click Download.
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-white/10">
          <p id="modal-description" className="text-gray-600 dark:text-gray-300 text-sm">
            {certificate.desc}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={handleDownload}
              className="px-4 py-2 flex items-center justify-center bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm font-medium"
            >
              <span className="material-icons text-sm mr-2">download</span>
              Download Certificate
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-white/10 dark:text-white text-slate-900 rounded-lg dark:hover:bg-white/20 hover:bg-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
