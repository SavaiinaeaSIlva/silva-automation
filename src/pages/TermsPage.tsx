import { FileText } from 'lucide-react';
import LegalLayout from '../components/LegalLayout';
import Terms from '../sections/Terms';

export default function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions" icon={FileText}>
      <Terms />
    </LegalLayout>
  );
}
