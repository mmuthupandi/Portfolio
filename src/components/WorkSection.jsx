import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

const ChevronLeftIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m15 18-6-6 6-6" />
    </svg>
);

const ChevronRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m9 18 6-6-6-6" />
    </svg>
);

// SVG icons for buttons
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

const projects = [
    {
        id: 1,
        title: "Streax",
        description: "Streax is an automated campus engagement platform to replace inefficient manual roll calls with a high-velocity, gamified system. By introducing a 'Streak' mechanic, the platform rewards consistent attendance with institutional perks like preferred pricing at the campus canteen and express service access.",
        tech: ["React", "HTML", "CSS"],
        liveLink: null,
        githubLink: "",
        icon: "school",
        color: "from-blue-500/20"
    },
    {
        id: 2,
        title: "Mozhiyaam",
        description: "Mozhiyaam is a Tamil-based social media application developed to bring together Tamil enthusiasts and learners on a single platform. The app aims to create a space where users can communicate, share ideas, and express themselves entirely in Tamil.",
        tech: ["React", "TypeScript", "PostgreSQL"],
        liveLink: "https://mozhiyaam.vercel.app/",
        githubLink: "https://github.com/udhayasankar-UD/mozhiyaam",
        icon: "forum",
        color: "from-orange-500/20"
    },
    {
        id: 3,
        title: "Oorariyan",
        description: "An AI-powered virtual tourism platform transforming 360° heritage tours into interactive WebVR experiences. Features a multilingual Generative AI royal guide (Raja Raja Chola) for voice/text queries and gamified artifact hunts.",
        tech: ["React", "Generative AI", "WebVR"],
        liveLink: "https://oorariyan.vercel.app/",
        githubLink: null,
        icon: "account_balance",
        color: "from-amber-500/20"
    },
    {
        id: 4,
        title: "TravelLoop",
        description: "Travel Planning Simplified. Plan, organize and manage unforgettable journeys with a comprehensive itinerary builder, budget tracker, and packing checklists.",
        tech: ["React", "Tailwind CSS", "UX/UI"],
        liveLink: null,
        githubLink: null,
        icon: "flight_takeoff",
        color: "from-purple-500/20"
    }
];

export default function WorkSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayIntervalRef = useRef(null);
    const autoplayDelay = 3500;

    const goToNext = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    useEffect(() => {
        if (!isPaused) {
            autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
        }
        return () => {
            if (autoplayIntervalRef.current) {
                clearInterval(autoplayIntervalRef.current);
            }
        };
    }, [isPaused, activeIndex]);

    const changeSlide = (newIndex) => {
        const newSafeIndex = (newIndex + projects.length) % projects.length;
        setActiveIndex(newSafeIndex);
        if (autoplayIntervalRef.current) {
            clearInterval(autoplayIntervalRef.current);
        }
        if (!isPaused) {
            autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
        }
    };

    const onDragEnd = (event, info) => {
        const dragThreshold = 50;
        const dragOffset = info.offset.x;
        if (dragOffset > dragThreshold) {
            changeSlide(activeIndex - 1);
        } else if (dragOffset < -dragThreshold) {
            changeSlide(activeIndex + 1);
        }
    };

    return (
        <section id="work" className="w-full relative z-10 bg-background-light dark:bg-background-dark py-16 md:py-32">
            <div className="max-w-7xl mx-auto px-8 w-full h-full flex flex-col justify-center relative">

                {/* Header Section */}
                <div className="flex flex-col justify-start space-y-4 z-20 mb-12 w-full max-w-2xl">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black tracking-tight dark:text-white flex justify-start">
                            <BlurText text="My Work" delay={50} direction="bottom" />
                        </h2>
                        <div className="w-20 h-1 bg-primary"></div>
                    </div>
                    <BlurText
                        text="A curated selection of the top three projects I've built to solve real-world problems and explore new technologies."
                        delay={30}
                        animateBy="words"
                        direction="bottom"
                        className="text-slate-600 dark:text-slate-400 font-medium md:text-lg flex-wrap justify-start"
                    />
                </div>

                {/* Carousel Container */}
                <div
                    className="w-full flex-col items-center justify-center font-sans overflow-visible"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="relative flex w-full flex-col pt-6">

                        <div className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center overflow-visible">
                            <motion.div
                                className="w-full h-full flex items-center justify-center"
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={onDragEnd}
                            >
                                {projects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        index={index}
                                        activeIndex={activeIndex}
                                        totalCards={projects.length}
                                    />
                                ))}
                            </motion.div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-center gap-6 mt-8 z-20">
                            <button
                                onClick={() => changeSlide(activeIndex - 1)}
                                className="p-2 rounded-full bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 shadow-md text-gray-700 dark:text-white transition-all focus:outline-none hover:scale-110 active:scale-95"
                            >
                                <ChevronLeftIcon className="w-6 h-6" />
                            </button>

                            <div className="flex items-center justify-center gap-3">
                                {projects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => changeSlide(index)}
                                        className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none shadow-sm ${activeIndex === index
                                            ? "w-8 bg-primary dark:bg-primary"
                                            : "w-2.5 bg-gray-300 dark:bg-zinc-600 hover:bg-gray-400 dark:hover:bg-zinc-500"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => changeSlide(activeIndex + 1)}
                                className="p-2 rounded-full bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 shadow-md text-gray-700 dark:text-white transition-all focus:outline-none hover:scale-110 active:scale-95"
                            >
                                <ChevronRightIcon className="w-6 h-6" />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

