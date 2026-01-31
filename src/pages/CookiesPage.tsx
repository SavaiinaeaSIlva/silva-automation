import { Cookie } from 'lucide-react';
import LegalLayout from '../components/LegalLayout';
import Cookies from '../sections/Cookies';

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" icon={Cookie}>
      <Cookies />
    </LegalLayout>
  );
}
