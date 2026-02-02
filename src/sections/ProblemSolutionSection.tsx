import { X, Check } from 'lucide-react';
import { challengeAndSolutionSection } from '../content/siteContent';
import SectionLayout from '../components/SectionLayout';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

type ListItem = { header: string; body: string };

function BlockList({ items, iconType }: { items: ListItem[]; iconType: 'problem' | 'solution' }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div
            className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
              iconType === 'problem' ? 'bg-red-500/10 text-red-400' : 'bg-white/10 text-white'
            }`}
          >
            {iconType === 'problem' ? (
              <X className="w-3.5 h-3.5" aria-hidden="true" />
            ) : (
              <Check className="w-3.5 h-3.5" aria-hidden="true" />
            )}
          </div>
          <div>
            <div className="font-medium text-white">{item.header}</div>
            <div className="text-muted text-sm mt-0.5">{item.body}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function ProblemSolutionSection() {
  const problem = challengeAndSolutionSection.blocks.find((b) => b.type === 'problem');
  const solution = challengeAndSolutionSection.blocks.find((b) => b.type === 'solution');

  // Animation refs
  const headerRef = useScrollReveal({ y: 30, duration: 0.7 });
  const cardsRef = useStaggerReveal({
    y: 40,
    duration: 0.6,
    stagger: 0.15,
    childSelector: '.glass-card',
  });

  return (
    <SectionLayout id="challenge-and-solution" lightLeaks="v3">
      <div ref={headerRef} className="space-y-4 mb-12">
        <h2 className="section-header">{challengeAndSolutionSection.header}</h2>
        <p className="section-subtitle">{challengeAndSolutionSection.intro}</p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 md:p-8">
          <h3 className="text-lg font-semibold text-white mb-6">{problem?.title}</h3>
          {problem?.body && <BlockList items={problem.body} iconType="problem" />}
        </div>

        <div id="solution" className="glass-card p-6 md:p-8">
          <h3 className="text-lg font-semibold text-white mb-6">{solution?.title}</h3>
          {solution?.body && <BlockList items={solution.body} iconType="solution" />}
        </div>
      </div>
    </SectionLayout>
  );
}
