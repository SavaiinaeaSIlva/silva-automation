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
        const btnId = `${idPrefix}-btn-${i}`;
        const panelId = `${idPrefix}-panel-${i}`;

        return (
          <div key={item.q} className="glass-card p-4">
            <h4>
              <button
                id={btnId}
                aria-controls={panelId}
                aria-expanded={openIndex === i}
                onClick={() => toggle(i)}
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
              className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out"
              style={{
                gridTemplateRows: openIndex === i ? '1fr' : '0fr',
                opacity: openIndex === i ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div className="pt-3 pb-1 text-muted border-t border-white/10 mt-2">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
