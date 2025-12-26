import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  to, 
  href, 
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-200 transform active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-0.5";

  const variants = {
    primary: "bg-primary text-white border border-primary hover:bg-primary-light",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary/5",
    'outline-white': "bg-transparent text-white border-2 border-white hover:bg-white/10",
    white: "bg-white text-primary border border-white hover:bg-slate-50",
  };

  const finalClass = `${baseStyle} ${variants[variant] || variants.primary} ${className}`;

  if (to) return <Link to={to} className={finalClass} {...props}>{children}</Link>;
  
  if (href) return (
    <a href={href} className={finalClass} {...props}>
      {children}
    </a>
  );

  return <button type="button" className={finalClass} {...props}>{children}</button>;
};

export default Button;