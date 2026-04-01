import React from 'react';

const WorkSection = () => {
    const projects = [
        {
            title: "Streax",
            description: "Streax is an automated campus engagement platform to replace inefficient manual roll calls with a high-velocity, gamified system. By introducing a 'Streak' mechanic, the platform rewards consistent attendance with institutional perks like preferred pricing at the campus canteen and express service access.",
            tech: ["React", "HTML", "CSS"],
            liveLink: null,
            githubLink: ""
        },
        {
            title: "Mozhiyaam",
            description: "Mozhiyaam is a Tamil-based social media application developed to bring together Tamil enthusiasts and learners on a single platform. The app aims to create a space where users can communicate, share ideas, and express themselves entirely in Tamil.",
            tech: ["React", "TypeScript", "PostgreSQL"],
            liveLink: "https://mozhiyaam.vercel.app/",
            githubLink: "https://github.com/udhayasankar-UD/mozhiyaam"
        },
        {
            title: "Personal Portfolio",
            description: "A highly interactive, deeply personalized portfolio website featuring complex glassmorphism, responsive animated layouts, and full custom theme implementations designed to showcase my projects and technical skills.",
            tech: ["React", "Tailwind CSS", "Framer Motion"],
            liveLink: "https://muthupandi-dev.web.app/",
            githubLink: "https://github.com/mmuthupandi/Portfolio_0"
        }
    ];

    // SVG icons
    const GlobeIcon = () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );

    const GitHubIcon = () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );

    return (
        <div id="work" className="w-full bg-transparent relative z-10 min-h-screen flex flex-col justify-center py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-8 space-y-8">
                <div className="flex flex-col justify-start space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black tracking-tight dark:text-white">My Work</h2>
                        <div className="w-20 h-1 bg-primary"></div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-medium md:text-lg max-w-2xl">
                        A curated selection of the top three projects I've built to solve real-world problems and explore new technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {projects.map((project, index) => (
                        <div key={index} className="w-full flex-col flex group relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-icons text-6xl text-primary">folder_open</span>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <h3 className="text-xl font-bold dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[80px]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.filter(Boolean).map((t, i) => (
                                        <span key={i} className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="pt-2 flex items-center gap-3 flex-wrap">
                                    {/* Live Demo */}
                                    {project.liveLink ? (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-200"
                                        >
                                            <GlobeIcon /> Live Demo
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-yellow-500/10 text-yellow-500 cursor-not-allowed select-none">
                                            <GlobeIcon /> Coming Soon
                                        </span>
                                    )}

                                    {/* GitHub */}
                                    {project.githubLink ? (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
                                        >
                                            <GitHubIcon /> GitHub
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-slate-400 cursor-not-allowed select-none">
                                            <GitHubIcon /> GitHub
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkSection;
