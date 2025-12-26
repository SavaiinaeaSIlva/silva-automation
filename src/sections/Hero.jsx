import React from 'react';
import { Button } from '../components/ui';

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary py-32">
      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="animate-lava-1 absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-blue-600/40 blur-[90px] mix-blend-screen" />
        <div className="animate-lava-2 absolute -bottom-[10%] -right-[5%] h-[40vw] w-[40vw] rounded-full bg-cyan-400/30 blur-[100px] mix-blend-screen" />
        <div className="animate-lava-3 absolute left-[30%] top-[20%] h-[30vw] w-[30vw] rounded-full bg-indigo-500/30 blur-[80px] mix-blend-screen" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="animate-reveal-up mb-8 text-5xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-7xl">
          Stop Subscribing. <br />
          <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
            Start Owning.
          </span>
        </h1>
        
        <p className="animate-reveal-up animate-delay-200 mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-blue-100 md:text-2xl">
          We build custom cloud workflows that you own forever.
        </p>

        <div className="animate-reveal-up animate-delay-400 flex flex-col justify-center gap-5 sm:flex-row">
          <Button variant="white" href="https://calendly.com/silvaautomation/consultation" className="px-12 py-4 text-lg">
            Free Consultation
          </Button>
          <Button variant="outline-white" href="#how-it-works" className="px-12 py-4 text-lg">
            Our Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;