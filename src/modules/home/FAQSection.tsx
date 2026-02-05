import { useMemo, useState } from 'react';
import { Accordion } from '@/common/components';
import { SectionLayout } from '@/components';
import { siteContent } from '@/content/siteContent';
import { useScrollReveal } from '@/hooks';

const INITIAL_COUNT = 5;

// Static items array - extracted outside component since siteContent never changes
const items = Object.values(siteContent.faq.categories)
  .flat()
  .map((qa) => ({ q: qa.q, a: qa.a }));

export default function FAQSection() {
  const faq = siteContent.faq;
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const displayItems = useMemo(() => {
    if (searchQuery.trim() !== '') return filteredItems;
    return showAll ? filteredItems : filteredItems.slice(0, INITIAL_COUNT);
  }, [filteredItems, searchQuery, showAll]);

  const hasMore = !searchQuery.trim() && filteredItems.length > INITIAL_COUNT;

  // Animation refs
  const headerRef = useScrollReveal({ y: 30, duration: 0.7 });
  const searchRef = useScrollReveal({ y: 20, duration: 0.5, delay: 0.1 });
  const accordionRef = useScrollReveal({ y: 30, duration: 0.6, delay: 0.2 });

  const clearSearch = () => setSearchQuery('');

  return (
    <SectionLayout id="faq">
      <div ref={headerRef}>
        <h2 className="section-header">{faq.title}</h2>
        <p className="section-subtitle">{faq.intro}</p>
      </div>

      <div ref={searchRef} className="mt-6 max-w-xl mx-auto relative">
        <label htmlFor="faq-search" className="sr-only">
          {faq.searchLabelSr}
        </label>
        <input
          id="faq-search"
          type="search"
          placeholder={faq.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-input pr-10"
          aria-label={faq.searchAriaLabel}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white transition-colors p-1"
            aria-label="Clear search"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      <div ref={accordionRef} className="mt-6" role="group" aria-label="Frequently asked questions">
        <Accordion items={displayItems} idPrefix="faq" />
      </div>

      {hasMore && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="text-muted hover:text-white text-sm underline transition-colors"
          >
            {showAll
              ? faq.seeLess
              : faq.seeAllTemplate.replace('{{count}}', String(filteredItems.length))}
          </button>
        </div>
      )}
      {searchQuery.trim() !== '' && filteredItems.length === 0 && (
        <div className="mt-6 text-center">
          <p className="text-muted mb-3">{faq.noResults}</p>
          <button
            type="button"
            onClick={clearSearch}
            className="text-white text-sm underline hover:no-underline transition-all"
          >
            Clear search
          </button>
        </div>
      )}
    </SectionLayout>
  );
}
