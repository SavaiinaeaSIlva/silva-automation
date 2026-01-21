// FAQItem component - Single FAQ accordion item with smooth animation

function FAQItem({ id, question, answer, isOpen, onToggle }) {
  return (
    <article className="border-b border-white/10 last:border-b-0">
      <button 
        onClick={() => onToggle(id)}
        className="w-full py-4 flex items-center justify-between text-left bg-transparent border-none cursor-pointer group"
      >
        <span className="faq-question text-base font-medium text-white pr-4 group-hover:text-[var(--color-accent)] transition-colors">{question}</span>
        <span className={`faq-toggle transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-body text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export default FAQItem;
