import { FileText } from 'lucide-react';
import LegalLayout from '../components/LegalLayout';
import Terms from '../sections/Terms';
import { siteContent } from '../content/siteContent';

export default function TermsPage() {
  return (
    <LegalLayout title={siteContent.legal.pages.terms} icon={FileText}>
      <Terms />
    </LegalLayout>
  );
}
