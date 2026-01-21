// IndustryExample component - Single industry example
function IndustryExample({ title, description }) {
  return (
    <article className="accent-border-left">
      <h4 className="font-heading text-lg font-semibold text-white mb-1">{title}</h4>
      <p className="text-body text-sm mb-0">{description}</p>
    </article>
  );
}

export default IndustryExample;
