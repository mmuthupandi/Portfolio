import React from 'react';

const AboutSection = () => {
    return (
        <div
            id="about"
            className="min-h-screen bg-background-light dark:bg-background-dark w-full max-w-7xl mx-auto border-x border-gray-100 dark:border-gray-900 p-8"
        >
            <div className="space-y-6">
                <div className="flex justify-end">
                    <div className="space-y-2 text-right">
                        <h2 className="text-3xl font-black tracking-tight dark:text-white">About Me</h2>
                        <div className="w-20 h-1 bg-primary ml-auto"></div>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        Hello! I'm <span className="text-primary font-bold">Muthupandi</span>, I am a second-year undergraduate student at Kongunadu Arts and Science College, currently exploring the world of software systems and infrastructure. As an aspiring DevOps Engineer, I am deeply committed to learning how to build and deploy efficient applications.
                    </p>

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        I have built a solid foundation with Python and Django for backend development and React for creating user interfaces. I consider myself a quick study, I've already earned a Google certification in Python and enjoy diving into the logic behind systems. My goal is to find an internship where I can be a versatile team player, adapt to new technologies quickly, and contribute to real-world projects while I continue to grow my technical toolkit."
                    </p>

                    <div className="space-y-4 pt-4">
                        <h3 className="text-xl font-bold dark:text-white">Skills</h3>

                        {/* Infinite Scrolling Tech Marquee */}
                        <div className="overflow-hidden relative w-full py-4 border-y border-gray-100 dark:border-neutral-800/50">
                            {/* Fading Edges */}
                            <div className="absolute top-0 left-0 w-16 md:w-24 h-full bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute top-0 right-0 w-16 md:w-24 h-full bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>

                            <div className="flex flex-nowrap overflow-hidden">
                                {[1, 2].map((groupIndex) => (
                                    <div key={groupIndex} className="flex flex-nowrap items-center animate-marquee shrink-0">
                                        {[
                                            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                                            { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
                                            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                                            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                                            { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
                                            { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
                                            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
                                            { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                                            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                                            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                                            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" }
                                        ].map((tech, techIdx) => (
                                            <div key={tech.name + techIdx + groupIndex} className="flex items-center pr-12 md:pr-24 hover:scale-110 transition-transform duration-300 shrink-0">
                                                <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain mr-4" />
                                                <span className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-wider">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            {[
                                { value: '3+', label: 'Years Coding', color: 'text-blue-400' },
                                { value: '7', label: 'Projects', color: 'text-green-400' },
                                { value: '∞', label: 'Ideas', color: 'text-red-400' },
                            ].map((stat) => (
                                <div key={stat.label} className="flex flex-col items-center justify-center bg-[#111827] dark:bg-[#111827] border border-white/5 rounded-2xl py-6 gap-2 shadow-lg hover:scale-105 transition-transform duration-300">
                                    <span className={`text-3xl md:text-4xl font-black ${stat.color}`}>{stat.value}</span>
                                    <span className="text-xs md:text-sm text-slate-400 font-medium text-center leading-tight">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutSection;
