// PricingTier component - Single pricing tier card
import CheckIcon from "../ui/CheckIcon";

function PricingTier({ name, price, description, features, featured = false, badge }) {
  return (
    <article className={`relative flex h-full flex-col p-6 transition-all hover:-translate-y-1 ${
      featured 
        ? 'glass-card glass-card--featured' 
        : 'glass-card glass-card--hover'
    }`}>
      {badge && (
        <span className="pricing-badge">
          {badge}
        </span>
      )}
      <header className="mb-4">
        <h3 className={`font-heading text-lg font-semibold mb-1 text-white`}>{name}</h3>
        <p className={`font-heading text-3xl font-bold mb-1 text-white`}>{price}</p>
        <p className={`text-sm text-white/70`}>{description}</p>
      </header>
      
      <ul className="space-y-2 list-none p-0">
        {features.map((feature, index) => (
          <li key={index} className="list-item-icon text-sm">
            <CheckIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${featured ? 'text-[var(--color-accent-light)]' : 'text-[var(--color-success)]'}`} />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PricingTier;
