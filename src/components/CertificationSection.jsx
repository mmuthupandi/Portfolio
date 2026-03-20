import React from "react";
import CertCarousel from "./CertCarousel";

const CertificationSection = () => {
  return (
    <section
      id="certifications"
      className="w-full min-h-screen container mx-auto px-4 md:px-8 py-12 sm:py-16 lg:py-20 flex flex-col justify-center bg-background-light dark:bg-background-dark border-x border-gray-100 dark:border-gray-900 border-x-0 md:border-x"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-black tracking-tight dark:text-white">Certifications</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
        </div>

        {/* Certifications Carousel */}
        <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8 text-center">
          <div className="p-2 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="material-icons text-primary uppercase text-xl">workspace_premium</span>
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold dark:text-white text-slate-800">My Certificates Gallery</h3>
        </div>
        
        <CertCarousel />
      </div>
    </section>
  );
};

export default CertificationSection;
