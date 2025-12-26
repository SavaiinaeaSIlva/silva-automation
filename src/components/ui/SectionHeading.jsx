import React from 'react';

const SectionHeading = ({ title, subtitle, center = true }) => (
  <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
    {/* Using text-primary from tailwind.config instead of hardcoded hex */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-primary">
      {title}
    </h2>
    {subtitle && (
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;