function ProjectCard({ project, index, activeIndex, totalCards }) {
    let offset = index - activeIndex;
    if (offset > totalCards / 2) {
        offset -= totalCards;
    } else if (offset < -totalCards / 2) {
        offset += totalCards;
    }

    // Since there are only 3 cards, all of them can be visible to complete the 3D effect.
    // If you add more than 3 cards later, the original Math.abs(offset) <= 1 works great.
    const isVisible = Math.abs(offset) <= 1 || totalCards <= 3;

    const animate = {
        x: `${offset * 50}%`,
        scale: offset === 0 ? 1 : 0.8,
        zIndex: totalCards - Math.abs(offset),
        opacity: isVisible ? (offset === 0 ? 1 : 0.6) : 0,
        filter: offset === 0 ? 'blur(0px)' : 'blur(4px)',
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        }
    };

    return (
        <motion.div
            className="absolute w-[90%] md:w-[60%] lg:w-[45%] h-full flex flex-col justify-center"
            style={{ transformStyle: "preserve-3d" }}
            animate={animate}
            initial={false}
        >
            <div className="relative w-full h-full flex flex-col group bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">

                {/* Unique Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color || 'from-primary/10'} to-transparent opacity-50 z-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-100`}></div>

                {/* Unique Background decorative icon */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 transition-opacity pointer-events-none scale-150 transform origin-top-right z-0">
                    <span className="material-icons text-9xl text-primary">{project.icon || 'folder_open'}</span>
                </div>

                <div className="space-y-4 relative z-10 flex-grow flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-black dark:text-white text-slate-800 group-hover:text-primary transition-colors tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.filter(Boolean).map((t, i) => (
                            <span key={i} className="text-xs font-bold px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 rounded-md tracking-wide">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 mt-auto flex items-center gap-3 md:gap-4 flex-wrap relative z-10 border-t border-gray-100 dark:border-zinc-800">
                    {/* Live Demo */}
                    {project.liveLink ? (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs md:text-sm font-bold px-5 py-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                        >
                            <GlobeIcon /> Live Demo
                        </a>
                    ) : (
                        <span className="flex items-center gap-1.5 text-xs md:text-sm font-bold px-5 py-2.5 rounded-xl bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 cursor-not-allowed select-none">
                            <GlobeIcon /> Coming Soon
                        </span>
                    )}

                    {/* GitHub */}
                    {project.githubLink ? (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs md:text-sm font-bold px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-sm"
                        >
                            <GitHubIcon /> Source
                        </a>
                    ) : (
                        <span className="flex items-center gap-1.5 text-xs md:text-sm font-bold px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800 text-slate-400 cursor-not-allowed select-none">
                            <GitHubIcon /> Private
                        </span>
                    )}
                </div>

            </div>
        </motion.div>
    );
}
