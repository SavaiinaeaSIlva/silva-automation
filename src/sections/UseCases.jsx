import React from 'react';
import { FileText, Users, Bell, Calendar } from 'lucide-react';
import useCasesImg from '../assets/images/usecases.png';
import { Reveal } from '../components';

const UseCases = () => {
  const cases = [
    { icon: FileText, text: "Customer intake and form processing" },
    { icon: Users, text: "CRM updates and lead routing" },
    { icon: Bell, text: "Invoice creation and payment tracking" },
    { icon: Calendar, text: "Appointment reminders and follow-ups" }
  ];

  return (
    <section id="use-cases" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* TEXT CONTENT */}
          <div className="order-2 md:order-1">
            <Reveal animation="slide-in-left" delay={0}>
              <h2 className="text-3xl font-bold mb-6 text-primary tracking-tight">
                Common Automation Use Cases
              </h2>
            </Reveal>
            
            <Reveal animation="slide-in-left" delay={200}>
              <p className="text-slate-600 mb-8 text-lg">
                High-impact workflows I typically automate for small and growing teams.
              </p>
            </Reveal>
            
            <Reveal animation="slide-in-left" delay={400}>
              <ul className="space-y-6">
                {cases.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-primary text-white shadow-lg shadow-blue-900/20">
                      <item.icon size={20} />
                    </div>
                    <span className="text-slate-700 font-medium text-lg pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* IMAGE CONTENT */}
          <Reveal animation="slide-in-right" delay={600}>
            <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl bg-slate-50 aspect-[4/3] flex items-center justify-center border border-slate-100">
               <img 
                  src={useCasesImg} 
                  alt="Automation Dashboard" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default UseCases;