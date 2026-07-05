import React, { useState } from "react";
import CardSwap, { Card } from "./CardSwap";
import CertModal from './CertModal';

const certificates = [
  {
    id: 1,
    title: "Crash Course on Python",
    provider: "Google & Coursera",
    desc: "Authorized by Google and offered through Coursera (Sep 2024)",
    image: "/Crash Course on Python.png",
    alt: "Google Crash Course on Python Certificate"
  },
  {
    id: 2,
    title: "Using Python to Interact with the Operating System",
    provider: "Google & Coursera",
    desc: "Authorized by Google and offered through Coursera (Dec 2025)",
    image: "/using python to interact with os.png",
    alt: "Google Using Python to Interact with the Operating System Certificate"
  },
  {
    id: 3,
    title: "Python",
    provider: "GUVI & HCL",
    desc: "Certificate of achievement for the successful completion of Python programming (Nov 2023)",
    image: "/Python guvi.png",
    alt: "Python Certificate of Completion"
  },
  {
    id: 4,
    title: "Digital Skills: Digital Marketing",
    provider: "FutureLearn & Accenture",
    desc: "Introduction to digital marketing strategies, techniques, and practical tools (Jul 2024)",
    image: "/Digital Marketing.jpeg",
    alt: "Digital Skills Digital Marketing certificate"
  },
  {
    id: 5,
    title: "Build your own Ticketing App",
    provider: "GUVI & HCL",
    desc: "#LearnWithGUVI Season Two - Build your own Ticketing App in a Week (Oct 2024)",
    image: "/Learnwithguvi.png",
    alt: "Build your own Ticketing App certificate"
  }
];

const CertificationSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certifications"
      className="w-full bg-transparent relative z-10 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col items-center">
        {/* Header */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16 w-full">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-black tracking-tight dark:text-white">Certifications</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left Text Column */}
          <div className="flex flex-col items-start text-left space-y-6 lg:pr-10">
            <div className="p-4 rounded-2xl bg-primary/10 inline-flex items-center justify-center border border-primary/20">
              <span className="material-icons text-primary text-4xl">workspace_premium</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black dark:text-white text-slate-800 leading-tight">
              Continuous <br/><span className="text-primary">Learning & Growth</span>
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg">
              I am deeply committed to constantly expanding my technical skill set. My certifications from industry leaders like Google, Coursera, and GUVI reflect my dedication to mastering complex topics.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
               <span className="px-5 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full font-bold text-sm">Python Mastery</span>
               <span className="px-5 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full font-bold text-sm">OS & Automation</span>
               <span className="px-5 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full font-bold text-sm">Digital Strategy</span>
            </div>
          </div>
          
          {/* Right CardSwap Column */}
          <div className="w-full relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <CardSwap
              cardDistance={65}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
              onCardClick={(index) => setSelectedCert(certificates[index])}
            >
              {certificates.map((cert) => (
                <Card key={cert.id} className="w-[320px] h-[240px] sm:w-[480px] sm:h-[360px] bg-white dark:bg-zinc-800 shadow-2xl p-2 cursor-pointer border-2 border-primary/20 hover:border-primary transition-colors">
                  <img 
                    src={cert.image} 
                    alt={cert.alt} 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>

      {selectedCert && (
        <CertModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
          onNext={() => {
            const currentIndex = certificates.findIndex(c => c.id === selectedCert.id);
            const nextIndex = (currentIndex + 1) % certificates.length;
            setSelectedCert(certificates[nextIndex]);
          }}
          onPrev={() => {
            const currentIndex = certificates.findIndex(c => c.id === selectedCert.id);
            const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
            setSelectedCert(certificates[prevIndex]);
          }}
        />
      )}
    </section>
  );
};

export default CertificationSection;
