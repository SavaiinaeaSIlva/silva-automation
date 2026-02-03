import { Cookie } from 'lucide-react';
import LegalLayout from '../components/LegalLayout';
import Cookies from '../sections/Cookies';
import { siteContent } from '../content/siteContent';

export default function CookiesPage() {
  return (
    <LegalLayout title={siteContent.legal.pages.cookies} icon={Cookie}>
      <Cookies />
    </LegalLayout>
  );
}
