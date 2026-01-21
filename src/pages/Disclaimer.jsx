// Refund & Cancellation Policy page
import { Navbar, Footer, BackToHome } from "../components/layout";

function RefundCancellationPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-stone-900 to-black">
      <BackToHome />
      <Navbar />
      <main className="flex-1">
        <div className="section-wrapper pt-32">
          <div className="container-main">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title--lg mb-2 text-white">Refund & Cancellation Policy</h1>
              <p className="text-muted text-sm mb-8">Effective Date: October 7, 2025</p>
              
              <div className="text-body space-y-8">
                <section>
                  <h2 className="section-title mb-4">1. General Principles</h2>
                  <p>As a service-based business, our work involves significant time, expertise, and resources that cannot be "returned" like physical products. The 50% deposit secures your project in our schedule and covers initial project setup, discovery, planning, and resource allocation. This policy outlines the circumstances under which refunds may be issued.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">2. Project Completion & Acceptance</h2>
                  
                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Project Delivery:</h3>
                  <p className="mb-4">A project is considered "complete" and ready for review upon electronic delivery of:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li>Final workflow file(s) and configurations</li>
                    <li>Comprehensive documentation</li>
                    <li>Access credentials (if applicable)</li>
                    <li>Any other deliverables specified in the Project Proposal</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Review Period:</h3>
                  <p className="mb-4">Client has <strong>7 calendar days</strong> from delivery to review the project and report any material defects. The review period commences from the timestamp of the delivery email.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Material Defects Defined:</h3>
                  <p className="mb-4">A "material defect" is a verifiable, reproducible failure of the delivered workflow to perform a core function as explicitly described and agreed upon in the Project Proposal. Material defects do NOT include:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li>Stylistic preferences or subjective design choices</li>
                    <li>Requests for features not originally specified in the Project Proposal</li>
                    <li>Issues caused by changes to third-party platforms</li>
                    <li>Performance expectations not explicitly documented</li>
                    <li>Minor cosmetic issues that don't impact functionality</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Acceptance:</h3>
                  <p className="mb-4">If no material defects are reported within the 7-day review period, the project is considered formally accepted, and the final 50% payment becomes immediately due. Late payment terms apply as outlined in the Terms and Conditions.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Cure Period:</h3>
                  <p className="mb-4">If Client identifies and reports material defects within the 7-day review period, Silva Automation will have <strong>15 business days</strong> from receipt of the defect report to remedy the issues. If Silva Automation successfully resolves the material defects within this cure period, the project will be considered accepted upon delivery of the corrected version.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Final Sale:</h3>
                  <p>Upon project acceptance (either by passage of the review period or successful cure of defects) and receipt of the final 50% payment, the sale is considered final and <strong>no refunds will be issued</strong> except as specified in Section 4 below.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">3. Cancellation by Client (Prior to Delivery)</h2>
                  <p>Client may terminate the Service Agreement at any point before final delivery of the project by providing written notice to contact@silvaautomation.com.</p>
                  
                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Refund Terms:</h3>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li>Client will receive a refund of <strong>25%</strong> of the total project value (equivalent to 50% of the deposit)</li>
                    <li>Silva Automation retains <strong>25%</strong> of the total project value (the remaining 50% of the deposit) to cover administrative costs, project setup, planning time, and work performed to the point of cancellation</li>
                    <li>Refunds will be processed within <strong>14 business days</strong> of receiving written cancellation notice</li>
                    <li>Any third-party costs already incurred (licenses, subscriptions, paid tools) are non-refundable and will be deducted from any refund due</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Example:</h3>
                  <p className="bg-white/5 p-4 rounded">For a $10,000 project with a $5,000 deposit:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mt-2">
                    <li>Client receives $2,500 refund upon cancellation</li>
                    <li>Silva Automation retains $2,500 of the deposit</li>
                  </ul>
                </section>

                <section>
                  <h2 className="section-title mb-4">4. Refund Eligibility for Cause (Post-Delivery)</h2>
                  <p>A refund may be considered after delivery only in the following circumstances:</p>
                  
                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Uncured Material Defects:</h3>
                  <p className="mb-4">If Silva Automation fails to correct a verified material defect within the 15-business-day cure period after proper notification, Client may be eligible for a partial refund. The refund amount will be determined based on:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li>Severity and scope of the defect</li>
                    <li>Percentage of project functionality affected</li>
                    <li>Amount of work successfully completed</li>
                    <li>Efforts made to resolve the issue</li>
                  </ul>
                  <p className="mb-4">Refund amounts typically range from 10% to 50% of the final payment, depending on the circumstances. Full refunds post-delivery are rare and reserved for complete failure to deliver usable functionality.</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Request Process:</h3>
                  <ol className="list-decimal pl-6 text-body space-y-2 mb-4">
                    <li>Submit a detailed written refund request to contact@silvaautomation.com</li>
                    <li>Include specific documentation of the material defect(s)</li>
                    <li>Provide evidence that the defect was reported within the 7-day review period</li>
                    <li>Demonstrate that Silva Automation failed to cure within the 15-day cure period</li>
                  </ol>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Review Timeline:</h3>
                  <p>Silva Automation will review and respond to refund requests within <strong>10 business days</strong>. If approved, refunds will be processed within <strong>14 business days</strong> of approval.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">5. Non-Refundable Costs</h2>
                  <p>The following are never refundable under any circumstances:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mt-4">
                    <li>Third-party software licenses or subscriptions purchased on behalf of the Client</li>
                    <li>Third-party service fees (Make.com, Zapier, API costs, etc.)</li>
                    <li>Payment processing fees</li>
                    <li>Domain registration or hosting fees</li>
                    <li>External consultant or contractor costs</li>
                    <li>Training materials or sessions already delivered</li>
                  </ul>
                  <p className="mt-4">These costs will be itemized separately in your Project Proposal and will be deducted from any eligible refund.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">6. Project Abandonment by Client</h2>
                  <p>As outlined in the Terms and Conditions:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mt-4">
                    <li><strong>30-day pause:</strong> If Client fails to provide necessary feedback, materials, or communication for 30 continuous days without prior notice, Silva Automation reserves the right to pause the project</li>
                    <li><strong>60-day abandonment:</strong> If non-communication extends to 60 days, the project may be considered abandoned</li>
                    <li><strong>Upon abandonment:</strong> The initial deposit is forfeited in full, and all work completed to date will be billed at our standard hourly rate of $125/hour (plus GET), which may exceed the remaining project balance</li>
                  </ul>
                  <p className="mt-4">Client will receive a final invoice for work completed. No refunds will be issued for abandoned projects.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">7. Refund Method</h2>
                  <p>All approved refunds will be issued using the original payment method when possible. If the original payment method is no longer available, an alternative method will be arranged (ACH transfer or check). Refunds are issued in USD and exclude any currency conversion fees or international transfer fees.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">8. Disputes</h2>
                  <p>If Client disputes our refund determination, the matter shall be resolved according to the Dispute Resolution provisions in our Terms and Conditions, including good faith negotiation, mediation, and binding arbitration if necessary.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">9. Exceptions and Special Circumstances</h2>
                  <p>Silva Automation reserves the right to make exceptions to this policy in extraordinary circumstances, including but not limited to:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mt-4">
                    <li>Documented medical emergencies</li>
                    <li>Natural disasters or force majeure events</li>
                    <li>Errors or misrepresentations by Silva Automation</li>
                    <li>Mutual agreement to modify terms</li>
                  </ul>
                  <p className="mt-4">Any such exceptions must be approved in writing by Silva Automation management.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">10. Contact Information</h2>
                  <p>For cancellation requests or questions about this policy, please contact:</p>
                  <div className="mt-4 pl-4 border-l-2 border-action">
                    <p><strong>Silva Automation LLC</strong></p>
                    <p>Email: contact@silvaautomation.com</p>
                    <p>Phone: (808) 726-6244</p>
                    <p>Mail: 94-207 Waipahu Street #323, Waipahu, HI 96797</p>
                    <p>EIN: 41-3619246</p>
                  </div>
                  <p className="mt-4">All cancellation requests must be submitted in writing via email to be considered valid.</p>
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

export default RefundCancellationPolicy;
