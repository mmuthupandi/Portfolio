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
                        Hello! I'm <span className="text-primary font-bold">Muthupandi</span>, a passionate Django Developer and intermediate DevOps Engineer with a keen interest in building scalable web applications and automating deployment processes.
                    </p>

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        With expertise in Python, Django, and modern DevOps practices, I create robust backend solutions and streamline development workflows. I'm constantly learning and exploring new technologies to deliver efficient and maintainable code.
                    </p>

                    <div className="space-y-3 pt-4">
                        <h3 className="text-xl font-bold dark:text-white">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Django', 'Python', 'DevOps', 'Docker', 'CI/CD', 'Linux'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3 pt-4">
                        <h3 className="text-xl font-bold dark:text-white">Experience</h3>
                        <div className="space-y-4">
                            <div className="border-l-2 border-primary pl-4">
                                <h4 className="font-bold dark:text-white">Django Developer</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Building scalable web applications</p>
                            </div>
                            <div className="border-l-2 border-primary pl-4">
                                <h4 className="font-bold dark:text-white">DevOps Engineer (Intermediate)</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Automating deployments and infrastructure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
