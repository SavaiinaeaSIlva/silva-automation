import { useState, useMemo } from 'react';
import Accordion from '../components/Accordion';
import SectionLayout from '../components/SectionLayout';
import { siteContent } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';

const INITIAL_COUNT = 5;

export default function FAQSection() {
  const faq = siteContent.faq;
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const items = useMemo(
    () =>
      Object.values(faq.categories)
        .flat()
        .map((qa) => ({ q: qa.q, a: qa.a })),
    [faq.categories]
  );

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [items, searchQuery]);

  const displayItems = useMemo(() => {
    if (searchQuery.trim() !== '') return filteredItems;
    return showAll ? filteredItems : filteredItems.slice(0, INITIAL_COUNT);
  }, [filteredItems, searchQuery, showAll]);

  const hasMore = !searchQuery.trim() && filteredItems.length > INITIAL_COUNT;

  // Animation refs
  const headerRef = useScrollReveal({ y: 30, duration: 0.7 });
  const searchRef = useScrollReveal({ y: 20, duration: 0.5, delay: 0.1 });
  const accordionRef = useScrollReveal({ y: 30, duration: 0.6, delay: 0.2 });

  return (
    <SectionLayout id="faq" lightLeaks="v3">
      <div ref={headerRef}>
        <h2 className="section-header">{faq.title}</h2>
        <p className="section-subtitle">{faq.intro}</p>
      </div>

      <div ref={searchRef} className="mt-6 max-w-xl mx-auto">
        <label htmlFor="faq-search" className="sr-only">
          Search FAQ
        </label>
        <input
          id="faq-search"
          type="search"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-input"
          aria-label="Search FAQ"
        />
      </div>

      <div ref={accordionRef} className="mt-6">
        <Accordion items={displayItems} idPrefix="faq" />
      </div>

      {hasMore && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="text-muted hover:text-white text-sm underline transition-colors"
          >
            {showAll ? 'See less' : `See all (${filteredItems.length} questions)`}
          </button>
        </div>
      )}
      {searchQuery.trim() !== '' && filteredItems.length === 0 && (
        <p className="mt-6 text-center text-muted">No questions match your search.</p>
      )}
    </SectionLayout>
  );
}
