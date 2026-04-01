import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const technologies = [
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
    ];

    const half = Math.ceil(technologies.length / 2);
    const row1 = technologies.slice(0, half);
    const row2 = technologies.slice(half);

    return (
        <div
            id="about"
            className="min-h-screen bg-transparent w-full max-w-7xl mx-auto border-x border-gray-100/10 dark:border-gray-900/10 p-8 relative z-10"
        >
            <div className="space-y-6">
                <div className="flex justify-end">
                    <div className="space-y-2 text-right">
                        <h2 className="text-3xl font-black tracking-tight dark:text-white drop-shadow-lg">About Me</h2>
                        <div className="w-20 h-1 bg-primary ml-auto"></div>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed drop-shadow-md">
                        Hello! I’m <span className="text-primary font-bold">Muthupandi</span>, a second-year undergraduate at Kongunadu Arts and Science College. I am a dedicated student on an exciting journey into the worlds of Software Engineering and DevOps, and I am currently looking for an internship where I can contribute while I continue to grow.
                    </p>

                    <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed drop-shadow-md">
                        I have built a foundational toolkit in Python, Django, and React, including earning a Google Certification in Python, but I view these as just the starting point. My true strength lies in my love for the process I genuinely enjoy the challenge of learning a new framework or solving a complex backend problem from scratch.
                    </p>

                    <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed drop-shadow-md">
                        I don’t claim to know everything yet, but I pride myself on being a quick learner who adapts easily to new environments. I’m looking for a team where I can apply my problem-solving mindset and my passion for automation to create real-world impact, all while learning from the best in the industry.
                    </p>

                    <div className="space-y-6 pt-6">
                        <h3 className="text-2xl font-bold dark:text-white drop-shadow-md">Skills</h3>

                        {/* Sliding Tech Skills */}
                        <div className="w-full py-6 space-y-6 overflow-hidden">
                            {/* First row: slide from left */}
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex flex-wrap justify-center md:justify-start gap-4"
                            >
                                {row1.map((tech) => (
                                    <div key={tech.name} className="flex items-center bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md px-6 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 hover:scale-105 hover:bg-white dark:hover:bg-neutral-800 transition-all shadow-sm">
                                        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain mr-3" />
                                        <span className="text-lg font-bold text-slate-800 dark:text-slate-200 tracking-wide">{tech.name}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Second row: slide from right */}
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex flex-wrap justify-center md:justify-end gap-4"
                            >
                                {row2.map((tech) => (
                                    <div key={tech.name} className="flex items-center bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md px-6 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 hover:scale-105 hover:bg-white dark:hover:bg-neutral-800 transition-all shadow-sm">
                                        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain mr-3" />
                                        <span className="text-lg font-bold text-slate-800 dark:text-slate-200 tracking-wide">{tech.name}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            {[
                                { value: '3+', label: 'Years Coding', color: 'text-blue-400' },
                                { value: '7', label: 'Projects', color: 'text-green-400' },
                                { value: '∞', label: 'Ideas', color: 'text-red-400' },
                            ].map((stat) => (
                                <div key={stat.label} className="flex flex-col items-center justify-center bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl py-6 gap-2 shadow-lg hover:scale-105 transition-transform duration-300">
                                    <span className={`text-3xl md:text-4xl font-black ${stat.color}`}>{stat.value}</span>
                                    <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium text-center leading-tight drop-shadow-sm">{stat.label}</span>
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
