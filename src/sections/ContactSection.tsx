import { ArrowUpRight, Check } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import SectionLayout from '../components/SectionLayout';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

export default function ContactSection() {
  const contact = siteContent.contact;

  // Animation refs
  const headerRef = useScrollReveal({ y: 30, duration: 0.7 });
  const cardRef = useScrollReveal({ y: 40, duration: 0.6, delay: 0.1 });
  const benefitsRef = useStaggerReveal<HTMLUListElement>({
    y: 20,
    duration: 0.4,
    stagger: 0.1,
    delay: 0.2,
    childSelector: 'li',
  });

  return (
    <SectionLayout id="contact" lightLeaks="v1">
      <div ref={headerRef}>
        <h2 className="section-header">{contact.title}</h2>
        <p className="section-subtitle">{contact.subtitle}</p>
      </div>

      <div ref={cardRef} className="mt-8 max-w-xl mx-auto glass-card p-6 md:p-8 overflow-hidden">
        <p className="text-white/80 text-sm font-medium mb-4 text-left">{contact.whatToExpect}</p>
        <ul ref={benefitsRef} className="space-y-3 mb-8 text-left">
          {contact.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-white" aria-hidden="true" />
              </div>
              <span className="text-muted">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-white/10 pt-6 flex justify-center">
          <a
            href={contact.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-primary"
          >
            {contact.cta.text}
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </SectionLayout>
  );
}
