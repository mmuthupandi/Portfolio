import React from 'react';

const Navigation = () => {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:fixed md:left-auto md:right-3 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-50 flex flex-row md:flex-col items-center gap-6 md:gap-4 bg-white/10 backdrop-blur-lg md:bg-primary px-6 py-3 md:px-1.5 md:py-5 rounded-full shadow-2xl md:ios-shadow animate-fadeIn md:animate-slideInRight delay-200 border border-white/20 md:border-none">
            <a className="text-white md:text-slate-900 hover:scale-110 active:scale-90 transition-transform" href="#heroSection">
                <span className="material-icons text-xl md:text-lg">home</span>
            </a>
            <div className="w-1 h-1 bg-white/20 md:bg-black/20 rounded-full hidden md:block"></div>

            <a className="text-white md:text-slate-900 hover:scale-110 active:scale-90 transition-transform" href="#about">
                <span className="material-icons text-xl md:text-lg">person</span>
            </a>
            <div className="w-1 h-1 bg-white/20 md:bg-black/20 rounded-full hidden md:block"></div>

            <a className="text-white md:text-slate-900 hover:scale-110 active:scale-90 transition-transform" href="#work">
                <span className="material-icons text-xl md:text-lg">work</span>
            </a>
            <div className="w-1 h-1 bg-white/20 md:bg-black/20 rounded-full hidden md:block"></div>

            <a className="text-white md:text-slate-900 hover:scale-110 active:scale-90 transition-transform" href="#about">
                <span className="material-icons text-xl md:text-lg">download</span>
            </a>
            <div className="w-1 h-1 bg-white/20 md:bg-black/20 rounded-full hidden md:block"></div>

            <a className="text-white md:text-slate-900 hover:scale-110 active:scale-90 transition-transform" href="#contact">
                <span className="material-icons text-xl md:text-lg">send</span>
            </a>
        </div>
    );
};

export default Navigation;
