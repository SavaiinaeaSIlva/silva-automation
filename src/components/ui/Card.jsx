// Card component - Reusable card container with glassmorphism styling
function Card({ children, id, elevated = false, className = "" }) {
  const cardClass = elevated ? "card card--elevated" : "card";
  
  return (
    <article id={id} className={`${cardClass} ${className}`}>
      {children}
    </article>
  );
}

export default Card;
