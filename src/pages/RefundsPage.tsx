import { DollarSign } from 'lucide-react';
import LegalLayout from '../components/LegalLayout';
import Refunds from '../sections/Refunds';
import { siteContent } from '../content/siteContent';

export default function RefundsPage() {
  return (
    <LegalLayout title={siteContent.legal.pages.refunds} icon={DollarSign}>
      <Refunds />
    </LegalLayout>
  );
}
