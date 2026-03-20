import React from 'react';

const ResumeSection = () => {
  return (
    <section 
      id="resume" 
      className="min-h-screen bg-background-light dark:bg-background-dark w-full max-w-7xl mx-auto border-x border-gray-100 dark:border-gray-900 p-8 flex flex-col justify-center"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-start">
          <div className="space-y-2 text-left">
            <h2 className="text-3xl font-black tracking-tight dark:text-white">Resume</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-8 flex flex-col items-center shadow-lg">
          <div 
            className="w-full relative overflow-hidden rounded-lg border border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-zinc-800" 
            style={{ aspectRatio: '1 / 1.414' }}
          >
            {/* Adding #toolbar=0&navpanes=0&scrollbar=0&view=FitH to hide nested viewer chrome/scrollbars */}
            <embed 
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
              type="application/pdf" 
              className="absolute top-0 left-0 w-full h-full pointer-events-none sm:pointer-events-auto"
              aria-label="Resume PDF" 
            />
          </div>
          <a 
            href="/resume.pdf" 
            download 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-8 flex items-center bg-primary hover:bg-blue-600 transition-all duration-300 hover:scale-105 active:scale-95 text-white shadow-lg shadow-primary/30 font-bold text-lg py-4 px-8 rounded-xl"
          >
            <span className="material-icons mr-2">download</span>
            Download Resume
          </a>
        </div>
        <div className="mt-6 text-center text-sm md:text-base text-slate-600 dark:text-gray-400 font-medium">
          If PDF viewer fails, <a href="/resume.pdf" download className="underline text-primary hover:text-blue-600 transition-colors">click here to download directly.</a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
