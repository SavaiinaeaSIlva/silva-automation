import React, { useEffect } from 'react';
import { ArrowLeft, Shield, FileText, Cookie, DollarSign } from 'lucide-react';

export default function Legal() {
  
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const Section = ({ id, icon: Icon, title, children }) => (
    <div id={id} className="scroll-mt-32 mb-16 border-b border-slate-200 pb-16 last:border-0">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 rounded-lg text-[#051650]">
          <Icon size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <p className="text-sm text-slate-500">Last Updated: January 15, 2025</p>
        </div>
      </div>
      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-slate-600 hover:text-[#051650] transition-colors font-bold text-sm">
            <ArrowLeft size={18} />
            Back to Home
          </a>
          <span className="font-bold text-slate-400 text-sm hidden sm:block">
            Silva Automation Legal
          </span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* 1. TERMS AND CONDITIONS */}
        <Section id="terms" icon={FileText} title="Terms and Conditions">
          <p className="text-sm text-slate-500 italic mb-4">Effective Date: January 15, 2025</p>
          
          <p>
            This website, www.silvaautomation.com (the "Site"), and the services offered through it, are owned and operated by Silva Automation, a sole proprietorship organized under Hawaii law ("Silva Automation," "we," "us," or "our"). By accessing or using our Site and services, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you must not use our Site or services.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">1. Description of Services</h3>
          <p>
            Silva Automation provides business-to-business automation services, including but not limited to workflow optimization, CRM setup, and automated marketing campaigns. The specific scope of work for each project will be outlined in a separate Service Agreement and a Project Proposal, which are incorporated into these Terms by reference.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">2. User Obligations</h3>
          <p>
            You agree to use our Site and services only for lawful purposes and in a manner that does not infringe upon the rights of others. You agree to provide accurate and complete information when using our contact forms or engaging our services. You are prohibited from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using the Site in any way that could damage, disable, overburden, or impair the Site.</li>
            <li>Attempting to gain unauthorized access to any part of the Site or our systems.</li>
            <li>Using any automated means, such as robots, spiders, or scrapers, to access the Site without our express written permission.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">3. Intellectual Property</h3>
          <p>
            All content on the Site, including text, graphics, logos, images, and software, is the property of Silva Automation or its content suppliers and is protected by intellectual property laws. As per our Service Agreement, upon full and final payment, the client will own the custom work product created specifically for them. Silva Automation retains ownership of all underlying code, general tools, templates, and pre-existing intellectual property used to create the work product.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">4. Payments, Fees, and Hawaii General Excise Tax (GET)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>All prices for services are quoted in United States Dollars (USD).</li>
            <li>Services are subject to a fixed price as detailed in the Project Proposal.</li>
            <li>You agree to pay all fees and charges associated with your use of the services.</li>
            <li>Payment terms are Net 30 days unless otherwise specified in the Project Proposal.</li>
            <li>Late payments may be subject to a 1.5% monthly service charge.</li>
            <li>As a business operating in Hawaii, we are subject to the Hawaii General Excise Tax (GET). This is a tax on the gross income received by a business for the privilege of doing business in Hawaii. It is not a sales tax on the customer. We may visibly pass on the cost of the GET to you, as is a common practice in Hawaii, and this will be added to your invoices as required. The GET rate for services is typically 4.712% (4% state + 0.5% Oahu county surcharge + applicable district surcharges).</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">5. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by Hawaii law, Silva Automation's total liability to you for all damages, losses, and causes of action shall not exceed the total amount paid by you to Silva Automation for the specific service giving rise to the liability. Silva Automation shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our services.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">6. Indemnification</h3>
          <p>
            You agree to indemnify and hold harmless Silva Automation, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your use of our services or your violation of these Terms.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">7. Termination</h3>
          <p>
            We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the services will cease immediately. You may terminate services by providing 30 days written notice. In the event of termination by either party, you remain liable for all fees incurred up to the termination date.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">8. Governing Law and Dispute Resolution</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Hawaii, without regard to its conflict of law principles. Any disputes arising under or in connection with these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, conducted in Honolulu, Hawaii. Notwithstanding the foregoing, either party may seek injunctive relief in the state or federal courts located in Honolulu, Hawaii.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">9. Changes to Terms</h3>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date" at the top. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">10. Force Majeure</h3>
          <p>
            Silva Automation shall not be liable for any failure or delay in performance under these Terms which is due to fire, flood, earthquake, tsunami, volcanic activity, elements of nature or acts of God, acts of war, terrorism, labor strikes, government actions, pandemic, or any other cause which is beyond the reasonable control of Silva Automation, whether or not similar to the foregoing.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">11. Severability</h3>
          <p>
            If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. The invalid or unenforceable provision shall be replaced with a valid and enforceable provision that most closely approximates the intent of the original provision.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">12. Entire Agreement</h3>
          <p>
            These Terms, together with any Service Agreement and Project Proposal, constitute the entire agreement between you and Silva Automation regarding the use of our services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">13. Warranty Disclaimer</h3>
          <p className="font-semibold">
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. SILVA AUTOMATION MAKES NO WARRANTY THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">14. Business License Compliance</h3>
          <p>
            Silva Automation operates in compliance with all applicable Hawaii state and Oahu county business licensing requirements. Our Hawaii General Excise Tax License number is GE-003-844-1472-01 and is available upon request.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">15. Contact Information</h3>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <div className="bg-slate-100 p-4 rounded-lg mt-3">
            <p><strong>Email:</strong> contact@silvaautomation.com</p>
            <p><strong>Phone:</strong> (808) 726-6422</p>
            <p><strong>Address:</strong> Silva Automation, 94-207 Waipahu Street #323, Waipahu, HI 96797</p>
          </div>
        </Section>

        {/* 2. PRIVACY POLICY */}
        <Section id="privacy" icon={Shield} title="Privacy Policy">
          <p className="text-sm text-slate-500 italic mb-4">Effective Date: January 15, 2025</p>
          
          <p>
            This Privacy Policy describes how Silva Automation ("we," "us," or "our") collects, uses, and discloses information from users of our website and services, located at www.silvaautomation.com. We are committed to protecting your privacy and complying with all applicable laws, including the data protection principles of the State of Hawaii and federal privacy regulations.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">1. Information We Collect</h3>
          <p>We collect information to provide and improve our services and to communicate with you. The types of information we may collect include:</p>
          
          <p><strong>Personal Information:</strong> This includes data you voluntarily provide to us via contact forms, project inquiries, or scheduling software. This may include your name, company name, email address, phone number, business address, and any other information you provide in your communications.</p>
          
          <p><strong>Project and Service Data:</strong> We collect and process data required to perform our automation services, which may include customer relationship management (CRM) data, marketing campaign data, business process information, and other business information necessary to complete a project. This data is handled with strict confidentiality.</p>
          
          <p><strong>Usage and Technical Data:</strong> When you visit our website, we automatically collect certain information about your device and your activity. This includes your IP address, browser type, device type, operating system, referring website, pages visited, time and date of visit, and data about your interaction with our site.</p>
          
          <p><strong>Financial Information:</strong> We collect billing information necessary to process payments, including billing addresses and payment method details (processed through secure third-party payment processors).</p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">2. How We Use Your Information</h3>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Delivery:</strong> To provide, maintain, and improve our automation services</li>
            <li><strong>Communication:</strong> To respond to your inquiries, send project updates, and provide customer support</li>
            <li><strong>Business Operations:</strong> To process payments, manage contracts, conduct business analysis, and maintain business records</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes, including Hawaii business licensing requirements</li>
            <li><strong>Marketing:</strong> To send you information about our services (with your consent where required)</li>
            <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">3. Information Sharing and Disclosure</h3>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
          
          <p><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting business (e.g., payment processors, hosting providers, email service providers, project management tools). These providers are contractually bound to protect your information.</p>
          
          <p><strong>Legal Requirements:</strong> We may disclose information when required by law, court order, subpoena, or government request, or to protect our rights, property, or safety.</p>
          
          <p><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, customer information may be transferred as part of the business transaction.</p>
          
          <p><strong>Consent:</strong> With your explicit consent for specific purposes.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">4. Data Security</h3>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, secure hosting, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">5. Data Retention</h3>
          <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Project-related data is typically retained for 7 years after project completion for business and legal purposes</li>
            <li>Contact information is retained until you request deletion or unsubscribe from communications</li>
            <li>Financial records are retained according to Hawaii business record retention requirements</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">6. Your Rights</h3>
          <p>You have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal and contractual obligations)</li>
            <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
            <li><strong>Objection:</strong> Object to certain processing activities</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
          </ul>
          <p>To exercise these rights, contact us at contact@silvaautomation.com.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">7. Third-Party Links</h3>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">8. Data Breach Notification</h3>
          <p>
            In the event of a data breach that may affect your personal information, we will notify you and relevant authorities as required by applicable law. We will provide notice without unreasonable delay and in no case later than 72 hours after becoming aware of the breach, unless the personal data breach is unlikely to result in a risk to your rights and freedoms.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">9. Children's Privacy</h3>
          <p>
            Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to remove such information from our servers. If you believe we have collected information from a child under 13, please contact us immediately.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">10. International Data Transfers</h3>
          <p>
            If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. By using our services, you consent to the transfer of your information to the United States and processing in accordance with this Privacy Policy.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">11. Hawaii-Specific Considerations</h3>
          <p>
            As a Hawaii-based business, we comply with all applicable Hawaii state privacy laws and regulations. We maintain our primary data processing operations within the United States and follow federal privacy guidelines that may exceed Hawaii state requirements.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">12. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new Privacy Policy on this page, updating the "Effective Date," and sending email notification for significant changes. We encourage you to review this Privacy Policy regularly.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">13. Contact Information</h3>
          <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
          <div className="bg-slate-100 p-4 rounded-lg mt-3">
            <p><strong>Email:</strong> contact@silvaautomation.com</p>
            <p><strong>Phone:</strong> (808) 726-6422</p>
            <p><strong>Address:</strong> Silva Automation, 94-207 Waipahu Street #323, Waipahu, HI 96797</p>
          </div>
        </Section>

        {/* 3. REFUND & CANCELLATION POLICY */}
        <Section id="refunds" icon={DollarSign} title="Refund & Cancellation Policy">
          <p className="text-sm text-slate-500 italic mb-4">Effective Date: January 15, 2025</p>
          
          <p>
            This Refund & Cancellation Policy outlines the conditions under which Silva Automation ("we," "us," or "our") provides refunds and allows for the cancellation of services. This policy is governed by Hawaii state law and incorporates fair business practices for service-based businesses.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">1. General Principles</h3>
          <p>
            As a service-based business, our work cannot be "returned" like a physical product. Therefore, refunds are considered only when there is a documented failure on our part to meet the agreed-upon project specifications as outlined in the Project Proposal and Service Agreement. All refund considerations will be evaluated in accordance with Hawaii business practices and consumer protection standards.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">2. Cancellation and Refund Schedule</h3>
          
          <p><strong>Pre-Project Cancellation</strong></p>
          <p>
            <strong>Cancellation Before Work Commences:</strong> If you wish to cancel a project before any work has started, you may do so by providing written notice. A full refund will be granted, minus a 15% administrative fee to cover initial consultation, proposal drafting, project planning, and administrative costs. This request must be submitted in writing within 15 days of the initial payment.
          </p>
          
          <p><strong>During-Project Cancellation</strong></p>
          <p>
            <strong>Cancellation During the Project:</strong> Once a project has started, cancellation is subject to the work completed at the time of the cancellation request. We will:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Assess all work completed to date</li>
            <li>Retain all payments made for work completed up to that point</li>
            <li>Provide a detailed breakdown of completed work and associated costs</li>
            <li>Deliver any completed deliverables or work products</li>
            <li>Return any unused portions of payments for incomplete work phases</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">3. Refund Eligibility</h3>
          <p>Refunds may be considered in the following circumstances:</p>
          
          <p><strong>Non-delivery of Services:</strong> If we fail to deliver the agreed-upon services within the timeframe specified in the Project Proposal (plus any mutually agreed extensions), and no alternative arrangement has been made.</p>
          
          <p><strong>Material Breach:</strong> If there is a documented material breach of the Service Agreement on our part that substantially affects the project deliverables and cannot be reasonably remedied.</p>
          
          <p><strong>Technical Impossibility:</strong> If it becomes technically impossible to complete the project as specified through no fault of the client, and alternative solutions are not acceptable.</p>
          
          <p><strong>Failure to Meet Specifications:</strong> If delivered work materially fails to meet the agreed-upon specifications as documented in the Project Proposal, and we are unable to correct the deficiencies within a reasonable timeframe.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">4. Refund Process</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>All refund requests must be submitted in writing to contact@silvaautomation.com</li>
            <li>Include detailed reasons for the refund request</li>
            <li>Provide supporting documentation where applicable</li>
            <li>We will acknowledge receipt within 3 business days</li>
            <li>We will review and respond to refund requests within 10 business days</li>
            <li>If approved, refunds will be processed within 30 days using the original payment method</li>
            <li>If the original payment method is unavailable, alternative arrangements will be made</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">5. Non-Refundable Items</h3>
          <p>The following are generally not eligible for refunds:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom work that has been delivered and meets the agreed specifications</li>
            <li>Third-party software licenses, subscriptions, or tools purchased specifically for your project</li>
            <li>Time spent on consultation, planning, research, and project setup</li>
            <li>Work completed in accordance with approved project changes or scope modifications</li>
            <li>Services rendered due to client-requested changes or delays</li>
            <li>Hawaii General Excise Tax (GET) paid to the state</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">6. Dispute Resolution</h3>
          <p>If you disagree with our refund decision:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We will attempt to resolve the matter through good faith negotiation</li>
            <li>If no resolution is reached, disputes may be subject to mediation in Honolulu, Hawaii</li>
            <li>As a last resort, disputes will be resolved through binding arbitration as outlined in our Terms and Conditions</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">7. Client Responsibilities</h3>
          <p>To be eligible for refund consideration, clients must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide timely feedback and approvals as outlined in the project timeline</li>
            <li>Respond to communications within the timeframes specified in the Service Agreement</li>
            <li>Provide necessary access, information, and materials required for project completion</li>
            <li>Pay all invoices according to the agreed payment terms</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">8. Partial Refunds</h3>
          <p>In cases where partial work has been completed satisfactorily, partial refunds may be calculated as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Total project cost minus completed work phases</li>
            <li>Minus administrative costs and non-refundable items</li>
            <li>Based on the milestone or phase completion structure outlined in the Project Proposal</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">9. Force Majeure Impact on Refunds</h3>
          <p>
            In cases where project delays or cancellations are due to force majeure events (natural disasters, government actions, pandemics, etc.), refund eligibility will be evaluated based on:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The extent of work completed before the force majeure event</li>
            <li>The ability to resume or complete the project after the event</li>
            <li>Mutual agreement on project modifications or timeline adjustments</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">10. Performance Guarantee</h3>
          <p>
            We offer a 90-day performance guarantee. If the automation breaks or fails to perform the scope defined in the Design phase due to our code, we will fix it at no cost. This does not cover breakages caused by third-party API changes (e.g., OpenAI, Gmail, or other platforms changing their rules or APIs).
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">11. Hawaii Consumer Protection Compliance</h3>
          <p>
            This policy complies with Hawaii Revised Statutes Chapter 481A (Unfair or Deceptive Acts or Practices) and Chapter 481B (Uniform Deceptive Trade Practices Act), ensuring fair treatment of consumers while protecting legitimate business interests.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">12. Changes to This Policy</h3>
          <p>
            We reserve the right to modify this Refund & Cancellation Policy at any time. Changes will be effective immediately upon posting on our website with an updated "Effective Date." Existing contracts will be governed by the policy in effect at the time of contract execution.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">13. Contact Information</h3>
          <p>For refund requests, questions, or concerns about this policy, please contact us at:</p>
          <div className="bg-slate-100 p-4 rounded-lg mt-3">
            <p><strong>Email:</strong> contact@silvaautomation.com</p>
            <p><strong>Phone:</strong> (808) 726-6422</p>
            <p><strong>Address:</strong> Silva Automation, 94-207 Waipahu Street #323, Waipahu, HI 96797</p>
          </div>
        </Section>

        {/* 4. COOKIE POLICY */}
        <Section id="cookies" icon={Cookie} title="Cookie Policy">
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
        </Section>

      </main>

      <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Silva Automation. All rights reserved.
      </footer>
    </div>
  );
}