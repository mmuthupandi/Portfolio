import React from 'react';

const CertificationSection = () => {
    const certifications = [
        {
            title: "Google IT Automation with Python",
            issuer: "Google",
            date: "Earned Recently",
            description: "A comprehensive certification covering Python scripting, Git, GitHub, automation, and troubleshooting.",
            link: "#"
        }
    ];

    return (
        <div id="certifications" className="min-h-screen bg-background-light dark:bg-background-dark w-full max-w-7xl mx-auto border-x border-gray-100 dark:border-gray-900 p-8 flex flex-col justify-center">
            <div className="space-y-8">
                <div className="flex justify-start">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black tracking-tight dark:text-white">Certifications</h2>
                        <div className="w-20 h-1 bg-primary"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div key={index} className="group relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-icons text-6xl text-primary">workspace_premium</span>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <h3 className="text-xl font-bold dark:text-white group-hover:text-primary transition-colors">{cert.title}</h3>
                                <p className="text-primary font-semibold text-sm">{cert.issuer}</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[80px]">
                                    {cert.description}
                                </p>

                                <div className="pt-2">
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-primary hover:text-blue-600 transition-colors">
                                        View Credential <span className="material-icons text-sm ml-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificationSection;
