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

                    <div className="space-y-3 pt-4">
                        <h3 className="text-xl font-bold dark:text-white">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Django', 'Python', 'Devops', 'React (Basics)', 'Unlocking Soon...', '404.Not Found'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutSection;
