import { Shield } from 'lucide-react';
import LegalLayout from '../components/LegalLayout';
import Privacy from '../sections/Privacy';
import { siteContent } from '../content/siteContent';

export default function PrivacyPage() {
  return (
    <LegalLayout title={siteContent.legal.pages.privacy} icon={Shield}>
      <Privacy />
    </LegalLayout>
  );
}
