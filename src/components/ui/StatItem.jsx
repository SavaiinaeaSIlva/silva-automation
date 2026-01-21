// StatItem component - Single stat display
function StatItem({ value, label, description }) {
  return (
    <div className="text-center">
      <span className="block font-heading text-3xl md:text-4xl font-bold text-white">
        {value}
        {label && <span className="text-[var(--color-accent)]">{label}</span>}
      </span>
      <span className="block text-sm text-body--muted mt-1">{description}</span>
    </div>
  );
}

export default StatItem;
