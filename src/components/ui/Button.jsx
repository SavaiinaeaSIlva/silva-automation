import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  to, 
  href, 
  target, 
  rel, 
  ...props 
}) => {
  
  // Base styles for ALL buttons (shape, font, transition)
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-200 transform active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-0.5";

  // Variant styles (Colors)
  let variantClasses = "";
  switch (variant) {
    case 'primary':
      variantClasses = "bg-primary text-white border border-primary hover:bg-primary-light";
      break;
    case 'outline':
      variantClasses = "bg-transparent text-primary border-2 border-primary hover:bg-primary/5";
      break;
    case 'outline-white':
      variantClasses = "bg-transparent text-white border-2 border-white hover:bg-white/10";
      break;
    case 'white':
      variantClasses = "bg-white text-primary border border-white hover:bg-slate-50";
      break;
    default:
      variantClasses = "bg-primary text-white";
  }

  const finalClass = `${baseStyle} ${variantClasses} ${className}`;

  // 1. If it's an internal React Link
  if (to) return <Link to={to} className={finalClass} {...props}>{children}</Link>;

  // 2. If it's an external HTML Link (href)
  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a 
        href={href} 
        target={target || (isExternal ? '_blank' : undefined)} 
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)} 
        className={finalClass} 
        {...props}
      >
        {children}
      </a>
    );
  }

  // 3. If it's a standard Button (for forms/actions)
  return <button type="button" className={finalClass} {...props}>{children}</button>;
};

export default Button;