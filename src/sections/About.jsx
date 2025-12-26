import React from 'react';
import { SectionHeading } from '../components/ui';
import aboutImg from '../assets/images/about.png'; // Imported the actual file

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE SIDE */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-slate-50 shadow-2xl overflow-hidden relative">
              <img 
                src={aboutImg} 
                alt="Naea Silva" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* TEXT SIDE */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Practical Automation for Small Business
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I build systems that actually work and stay working. As a founder-led practice, Silva Automation prioritizes quality over quantity.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I work with a select few clients at a time to ensure every system is meticulously documented, secure, and easy to maintain.
            </p>
            <div className="p-4 bg-blue-50 border-l-4 border-primary rounded-r-lg">
              <p className="text-primary font-bold">
                Proudly based in Hawaii, serving businesses locally and remotely.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;