// Cookie Policy page
import { Navbar, Footer, BackToHome } from "../components/layout";

function CookiePolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-stone-900 to-black">
      <BackToHome />
      <Navbar />
      <main className="flex-1">
        <div className="section-wrapper pt-32">
          <div className="container-main">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title--lg mb-2 text-white">Cookie Policy</h1>
              <p className="text-muted text-sm mb-8">Effective Date: October 7, 2025</p>
              
              <div className="text-body space-y-8">
                <p>This Cookie Policy explains how Silva Automation LLC ("we," "us," or "our") uses cookies and similar technologies when you visit our website, www.silvaautomation.com (the "Site").</p>

                <section>
                  <h2 className="section-title mb-4">1. What Are Cookies?</h2>
                  <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies contain data about your browsing activity and preferences.</p>
                  
                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Similar Technologies:</h3>
                  <p className="mb-4">In addition to cookies, we may use other technologies such as:</p>
                  <ul className="list-disc pl-6 text-body space-y-2">
                    <li><strong>Web beacons (pixels):</strong> Small graphic images used to track user behavior</li>
                    <li><strong>Local storage:</strong> Data stored in your browser to remember preferences</li>
                    <li><strong>Session storage:</strong> Temporary data that expires when you close your browser</li>
                  </ul>
                </section>

                <section>
                  <h2 className="section-title mb-4">2. Types of Cookies We Use</h2>
                  
                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Strictly Necessary Cookies</h3>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li><strong>Purpose:</strong> Essential for the Site to function properly and enable you to navigate and use its features</li>
                    <li><strong>Examples:</strong> Cookie consent preferences, session management, security</li>
                    <li><strong>Duration:</strong> Session or persistent (up to 12 months)</li>
                    <li><strong>Can be disabled:</strong> No – these are required for basic Site functionality</li>
                    <li><strong>Specific cookies:</strong>
                      <ul className="list-circle pl-6 mt-2 space-y-1">
                        <li><code>cookie-consent</code>: Stores your cookie consent choices (12 months)</li>
                        <li><code>session-id</code>: Maintains your browsing session (session)</li>
                      </ul>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Performance and Analytics Cookies</h3>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li><strong>Purpose:</strong> Collect information about how visitors use our Site to help us improve performance and user experience</li>
                    <li><strong>Examples:</strong> Google Analytics tracking</li>
                    <li><strong>Data collected:</strong> Pages visited, time spent on Site, traffic sources, device type, general location (city/state level)</li>
                    <li><strong>Duration:</strong> Up to 24 months</li>
                    <li><strong>Can be disabled:</strong> Yes – only placed if you accept optional cookies</li>
                    <li><strong>Specific cookies:</strong>
                      <ul className="list-circle pl-6 mt-2 space-y-1">
                        <li><code>_ga</code>: Google Analytics identifier (24 months)</li>
                        <li><code>_gid</code>: Google Analytics session identifier (24 hours)</li>
                        <li><code>_gat</code>: Google Analytics request rate limiting (1 minute)</li>
                      </ul>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Functionality Cookies</h3>
                  <ul className="list-disc pl-6 text-body space-y-2">
                    <li><strong>Purpose:</strong> Remember your preferences and provide enhanced, personalized features</li>
                    <li><strong>Examples:</strong> Language settings, user preferences</li>
                    <li><strong>Duration:</strong> Up to 12 months</li>
                    <li><strong>Can be disabled:</strong> Yes – only placed if you accept optional cookies</li>
                  </ul>
                  <p className="mt-4">We do not use advertising or targeting cookies on our Site.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">3. Third-Party Cookies</h2>
                  <p>Some cookies are placed by third-party services that appear on our pages:</p>
                  
                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Google Analytics (Google LLC)</h3>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li><strong>Purpose:</strong> Website analytics and performance measurement</li>
                    <li><strong>Data collected:</strong> Anonymous usage statistics, device information, general geographic location</li>
                    <li><strong>Privacy Policy:</strong> https://policies.google.com/privacy</li>
                    <li><strong>Opt-out:</strong> https://tools.google.com/dlpage/gaoptout</li>
                  </ul>
                  <p className="mt-4">These third parties may use cookies in accordance with their own privacy policies. We do not control these cookies and recommend reviewing their policies directly.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">4. Your Cookie Choices</h2>
                  <p>When you first visit our Site, you will see a cookie consent banner at the bottom of the page with two options:</p>
                  
                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Accept All Cookies:</h3>
                  <p className="mb-4">This places all cookies on your device, including:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li>Strictly necessary cookies</li>
                    <li>Performance and analytics cookies (Google Analytics)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Accept Necessary Cookies Only:</h3>
                  <p className="mb-4">This places only essential cookies required for the Site to function. Optional cookies will not be placed, which means:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li>No analytics tracking (we won't know how you use our Site)</li>
                    <li>You'll see the consent banner again on future visits</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Changing Your Mind:</h3>
                  <p>You can change your cookie preferences at any time by:</p>
                  <ol className="list-decimal pl-6 text-body space-y-2 mt-2">
                    <li>Clearing your browser cookies (this will reset your choice)</li>
                    <li>Using the cookie preference link in our website footer</li>
                    <li>Adjusting your browser settings (see below)</li>
                  </ol>
                </section>

                <section>
                  <h2 className="section-title mb-4">5. Browser Controls</h2>
                  <p>Most web browsers allow you to control cookies through their settings. You can:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li><strong>Block all cookies:</strong> Prevent any cookies from being placed</li>
                    <li><strong>Delete cookies:</strong> Remove cookies already on your device</li>
                    <li><strong>Block third-party cookies:</strong> Allow only first-party cookies from sites you visit directly</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">How to manage cookies in common browsers:</h3>
                  <ul className="list-disc pl-6 text-body space-y-2 mb-4">
                    <li><strong>Chrome:</strong> Settings {`>`} Privacy and security {`>`} Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Settings {`>`} Privacy &amp; Security {`>`} Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences {`>`} Privacy {`>`} Cookies and website data</li>
                    <li><strong>Edge:</strong> Settings {`>`} Cookies and site permissions {`>`} Cookies and site data</li>
                  </ul>

                  <p className="bg-white/5 p-3 rounded border-l-2 border-action"><strong>Important:</strong> Blocking or deleting cookies may impact your experience on our Site and limit functionality. Some features may not work properly without cookies enabled.</p>

                  <p className="mt-4">For more detailed information about cookies and how to manage them, visit: www.allaboutcookies.org</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">6. Do Not Track Signals</h2>
                  <p>Some browsers offer a "Do Not Track" (DNT) signal. Our Site does not currently respond to DNT signals. However, you can control cookie placement through our consent banner and browser settings as described above.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">7. Mobile Devices</h2>
                  <p>On mobile devices, you can control tracking through your device settings:</p>
                  <ul className="list-disc pl-6 text-body space-y-2">
                    <li><strong>iOS:</strong> Settings {`>`} Privacy {`>`} Tracking (toggle "Allow Apps to Request to Track")</li>
                    <li><strong>Android:</strong> Settings {`>`} Google {`>`} Ads (opt out of personalized ads)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="section-title mb-4">8. Cookie Lifespan</h2>
                  
                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Session Cookies:</h3>
                  <p className="mb-4">Deleted automatically when you close your browser</p>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Persistent Cookies:</h3>
                  <p>Remain on your device for a set period or until manually deleted:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mt-2">
                    <li>Cookie consent: 12 months</li>
                    <li>Google Analytics: Up to 24 months</li>
                  </ul>
                </section>

                <section>
                  <h2 className="section-title mb-4">9. Updates to This Cookie Policy</h2>
                  <p>We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by:</p>
                  <ul className="list-disc pl-6 text-body space-y-2 mt-4">
                    <li>Updating the "Effective Date" at the top of this policy</li>
                    <li>Posting a notice on our homepage for 30 days</li>
                    <li>Requesting renewed consent through our cookie banner if the changes affect cookie usage</li>
                  </ul>
                  <p className="mt-4">Your continued use of our Site after such changes constitutes acceptance of the updated Cookie Policy.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">10. Data Protection and Privacy</h2>
                  <p>The information collected through cookies is processed in accordance with our Privacy Policy. We use appropriate security measures to protect cookie data from unauthorized access or disclosure.</p>
                  <p className="mt-4">Cookie data may be processed in the United States where our servers are located. By using our Site, you consent to this transfer and processing.</p>
                </section>

                <section>
                  <h2 className="section-title mb-4">11. Contact Us</h2>
                  <p>If you have questions, concerns, or requests regarding our use of cookies, please contact us at:</p>
                  <div className="mt-4 pl-4 border-l-2 border-action">
                    <p><strong>Silva Automation LLC</strong></p>
                    <p>Email: contact@silvaautomation.com</p>
                    <p>Phone: (808) 726-6244</p>
                    <p>Mail: 94-207 Waipahu Street #323, Waipahu, HI 96797</p>
                    <p>EIN: 41-3619246</p>
                  </div>
                  <p className="mt-4">For specific questions about third-party cookies, please contact the respective third-party provider directly using the privacy policy links provided in Section 3.</p>
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

export default CookiePolicy;
