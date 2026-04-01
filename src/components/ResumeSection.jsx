import React from 'react';

const ResumeSection = () => {
    return (
        <section
            id="resume"
            className="min-h-screen bg-transparent w-full max-w-7xl mx-auto border-x border-gray-100/10 dark:border-gray-900/10 p-8 flex flex-col justify-center relative z-10"
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
                    <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-8 flex flex-col items-center shadow-lg">

                        {/* Resume PDF Embed - Visible on all screens */}
                        <div
                            className="w-full relative overflow-hidden rounded-lg border border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-zinc-800"
                            style={{ aspectRatio: '1 / 1.414' }}
                        >
                            <embed
                                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                                type="application/pdf"
                                className="absolute top-0 left-0 w-full h-full"
                                aria-label="Resume PDF"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;