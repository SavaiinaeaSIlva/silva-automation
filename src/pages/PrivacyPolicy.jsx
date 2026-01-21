// Privacy Policy page
import { Navbar, Footer, BackToHome } from "../components/layout";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-stone-900 to-black">
      <BackToHome />
      <Navbar />
      <main className="flex-1">
        <div className="section-wrapper pt-32">
          <div className="container-main">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title--lg mb-2 text-white">Privacy Policy</h1>
              <p className="text-muted text-sm mb-8">Effective Date: October 7, 2025</p>
              
              <div className="text-body space-y-8">
                <p>Silva Automation LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, www.silvaautomation.com (the "Site"), and use our services.</p>

                <section>
                  <h2 className="section-title mb-4">1. Information We Collect</h2>
                  <p>We may collect information about you in various ways. The information we may collect includes:</p>
                  
                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Personal Data:</h3>
                  <p className="mb-4">Personally identifiable information such as your name, company name, email address, telephone number, billing address, and payment information that you voluntarily provide when you fill out a contact form, request a quote, sign a Service Agreement, or otherwise communicate with us.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Derivative Data:</h3>
                  <p className="mb-4">Information our servers automatically collect when you access the Site, including your IP address, browser type, operating system, access times, pages viewed, referring website, and device information. This information is collected via Google Analytics to help us understand how visitors use our Site.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Client Project Data:</h3>
                  <p className="mb-4">To perform our automation services, we may require temporary access to your business systems and data, which may include confidential information about your operations, customers, finances, and proprietary processes. This data is handled with strict confidentiality as outlined in our Terms and Conditions and is accessed only to the extent necessary to perform the contracted services.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Communications Data:</h3>
                  <p className="mb-4">Records of your communications with us, including emails, phone conversations, and support tickets.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Third-Party Credentials:</h3>
                  <p>Login credentials and API keys for third-party services that you provide to us for the purpose of implementing automation solutions. These are stored securely and used only as authorized.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">2. Use of Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mt-4">
                    <li>Respond to your inquiries and provide the services you have requested</li>
                    <li>Create and manage your account and Service Agreements</li>
                    <li>Process payments and fulfill our contractual obligations</li>
                    <li>Provide technical support and customer service</li>
                    <li>Send you project updates, invoices, and service-related communications</li>
                    <li>Improve our services, website functionality, and user experience</li>
                    <li>Monitor and analyze usage patterns and trends</li>
                    <li>Detect, prevent, and address technical issues or security threats</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Send you marketing communications about our services (with your consent, and you may opt out at any time)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="section-title mb-4">3. Legal Basis for Processing (for applicable jurisdictions)</h2>
                  <p>We process your personal information based on:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mt-4">
                    <li><strong>Contract Performance:</strong> Processing necessary to fulfill our Service Agreement with you</li>
                    <li><strong>Legitimate Interests:</strong> Improving our services, marketing, and business operations</li>
                    <li><strong>Legal Obligations:</strong> Complying with applicable laws and regulations</li>
                    <li><strong>Consent:</strong> Where you have provided explicit consent for specific processing activities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="section-title mb-4">4. Disclosure of Your Information</h2>
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:</p>
                  
                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Service Providers:</h3>
                  <p className="mb-4">We may share your information with trusted third-party service providers who perform services on our behalf, including:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li>Google Analytics (website analytics)</li>
                    <li>Payment processors (for handling transactions)</li>
                    <li>Email service providers (for communications)</li>
                    <li>Cloud hosting providers (for data storage)</li>
                  </ul>
                  <p className="mb-4">These third parties are contractually obligated to protect your information and use it only for the purposes we specify.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Legal Requirements:</h3>
                  <p className="mb-4">We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., subpoenas, court orders, or legal process), or to protect the rights, property, and safety of Silva Automation, our clients, or others.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Business Transfers:</h3>
                  <p className="mb-4">In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the successor entity, and you will be notified via email and/or prominent notice on our Site.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">With Your Consent:</h3>
                  <p>We may share your information with third parties when we have your explicit consent to do so.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">5. Data Security and Retention</h2>
                  <p>We implement administrative, technical, and physical security measures designed to protect your personal information, including:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure credential storage using industry-standard encryption</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Regular security assessments and updates</li>
                    <li>Secure disposal of information when no longer needed</li>
                  </ul>
                  <p className="mb-4">Despite our efforts, no security measures are completely impenetrable, and we cannot guarantee absolute security.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Data Retention:</h3>
                  <p className="mb-4">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Client project data is typically retained for the duration of the project plus three years, unless otherwise specified in a Service Agreement. You may request earlier deletion of your data, subject to our legal and contractual obligations.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Data Breach Notification:</h3>
                  <p>In the event of a data breach that compromises your personal information, we will comply with all notification requirements under Hawaii law (HRS §487N) and notify affected individuals without unreasonable delay.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">6. Your Rights Regarding Your Information</h2>
                  <p>Depending on your jurisdiction, you may have the following rights:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mt-4">
                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                    <li><strong>Data Portability:</strong> Request a copy of your personal information in a structured, machine-readable format</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where we rely on consent as the legal basis</li>
                  </ul>
                  
                  <p className="mt-4">To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days. We may require verification of your identity before processing your request.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Marketing Opt-Out:</h3>
                  <p>You may opt out of receiving marketing communications from us at any time by clicking the "unsubscribe" link in our emails or contacting us directly. Please note that you cannot opt out of service-related communications (e.g., project updates, invoices).</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">7. Third-Party Websites and Services</h2>
                  <p>Our Site may contain links to third-party websites and services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">8. Cookies and Tracking Technologies</h2>
                  <p>Please refer to our Cookie Policy for detailed information about how we use cookies and similar tracking technologies.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">9. Do Not Track Signals</h2>
                  <p>Our Site does not currently respond to "Do Not Track" signals from browsers. However, you can manage your cookie preferences through our cookie consent banner and your browser settings.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">10. International Data Transfers</h2>
                  <p>Your information may be transferred to and processed in locations outside your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to the transfer of your information to the United States and other locations where we operate.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">11. Children's Privacy</h2>
                  <p>Our services are intended for business use and are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">12. California Privacy Rights</h2>
                  <p>If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA). Please contact us for more information about exercising these rights.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">13. Changes to This Privacy Policy</h2>
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Effective Date." Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">14. Contact Us</h2>
                  <p>If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
                  <div className="mt-4 pl-4 border-l-2 border-action">
                    <p><strong>Silva Automation LLC</strong></p>
                    <p>Email: contact@silvaautomation.com</p>
                    <p>Phone: (808) 726-6244</p>
                    <p>Mail: 94-207 Waipahu Street #323, Waipahu, HI 96797</p>
                    <p>EIN: 41-3619246</p>
                  </div>
                </section>

                <section className="pt-8 border-t border-white/10">
                  <p className="text-muted text-sm">Last updated: October 7, 2025</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
