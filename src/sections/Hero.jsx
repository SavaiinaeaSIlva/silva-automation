import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../components/ui';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#051650] py-32">
      
      {/* --- LAVA LAMP STYLES (SPEED INCREASED) --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes lava-move-1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50%, -20%) scale(1.2); } /* Moved further */
          100% { transform: translate(-10%, 20%) scale(0.9); }
        }
        @keyframes lava-move-2 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40%, 30%) scale(1.3); } /* Moved further */
          100% { transform: translate(20%, -20%) scale(0.8); }
        }
        @keyframes lava-move-3 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30%, 30%) scale(1.1); }
          100% { transform: translate(-20%, -20%) scale(1.2); }
        }
        /* SPEEDS: 8s, 12s, 10s (Much faster than 20s+) */
        .animate-lava-1 { animation: lava-move-1 8s infinite ease-in-out alternate; }
        .animate-lava-2 { animation: lava-move-2 12s infinite ease-in-out alternate; }
        .animate-lava-3 { animation: lava-move-3 10s infinite ease-in-out alternate; }
      `}} />

      {/* --- THE LAVA LAMP LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Blob 1: Large Blue Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/40 rounded-full blur-[90px] animate-lava-1 mix-blend-screen" />
        
        {/* Blob 2: White/Cyan Accent (Increased opacity to pop more) */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-cyan-400/30 rounded-full blur-[100px] animate-lava-2 mix-blend-screen" />
        
        {/* Blob 3: Center Deep Glow */}
        <div className="absolute top-[20%] left-[30%] w-[30vw] h-[30vw] bg-indigo-500/30 rounded-full blur-[80px] animate-lava-3 mix-blend-screen" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white drop-shadow-lg">
          Stop Subscribing. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
            Start Owning.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
          We build custom cloud workflows that you own forever. <br className="hidden md:block" /> 
          Eliminate monthly fees and scale your business on your own terms.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <Button 
            variant="white"
            href="https://calendly.com/silvaautomation/consultation" 
            className="text-lg px-12 py-4 shadow-xl shadow-blue-900/40 text-primary font-bold"
          >
            Free Consultation
          </Button>
          
          <Button 
            variant="outline-white" 
            href="#how-it-works" 
            className="text-lg px-12 py-4 backdrop-blur-md hover:bg-white/10"
          >
            Our Process
          </Button>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8 pt-10 border-t border-white/20">
          {["Gemini AI Powered", "100% Code Ownership", "Zero Monthly Fees"].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-300" />
              <span className="text-blue-50 text-sm font-bold uppercase tracking-wide">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;