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

                        {/* DESKTOP VIEW: PDF Embed (Hidden on Mobile) */}
                        <div
                            className="hidden sm:block w-full relative overflow-hidden rounded-lg border border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-zinc-800"
                            style={{ aspectRatio: '1 / 1.414' }}
                        >
                            <embed
                                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                                type="application/pdf"
                                className="absolute top-0 left-0 w-full h-full"
                                aria-label="Resume PDF"
                            />
                        </div>

                        {/* MOBILE VIEW: Visual Card (Hidden on Desktop) */}
                        <div className="sm:hidden w-full py-12 flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-zinc-700">
                            <span className="material-icons text-6xl text-primary mb-4">picture_as_pdf</span>
                            <p className="text-lg font-bold dark:text-white">Muthupandi's Resume</p>
                            <p className="text-sm text-gray-500 text-center px-4">PDF preview is available on desktop. Tap below to view or download.</p>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center bg-zinc-800 dark:bg-white text-white dark:text-black font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-all"
                            >
                                <span className="material-icons mr-2">visibility</span>
                                View PDF
                            </a>

                            <a
                                href="/resume.pdf"
                                download
                                className="flex items-center justify-center bg-primary hover:bg-blue-600 transition-all text-white shadow-lg shadow-primary/30 font-bold py-4 px-8 rounded-xl"
                            >
                                <span className="material-icons mr-2">download</span>
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;