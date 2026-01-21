// SectionHeader component - Consistent section headers
function SectionHeader({ title, subtitle, align = "center" }) {
  const alignClass = align === "left" ? "text-left" : "text-center mx-auto";
  
  return (
    <header className={`max-w-2xl mb-8 md:mb-10 ${alignClass}`}>
      <h2 className="section-title section-title--lg mb-3">{title}</h2>
      {subtitle && <p className="text-base text-body mb-0">{subtitle}</p>}
    </header>
  );
}

export default SectionHeader;
