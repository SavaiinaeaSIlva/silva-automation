import { DollarSign } from 'lucide-react';
import LegalLayout from '../components/LegalLayout';
import Refunds from '../sections/Refunds';

export default function RefundsPage() {
  return (
    <LegalLayout title="Refund & Cancellation Policy" icon={DollarSign}>
      <Refunds />
    </LegalLayout>
  );
}
