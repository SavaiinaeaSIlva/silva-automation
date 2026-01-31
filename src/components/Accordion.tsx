import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  q: string;
  a: string;
};

export default function Accordion({
  items,
  idPrefix = 'acc',
}: {
  items: FAQItem[];
  idPrefix?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const btnId = `${idPrefix}-btn-${item.q.slice(0, 30).replace(/\W+/g, '-')}`;
        const panelId = `${idPrefix}-panel-${item.q.slice(0, 30).replace(/\W+/g, '-')}`;

        return (
          <div key={item.q} className="glass-card p-4">
            <h4>
              <button
                id={btnId}
                aria-controls={panelId}
                aria-expanded={openIndex === i}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
                className="w-full text-left py-2 font-semibold flex items-center justify-between text-text-main"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`ml-4 text-muted select-none transition-transform duration-300 transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h4>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                openIndex === i ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-3 pb-1 text-muted border-t border-white/10 mt-2">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
