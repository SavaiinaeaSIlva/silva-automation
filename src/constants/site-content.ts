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
      { href: '#why-choose-us', label: 'Why Us' },
      { href: '#services', label: 'What We Do' },
      { href: '#calculator', label: 'Calculator' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#contact', label: 'Contact' },
    ],
  },

  hero: {
    title: 'Admin Work Should Run Itself',
    titleLine1Highlight: 'Admin Work',
    titleLine1Rest: '',
    titleLine2Highlight: 'Should Run Itself',
    titleLine2Rest: '',
    subtitle: 'Custom automation for Hawaii service businesses. One flat fee. You own it forever.',
    cta: 'See What It Costs',
    benefits: [
      { label: 'Pay once', icon: 'DollarSign' },
      { label: 'You own it', icon: 'Key' },
      { label: 'Hawaii based', icon: 'MapPin' },
      { label: 'Built custom', icon: 'Wrench' },
      { label: 'Live in 4-6 weeks', icon: 'Zap' },
    ],
    workflowSteps: ['Task comes in', 'Auto-processed', 'Delivered', 'Repeat'],
  },

  whyChooseUs: {
    id: 'why-choose-us',
    label: 'Why Us',
    header: 'No Monthly Fees. Ever.',
    subtitle: 'Pay once. Own everything. We build it, train your team, then hand over the keys.',
    reasons: [
      {
        icon: 'DollarSign',
        title: 'One Flat Fee',
        body: 'Pay once upfront. No subscriptions, no retainers. 90 days of support included, then you only pay when you need changes.',
      },
      {
        icon: 'Key',
        title: 'You Own Everything',
        body: 'Code, infrastructure, documentation—all yours. If we disappear tomorrow, your automation keeps running.',
      },
      {
        icon: 'MapPin',
        title: 'Hawaii Based',
        body: 'Same timezone, same market. We get how service businesses work here.',
      },
      {
        icon: 'Clock',
        title: 'Built in 4-6 Weeks',
        body: 'You approve the plan. We build it. No surprises.',
      },
    ],
  },

  services: {
    id: 'services',
    label: 'Services',
    header: 'Built for Real Estate & Contractors',
    intro: "You're juggling 5 different tools. We make them talk to each other.",

    blocks: [
      {
        type: 'real-estate',
        title: 'Real Estate Agents',
        problem:
          'Lead comes in from Zillow. You manually copy it to your CRM. Type it into your email tool. Add a calendar reminder. Update your pipeline.',
        solution:
          'Lead comes in → CRM updated → follow-up email sent → showing scheduled. Zero manual work.',
        examples: [
          'Zillow lead → auto-added to CRM + follow-up sent',
          'Showing booked → calendar synced + reminders sent',
          'Deal closed → referral request triggered',
        ],
      },
      {
        type: 'contractors',
        title: 'General Contractors',
        problem:
          'Customer approves estimate. You create the job in your scheduler. Add it to QuickBooks. Update your materials list. Email your crew.',
        solution:
          'Estimate approved → job created → crew scheduled → materials ordered. Zero manual steps.',
        examples: [
          'Estimate approved → job scheduled + materials ordered',
          'Job done → invoice sent automatically',
          'Payment received → QuickBooks updated',
        ],
      },
    ],

    otherIndustries:
      'Also work with: dental offices, law firms, property managers, anyone drowning in admin.',
  },

  calculator: {
    id: 'calculator',
    label: 'Calculator',
    title: 'What Does Manual Work Cost You?',
    subtitle: 'Most businesses lose $30K-$80K/year on admin that should be automated',
    inputsTitle: 'Your Numbers',
    resultsTitle: "What You're Losing",
    fields: [
      {
        label: 'People doing admin work',
        placeholder: 'e.g., 10',
        srDescription: 'Number of team members doing admin (1-50)',
        min: 1,
        max: 50,
      },
      {
        label: 'Hours per week (per person)',
        placeholder: 'e.g., 15',
        srDescription: 'Hours per week on admin (1-40)',
        min: 1,
        max: 40,
      },
      {
        label: 'Cost per hour',
        placeholder: 'e.g., 45',
        srDescription: 'Average hourly cost ($20-$200)',
        min: 20,
        max: 200,
      },
      {
        label: 'Automation cost',
        placeholder: 'e.g., 6000',
        srDescription: 'Estimated automation cost',
        min: 0,
        max: undefined,
      },
    ],
    resetButton: 'Reset',
    copyButton: 'Copy',
    copiedButton: 'Copied!',
    copyAriaLabel: 'Copy results',
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
    label: 'Pricing',
    header: 'Pay Once. Own Forever.',
    intro: 'One flat fee. 90 days of support included. After that, pay only when you need us.',

    foundingOffer: {
      show: true,
      badge: 'Founding Client Special',
      headline: '50% Off — First 5 Clients',
      body: 'Get 50% off any package. Help us build our portfolio, lock in founding pricing.',
      spotsRemaining: '3 spots left',
    },

    tiers: [
      {
        name: 'Single Workflow',
        price: '$5,000',
        originalPrice: '$10,000',
        foundingPrice: '$5,000',
        description: 'Automate One Process',
        included: [
          'One custom automation',
          'Connect 1-2 tools',
          'Team training',
          'Complete documentation',
        ],
        badge: '50% Off',
        bestFor: 'Test automation before going all-in',
      },

      {
        name: 'Multi-Workflow',
        price: '$6,000',
        originalPrice: '$12,000',
        foundingPrice: '$6,000',
        description: 'Automate 2-3 Processes',
        included: [
          '2-3 connected automations',
          'Connect 2-3 tools',
          'Team training',
          'Complete documentation',
        ],
        badge: '50% Off — Most Popular',
        bestFor: 'Teams using multiple tools daily',
      },

      {
        name: 'Advanced',
        price: '$7,000+',
        originalPrice: '$14,000+',
        foundingPrice: '$7,000+',
        description: 'Complex Multi-Step Automation',
        included: [
          '3+ automations with logic',
          'Connect 4+ tools',
          'Advanced reporting',
          'Team training + docs',
        ],
        badge: '50% Off',
        bestFor: '20+ employees or complex workflows',
      },
    ],

    tabs: {
      pricing: 'Pricing',
      support: 'After 90 Days',
    },
    afterSupport: {
      title: 'After 90 Days:',
      headline: 'No Monthly Fees',
      intro: 'You own it. Need changes later?',
      benefits: [
        {
          label: 'Pay per project',
          detail: 'No minimums',
        },
        {
          label: 'Billed quarterly',
          detail: 'Only for work done',
        },
        {
          label: '15-min increments',
          detail: 'Transparent billing',
        },
      ],
      coversTitle: '',
      covers: [],
    },
  },

  contact: {
    id: 'contact',
    label: 'Contact',
    title: 'Ready to Automate?',
    subtitle:
      'Hawaii service businesses with 5-50 employees. Real estate, contractors, professional services, healthcare.',
    webhook: 'https://n8n.silvaautomation.com/webhook/c0185471-5c05-41c8-b140-124d79f90a38',
    cta: {
      text: 'Book Free 30-Min Call',
      url: 'https://calendly.com/silvaautomation/consultation',
    },

    form: {
      title: 'Questions?',
      subtitle: 'Text or call (808) 726-6422',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      nameSr: 'Enter your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@company.com',
      emailSr: 'Enter your email',
      messageLabel: 'Message',
      messagePlaceholder: 'What do you want to automate?',
      submit: 'Send',
      submitting: 'Sending...',
      success: "Got it. We'll reply within 24 hours.",
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
          q: 'How long does it take?',
          a: '4-6 weeks. Depends on complexity and how fast you give us access to your tools.',
        },
        {
          q: 'Do I need to know code?',
          a: "No. It runs automatically. We'll show you how to monitor it.",
        },
        {
          q: 'Can I change it myself?',
          a: 'Yes. You own it. Full documentation included. Most clients handle small tweaks themselves.',
        },
        {
          q: 'Why not hire an admin?',
          a: "Admin = $35K-$50K/year + benefits. Automation = $5K-$7K once. Plus it doesn't call in sick.",
        },
        {
          q: 'Why not use Zapier?',
          a: "Zapier works for simple stuff. Complex logic, error handling, 4+ tools—you need custom code. That's what we build.",
        },
        {
          q: 'Is the 50% offer real?',
          a: 'Yes. First 5 clients get 50% off to help us build our portfolio. After that, full price.',
        },
      ],

      business: [
        {
          q: 'What size businesses?',
          a: '5-50 employees. Using 3+ software tools. Spending 10+ hours/month on repetitive tasks.',
        },
        {
          q: 'Work outside Hawaii?',
          a: "Hawaii-focused, but we take mainland clients if it's a good fit.",
        },
        {
          q: 'What industries?',
          a: 'Real estate, contractors, law firms, medical/dental, property managers. Any service business with too much admin.',
        },
        {
          q: 'How do you handle our data?',
          a: 'Runs in your cloud. You control security. We never store sensitive data.',
        },
        {
          q: 'Refunds?',
          a: "No refunds after we start. But you approve everything first. If we can't solve it, we tell you in week 1—before you pay.",
        },
        {
          q: 'What if you go out of business?',
          a: 'You own everything—code, infrastructure, docs. It keeps running. Any developer can maintain it.',
        },
      ],
    },
  },

  footer: {
    quickLinksTitle: 'Quick Links',
    legalTitle: 'Legal',
    getInTouchTitle: 'Contact',
    companyName: 'Silva Automation',
    tagline: 'Automation for Hawaii service businesses. One price, no monthly fees.',
    quickLinks: [
      { label: 'What We Do', href: '#services' },
      { label: 'Calculator', href: '#calculator' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
    ],
    legalLinks: [
      { label: 'Terms', to: '/terms' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Cookies', to: '/cookies' },
      { label: 'Refunds', to: '/refunds' },
    ],
    email: 'contact@silvaautomation.com',
    phone: '(808) 726-6422',
    phoneHref: 'tel:+18087266422',
    bookAssessmentText: 'Book Free Call',
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

  loader: {
    loadingText: 'Loading...',
  },

  legalLayout: {
    backToHome: 'Back to Home',
    logoAlt: 'Silva Automation',
    lastUpdated: 'October 7, 2025',
    footerText: 'Silva Automation LLC. All rights reserved.',
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
