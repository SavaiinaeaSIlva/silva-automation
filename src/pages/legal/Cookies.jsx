import React from 'react';
import { Cookie } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
      <p className="text-sm text-slate-500 italic mb-4">Effective Date: January 15, 2025</p>

      <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">1. What Are Cookies?</h3>
      <p>
        Cookies are small text files that are placed on your device (computer, phone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners. Cookies can be "session" cookies, which are temporary and deleted when you close your browser, or "persistent" cookies, which remain on your device for a set period.
      </p>

      <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">2. How We Use Cookies</h3>
      <p>We use cookies for several purposes to enhance your experience and improve our services:</p>
      
      <p><strong>Essential Cookies:</strong> These cookies are strictly necessary for the operation of our website. They enable core functions such as website navigation, access to secure areas, and basic site functionality. The website cannot function properly without these cookies.</p>
      
      <p><strong>Analytics Cookies:</strong> We use third-party analytics services, such as Google Analytics, to collect information about how users interact with our website. This data helps us understand site traffic, measure the performance of our content, and identify areas for improvement. The information collected is aggregated and does not directly identify you.</p>
      
      <p><strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences, settings, and form inputs when you return to our website.</p>
      
      <p><strong>Performance Cookies:</strong> These cookies collect information about how visitors use our website, such as which pages are most popular, loading times, and if users encounter error messages. This helps us improve our website's performance and user experience.</p>

      <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">3. Third-Party Cookies</h3>
      <p>We may allow certain third-party services to place cookies on your device through our website. These include:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
        <li><strong>Social Media Plugins:</strong> If we include social media buttons or feeds (Facebook, LinkedIn, Twitter)</li>
        <li><strong>Customer Support Tools:</strong> For live chat or support ticket functionality</li>
        <li><strong>Payment Processors:</strong> For secure payment processing</li>
        <li><strong>Content Delivery Networks:</strong> For faster content loading</li>
      </ul>

      <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">4. Managing Your Cookie Preferences</h3>
      <p>You have several options for managing cookies:</p>
      
      <p><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings preferences. You can typically:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Block all cookies</li>
        <li>Allow only first-party cookies</li>
        <li>Delete existing cookies</li>
        <li>Set preferences for specific websites</li>
      </ul>
      
      <p><strong>Opt-Out Tools:</strong> For specific services like Google Analytics, you can use their opt-out browser add-on or tools.</p>
      
      <p><strong>Cookie Consent:</strong> When you first visit our website, you may see a cookie consent banner allowing you to accept or decline non-essential cookies.</p>
      
      <p><strong>Popular Browser Cookie Management:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Chrome: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
        <li>Firefox: Settings &gt; Privacy & Security &gt; Cookies and Site Data</li>
        <li>Safari: Preferences &gt; Privacy &gt; Cookies and website data</li>
        <li>Edge: Settings &gt; Cookies and site permissions</li>
      </ul>

      <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">5. Impact of Disabling Cookies</h3>
      <p>Please note that if you disable cookies, some features of our website may not function properly, including:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Remembering your preferences</li>
        <li>Staying logged in to secure areas</li>
        <li>Proper functioning of contact forms</li>
        <li>Website analytics that help us improve user experience</li>
      </ul>

      <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">6. Cookie Retention</h3>
      <p>Different cookies have different retention periods:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
        <li><strong>Analytics cookies:</strong> Typically retained for 24-26 months</li>
        <li><strong>Functional cookies:</strong> Usually retained for 1-2 years</li>
        <li><strong>Essential cookies:</strong> Retained as needed for site functionality</li>
      </ul>

      <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">7. Updates to This Cookie Policy</h3>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. Please revisit this page periodically to stay informed about our use of cookies. The "Effective Date" at the top indicates when the policy was last updated.
      </p>

      <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">8. Contact Us</h3>
      <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
      <div className="bg-slate-100 p-4 rounded-lg mt-3">
        <p><strong>Email:</strong> contact@silvaautomation.com</p>
        <p><strong>Phone:</strong> (808) 726-6422</p>
        <p><strong>Address:</strong> Silva Automation, 94-207 Waipahu Street #323, Waipahu, HI 96797</p>
      </div>
    </div>
  );
}
