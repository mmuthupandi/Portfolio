import React from 'react';

const ResumeSection = () => {
    return (
        <section
            id="resume"
            className="w-full bg-transparent relative z-10 py-16 md:py-24"
        >
            <div className="max-w-7xl mx-auto px-8 space-y-8">
                {/* Header */}
                <div className="flex justify-start">
                    <div className="space-y-2 text-left">
                        <h2 className="text-3xl font-black tracking-tight dark:text-white">Resume</h2>
                        <div className="w-20 h-1 bg-primary"></div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto w-full">
                    <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-8 flex flex-col items-center shadow-lg">

                        {/* Resume PDF Embed - Visible on all screens */}
                        <div
                            className="w-full relative overflow-hidden rounded-lg border border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-zinc-800"
                            style={{ aspectRatio: '1 / 1.414' }}
                        >
                            {/* Desktop embed (native view) */}
                            <embed
                                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                                type="application/pdf"
                                className="hidden sm:block absolute top-0 left-0 w-full h-full"
                                aria-label="Resume PDF"
                            />
                            {/* Mobile: tappable overlay that opens PDF fullscreen */}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sm:hidden absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 bg-zinc-800/90 rounded-lg"
                                aria-label="Open resume fullscreen"
                            >
                                <span className="material-icons text-primary text-6xl">description</span>
                                <span className="text-white font-bold text-base">Tap to view Resume</span>
                                <span className="text-slate-400 text-xs">Opens in fullscreen</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;