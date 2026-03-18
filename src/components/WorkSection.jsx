import React from 'react';

const WorkSection = () => {
    const projects = [
        {
            title: "Mozhiyaam",
            description: "Mozhiyaam is a Tamil-based social media application developed to bring together Tamil enthusiasts and learners on a single platform. The app aims to create a space where users can communicate, share ideas, and express themselves entirely in Tamil.",
            tech: [, "TypeScript", "PostgreSQL"],
            link: "https://mozhiyaam.vercel.app/"
        },
        {
            title: "PIL-ALHEALTH-CARE / FREELANCE PROJECT",
            description: " Developed a React-based awareness webpage Pil-Alhealth-Care, for a client to educate users about hypothyroidism, highlighting symptoms, causes, and treatments.",
            tech: ["React", "HTML", "CSS"],
            link: "https://pil-alhealth-care.com/info-ta"
        },
        {
            title: "Comming Soon...",
            description: "#Project3 is Comming Soon",
            tech: [""],
            link: "#"
        }
    ];

    return (
        <div id="work" className="min-h-screen bg-background-light dark:bg-background-dark w-full max-w-7xl mx-auto border-x border-gray-100 dark:border-gray-900 p-8 flex flex-col justify-center">
            <div className="space-y-8">
                <div className="flex justify-start">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black tracking-tight dark:text-white">My Work</h2>
                        <div className="w-20 h-1 bg-primary"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-icons text-6xl text-primary">folder_open</span>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <h3 className="text-xl font-bold dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[80px]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-2">
                                    <a href={project.link} className="inline-flex items-center text-sm font-bold text-primary hover:text-blue-600 transition-colors">
                                        View Project <span className="material-icons text-sm ml-1">arrow_forward</span>
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

export default WorkSection;
