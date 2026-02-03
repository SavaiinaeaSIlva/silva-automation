import { useState } from 'react';
import { Check } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import SectionLayout from '../components/SectionLayout';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

type TabKey = 'pricing' | 'support';

export default function PricingSection() {
  const pricing = siteContent.pricing;
  const [activeTab, setActiveTab] = useState<TabKey>('pricing');

  // Animation refs
  const headerRef = useScrollReveal({ y: 30, duration: 0.7 });
  const tiersRef = useStaggerReveal({
    y: 50,
    duration: 0.6,
    stagger: 0.12,
    childSelector: '.glass-card, .glass-card-featured',
  });
  const supportRef = useScrollReveal({ y: 30, duration: 0.5 });

  return (
    <SectionLayout id="pricing" lightLeaks="v2">
      <div ref={headerRef} className="space-y-4 mb-8">
        <h2 className="section-header">{pricing.header}</h2>
        <p className="section-subtitle">{pricing.intro}</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white/[0.05] rounded-full p-1 border border-white/[0.08]">
          {(Object.keys(pricing.tabs) as TabKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeTab === key ? 'bg-white text-black' : 'text-white/60 hover:text-white/90'
              }`}
            >
              {pricing.tabs[key]}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Tab Content */}
      {activeTab === 'pricing' && (
        <div ref={tiersRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-center">
          {pricing.tiers.map((tier) => {
            const isFeatured = tier.badge === 'Most Popular';
            return (
              <div
                key={tier.name}
                className={`${isFeatured ? 'glass-card-featured md:scale-105 md:z-10' : 'glass-card'} p-6 flex flex-col relative transition-transform`}
              >
                {tier.badge && (
                  <span
                    className={`inline-flex self-start px-2.5 py-0.5 text-xs font-medium rounded-full mb-4 ${
                      isFeatured ? 'bg-white text-black' : 'bg-white/10 text-white'
                    }`}
                  >
                    {tier.badge}
                  </span>
                )}
                <div className="text-muted text-sm mb-1">{tier.name}</div>
                <div className="text-3xl font-semibold text-white mb-1">{tier.price}</div>
                <div className="text-muted text-sm mb-6">{tier.description}</div>
                <ul className="text-sm space-y-3 flex-1">
                  {tier.included.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-muted">
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" aria-hidden="true" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {/* Support Tab Content */}
      {activeTab === 'support' && (
        <div ref={supportRef} className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-10">
            {/* Title & Headline */}
            <div className="text-center mb-8">
              <p className="text-white/50 text-sm uppercase tracking-wider mb-2">
                {pricing.afterSupport.title}
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {pricing.afterSupport.headline}
              </h3>
            </div>

            {/* Intro */}
            <p className="text-muted text-center mb-8 max-w-xl mx-auto">
              {pricing.afterSupport.intro}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {pricing.afterSupport.benefits.map((benefit) => (
                <div
                  key={benefit.label}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-white shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="text-white font-medium text-sm">{benefit.label}</p>
                      <p className="text-white/50 text-xs mt-0.5">{benefit.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/[0.08] my-8" />

            {/* What Support Covers */}
            <div>
              <h4 className="text-white font-medium text-center mb-5">
                {pricing.afterSupport.coversTitle}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                {pricing.afterSupport.covers.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-muted text-sm">
                    <Check className="w-4 h-4 text-white/60 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </SectionLayout>
  );
}
