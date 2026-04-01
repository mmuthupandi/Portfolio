import React from 'react';

const ResumeSection = () => {
    const resumeUrl = '/resume.pdf';

    return (
        <section
            id="resume"
            className="w-full bg-transparent relative z-10 min-h-screen flex flex-col justify-center py-16 md:py-24"
        >
            <div className="max-w-7xl mx-auto px-8 space-y-8 w-full">
                {/* Header */}
                <div className="flex justify-start">
                    <div className="space-y-2 text-left">
                        <h2 className="text-3xl font-black tracking-tight text-white drop-shadow-lg">Resume</h2>
                        <div className="w-20 h-1 bg-primary"></div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto w-full">

                    {/* ── DESKTOP: native embed ── */}
                    <div className="hidden sm:block bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-8 shadow-lg">
                        <div
                            className="w-full relative overflow-hidden rounded-lg border border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-zinc-800"
                            style={{ aspectRatio: '1 / 1.414' }}
                        >
                            <embed
                                src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                type="application/pdf"
                                className="absolute top-0 left-0 w-full h-full"
                                aria-label="Resume PDF"
                            />
                        </div>
                    </div>

                    {/* ── MOBILE: tap-to-open card ── */}
                    <div className="sm:hidden bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-2xl p-6 flex flex-col items-center gap-6 shadow-2xl">
                        {/* Icon */}
                        <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
                            <span className="material-icons text-primary text-5xl">description</span>
                        </div>

                        {/* Info */}
                        <div className="text-center space-y-1">
                            <p className="text-white font-bold text-lg">Muthupandi M</p>
                            <p className="text-slate-400 text-sm">resume.pdf</p>
                        </div>

                        {/* Open full screen */}
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 rounded-xl text-base shadow-lg shadow-primary/30 hover:bg-blue-600 active:scale-95 transition-all duration-200"
                        >
                            <span className="material-icons text-xl">open_in_full</span>
                            View Full Screen
                        </a>

                        <p className="text-slate-500 text-xs text-center">
                            Opens in your browser's built-in PDF viewer
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ResumeSection;