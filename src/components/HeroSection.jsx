import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
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
        <div id="home" className="relative md:h-screen min-h-screen flex flex-col md:flex-row overflow-hidden w-full bg-transparent">
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
                {/* 3D Tilt Interaction Wrapper - Mobile: Image sits at top */}
                <div id="imageTiltWrapper" ref={tiltRef} className="w-full h-full flex items-start pt-20 md:pt-0 md:items-center justify-center transition-transform duration-100 ease-out">
                    <div className="w-full h-[45%] md:h-[70%] lg:h-[65%] relative z-20 flex items-center justify-center pointer-events-none">
                        {/* Decorative Background Elements (Memphis Style) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[450px] pointer-events-none z-0">
                            {/* Big Center Circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-secondary/15 rounded-full"></div>

                            {/* Thick Wavy Line */}
                            <div className="absolute top-[5%] left-[0%] text-primary animate-float">
                                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
                                    <path d="M10,50 Q25,20 50,50 T90,50" />
                                </svg>
                            </div>

                            {/* Dot Grid Top Right */}
                            <div className="absolute top-[10%] right-[5%] w-24 h-24 animate-levitate" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 30%, transparent 30%)', backgroundSize: '20px 20px', opacity: 0.2 }}></div>

                            {/* Earthy Clay Cross */}
                            <div className="absolute top-[20%] left-[10%] text-secondary animate-float delay-100">
                                <svg width="40" height="40" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="18" strokeLinecap="round">
                                    <line x1="20" y1="20" x2="80" y2="80" />
                                    <line x1="80" y1="20" x2="20" y2="80" />
                                </svg>
                            </div>

                            {/* Half Circle */}
                            <div className="absolute top-[40%] right-[-5%] w-20 h-10 bg-secondary/40 rounded-tl-full rounded-tr-full transform rotate-90 animate-sway-slow"></div>

                            {/* Triangle & Rectangle Combo */}
                            <div className="absolute top-[15%] right-[20%] flex flex-col items-center animate-float delay-300">
                                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-secondary/60 border-r-[15px] border-r-transparent"></div>
                                <div className="w-8 h-20 bg-primary/40"></div>
                            </div>

                            {/* Small Onyx Crosses Bottom Right */}
                            <div className="absolute bottom-[30%] right-[5%] flex gap-3 text-onyx/40 animate-float delay-200">
                                <svg width="28" height="28" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="18" strokeLinecap="round">
                                    <line x1="20" y1="20" x2="80" y2="80" />
                                    <line x1="80" y1="20" x2="20" y2="80" />
                                </svg>
                                <svg width="28" height="28" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="18" strokeLinecap="round">
                                    <line x1="20" y1="20" x2="80" y2="80" />
                                    <line x1="80" y1="20" x2="20" y2="80" />
                                </svg>
                            </div>

                            {/* Dot Grid Bottom Left */}
                            <div className="absolute bottom-[15%] left-[5%] w-20 h-28 animate-levitate delay-300" style={{ backgroundImage: 'radial-gradient(var(--color-onyx) 30%, transparent 30%)', backgroundSize: '20px 20px', opacity: 0.15 }}></div>

                            {/* Rectangle/Bars Bottom Right */}
                            <div className="absolute bottom-[10%] right-[10%] flex flex-col gap-3 animate-sway-slow delay-100">
                                <div className="w-32 h-4 bg-secondary/30 rounded-full"></div>
                                <div className="w-32 h-4 bg-primary/30 rounded-full"></div>
                            </div>
                            
                            {/* Circle/Ring Bottom Left */}
                            <div className="absolute bottom-[5%] left-[25%] w-24 h-24 border-[12px] border-primary/20 rounded-full animate-float delay-400 flex items-center justify-center">
                                <div className="w-8 h-8 bg-secondary/30 rounded-full"></div>
                            </div>
                        </div>

                        {/* Professional Portrait */}
                        <img
                            alt="Professional Portrait of Muthupandi"
                            className="relative z-10 h-full w-auto max-w-none md:max-w-full object-cover object-bottom md:object-contain drop-shadow-xl animate-levitate"
                            src="/professional pic BackgroundRemover.png"
                        />
                        {/* Bottom Edge Geometric Anchor (Memphis Style Cover) moved under the image */}
                        <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 w-full max-w-[450px] flex flex-col items-center justify-end z-30 pointer-events-none">
                            {/* Geometric Memphis bars overlapping the bottom edge */}
                            <div className="relative w-full flex flex-col items-center opacity-90">
                                <div className="w-[60%] h-5 bg-primary transform -skew-x-12 translate-x-4 shadow-lg animate-float delay-100"></div>
                                <div className="w-[50%] h-3 bg-secondary transform skew-x-12 -translate-x-4 -mt-2 shadow-md animate-float"></div>
                                
                                {/* Little decorative dots sitting on the bar */}
                                <div className="absolute top-2 right-[10%] flex gap-2 animate-bounce delay-300">
                                    <div className="w-2 h-2 rounded-full bg-onyx"></div>
                                    <div className="w-2 h-2 rounded-full bg-onyx"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-80 brightness-0">
                    <div className="bird-container bird-container--one"><div className="bird bird--one"></div></div>
                    <div className="bird-container bird-container--two"><div className="bird bird--two"></div></div>
                    <div className="bird-container bird-container--three"><div className="bird bird--three"></div></div>
                    <div className="bird-container bird-container--four"><div className="bird bird--four"></div></div>
                    <div className="bird-container bird-container--five"><div className="bird bird--one"></div></div>
                    <div className="bird-container bird-container--six"><div className="bird bird--two"></div></div>
                </div>

                {/* Floating Leaves */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                    <div className="absolute -top-[10%] left-1/4 w-4 h-4 opacity-40 text-primary animate-float-leaf" style={{ animationDelay: '0s', animationDuration: '15s' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" /></svg>
                    </div>
                    <div className="absolute -top-[10%] right-1/4 w-3 h-3 opacity-30 text-secondary animate-float-leaf" style={{ animationDelay: '2s', animationDuration: '18s' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" /></svg>
                    </div>
                    <div className="absolute -top-[10%] left-1/3 w-5 h-5 opacity-40 text-primary animate-float-leaf" style={{ animationDelay: '4s', animationDuration: '12s' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" /></svg>
                    </div>
                    <div className="absolute -top-[10%] right-1/3 w-4 h-4 opacity-30 text-secondary animate-float-leaf" style={{ animationDelay: '1.5s', animationDuration: '20s' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" /></svg>
                    </div>
                    <div className="absolute -top-[10%] left-1/2 w-3 h-3 opacity-25 text-primary animate-float-leaf" style={{ animationDelay: '3s', animationDuration: '16s' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" /></svg>
                    </div>
                    <div className="absolute -top-[10%] right-1/2 w-6 h-6 opacity-45 text-secondary animate-float-leaf" style={{ animationDelay: '5s', animationDuration: '14s' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" /></svg>
                    </div>
                    <div className="absolute -top-[10%] left-2/3 w-4 h-4 opacity-35 text-primary animate-float-leaf" style={{ animationDelay: '0.5s', animationDuration: '22s' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" /></svg>
                    </div>
                </div>

                {/* Vines - Simplified for mobile */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                    <div className="absolute -top-5 -right-5 md:-top-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 opacity-30 dark:opacity-40 animate-sway-slow origin-top-right">
                        <svg viewBox="0 0 100 100" fill="none" className="text-primary dark:text-primary fill-current">
                            <path d="M100 0 C 80 20 60 40 40 80 C 50 70 70 50 100 40 Z" />
                            <circle cx="40" cy="80" r="3" />
                        </svg>
                    </div>
                </div>

                <div className="space-y-1 relative z-10 text-center md:text-left pt-4 md:pt-0">
                    <h2 className="text-sm font-black tracking-tight text-slate-500 dark:text-slate-300 drop-shadow-sm md:drop-shadow-none">
                        <BlurText text="HI THERE!" delay={50} direction="bottom" />
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none dark:text-white drop-shadow-md md:drop-shadow-none text-slate-900 flex flex-wrap items-center justify-center md:justify-start gap-x-2 md:gap-x-3">
                        <BlurText text="I'M" delay={50} direction="bottom" />
                        <BlurText text="MUTHUPANDI" delay={50} animateBy="letters" direction="bottom" className="outline-text whitespace-nowrap" />
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

                <BlurText
                    text="Passionate about building scalable backends and automating infrastructure. Turning code into reliable solutions with Python & Modern DevOps tools. I am a quick learner who adapts easily to new environments and challenges, constantly seeking to expand my technical horizons."
                    delay={40}
                    animateBy="words"
                    direction="bottom"
                    className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-center md:text-left max-w-sm mx-auto md:mx-0 relative z-10 px-4 md:px-0 font-medium md:font-normal drop-shadow-sm md:drop-shadow-none flex flex-wrap justify-center md:justify-start"
                />

                <div className="mt-4 flex justify-center md:justify-start relative z-10">
                    <button onClick={onMoreClick} className="bg-primary hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95 text-background-light text-xs font-black px-8 py-4 rounded-full uppercase tracking-widest shadow-lg shadow-primary/30 whitespace-nowrap">
                        More About Me
                    </button>
                </div>
            </motion.div>

            {/* Mobile-only Full-Size Bottom Filler Design */}
            <div className="md:hidden absolute bottom-0 left-0 w-full h-[35vh] min-h-[250px] flex items-center justify-center pointer-events-none opacity-80 z-20 overflow-hidden">
                <div className="relative w-full h-full max-w-sm mx-auto">
                    {/* Scroll down indicator - centered near top of the gap */}
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-primary/40">
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase mb-1">Scroll</span>
                        <span className="material-icons text-xl leading-none">keyboard_double_arrow_down</span>
                    </div>
                    
                    {/* Memphis geometric elements spread widely to actually fill the blank space */}
                    <div className="absolute top-[20%] left-6 text-secondary/30 animate-float" style={{ animationDelay: '1s' }}>
                        <svg width="24" height="24" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="12" strokeLinecap="round" fill="none">
                            <path d="M20,20 L80,80 M80,20 L20,80" />
                        </svg>
                    </div>
                    
                    <div className="absolute bottom-[20%] right-8 w-6 h-6 border-[3px] border-primary/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                    
                    <div className="absolute top-[40%] left-1/4 w-2 h-2 bg-[#1E1E1E]/15 rounded-full shadow-[15px_0_0_rgba(30,30,30,0.15),30px_0_0_rgba(30,30,30,0.15),0_15px_0_rgba(30,30,30,0.15),15px_15px_0_rgba(30,30,30,0.15),30px_15px_0_rgba(30,30,30,0.15)]"></div>
                    
                    <div className="absolute bottom-[30%] left-8 text-primary/20 animate-sway-slow" style={{ animationDelay: '2s' }}>
                        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
                            <path d="M10,50 Q25,20 50,50 T90,50" />
                        </svg>
                    </div>
                    
                    <div className="absolute top-[60%] right-16 text-secondary/20 animate-float" style={{ animationDelay: '1.5s' }}>
                        <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                            <polygon points="50,15 90,85 10,85" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
