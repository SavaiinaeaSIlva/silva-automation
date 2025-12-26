import React from 'react';
import whatIDoImg from '../assets/images/whatido.png';
import { Reveal } from '../components';

const WhatIDo = () => {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      title: "Workflow Automation",
      description: "Automate data entry, report generation, and routine business processes",
      bgColor: "bg-blue-100"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
      ),
      title: "System Integration",
      description: "Connect your existing tools and make them work together seamlessly",
      bgColor: "bg-green-100"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      title: "Custom Dashboards",
      description: "Build real-time dashboards to track KPIs and business metrics",
      bgColor: "bg-purple-100"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: "Process Optimization",
      description: "Analyze and streamline your existing workflows for maximum efficiency",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section id="what-i-do" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE SIDE */}
          <Reveal animation="slide-in-left" delay={0}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white aspect-[4/3] flex items-center justify-center border border-slate-100">
               <img 
                  src={whatIDoImg} 
                  alt="Workflow Automation" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
            </div>
          </Reveal>
          
          {/* TEXT SIDE */}
          <div>
            <Reveal animation="slide-in-right" delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary tracking-tight">
                What I Do
              </h2>
            </Reveal>
            
            <Reveal animation="slide-in-right" delay={400}>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  I transform repetitive manual tasks into automated systems that work tirelessly in the background—so you can focus on growing your business instead of managing it.
                </p>
              </div>
            </Reveal>
            
            {/* Service Cards */}
            <Reveal animation="slide-in-right" delay={600}>
              <div className="grid sm:grid-cols-2 gap-4 my-8">
                {services.map((service, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            
            <Reveal animation="slide-in-right" delay={800}>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-primary">
                <h4 className="font-bold text-primary mb-2">The Silva Automation Difference</h4>
                <p className="text-sm text-slate-700">
                  Unlike agencies that sell you expensive subscriptions, I build custom solutions using tools you already own. 
                  Every system is documented, secure, and designed to be maintained by your team.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIDo;