// Button component - Reusable CTA button
function Button({ children, onClick, type = "button", variant = "primary", href }) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-200 cursor-pointer [font-family:'Bank_Gothic']";
  
  const variants = {
    primary: "bg-[var(--color-action)] text-white hover:bg-[var(--color-action-hover)] shadow-sm hover:shadow-md hover:-translate-y-0.5 [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]",
    secondary: "bg-transparent text-[var(--color-action)] border-2 border-[var(--color-action)] hover:bg-[var(--color-action)] hover:text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)]",
  };
  
  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
