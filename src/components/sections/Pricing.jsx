// Pricing component - Pricing section with tabs
import { useState } from "react";
import { pricingContent } from "../../data";
import { SectionHeader } from "../ui";
import { Section } from "../layout";
import PricingTier from "./PricingTier";
import CheckIcon from "../ui/CheckIcon";

function Pricing() {
  const [activeTab, setActiveTab] = useState("packages");

  return (
    <Section id="pricing">
      <SectionHeader title={pricingContent.header} subtitle={pricingContent.intro} />
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
          <button
            onClick={() => setActiveTab("packages")}
            className={`px-6 py-2 text-sm font-heading font-medium rounded-full transition-all duration-200 ${
              activeTab === "packages"
                ? "bg-[var(--color-accent-dark)] text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            Packages
          </button>
          <button
            onClick={() => setActiveTab("support")}
            className={`px-6 py-2 text-sm font-heading font-medium rounded-full transition-all duration-200 ${
              activeTab === "support"
                ? "bg-[var(--color-accent-dark)] text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            After-Care Support
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "packages" && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch gap-6 mx-auto">
          {pricingContent.tiers.map((tier) => (
            <PricingTier
              key={tier.id}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              featured={tier.featured}
              badge={tier.badge}
            />
          ))}
        </div>
      )}

      {activeTab === "support" && pricingContent.supportNote && (
        <div className="glass-card mx-auto max-w-4xl">
          <h3 className="section-title mb-2">{pricingContent.supportNote.title}</h3>
          <p className="font-heading text-xl font-semibold text-[var(--color-accent)] mb-4">{pricingContent.supportNote.subtitle}</p>
          <p className="text-body mb-6">{pricingContent.supportNote.description}</p>
          
          <ul className="space-y-3 list-none p-0 mb-8">
            {pricingContent.supportNote.features.map((feature, index) => (
              <li key={index} className="list-item-icon">
                <CheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--color-success)]" />
                {feature}
              </li>
            ))}
          </ul>

          <h4 className="font-heading text-lg font-semibold text-white mb-4">{pricingContent.supportNote.coverageTitle}</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
            {pricingContent.supportNote.coverage.map((item, index) => (
              <li key={index} className="list-item-icon">
                <CheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--color-accent-light)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}

export default Pricing;
