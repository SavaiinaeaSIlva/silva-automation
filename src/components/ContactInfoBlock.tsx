import { siteContent } from '../content/siteContent';

export default function ContactInfoBlock() {
  const { contactEmail, contactPhone, contactAddress } = siteContent.legal;

  return (
    <div className="bg-white/10 p-4 rounded-lg mt-3">
      <p>
        <strong>Email:</strong> {contactEmail}
      </p>
      <p>
        <strong>Phone:</strong> {contactPhone}
      </p>
      <p>
        <strong>Address:</strong> {contactAddress}
      </p>
    </div>
  );
}
