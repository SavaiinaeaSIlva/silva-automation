import { Shield } from 'lucide-react';
import LegalLayout from '../components/LegalLayout';
import Privacy from '../sections/Privacy';

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" icon={Shield}>
      <Privacy />
    </LegalLayout>
  );
}
