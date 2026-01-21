// ProblemCard component - Single problem item
function ProblemCard({ title, description }) {
  return (
    <article className="glass-card glass-card--sm glass-card--hover transition-all">
      <h3 className="font-heading text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-body mb-0">{description}</p>
    </article>
  );
}

export default ProblemCard;
