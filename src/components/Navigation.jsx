import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1, transition: { delay: 0.05, duration: 0.2, ease: "easeOut" } },
    exit: { width: 0, opacity: 0, transition: { duration: 0.1, ease: "easeIn" } }
};

function ExpandedTabs({ tabs, className }) {
    const [selected, setSelected] = useState(0);

    const handleSelect = (index, id) => {
        setSelected(index);
        // Scroll to the section smoothly
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 sm:gap-1 rounded-full border border-white/20 bg-primary/95 dark:bg-zinc-900/95 p-1.5 shadow-2xl backdrop-blur-md animate-fadeIn w-[95vw] max-w-[400px] justify-between ${className || ""}`}>
            {tabs.map((tab, index) => {
                const isSelected = selected === index;
                return (
                    <button 
                        key={tab.title} 
                        onClick={() => handleSelect(index, tab.id)} 
                        className={`relative z-10 flex items-center justify-center rounded-full px-3 py-2.5 sm:py-2 text-[10px] font-black transition-colors focus:outline-none 
                        ${isSelected ? "text-primary dark:text-zinc-900" : "text-white/60 dark:text-zinc-400 hover:text-white dark:hover:text-zinc-200"}`}
                    >
                        {isSelected && (
                            <motion.div 
                                layoutId="pill" 
                                className="absolute inset-0 z-0 rounded-full bg-background-light dark:bg-white backdrop-blur-sm border border-white/30 shadow-sm" 
                                transition={{ type: "spring", stiffness: 500, damping: 40 }} 
                            />
                        )}

                        <span className="relative z-10 flex items-center gap-1.5">
                            <span className="material-icons text-lg sm:text-base">{tab.icon}</span>
                            <AnimatePresence initial={false}>
                                {isSelected && (
                                    <motion.span 
                                        variants={spanVariants} 
                                        initial="initial" 
                                        animate="animate" 
                                        exit="exit" 
                                        className="overflow-hidden whitespace-nowrap uppercase tracking-widest"
                                    >
                                        {tab.title}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

const Navigation = () => {
    const MOBILE_TABS = [
        { title: "Home", icon: "home", id: "home" },
        { title: "About", icon: "person", id: "about" },
        { title: "Work", icon: "work", id: "work" },
        { title: "Certs", icon: "workspace_premium", id: "certifications" },
        { title: "Resume", icon: "description", id: "resume" },
        { title: "Contact", icon: "send", id: "contact" }
    ];

    return (
        <>
            {/* Desktop Navigation (Unchanged) */}
            <div className="hidden md:flex fixed right-3 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-4 bg-primary px-1.5 py-6 rounded-full ios-shadow animate-slideInRight delay-200">
                <a className="text-background-light hover:scale-110 active:scale-90 transition-transform" href="#home">
                    <span className="material-icons text-lg">home</span>
                </a>
                <div className="w-1 h-1 bg-black/20 rounded-full"></div>

                <a className="text-background-light hover:scale-110 active:scale-90 transition-transform" href="#about">
                    <span className="material-icons text-lg">person</span>
                </a>
                <div className="w-1 h-1 bg-black/20 rounded-full"></div>

                <a className="text-background-light hover:scale-110 active:scale-90 transition-transform" href="#work">
                    <span className="material-icons text-lg">work</span>
                </a>
                <div className="w-1 h-1 bg-black/20 rounded-full"></div>

                <a className="text-background-light hover:scale-110 active:scale-90 transition-transform" href="#certifications">
                    <span className="material-icons text-lg">workspace_premium</span>
                </a>
                <div className="w-1 h-1 bg-black/20 rounded-full"></div>

                <a className="text-background-light hover:scale-110 active:scale-90 transition-transform" href="#resume">
                    <span className="material-icons text-lg">description</span>
                </a>
                <div className="w-1 h-1 bg-black/20 rounded-full"></div>

                <a className="text-background-light hover:scale-110 active:scale-90 transition-transform" href="#contact">
                    <span className="material-icons text-lg">send</span>
                </a>
            </div>

            {/* Mobile Navigation (Framer Motion Pill Tabs) */}
            <ExpandedTabs tabs={MOBILE_TABS} className="md:hidden" />
        </>
    );
};

export default Navigation;
