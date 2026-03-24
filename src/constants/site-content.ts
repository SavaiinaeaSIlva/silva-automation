import type { SiteContent } from '@/types';

export const siteContent: SiteContent = {
  header: {
    skipToMainContent: 'Skip to main content',
    logoAlt: 'Silva Automation',
    backToTopAria: 'Back to top',
    backToTopIcon: '↑',
    mainNavAria: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mobileNavAria: 'Mobile navigation',
    navLinks: [
      { href: '#how-it-works', label: 'How It Works' },
      { href: '#calculator', label: 'Calculator' },
      { href: '#pricing', label: 'Investment' },
      { href: '#faq', label: 'FAQ' },
    ],
    bookingCta: {
      text: 'Book Strategy Call',
      url: 'https://calendly.com/silvaautomation/consultation',
    },
  },

  hero: {
    titleLines: [
      { prefix: 'One ', italic: 'System.' },
      { prefix: 'Every ', highlight: 'Lead.' },
      { prefix: 'Every ', highlight: 'Job.' },
      { prefix: 'Every ', highlight: 'Time.' },
    ],
    subtitle: 'Workflow automation for Hawaii service businesses.',
    cta: 'Calculate Your Savings',
    opensInNewWindow: '(opens in new window)',
    bookingCta: {
      text: 'Schedule a Consultation',
      url: 'https://calendly.com/silvaautomation/consultation',
    },
    hudLabels: {
      sysRun: 'SYS.RUN \u2014 01',
      nodeActive: 'NODE.ACTIVE',
      brand: 'SILVA.AUTO // 2026',
    },
  },

  howItWorks: {
    id: 'how-it-works',
    label: 'How It Works',
    eyebrow: 'How It Works',
    title: 'From First Call to Fully Automated',
    subtitle: 'Four steps. One fixed price. You own everything when we\'re done.',
    steps: [
      {
        number: '01',
        title: 'Book a Strategy Call',
        body: 'We talk about what\'s eating up your time — missed leads, manual follow-ups, scattered spreadsheets. No jargon, no pitch. Just a conversation about what\'s slowing you down.',
      },
      {
        number: '02',
        title: 'We Map Your Workflow',
        body: 'You get a clear proposal showing exactly what we\'ll build, what it costs, and when it\'ll be done. Fixed price. No surprises.',
      },
      {
        number: '03',
        title: 'We Build & Deploy',
        body: 'We build your automation, test it, and deploy it into your tools — your CRM, your Google Sheets, your cloud. Then we walk your team through how it works.',
      },
      {
        number: '04',
        title: 'You Own It',
        body: 'The system is yours. No subscriptions, no lock-in. You get 60 days of free support, and after that, we\'re here if you need us at $125/hour.',
      },
    ],
  },

  calculator: {
    id: 'calculator',
    label: 'Calculator',
    eyebrow: 'ROI Calculator',
    title: 'See What Manual Work Is Costing You',
    subtitle: 'Plug in your numbers and see your ROI from automating repetitive tasks.',
    currencySymbol: '$',
    percentSymbol: '%',
    roiInputs: {
      hoursPerWeek: {
        label: 'Hours Per Week on Manual Tasks',
        defaultValue: 0,
      },
      numEmployees: {
        label: 'Employees Dedicated to Tasks',
        defaultValue: 0,
      },
      hourlyWage: {
        label: 'Employee Hourly Pay ($)',
        defaultValue: 0,
      },
      setupFee: {
        label: 'One-Time Setup Fee ($)',
        defaultValue: 0,
      },
      monthlyRetainer: {
        label: 'Monthly Retainer / Software ($)',
        defaultValue: 0,
      },
    },
    statLabels: {
      hoursSaved: 'Hours Saved Monthly',
      annualSavings: 'Net Annual Savings',
      firstYearRoi: 'First Year ROI',
    },
    units: {
      hours: 'hrs',
    },
    chartTitle: '12-Month Cumulative Cost Comparison',
    monthPrefix: 'Mo',
    chartKeys: {
      manualCost: 'Manual Cost',
      automationCost: 'Automation Cost',
    },
    downloadButton: 'Save as .txt',
    downloadFilename: 'ROI_Report.txt',
    emailButton: 'Email Report',
    emailSubject: 'Your Silva Automation ROI Report',
    summaryTitle: 'Silva Automation ROI Summary',
    summaryCurrentProcess: 'Current Manual Process',
    summaryPricing: 'Automation Pricing',
    summaryResults: 'Results',
    summaryLabels: {
      hoursPerWeek: 'Hours Per Week (Manual)',
      numEmployees: 'Number of Employees',
      hourlyWage: 'Employee Hourly Pay',
      setupFee: 'One-Time Setup Fee',
      monthlyRetainer: 'Monthly Retainer/Software',
      hoursSaved: 'Hours Saved Monthly',
      annualSavings: 'Net Annual Savings',
      firstYearRoi: 'First Year ROI',
    },
  },

  pricing: {
    id: 'pricing',
    label: 'Pricing',
    header: 'Simple, Transparent Pricing',
    intro: 'Pay once to build your lead engine. You own everything.',

    bestForLabel: 'Best for:',
    checkIcon: '✓',

    foundingOffer: {
      show: false,
      badge: '',
      headline: '',
      body: '',
      spotsRemaining: '',
    },

    tiers: [
      {
        name: 'Lead Agent + CRM',
        price: '$1,297',
        originalPrice: '$1,297',
        foundingPrice: '$1,297',
        description:
          'For growing teams that live inside their CRM and want everything in one place.',
        included: [
          'Everything in Lead Scorer',
          'Syncs leads and scores directly into your existing CRM',
          'Sends SMS alerts for High-priority leads to your phone',
          'Light customization to match your current workflow',
        ],
        badge: '',
        bestFor: 'Agents who are already busy and need their system talking to each other.',
      },
      {
        name: 'Lead Scorer (Sheets Edition)',
        price: '$497',
        originalPrice: '$497',
        foundingPrice: '$497',
        description: 'For solo agents or small teams who want to stop guessing which leads matter.',
        included: [
          'Captures incoming leads from your website or forms',
          'Uses AI to score each lead High / Medium / Low urgency',
          'Sends simple auto-replies so no lead gets ignored',
          'Logs every lead and score into a Google Sheet you own',
        ],
        badge: 'Most Value',
        bestFor: 'Testing the waters and seeing instant improvement in follow-up.',
      },
      {
        name: 'Lead Intelligence Dashboard',
        price: '$3,497',
        originalPrice: '$3,497',
        foundingPrice: '$3,497',
        description:
          'For teams that want the full picture: leads, follow-up, and revenue in one view.',
        included: [
          'Everything in Lead Agent + CRM',
          'Custom web dashboard built around your business',
          'Live funnel of High / Medium / Low leads',
          'Simple metrics like "High leads this month," "Deals in progress," and estimated commission pipeline',
        ],
        badge: '',
        bestFor:
          'Lead-heavy teams who want to see where the money is and where to focus every day.',
      },
    ],

    afterSupport: {
      title: 'Support',
      headline: 'No Lock-In',
      intro:
        "60 days of free support and small tweaks after delivery. After that, optional pay‑as‑you‑go support at $125/hour. You're never locked in: everything runs in your tools, under your accounts, and you keep full ownership of what we build.",
      benefits: [
        {
          label: '60 days free',
          detail: 'Support and small tweaks included after delivery',
        },
        {
          label: 'Pay-as-you-go',
          detail: 'Optional support at $125/hour after that',
        },
        {
          label: 'Full ownership',
          detail: 'Runs in your tools, under your accounts',
        },
      ],
      coversTitle: '',
      covers: [],
    },
  },

  ctaSection: {
    title: 'Ready to Automate Your Business?',
    subtitle:
      "Book a free strategy call and we'll map out exactly which workflows will save your team the most time and money.",
    primaryCta: {
      text: 'Book Strategy Call',
      url: 'https://calendly.com/silvaautomation/consultation',
    },
    secondaryCta: {
      text: 'Calculate Your Savings',
      href: '#calculator',
    },
  },

  faq: {
    id: 'faq',
    label: 'FAQ',
    title: 'Common Questions',
    intro: '',
    expandIcon: '+',
    collapseIcon: '−',
    categories: {
      process: [
        {
          q: 'How long does a typical project take?',
          a: 'Most projects follow a standardized five-phase lifecycle (Discovery, Design, Build/Test, Deploy/Train, Support). Timelines are set during the proposal phase based on scope, with expectations documented in the fixed-price agreement.',
        },
        {
          q: 'Do I need technical or coding knowledge?',
          a: 'No. Silva Automation delivers a finished solution and trains your team on how to use it.',
        },
        {
          q: 'Who owns the workflows?',
          a: 'You do. All workflows are deployed into your Oracle Cloud or existing cloud environment using n8n, and you retain full control of the assets.',
        },
        {
          q: 'What happens after 90 days of support?',
          a: 'You can continue running the automations without any retainer. If you want changes or new features, you can engage Silva Automation on a project or hourly basis.',
        },
        {
          q: 'How does this compare to hiring an admin?',
          a: 'Many Hawaii firms cannot justify a full-time in-house IT specialist, and administrative roles often end up performing repetitive, low-leverage tasks. A one-time automation project replaces that manual workload with a system that runs 24/7 without adding headcount.',
        },
        {
          q: 'How do you control scope risk?',
          a: 'Each project is governed by a written, fixed-price scope of work. Any additional requests are handled via formal change orders, and "Project Abandonment" protections help keep timelines on track.',
        },
      ],

      business: [],
    },
  },

  footer: {
    quickLinksTitle: 'Quick Links',
    legalTitle: 'Legal',
    getInTouchTitle: 'Contact',
    contactIntro: 'If you still have questions or concerns, email us or give us a call.',
    companyName: 'Silva Automation',
    tagline:
      'Workflow automation for Hawaii service businesses. One fixed project fee. No recurring subscriptions.',
    quickLinks: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Calculator', href: '#calculator' },
      { label: 'Investment', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    legalLinks: [
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Refunds', href: '/refunds' },
    ],
    email: 'contact@silvaautomation.com',
    phone: '(808) 726-6422',
    phoneHref: 'tel:+18087266422',
    bookAssessmentText: 'Book Strategy Call',
    bookAssessmentUrl: 'https://calendly.com/silvaautomation/consultation',
    copyright: '© 2026 Silva Automation LLC | Waipahu, Hawaii',
  },

  cookieBanner: {
    ariaLabel: 'Cookie consent',
    message: 'We use cookies to remember your preferences. By continuing, you agree to our',
    cookiePolicyLinkText: 'Cookie Policy.',
    learnMore: 'Learn more',
    accept: 'Accept',
  },

  errorBoundary: {
    title: 'Something Broke',
    message: 'Sorry. Try refreshing.',
    refreshButton: 'Refresh',
    retryButton: 'Try Again',
    errorDetailsLabel: 'Error details',
  },

  legalLayout: {
    backToHome: 'Back to Home',
    logoAlt: 'Silva Automation',
    lastUpdated: 'October 7, 2025',
    footerText: 'Silva Automation LLC. All rights reserved.',
    legalPagesNavAria: 'Legal pages',
  },

  legal: {
    effectiveDate: 'October 7, 2025',
    contactEmail: 'contact@silvaautomation.com',
    contactPhone: '(808) 726-6422',
    contactAddress: 'Silva Automation LLC, 94-207 Waipahu Street #323, Waipahu, HI 96797',
    contactLabels: {
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
    },
    pages: {
      terms: {
        title: 'Terms and Conditions',
        content: `
          <p><strong>Effective Date:</strong> October 7, 2025</p>

          <p>This website, <em>www.silvaautomation.com</em> (the &ldquo;Site&rdquo;), and the services offered through it, are owned and operated by Silva Automation LLC. By accessing or using our Site and services, you agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;).</p>

          <h3>1. Description of Services</h3>
          <p>Silva Automation LLC provides business-to-business automation services, including workflow development, system integration, and process optimization. The specific scope of work for each project will be outlined in a separate Service Agreement and Project Proposal, which are incorporated into these Terms by reference.</p>

          <h3>2. Client Obligations</h3>
          <p>You agree to use our Site and services only for lawful purposes and in compliance with all applicable federal, state, and local laws. You agree to provide accurate, complete, and timely information, materials, and feedback necessary for the performance of the services. Client acknowledges that failure to do so may result in project delays or timeline extensions, for which Silva Automation shall not be held responsible.</p>
          <p><strong>Project Abandonment:</strong> If the Client fails to provide necessary feedback, materials, or communication for a continuous period of 30 days without prior notice, Silva Automation LLC reserves the right to pause the project. If non-communication extends to 60 days, the project may be considered abandoned. All work completed to date will be billed at our standard hourly rate, and any remaining balance will be invoiced accordingly.</p>

          <h3>3. Intellectual Property Rights</h3>
          <p>Upon full and final payment by the Client, Silva Automation LLC grants and assigns to the Client all right, title, and interest in the custom deliverables created specifically for the Client under the applicable Service Agreement (&ldquo;Custom Work Product&rdquo;). The Custom Work Product includes the final source code, workflow configurations, databases, and project documentation.</p>
          <p>Silva Automation LLC retains ownership of all pre-existing intellectual property, including but not limited to proprietary tools, libraries, frameworks, methodologies, templates, know-how, and any code or materials not created specifically for the Client (&ldquo;Pre-Existing IP&rdquo;). Client is granted a non-exclusive, royalty-free, perpetual license to use any Pre-Existing IP solely to the extent it is embedded in or necessary for the operation of the Custom Work Product.</p>

          <h3>4. Payments, Fees, and Hawaii General Excise Tax (GET)</h3>
          <p><strong>Payment Structure:</strong></p>
          <ul>
            <li>50% deposit is due at signing. Remaining 50% is due upon in-person deployment. The initial 50% deposit is non-refundable.</li>
            <li>All services are provided on a fixed-price basis as outlined in your Project Proposal</li>
            <li>The initial 50% deposit is non-refundable; the remaining 50% is refundable only as outlined in the Refund &amp; Cancellation Policy</li>
            <li>All prices are quoted in United States Dollars (USD)</li>
          </ul>
          <p><strong>Hawaii General Excise Tax (GET):</strong> As a business operating in Hawaii, we are required to collect Hawaii General Excise Tax (GET) at a rate of 4.5%. This will be added as a separate line item to all invoices.</p>
          <p><strong>Payment Methods:</strong> We accept payment via bank transfer (ACH), credit/debit card (processing fees may apply), and check (must clear before work commences).</p>
          <p><strong>Late Payments:</strong> Invoices not paid within 15 days of the due date will incur a late fee of 1.5% per month (18% annually) on the outstanding balance, to the extent permitted under Hawaii law. We reserve the right to suspend work on projects with overdue invoices exceeding 30 days and may pursue collection through legal channels if necessary.</p>

          <h3>5. Post-Delivery Support &amp; Maintenance</h3>
          <p>All packages include <strong>60 days of free troubleshooting support</strong> from the date of project completion. During this period, Silva Automation LLC will address bugs and integration issues stemming from the original implementation as delivered.</p>
          <p><strong>Support Exclusions:</strong> Support is strictly limited to the original workflow and systems as delivered. Silva Automation LLC is not obligated to provide support, free or paid, for any issues arising from modifications by the Client or third parties, changes to third-party applications, client-side errors, new features outside the original scope, or normal third-party platform updates or deprecations.</p>
          <p><strong>After the 60-Day Support Period:</strong> After the 60-day support period, all work is billed at $125/hour, invoiced quarterly. A detailed log of all work performed will be provided with each invoice.</p>

          <h4>5.1 Founding Client Program &mdash; Special Terms</h4>
          <p>Silva Automation LLC may offer a limited <strong>Founding Client Program</strong> with special pricing and extended support terms. Terms for this program will be detailed in the applicable Service Agreement. Any lifetime discount offered is contingent upon the Client&rsquo;s account remaining in good standing and shall terminate immediately upon material breach of these Terms, including non-payment of any invoice.</p>

          <h3>6. Client Credentials and Access</h3>
          <p>To deliver services, Silva Automation LLC may require access to Client&rsquo;s third-party accounts and systems. Client agrees to provide necessary credentials and permissions in a timely manner and notify us immediately if credentials are changed or compromised.</p>
          <p>Silva Automation LLC agrees to store all credentials securely using industry-standard encryption, use them only for the agreed-upon project scope, and delete them upon project completion unless ongoing support is contracted.</p>
          <p>Client agrees to indemnify, defend, and hold harmless Silva Automation LLC from any and all claims, damages, and expenses arising from unauthorized access or data breach resulting from the use of Client-provided credentials, unless such breach is a direct result of Silva Automation LLC&rsquo;s gross negligence or willful misconduct. Silva Automation LLC agrees to comply with Hawaii&rsquo;s data breach notification requirements under HRS &sect;487N in the event of a security incident involving Client&rsquo;s information.</p>

          <h3>7. Confidentiality</h3>
          <p>&ldquo;Confidential Information&rdquo; means any non-public information disclosed by one party to the other that is designated as confidential or that reasonably should be understood to be confidential. Confidential Information does not include information that is public, already in the receiving party&rsquo;s possession, independently developed, or rightfully received from a third party.</p>
          <p>Both parties agree to hold each other&rsquo;s Confidential Information in strict confidence, use it only for performing this Agreement, and not disclose it to third parties without prior written consent. This obligation of confidentiality shall survive termination for three (3) years.</p>

          <h3>8. Limitation of Liability</h3>
          <p>IN NO EVENT SHALL SILVA AUTOMATION LLC&rsquo;S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT EXCEED THE TOTAL AMOUNT PAID BY CLIENT HEREUNDER IN THE 12 MONTHS PRECEDING THE INCIDENT. IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
          <p>These limitations do not apply to liability resulting from gross negligence, willful misconduct, fraud, or data breaches caused by Silva Automation LLC&rsquo;s failure to maintain reasonable security measures. Nothing in these Terms shall limit liability which cannot be limited by law, including rights under Hawaii UDAP laws.</p>

          <h3>9. Disclaimer of Warranties</h3>
          <p>Except as expressly stated in a signed Service Agreement, services and information on this Site are provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; without warranties of any kind. Silva Automation LLC does not warrant uninterrupted or error-free services.</p>

          <h3>10. Reliance on Third-Party Services</h3>
          <p>Client acknowledges that the services provided depend on third-party platforms and Silva Automation LLC is not responsible for interruptions or changes caused by those third parties. Client is responsible for maintaining appropriate subscriptions and licenses for all third-party services used in conjunction with our deliverables.</p>

          <h3>11. Indemnification</h3>
          <p>Client agrees to indemnify, defend, and hold harmless Silva Automation LLC from claims arising out of Client&rsquo;s use of services, violation of Terms, or violation of third-party rights. Silva Automation LLC agrees to indemnify Client against claims that the Custom Work Product infringes any third-party intellectual property rights, subject to prompt notice and cooperation.</p>

          <h3>12. Governing Law and Dispute Resolution</h3>
          <ol>
            <li><strong>Negotiation:</strong> Parties shall attempt to negotiate a resolution in good faith for 30 days.</li>
            <li><strong>Mediation:</strong> If negotiation fails, participate in mediation in Honolulu, Hawaii.</li>
            <li><strong>Arbitration:</strong> If mediation is unsuccessful, disputes shall be resolved by binding arbitration administered by AAA in Honolulu, Hawaii. Parties waive jury trial and class actions.</li>
          </ol>

          <h3>13. Termination</h3>
          <p>Either party may terminate a Service Agreement for cause upon 30 days&rsquo; written notice if the other party materially breaches and fails to cure. Silva Automation LLC may suspend services immediately for non-payment exceeding 15 days. Upon termination, Client shall pay for all work completed to date.</p>

          <h3>14. Force Majeure</h3>
          <p>Neither party shall be liable for failure or delay due to events beyond reasonable control (acts of God, war, natural disasters, pandemics, third-party hosting failures, etc.). If the event continues for more than 60 days, either party may terminate the affected Service Agreement.</p>

          <h3>15. General Provisions</h3>
          <p><strong>Assignment:</strong> Neither party may assign its rights without prior written consent, except Silva Automation LLC may assign to an affiliate or in a sale of assets. <strong>Severability:</strong> If any provision is invalid, the remaining provisions remain in effect. <strong>Entire Agreement:</strong> These Terms together with Service Agreements constitute the entire agreement. <strong>Modification:</strong> No modification is effective unless in writing and signed by both parties. <strong>Waiver:</strong> No waiver constitutes a continuing waiver.</p>

          <h3>16. Contact Information</h3>
          <p>For questions regarding these Terms, contact us at:</p>
          <p><strong>Silva Automation LLC</strong><br/>
          Owner: Savaiinaea &ldquo;Naea&rdquo; Silva<br/>
          Email: contact@silvaautomation.com<br/>
          Phone: (808) 726-6422<br/>
          EIN: 41-3619246<br/>
          Address: 94-207 Waipahu Street, #323, Waipahu, HI 96797</p>
        `,
      },

      privacy: {
        title: 'Privacy Policy',
        content: `
          <p><strong>Effective Date:</strong> October 7, 2025</p>

          <p>Silva Automation LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>

          <h3>1. Information We Collect</h3>
          <p><strong>Personal Data:</strong> Name, company name, email, telephone, billing address, and payment information provided voluntarily (contact forms, Service Agreements).</p>
          <p><strong>Derivative Data:</strong> Server-collected data such as IP address, browser type, OS, access times, pages viewed, referring website, and device information (collected via Google Analytics).</p>
          <p><strong>Client Project Data:</strong> Temporary access to business systems and data necessary to perform automation services; handled with strict confidentiality.</p>
          <p><strong>Communications Data:</strong> Records of emails, chat transcripts, phone calls, and support tickets.</p>
          <p><strong>Third-Party Credentials:</strong> Login credentials and API keys provided to implement automation solutions; stored securely and used only as authorized.</p>

          <h3>2. Use of Your Information</h3>
          <p>We use information to respond to inquiries, create and manage accounts, process payments, provide support, send project updates and invoices, improve services, monitor usage, detect security threats, comply with legal obligations, and send marketing communications with consent.</p>

          <h3>3. Legal Basis for Processing</h3>
          <p>We process personal information based on contract performance, legitimate interests, legal obligations, and consent where applicable.</p>

          <h3>4. Disclosure of Your Information</h3>
          <p>We do not sell personal information. We may share data with service providers (Google Analytics, payment processors, email providers, cloud hosts) under contractual obligations, with legal authorities when required, or in business transfers. We will obtain consent before other disclosures.</p>

          <h3>5. Data Security and Retention</h3>
          <p>We implement administrative, technical, and physical security measures including encryption, secure credential storage, limited access, and regular security assessments. Data is retained only as necessary: client project data is typically retained for the duration of the project plus three years unless specified otherwise.</p>
          <p>In the event of a data breach, we will comply with Hawaii law (HRS &sect;487N) and notify affected individuals without unreasonable delay.</p>

          <h3>6. Your Rights</h3>
          <p>Depending on jurisdiction, you may request access, correction, deletion, restriction, portability, objection, or withdraw consent. Requests are handled within 30 days and may require identity verification.</p>

          <h3>7. Third-Party Websites and Services</h3>
          <p>We are not responsible for privacy practices of third-party sites. Review their policies directly.</p>

          <h3>8. Cookies and Tracking Technologies</h3>
          <p>Refer to our Cookie Policy for details on cookie use and management.</p>

          <h3>9. Do Not Track Signals</h3>
          <p>Our Site does not currently respond to DNT signals. Control cookie placement via our consent banner or browser settings.</p>

          <h3>10. International Data Transfers</h3>
          <p>Your information may be transferred to locations outside your jurisdiction, including the United States. By using our services, you consent to such transfers.</p>

          <h3>11. Children&rsquo;s Privacy</h3>
          <p>Our services are intended for business use and not directed to individuals under 18. We do not knowingly collect information from children.</p>

          <h3>12. California Privacy Rights</h3>
          <p>California residents may have additional rights under the CCPA. Contact us for more information.</p>

          <h3>13. Changes to This Privacy Policy</h3>
          <p>We may update this policy and will notify users by updating the Effective Date and posting notices as appropriate. Continued use constitutes acceptance.</p>

          <h3>14. Contact Us</h3>
          <p>Questions or requests:</p>
          <p><strong>Silva Automation LLC</strong><br/>
          Owner: Savaiinaea &ldquo;Naea&rdquo; Silva<br/>
          Email: contact@silvaautomation.com<br/>
          Phone: (808) 726-6422<br/>
          EIN: 41-3619246<br/>
          Address: 94-207 Waipahu Street, #323, Waipahu, HI 96797</p>
        `,
      },

      cookies: {
        title: 'Cookie Policy',
        content: `
          <p><strong>Effective Date:</strong> October 7, 2025</p>

          <p>This Cookie Policy explains how Silva Automation LLC uses cookies and similar technologies when you visit our Site.</p>

          <h3>1. What Are Cookies?</h3>
          <p>Cookies are small text files placed on your device to make websites work more efficiently and provide information to site owners. Similar technologies include web beacons (pixels), local storage, and session storage.</p>

          <h3>2. Types of Cookies We Use</h3>
          <h4>Strictly Necessary Cookies</h4>
          <p>Essential for Site operation (cookie-consent, session-id). Cannot be disabled.</p>
          <h4>Performance and Analytics Cookies</h4>
          <p>Used for Google Analytics (_ga, _gid, _gat) to improve site performance. Optional and placed only if you accept optional cookies.</p>
          <h4>Functionality Cookies</h4>
          <p>Remember preferences and enhance features. Placed only if you accept optional cookies.</p>

          <h3>3. Third-Party Cookies</h3>
          <p>Third parties (Google Analytics) may place cookies according to their own policies. We do not control these cookies.</p>

          <h3>4. Your Cookie Choices</h3>
          <p>Use the cookie banner on our website to Accept All or Accept Necessary Cookies Only. You can change preferences at any time by:</p>
          <ul>
            <li>Clearing browser cookies and re-visiting the site</li>
            <li>Using the cookie preference link in the site footer</li>
            <li>Adjusting your browser settings</li>
          </ul>

          <h3>5. Browser Controls</h3>
          <p>Most browsers allow you to refuse cookies or delete existing ones. Note that blocking or deleting cookies may impact Site functionality. Instructions are available in each browser&rsquo;s help documentation.</p>

          <h3>6. Do Not Track Signals</h3>
          <p>We do not currently respond to DNT signals. Manage cookies via the consent banner and your browser settings.</p>

          <h3>7. Mobile Devices</h3>
          <p>Manage tracking via device settings on iOS and Android.</p>

          <h3>8. Cookie Lifespan</h3>
          <ul>
            <li>Session cookies: expire when you close your browser</li>
            <li>Consent cookie: 12 months</li>
            <li>Analytics cookies: up to 24 months</li>
          </ul>

          <h3>9. Updates to This Cookie Policy</h3>
          <p>We will update the Effective Date and notify users of material changes.</p>

          <h3>10. Data Protection and Privacy</h3>
          <p>Cookie data is processed per our Privacy Policy. Data may be processed in the United States.</p>

          <h3>11. Contact Us</h3>
          <p>Questions about cookies:</p>
          <p><strong>Silva Automation LLC</strong><br/>
          Owner: Savaiinaea &ldquo;Naea&rdquo; Silva<br/>
          Email: contact@silvaautomation.com<br/>
          Phone: (808) 726-6422<br/>
          EIN: 41-3619246<br/>
          Address: 94-207 Waipahu Street, #323, Waipahu, HI 96797</p>
        `,
      },

      refunds: {
        title: 'Refund & Cancellation Policy',
        content: `
          <p><strong>Effective Date:</strong> October 7, 2025</p>

          <h3>1. General Principles</h3>
          <p>As a service-based business, our work involves significant time and resources that cannot be returned like physical products. A 50% deposit is collected at signing and is non-refundable under all circumstances.</p>

          <h3>2. Project Completion &amp; Acceptance</h3>
          <p><strong>Project Delivery:</strong> A project is considered complete upon delivery of final workflow files, documentation, access credentials, and other deliverables specified in the Project Proposal.</p>
          <p><strong>Review Period:</strong> Client has <strong>7 calendar days</strong> from delivery to report material defects. Material defects are verifiable failures of core functions as agreed in the Proposal and do not include stylistic preferences, requests for out-of-scope features, third-party changes, or minor cosmetic issues.</p>
          <p><strong>Acceptance:</strong> If no defects are reported within 7 days, the project is considered accepted. <strong>Cure Period:</strong> If defects are reported, Silva Automation LLC has 15 business days to remedy them.</p>

          <h3>3. Cancellation by Client (Prior to Work Commencing)</h3>
          <p>The 50% deposit is non-refundable under all circumstances. Any amount paid beyond the deposit will be refunded minus any third-party costs already incurred.</p>

          <h3>4. Refund Eligibility for Cause (Post-Delivery)</h3>
          <p>Refunds post-delivery will only be considered in the event of uncured material defects as defined in Section 2. Silva Automation LLC&rsquo;s liability in such cases shall not exceed the total amount paid by Client for the specific service. All other refund requests are denied.</p>

          <h3>5. Non-Refundable Costs</h3>
          <p>The following are non-refundable under all circumstances:</p>
          <ul>
            <li>Third-party licenses and subscriptions</li>
            <li>Service fees and payment processing fees</li>
            <li>Domain and hosting fees</li>
            <li>External contractor costs</li>
            <li>Delivered training materials</li>
          </ul>

          <h3>6. Project Abandonment by Client</h3>
          <p>If Client fails to provide required materials or communication for 30 days, the project may be paused. At 60 days it may be deemed abandoned. All work completed to date will be billed at $125/hour (plus GET) and any remaining balance invoiced accordingly. No refund will be issued for fees already paid.</p>

          <h3>7. Refund Method</h3>
          <p>Approved refunds are issued to the original payment method when possible; otherwise via ACH or check. Refunds exclude currency conversion or transfer fees.</p>

          <h3>8. Disputes</h3>
          <p>Disputes over refunds follow the Dispute Resolution provisions in the Terms and Conditions (negotiation, mediation, arbitration in Honolulu, Hawaii).</p>

          <h3>9. Exceptions and Special Circumstances</h3>
          <p>Exceptions may be made for emergencies, natural disasters, errors by Silva Automation LLC, or mutual agreement. All exceptions require written approval.</p>

          <h3>10. Contact Information</h3>
          <p>For cancellation or refund requests:</p>
          <p><strong>Silva Automation LLC</strong><br/>
          Owner: Savaiinaea &ldquo;Naea&rdquo; Silva<br/>
          Email: contact@silvaautomation.com<br/>
          Phone: (808) 726-6422<br/>
          EIN: 41-3619246<br/>
          Address: 94-207 Waipahu Street, #323, Waipahu, HI 96797</p>

          <p><em>These documents were last updated on October 7, 2025.</em></p>
        `,
      },
    },
  },
};
