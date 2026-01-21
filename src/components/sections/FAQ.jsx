// FAQ component - FAQ section with contact form and search
import { useState, useMemo } from "react";
import { faqContent } from "../../data";
import { Section } from "../layout";
import FAQItem from "./FAQItem";
import ContactForm from "./ContactForm";

function FAQ() {
  const [openId, setOpenId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Filter questions based on search query
  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) {
      // No search: show only first 5 questions
      return faqContent.questions.slice(0, 5);
    }
    
    // When searching: filter all questions
    const query = searchQuery.toLowerCase().trim();
    return faqContent.questions.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery("");
    setOpenId(null);
  };

  return (
    <Section id="faq">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-xl md:text-2xl font-bold text-white text-center mb-6">
          Frequently Asked Questions
        </h2>
        
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <div className="relative">
              <input
                type="search"
                id="faq-search-input"
                name="faq-search"
                placeholder="Search all FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 pl-12 pr-10 text-sm bg-white/5 border border-white/20 
                         rounded-lg text-white placeholder:text-white/50
                         focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] 
                         focus:border-transparent transition-all duration-200"
                autoComplete="off"
                aria-label="Search frequently asked questions"
                aria-describedby="search-status"
              />
              
              {/* Search Icon */}
              <svg 
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-white/60" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" 
                />
              </svg>
              
              {/* Clear Button */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* Status Message - Hidden from screen readers but available for announcements */}
            <div className="mt-2 text-center">
              <p 
                id="search-status" 
                className="text-sm text-white/70"
                aria-live="polite"
                aria-atomic="true"
              >
                {searchQuery ? (
                  <>
                    Found <span className="font-semibold text-white">{filteredQuestions.length}</span> result{filteredQuestions.length !== 1 ? "s" : ""}
                    {searchQuery && (
                      <span className="text-white/50"> for "{searchQuery}"</span>
                    )}
                  </>
                ) : (
                  <>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left column - FAQ */}
          <div className="glass-card glass-card--sm">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((item) => (
                <FAQItem
                  key={item.id}
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === item.id}
                  onToggle={handleToggle}
                />
              ))
            ) : (
              // Empty state when no search results
              <div className="text-center py-8">
                <p className="text-white/70">No FAQs match your search. Try a different term.</p>
              </div>
            )}
          </div>
          
          {/* Right column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

export default FAQ;