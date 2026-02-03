import { siteContent } from '../content/siteContent';
import { legalContent } from '../content/legalContent';
import LegalSection from '../components/LegalSection';

export default function Refunds() {
  const { effectiveDate } = siteContent.legal;
  const { intro, sections } = legalContent.refunds;

  return (
    <div className="legal-content">
      <p className="text-sm text-white/50 italic mb-4">Effective Date: {effectiveDate}</p>
      <p>{intro}</p>
      {sections.map((section, idx) => (
        <LegalSection key={idx} section={section} />
      ))}
    </div>
  );
}
