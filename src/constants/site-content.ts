/**
 * Site Content Configuration
 *
 * Centralized content management for the entire site.
 * All text, labels, and configuration data is defined here.
 */

import type { SiteContent } from '@/types';

export const siteContent: SiteContent = {
  header: {
    skipToMainContent: 'Skip to main content',
    logoAlt: 'Silva Automation',
    backToTopAria: 'Back to top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mobileNavAria: 'Mobile navigation',
    navLinks: [
      { href: '#workflow', label: 'Solutions' },
      { href: '#calculator', label: 'Calculator' },
      { href: '#pricing', label: 'Investment' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Contact Us' },
    ],
    bookingCta: {
      text: 'Book Strategy Call',
      url: 'https://calendly.com/silvaautomation/consultation',
    },
  },

  hero: {
    title: 'Scale Your Operations, Not Your Overhead.',
    titlePrefix: 'Reclaim Your',
    rollingWords: [
      'Business',
      'Efficiency',
      'Workflow',
      'Revenue',
      'Freedom',
      'Profits',
      'Growth',
      'Impact',
      'Focus',
      'Time',
    ],
    titleLine1Highlight: 'Scale Your Operations,',
    titleLine1Rest: '',
    titleLine2Highlight: 'Not Your Overhead.',
    titleLine2Rest: '',
    subtitle:
      'Workflow automation for Hawaii service businesses. One fixed project fee. Client-owned infrastructure. No recurring software subscriptions.',
    cta: 'Calculate Your Savings',
    bookingCta: {
      text: 'Schedule a Consultation',
      url: 'https://calendly.com/silvaautomation/consultation',
    },
    benefits: [
      { label: 'Fixed-Fee Projects', icon: 'DollarSign' },
      { label: '100% Asset Ownership', icon: 'Key' },
      { label: 'Hawaii-Based Engineering', icon: 'MapPin' },
      { label: '5-Phase Lifecycle', icon: 'Zap' },
    ],
    workflowSteps: ['Discovery', 'Design', 'Build/Test', 'Deploy/Train', 'Support'],
  },

  workflow: {
    id: 'workflow',
    label: 'Workflow',
    title: "Built for Hawaii's Service Firms",
    subtitle:
      'Silva Automation designs and delivers custom workflows for established Hawaii businesses. Professional services, real estate, and healthcare. Each solution is implemented directly in your cloud environment using platforms such as n8n and Oracle Cloud, so your team retains full control and ownership of every asset.',
    clickHint: 'Click any node to learn more',
    replayAnimationAria: 'Replay animation',
    closeAria: 'Close',
    previousNodeAria: 'Previous node',
    nextNodeAria: 'Next node',
    nodeDetailsSuffix: '— click for details',
    inputs: [
      {
        icon: 'database',
        title: 'Database Sync',
        subtitle: 'Oracle Cloud',
        backInfo:
          'Syncs customer records, orders, and inventory in real time from your database into your core tools via n8n running in your Oracle Cloud.',
      },
      {
        icon: 'zap',
        title: 'Forms & Events',
        subtitle: 'Webhook',
        backInfo:
          'Captures form submissions, payments, and upstream system events, then pushes clean data into your CRM, billing, or practice software.',
      },
      {
        icon: 'folder',
        title: 'Documents',
        subtitle: 'Cloud Storage',
        backInfo:
          'Ingests uploaded PDFs, images, and CSVs stored in your cloud, preparing them for automated routing and downstream workflows.',
      },
    ],
    engine: {
      icon: 'cpu',
      title: 'Workflow Engine',
      subtitle: 'AI',
      backInfo:
        'Routes, transforms, and enriches data in your Oracle Cloud using n8n workflows and AI where needed. Applies business rules so every record lands in the right system, in the right format, automatically.',
    },
    outputs: [
      {
        icon: 'bar-chart',
        title: 'Analytics',
        subtitle: 'Dashboard',
        backInfo:
          'Analytics dashboard surfaces real-time KPIs so principals can monitor workload, revenue, and bottlenecks without manual reporting.',
      },
      {
        icon: 'bell',
        title: 'Notifications',
        subtitle: 'Slack/Email',
        backInfo:
          'Slack/email alerts fire only when action is required, reducing noise while keeping teams on top of critical events.',
      },
      {
        icon: 'clipboard',
        title: 'Logs',
        subtitle: 'Audit Trail',
        backInfo:
          'Centralized logs in your cloud environment support audit trails, compliance needs, and rapid troubleshooting.',
      },
    ],
  },

  calculator: {
    id: 'calculator',
    label: 'Calculator',
    title: 'Quantify Your Administrative Load',
    subtitle: 'Estimate the annual cost of manual, repetitive work inside your firm.',
    inputsTitle: 'Your Numbers',
    resultsTitle: 'Cost of Manual Work',
    fields: [
      {
        label: 'Total Administrative Headcount',
        placeholder: 'e.g., 10',
        srDescription: 'Number of administrative staff (1-50)',
        min: 1,
        max: 50,
      },
      {
        label: 'Average Weekly Admin Hours (Per Person)',
        placeholder: 'e.g., 15',
        srDescription: 'Average weekly admin hours per person (1-40)',
        min: 1,
        max: 40,
      },
      {
        label: 'Hourly Labor Rate',
        placeholder: 'e.g., 45',
        srDescription: 'Average hourly labor rate ($20-$200)',
        min: 20,
        max: 200,
      },
      {
        label: 'Estimated Automation Project Price',
        placeholder: 'e.g., 6000',
        srDescription: 'Estimated automation project price',
        min: 0,
        max: undefined,
      },
    ],
    resetButton: 'Reset',
    copyButton: 'Copy',
    copiedButton: 'Copied!',
    copyAriaLabel: 'Copy results',
    monthsUnit: 'months',
    percentUnit: '%',
    resultLabels: {
      monthlyAdminCost: 'Monthly cost',
      yearlyRevenueLeak: 'Yearly cost',
      yearlyHoursSaved: 'Hours saved',
      paybackPeriod: 'Pays back in',
      firstYearRoi: 'First year ROI',
      yearlySavings: 'Saved yearly',
    },
  },

  pricing: {
    id: 'pricing',
    label: 'Investment',
    header: 'Fixed-Fee Projects. No Retainers.',
    intro:
      'Silva Automation operates on a project-based model. Each engagement is scoped and priced as a one-time fixed fee, with no ongoing retainers required for the automation to continue running.',

    bestForLabel: 'Best for:',

    foundingOffer: {
      show: false,
      badge: '',
      headline: '',
      body: '',
      spotsRemaining: '',
    },

    tiers: [
      {
        name: 'Starter Workflow',
        price: '$6,000',
        originalPrice: '$6,000',
        foundingPrice: '$6,000',
        description: 'One core workflow (e.g., lead intake, basic billing, or scheduling)',
        included: [
          'Discovery & workflow design',
          'Build, testing, and integrations',
          'Implemented in your cloud using n8n and Oracle Cloud',
          'Staff training and documentation',
          '90 days of post-launch support',
        ],
        badge: 'Fixed Fee',
        bestFor: 'First automation project or a single high-impact process',
      },
      {
        name: 'Founding Client Bundle',
        price: '$5,000',
        originalPrice: '$6,000',
        foundingPrice: '$5,000',
        description: 'One end-to-end workflow with higher-touch discovery and refinement',
        included: [
          'Deep-dive discovery and process mapping',
          'Custom workflow design and implementation',
          'Deployed in your Oracle Cloud, orchestrated by n8n',
          'Staff training and handover',
          '90 days of complimentary support',
          'Priority updates for your case study',
        ],
        badge: 'Founding Client Rate',
        bestFor:
          'Early-adopter firms willing to be featured in case studies — limited availability',
      },
      {
        name: 'Growth Workflow Suite',
        price: '$7,500–$8,000',
        originalPrice: '$7,500–$8,000',
        foundingPrice: '$7,500–$8,000',
        description: 'Two to three connected workflows (e.g., intake → delivery → invoicing)',
        included: [
          'Multi-process discovery and design',
          'Complex workflow build and integrations',
          'Multi-workflow automation using n8n and Oracle Cloud',
          'Staff training for each workflow',
          '90 days of post-launch support',
        ],
        badge: 'Fixed Fee',
        bestFor: 'Firms ready to automate multiple related processes',
      },
    ],

    afterSupport: {
      title: 'After 90 Days:',
      headline: 'No Retainer Required',
      intro:
        'You may either manage the workflows internally or engage Silva Automation for optional maintenance on an as-needed basis.',
      benefits: [
        {
          label: 'Self-managed',
          detail: 'Run it yourself with full documentation',
        },
        {
          label: 'On-demand support',
          detail: 'Engage us only when needed',
        },
        {
          label: 'Project or hourly',
          detail: 'Flexible engagement options',
        },
      ],
      coversTitle: '',
      covers: [],
    },
  },

  contact: {
    id: 'contact',
    label: 'Contact',
    title: 'Contact Us',
    subtitle:
      'Have a question? Want to see if automation is a fit for your business? Get in touch.',
    webhook: 'https://n8n.silvaautomation.com/webhook/c0185471-5c05-41c8-b140-124d79f90a38',
    cta: {
      text: 'Schedule a Consultation',
      url: 'https://calendly.com/silvaautomation/consultation',
    },

    form: {
      title: 'Get in Touch',
      subtitle: 'Call or Text (808) 726-6422',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your full name',
      nameSr: 'Enter your full name',
      emailLabel: 'Corporate Email',
      emailPlaceholder: 'you@company.com',
      emailSr: 'Enter your corporate email',
      messageLabel: 'Inquiry',
      messagePlaceholder: 'Message or question',
      submit: 'Send',
      submitting: 'Sending...',
      success: 'All inquiries receive a response within one business day.',
      error: 'Failed. Call us instead.',
      validation: {
        required: 'Name and email required',
        emailInvalid: 'Valid email required',
      },
    },
  },

  faq: {
    id: 'faq',
    label: 'FAQ',
    title: 'Questions',
    intro: '',
    searchPlaceholder: 'Search...',
    searchLabelSr: 'Search FAQ',
    searchAriaLabel: 'Search FAQ',
    searchHint: 'Type a question or keyword to search our FAQ.',
    popularQuestionsTitle: 'Popular questions',
    seeLess: 'See less',
    seeAllTemplate: 'See all ({{count}})',
    noResults: 'No matches.',
    clearSearch: 'Clear',

    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@company.com',
      questionLabel: 'Question',
      questionPlaceholder: 'What would you like to know?',
      submit: 'Send question',
      submitting: 'Sending...',
      success: "Thanks — we'll reply soon.",
      error: 'Failed to send. Try again later.',
      validation: {
        required: 'Name, email and question required',
        emailInvalid: 'Valid email required',
      },
    },

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
    companyName: 'Silva Automation',
    tagline:
      'Workflow automation for Hawaii service businesses. One fixed project fee. No recurring subscriptions.',
    quickLinks: [
      { label: 'Solutions', href: '#workflow' },
      { label: 'Investment', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
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
    cookiePolicyLinkText: 'Cookie Policy',
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

          <p>This website, <em>www.silvaautomation.com</em> (the "Site"), and the services offered through it, are owned and operated by Silva Automation LLC. By accessing or using our Site and services, you agree to be bound by these Terms and Conditions ("Terms").</p>

          <h3>1. Description of Services</h3>
          <p>Silva Automation LLC provides business-to-business automation services, including workflow development, system integration, and process optimization. The specific scope of work for each project will be outlined in a separate Service Agreement and Project Proposal, which are incorporated into these Terms by reference.</p>

          <h3>2. Client Obligations</h3>
          <p>You agree to use our Site and services only for lawful purposes and in compliance with all applicable federal, state, and local laws. You agree to provide accurate, complete, and timely information, materials, and feedback necessary for the performance of the services. Client acknowledges that failure to do so may result in project delays or timeline extensions, for which Silva Automation shall not be held responsible.</p>
          <p><strong>Project Abandonment:</strong> If the Client fails to provide necessary feedback, materials, or communication for a continuous period of 30 days without prior notice, Silva Automation LLC reserves the right to pause the project. If non-communication extends to 60 days, the project may be considered abandoned. In this event, the initial deposit will be forfeited, and all work completed to date will be billed at our standard hourly rate.</p>

          <h3>3. Intellectual Property Rights</h3>
          <p>Upon full and final payment by the Client, Silva Automation LLC grants and assigns to the Client all right, title, and interest in the custom deliverables created specifically for the Client under the applicable Service Agreement ("Custom Work Product"). The Custom Work Product includes the final source code, workflow configurations, databases, and project documentation.</p>
          <p>Silva Automation LLC retains ownership of all pre-existing intellectual property, including but not limited to proprietary tools, libraries, frameworks, methodologies, templates, know-how, and any code or materials not created specifically for the Client ("Pre-Existing IP"). Client is granted a non-exclusive, royalty-free, perpetual license to use any Pre-Existing IP solely to the extent it is embedded in or necessary for the operation of the Custom Work Product.</p>

          <h3>4. Payments, Fees, and Hawaii General Excise Tax (GET)</h3>
          <p><strong>Payment Structure:</strong></p>
          <ul>
            <li>All services are provided on a fixed-price basis as outlined in your Project Proposal</li>
            <li>A <strong>50% deposit</strong> is due upon signing the Service Agreement before work begins</li>
            <li>A <strong>50% final payment</strong> is due upon project completion and delivery of all agreed-upon deliverables</li>
            <li>All prices are quoted in United States Dollars (USD)</li>
          </ul>
          <p><strong>Hawaii General Excise Tax (GET):</strong> As a business operating in Hawaii, we are required to collect Hawaii General Excise Tax (GET) at a rate of 4.5%. This will be added as a separate line item to all invoices.</p>
          <p><strong>Payment Methods:</strong> We accept payment via bank transfer (ACH), credit/debit card (processing fees may apply), and check (must clear before work commences).</p>
          <p><strong>Late Payments:</strong> Invoices not paid within 15 days of the due date will incur a late fee of 1.5% per month (18% annually) on the outstanding balance, to the extent permitted under Hawaii law. We reserve the right to suspend work on projects with overdue invoices exceeding 30 days and may pursue collection through legal channels if necessary.</p>

          <h3>5. Post-Delivery Support &amp; Maintenance</h3>
          <p>All packages include <strong>30 days of free technical support</strong> from the date of project completion. During this period, Silva Automation LLC will address bugs and integration issues stemming from the original implementation as delivered.</p>
          <p><strong>Support Exclusions:</strong> Support is strictly limited to the original workflow and systems as delivered. Silva Automation LLC is not obligated to provide support, free or paid, for any issues arising from modifications by the Client or third parties, changes to third-party applications, client-side errors, new features outside the original scope, or normal third-party platform updates or deprecations.</p>
          <p><strong>After the 30-Day Support Period:</strong> Support beyond 30 days is available at our current hourly rate of <strong>$125/hour</strong> (plus GET) or through an optional monthly support retainer.</p>

          <h4>5.1 Optional Monthly Support Retainer</h4>
          <p>For clients desiring ongoing support, Silva Automation LLC offers a monthly retainer service. The specific services, hours, and fees will be detailed in a separate Retainer Agreement.</p>
          <ul>
            <li><strong>Services:</strong> Proactive workflow monitoring, minor adjustments to existing workflows, data source management, priority support, and consultation on workflow optimization.</li>
            <li><strong>Billing:</strong> The retainer fee is billed monthly in advance and is non-refundable for unused hours.</li>
            <li><strong>Scope:</strong> The retainer does not cover development of new features or major overhauls.</li>
            <li><strong>Cancellation:</strong> Can be cancelled by either party with 30 days' written notice.</li>
          </ul>

          <h4>5.2 Founding Client Program - Special Terms</h4>
          <p>Silva Automation LLC may offer a limited <strong>Founding Client Program</strong> with special pricing and extended support terms. Terms for this program will be detailed in the applicable Service Agreement. Any lifetime discount offered is contingent upon the Client's account remaining in good standing and shall terminate immediately upon material breach of these Terms, including non-payment of any invoice.</p>

          <h3>6. Client Credentials and Access</h3>
          <p>To deliver services, Silva Automation LLC may require access to Client's third-party accounts and systems. Client agrees to provide necessary credentials and permissions in a timely manner and notify us immediately if credentials are changed or compromised.</p>
          <p>Silva Automation LLC agrees to store all credentials securely using industry-standard encryption, use them only for the agreed-upon project scope, and delete them upon project completion unless ongoing support is contracted.</p>
          <p>Client agrees to indemnify, defend, and hold harmless Silva Automation LLC from any and all claims, damages, and expenses arising from unauthorized access or data breach resulting from the use of Client-provided credentials, unless such breach is a direct result of Silva Automation LLC's gross negligence or willful misconduct. Silva Automation LLC agrees to comply with Hawaii's data breach notification requirements under HRS §487N in the event of a security incident involving Client's information.</p>

          <h3>7. Confidentiality</h3>
          <p>"Confidential Information" means any non-public information disclosed by one party to the other that is designated as confidential or that reasonably should be understood to be confidential. Confidential Information does not include information that is public, already in the receiving party's possession, independently developed, or rightfully received from a third party.</p>
          <p>Both parties agree to hold each other's Confidential Information in strict confidence, use it only for performing this Agreement, and not disclose it to third parties without prior written consent. This obligation of confidentiality shall survive termination for three (3) years.</p>

          <h3>8. Limitation of Liability</h3>
          <p>IN NO EVENT SHALL SILVA AUTOMATION LLC'S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT EXCEED THE TOTAL AMOUNT PAID BY CLIENT HEREUNDER IN THE 12 MONTHS PRECEDING THE INCIDENT. IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
          <p>These limitations do not apply to liability resulting from gross negligence, willful misconduct, fraud, or data breaches caused by Silva Automation LLC's failure to maintain reasonable security measures. Nothing in these Terms shall limit liability which cannot be limited by law, including rights under Hawaii UDAP laws.</p>

          <h3>9. Disclaimer of Warranties</h3>
          <p>Except as expressly stated in a signed Service Agreement, services and information on this Site are provided "AS IS" and "AS AVAILABLE" without warranties of any kind. Silva Automation LLC does not warrant uninterrupted or error-free services.</p>

          <h3>10. Reliance on Third-Party Services</h3>
          <p>Client acknowledges that the services provided depend on third-party platforms and Silva Automation LLC is not responsible for interruptions or changes caused by those third parties. Client is responsible for maintaining appropriate subscriptions and licenses for all third-party services used in conjunction with our deliverables.</p>

          <h3>11. Indemnification</h3>
          <p>Client agrees to indemnify, defend, and hold harmless Silva Automation LLC from claims arising out of Client's use of services, violation of Terms, or violation of third-party rights. Silva Automation LLC agrees to indemnify Client against claims that the Custom Work Product infringes any third-party intellectual property rights, subject to prompt notice and cooperation.</p>

          <h3>12. Governing Law and Dispute Resolution</h3>
          <ol>
            <li><strong>Negotiation:</strong> Parties shall attempt to negotiate a resolution in good faith for 30 days.</li>
            <li><strong>Mediation:</strong> If negotiation fails, participate in mediation in Honolulu, Hawaii.</li>
            <li><strong>Arbitration:</strong> If mediation is unsuccessful, disputes shall be resolved by binding arbitration administered by AAA in Honolulu, Hawaii. Parties waive jury trial and class actions.</li>
          </ol>

          <h3>13. Termination</h3>
          <p>Either party may terminate a Service Agreement for cause upon 30 days' written notice if the other party materially breaches and fails to cure. Silva Automation LLC may suspend services immediately for non-payment exceeding 15 days. Upon termination, Client shall pay for all work completed to date.</p>

          <h3>14. Force Majeure</h3>
          <p>Neither party shall be liable for failure or delay due to events beyond reasonable control (acts of God, war, natural disasters, pandemics, third-party hosting failures, etc.). If the event continues for more than 60 days, either party may terminate the affected Service Agreement.</p>

          <h3>15. General Provisions</h3>
          <p><strong>Assignment:</strong> Neither party may assign its rights without prior written consent, except Silva Automation LLC may assign to an affiliate or in a sale of assets. <strong>Severability:</strong> If any provision is invalid, the remaining provisions remain in effect. <strong>Entire Agreement:</strong> These Terms together with Service Agreements constitute the entire agreement. <strong>Modification:</strong> No modification is effective unless in writing and signed by both parties. <strong>Waiver:</strong> No waiver constitutes a continuing waiver.</p>

          <h3>16. Contact Information</h3>
          <p>For questions regarding these Terms, contact us at:</p>
          <p><strong>Silva Automation LLC</strong><br/>
          Owner: Savaiinaea "Naea" Silva<br/>
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

          <p>Silva Automation LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>

          <h3>1. Information We Collect</h3>
          <p><strong>Personal Data:</strong> Name, company name, email, telephone, billing address, and payment information provided voluntarily (contact forms, Service Agreements).</p>
          <p><strong>Derivative Data:</strong> Server-collected data such as IP address, browser type, OS, access times, pages viewed, referring website, and device information (collected via Google Analytics).</p>
          <p><strong>Client Project Data:</strong> Temporary access to business systems and data necessary to perform automation services; handled with strict confidentiality.</p>
          <p><strong>Communications Data:</strong> Records of emails, chat transcripts (Tidio), phone calls, and support tickets.</p>
          <p><strong>Third-Party Credentials:</strong> Login credentials and API keys provided to implement automation solutions; stored securely and used only as authorized.</p>

          <h3>2. Use of Your Information</h3>
          <p>We use information to respond to inquiries, create and manage accounts, process payments, provide support, send project updates and invoices, improve services, monitor usage, detect security threats, comply with legal obligations, and send marketing communications with consent.</p>

          <h3>3. Legal Basis for Processing</h3>
          <p>We process personal information based on contract performance, legitimate interests, legal obligations, and consent where applicable.</p>

          <h3>4. Disclosure of Your Information</h3>
          <p>We do not sell personal information. We may share data with service providers (Google Analytics, Tidio, payment processors, email providers, cloud hosts) under contractual obligations, with legal authorities when required, or in business transfers. We will obtain consent before other disclosures.</p>

          <h3>5. Data Security and Retention</h3>
          <p>We implement administrative, technical, and physical security measures including encryption, secure credential storage, limited access, and regular security assessments. Data is retained only as necessary: client project data is typically retained for the duration of the project plus three years unless specified otherwise.</p>
          <p>In the event of a data breach, we will comply with Hawaii law (HRS §487N) and notify affected individuals without unreasonable delay.</p>

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

          <h3>11. Children's Privacy</h3>
          <p>Our services are intended for business use and not directed to individuals under 18. We do not knowingly collect information from children.</p>

          <h3>12. California Privacy Rights</h3>
          <p>California residents may have additional rights under the CCPA. Contact us for more information.</p>

          <h3>13. Changes to This Privacy Policy</h3>
          <p>We may update this policy and will notify users by updating the Effective Date and posting notices as appropriate. Continued use constitutes acceptance.</p>

          <h3>14. Contact Us</h3>
          <p>Questions or requests: contact@silvaautomation.com or (808) 726-6422. Address: 94-207 Waipahu Street, #323, Waipahu, HI 96797.</p>
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
          <p>Remember preferences and enhance features (Tidio chat). Placed only if you accept optional cookies.</p>

          <h3>3. Third-Party Cookies</h3>
          <p>Third parties (Google Analytics, Tidio) may place cookies according to their policies. We do not control these cookies.</p>

          <h3>4. Your Cookie Choices</h3>
          <p>Use the cookie banner to Accept All or Accept Necessary Cookies Only. You can change preferences by clearing browser cookies, using the footer preference link, or adjusting browser settings.</p>

          <h3>5. Browser Controls</h3>
          <p>Instructions for common browsers are provided; blocking/deleting cookies may impact Site functionality.</p>

          <h3>6. Do Not Track Signals</h3>
          <p>We do not currently respond to DNT signals; manage cookies via the consent banner and browser settings.</p>

          <h3>7. Mobile Devices</h3>
          <p>Manage tracking via device settings on iOS and Android.</p>

          <h3>8. Cookie Lifespan</h3>
          <p>Session cookies expire on browser close; persistent cookies have set lifespans (consent: 12 months; analytics: up to 24 months; Tidio: 12 months/30 days).</p>

          <h3>9. Updates to This Cookie Policy</h3>
          <p>We will update the Effective Date and notify users of material changes.</p>

          <h3>10. Data Protection and Privacy</h3>
          <p>Cookie data is processed per our Privacy Policy; data may be processed in the United States.</p>

          <h3>11. Contact Us</h3>
          <p>Questions about cookies: contact@silvaautomation.com or (808) 726-6422.</p>
        `,
      },

      refunds: {
        title: 'Refund & Cancellation Policy',
        content: `
          <p><strong>Effective Date:</strong> October 7, 2025</p>

          <h3>1. General Principles</h3>
          <p>As a service-based business, our work involves significant time and resources that cannot be returned like physical products. The 50% deposit secures your project and covers initial setup, discovery, planning, and resource allocation. This policy outlines refund circumstances.</p>

          <h3>2. Project Completion &amp; Acceptance</h3>
          <p><strong>Project Delivery:</strong> A project is considered complete upon delivery of final workflow files, documentation, access credentials, and other deliverables specified in the Project Proposal.</p>
          <p><strong>Review Period:</strong> Client has <strong>7 calendar days</strong> from delivery to report material defects. Material defects are verifiable failures of core functions as agreed in the Proposal and do not include stylistic preferences, requests for out-of-scope features, third-party changes, or minor cosmetic issues.</p>
          <p><strong>Acceptance:</strong> If no defects are reported within 7 days, the project is considered accepted and the final 50% payment is due. <strong>Cure Period:</strong> If defects are reported, Silva Automation LLC has 15 business days to remedy them.</p>

          <h3>3. Cancellation by Client (Prior to Delivery)</h3>
          <p>Client may terminate before final delivery by written notice to contact@silvaautomation.com. Refund terms: Client receives a 25% refund of the total project value; Silva Automation retains 25% to cover costs. Refunds processed within 14 business days; third-party costs are non-refundable and deducted from refunds.</p>

          <h3>4. Refund Eligibility for Cause (Post-Delivery)</h3>
          <p>Refunds post-delivery may be considered for uncured material defects. Refund amounts are based on severity, scope, and work completed and typically range from 10% to 50% of the final payment. Full refunds post-delivery are rare.</p>

          <h3>5. Non-Refundable Costs</h3>
          <p>Non-refundable: third-party licenses/subscriptions, service fees, payment processing fees, domain/hosting fees, external contractor costs, and delivered training materials. These will be itemized and deducted from refunds.</p>

          <h3>6. Project Abandonment by Client</h3>
          <p>If Client fails to provide required materials or communication for 30 days, project may be paused; at 60 days it may be deemed abandoned. Initial deposit is forfeited and work completed will be billed at $125/hour (plus GET).</p>

          <h3>7. Refund Method</h3>
          <p>Approved refunds are issued to the original payment method when possible; otherwise ACH or check. Refunds exclude currency conversion or transfer fees.</p>

          <h3>8. Disputes</h3>
          <p>Disputes over refunds follow the Dispute Resolution provisions in the Terms and Conditions (negotiation, mediation, arbitration).</p>

          <h3>9. Exceptions and Special Circumstances</h3>
          <p>Exceptions may be made for emergencies, natural disasters, errors by Silva Automation LLC, or mutual agreement; exceptions require written approval.</p>

          <h3>10. Contact Information</h3>
          <p>For cancellation or refund requests: contact@silvaautomation.com or (808) 726-6422. Address: 94-207 Waipahu Street, #323, Waipahu, HI 96797.</p>

          <p><em>These documents were last updated on October 7, 2025.</em></p>
        `,
      },
    },
  },
};
