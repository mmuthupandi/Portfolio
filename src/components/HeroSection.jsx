import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const HeroSection = ({ onMoreClick }) => {
    const tiltRef = useRef(null);
    const sectionRef = useRef(null);
    const roles = ["DevOps Aspirant", "FullStack Developer"];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e) => {
        if (!tiltRef.current || !sectionRef.current) return;

        // Check if we are on desktop based on window width before applying 3D tilt
        if (window.innerWidth < 768) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        tiltRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (tiltRef.current) {
            tiltRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        }
    };

    return (
        <div id="heroSection" className="relative md:h-screen min-h-screen flex flex-col md:flex-row overflow-hidden w-full max-w-7xl mx-auto border-x-0 md:border-x border-gray-100 dark:border-gray-900">
            {/* Top/Left Image Section */}
            <motion.div
                id="imageSection"
                ref={sectionRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}
                className="absolute inset-0 h-full w-full md:relative md:h-full md:w-1/2 overflow-hidden shrink-0 transition-all duration-700 perspective-1000 group bg-gray-50 dark:bg-black/20 md:bg-transparent z-0"
            >
                {/* 3D Tilt Interaction Wrapper - Mobile: Image covers bg */}
                <div id="imageTiltWrapper" ref={tiltRef} className="w-full h-full flex items-end md:items-start justify-center pb-52 md:pb-0 md:pt-24 transition-transform duration-100 ease-out">
                    <div className="w-full h-full md:h-[85%] animate-levitate relative z-20 pointer-events-none flex items-end justify-center md:items-end md:justify-center">
                        <img
                            alt="Portrait of Muthupandi"
                            className="h-[85%] md:h-full w-auto max-w-none md:max-w-full object-cover object-top md:object-contain drop-shadow-2xl opacity-90 md:opacity-100"
                            src="/bg_removed.png"
                            style={{ filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.3))' }}
                        />
                    </div>
                </div>

                {/* Nature Aesthetics Bottom Filler - Mobile Friendly */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 md:h-1/3 z-30 pointer-events-none overflow-hidden">
                    {/* Gradient Overlay for Mobile Text Readability */}
                    <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-white via-white/90 to-transparent dark:from-black dark:via-black/90 md:from-white md:via-white/50 md:dark:from-black md:dark:via-black/50 opacity-100"></div>

                    {/* Fireflies */}
                    <div className="firefly w-1 h-1 left-10 bottom-10" style={{ animationDuration: '4s', animationDelay: '0s' }}></div>
                    <div className="firefly w-1.5 h-1.5 left-1/2 bottom-5" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
                    <div className="firefly w-1 h-1 right-10 bottom-20" style={{ animationDuration: '3.5s', animationDelay: '2s' }}></div>

                    {/* Grass/Plants Layer 1 (Back) */}
                    <div className="absolute bottom-0 w-full h-24 text-green-800/20 dark:text-green-900/40 animate-sway-grass" style={{ animationDelay: '-1s' }}>
                        <svg viewBox="0 0 400 100" className="w-full h-full fill-current" preserveAspectRatio="none">
                            <path d="M0,100 L0,50 Q20,20 40,50 T80,50 T120,50 T160,50 T200,50 T240,50 T280,50 T320,50 T360,50 T400,50 L400,100 Z" />
                        </svg>
                    </div>

                    {/* Grass/Plants Layer 2 (Front) */}
                    <div className="absolute -bottom-2 w-full h-32 text-green-600/30 dark:text-green-700/50 animate-sway-grass origin-bottom">
                        <svg viewBox="0 0 400 100" className="w-full h-full fill-current" preserveAspectRatio="none">
                            <path d="M0,100 L5,70 L15,100 L25,40 L35,100 L45,60 L55,100 L65,30 L75,100 L85,50 L95,100 L105,20 L115,100 L125,50 L135,100 L145,40 L155,100 L165,60 L175,100 L185,30 L195,100 L205,50 L215,100 L225,20 L235,100 L245,50 L255,100 L265,40 L275,100 L285,60 L295,100 L305,30 L315,100 L325,50 L335,100 L345,20 L355,100 L365,50 L375,100 L385,40 L395,100 L400,100 Z" />
                        </svg>
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none md:hidden"></div>

            </motion.div>

            {/* Bottom/Right Content Section */}
            <motion.div
                className="relative mt-auto md:mt-0 md:h-full w-full md:w-1/2 p-6 pb-32 md:pb-6 md:pr-28 flex flex-col justify-end md:justify-center gap-4 md:gap-5 z-10 overflow-hidden bg-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Mobile: Glassmorphism Card Effect behind text */}
                <div className="absolute inset-0 md:hidden bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-0 pointer-events-none"></div>

                {/* Bird Animation Background */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-100 dark:opacity-40 dark:invert">
                    <div className="bird-container bird-container--one"><div className="bird bird--one"></div></div>
                    <div className="bird-container bird-container--two"><div className="bird bird--two"></div></div>
                    <div className="bird-container bird-container--three"><div className="bird bird--three"></div></div>
                </div>

                {/* Floating Leaves */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 opacity-30 text-green-500 animate-float-leaf">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" /></svg>
                    </div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 opacity-20 text-green-400 animate-float-leaf" style={{ animationDelay: '2s', animationDuration: '8s' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" /></svg>
                    </div>
                    <div className="absolute bottom-1/3 left-1/3 w-5 h-5 opacity-10 text-green-600 animate-float-leaf" style={{ animationDelay: '4s', animationDuration: '12s' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" /></svg>
                    </div>
                </div>

                {/* Vines - Simplified for mobile */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                    <div className="absolute -top-5 -right-5 md:-top-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 opacity-20 dark:opacity-30 animate-sway-slow origin-top-right">
                        <svg viewBox="0 0 100 100" fill="none" className="text-green-500 dark:text-green-400 fill-current">
                            <path d="M100 0 C 80 20 60 40 40 80 C 50 70 70 50 100 40 Z" />
                            <circle cx="40" cy="80" r="3" />
                        </svg>
                    </div>
                </div>

                <div className="space-y-1 relative z-10 text-center md:text-left pt-4 md:pt-0">
                    <h2 className="text-sm font-black tracking-tight text-slate-500 dark:text-slate-300 drop-shadow-sm md:drop-shadow-none">HI THERE!</h2>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none dark:text-white drop-shadow-md md:drop-shadow-none text-slate-900">
                        I'M <span className="outline-text whitespace-nowrap">MUTHUPANDI</span>
                    </h1>
                </div>

                <div className="inline-flex justify-center md:justify-start relative z-10">
                    <span className="bg-primary text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 text-white leading-tight rounded-md shadow-md transform -skew-x-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <span>Student</span>
                        <span className="flex overflow-hidden relative" style={{ height: '1.2em' }}>
                            <motion.span
                                key={roleIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                / {roles[roleIndex]}
                            </motion.span>
                        </span>
                    </span>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-center md:text-left max-w-sm mx-auto md:mx-0 relative z-10 px-4 md:px-0 font-medium md:font-normal drop-shadow-sm md:drop-shadow-none">
                    Passionate about building scalable backends and automating infrastructure. Turning code into reliable solutions with Python & Modern DevOps tools.
                </p>

                <div className="mt-4 flex justify-center md:justify-start relative z-10">
                    <button onClick={onMoreClick} className="bg-primary hover:bg-blue-600 transition-all duration-300 hover:scale-105 active:scale-95 text-white text-xs font-black px-8 py-4 rounded-full uppercase tracking-widest shadow-lg shadow-primary/30 whitespace-nowrap">
                        More About Me
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
