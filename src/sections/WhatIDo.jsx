import React from 'react';
import whatIDoImg from '../assets/images/whatido.png'; // Imported the actual file

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE SIDE */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white aspect-[4/3] flex items-center justify-center border border-slate-100">
             <img 
                src={whatIDoImg} 
                alt="Workflow Automation" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
          </div>
          
          {/* TEXT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary tracking-tight">
              Practical Automation for Small Businesses
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Silva Automation helps small and growing businesses reduce repetitive manual work through custom automation systems.
              </p>
              <p>
                The focus is on workflows that save time, reduce errors, and simplify operations—without locking clients into long-term software subscriptions they don't need.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIDo;