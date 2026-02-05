export const siteContent = {
  header: {
    skipToMainContent: 'Skip to main content',
    logoAlt: 'Silva Automation',
    backToTopAria: 'Back to top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mobileNavAria: 'Mobile navigation',
    navLinks: [
      { href: '#challenge-and-solution', label: 'Intro' },
      { href: '#process', label: 'Process' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#calculator', label: 'Calculator' },
      { href: '#contact', label: 'Schedule' },
      { href: '#faq', label: 'FAQ' },
    ],
  },

  hero: {
    title: 'Stop Drowning in Paperwork. Start Running Your Business',
    titleLine1Highlight: 'Stop',
    titleLine1Rest: 'Drowning in Paperwork.',
    titleLine2Highlight: 'Start',
    titleLine2Rest: 'Running Your Business',
    subtitle:
      'Custom automation for Hawaii service businesses. Scheduling, invoicing, and follow-ups that run themselves.',
    cta: 'Get Free Assessment',
    benefits: [
      { label: 'Save time', icon: 'Zap' },
      { label: 'Fewer errors', icon: 'Target' },
      { label: 'Scale without hiring', icon: 'Repeat' },
      { label: 'Runs reliably', icon: 'Shield' },
      { label: 'You Own It', icon: 'Key' },
      { label: 'Secure Data', icon: 'Lock' },
      { label: 'Custom Built', icon: 'Wrench' },
      { label: 'Fast ROI', icon: 'TrendingUp' },
      { label: 'Hawaii Based', icon: 'MapPin' },
      { label: 'Seamless Integration', icon: 'Plug' },
    ],
  },

  pricing: {
    header: 'Pay Once. Own Forever.',
    intro:
      'One-time project fees. No retainers. Every package includes 90 days of free support—after that, you only pay when you need us.',
    tiers: [
      {
        name: 'Founding Client Package',
        price: '$5,000',
        description: 'Single Core Workflow',
        included: [
          'Complete discovery and workflow mapping for one priority process',
          'Custom automation for a single high-impact workflow',
          'Integration with 1–2 existing systems',
          'Deployment, training, and documentation for self-management',
        ],
        badge: 'Limited Availability',
      },

      {
        name: 'Standard Project',
        price: '$6,000',
        description: 'Multi-Workflow Solution',
        included: [
          'Discovery and mapping of core operations',
          'Custom automations for 2–3 related workflows',
          'Integration across 2–3 systems',
          'Cloud deployment with full training and documentation',
        ],
        badge: 'Most Popular',
      },

      {
        name: 'Advanced Integration',
        price: '$7,000+',
        description: 'Complex Automation',
        included: [
          'Comprehensive discovery and mapping for advanced operations',
          'Automations for 3+ workflows with complex logic',
          'Integration across 4+ systems',
          'Deployment with advanced reporting and documentation',
        ],
        badge: 'Enterprise-Grade',
      },
    ],

    tabs: {
      pricing: 'Pricing',
      support: 'After 90 Days',
    },
    afterSupport: {
      title: 'After Your 90-Day Free Support Period:',
      headline: 'Zero Monthly Retainers. Ever.',
      intro: 'We stand behind our work. After 90 days, you own everything. If you need us:',
      benefits: [
        {
          label: 'Pay only for actual work',
          detail: 'No contracts, no minimums',
        },
        {
          label: 'Billed quarterly',
          detail: 'Every 3 months for work performed',
        },
        {
          label: '15-minute increments',
          detail: 'Fair, transparent billing',
        },
        {
          label: 'Most clients go months without needing us',
          detail: "That's how we know it works",
        },
      ],
      coversTitle: 'What On-Demand Support Covers:',
      covers: [
        'Workflow adjustments',
        'New integrations',
        'Troubleshooting edge cases',
        'System health checks (optional)',
      ],
    },
  },

  calculator: {
    title: 'Overhead Calculator',
    subtitle: 'What Admin Work Really Costs You',
    inputsTitle: 'Inputs',
    resultsTitle: 'Results',
    fields: [
      {
        label: 'Team size (crew/agents doing admin work)',
        placeholder: 'e.g., 10',
        srDescription: 'Enter the number of team members doing administrative work (1-50)',
        min: 1,
        max: 50,
      },
      {
        label: 'Weekly paperwork hours per person (hrs/week)',
        placeholder: 'e.g., 15',
        srDescription: 'Enter hours spent on paperwork per person per week (1-40)',
        min: 1,
        max: 40,
      },
      {
        label: 'Average hourly cost ($/hr)',
        placeholder: 'e.g., 45',
        srDescription: 'Enter average hourly cost per employee ($20-$200)',
        min: 20,
        max: 200,
      },
      {
        label: 'Estimated automation project cost ($)',
        placeholder: 'e.g., 6000',
        srDescription: 'Enter estimated cost for automation project in dollars',
        min: 0,
        max: undefined,
      },
    ],
    resultLabels: {
      monthlyAdminCost: 'Monthly admin cost',
      yearlyRevenueLeak: 'Yearly revenue leak',
      paybackPeriod: 'Payback period',
    },
  },

  contact: {
    title: 'Ready to Automate Your Workflows?',
    subtitle:
      'Serving Hawaii service businesses—professional services, real estate, healthcare, and specialty trades. Firms with 5–50 employees ready to eliminate repetitive work.',
    whatToExpect: 'What to expect',
    cta: {
      text: 'Book Free Assessment',
      url: 'https://calendly.com/silvaautomation/consultation',
    },
    benefits: [
      '30-minute consultation, no obligation',
      'Review your current processes',
      'Identify high-impact opportunities',
    ],
  },

  process: {
    header: 'How We Work',
    subtitle: 'A proven path from bottleneck to breakthrough—built for Hawaii service businesses.',
    steps: [
      {
        number: '01',
        title: 'The Audit',
        body: "We identify exactly where you're losing time and money.",
        deliverable: 'Full inefficiency report',
        duration: '3–5 days',
      },
      {
        number: '02',
        title: 'The Blueprint',
        body: 'We architect a custom automation roadmap for your business.',
        deliverable: 'Detailed roadmap with sign-off',
        duration: '1 week',
      },
      {
        number: '03',
        title: 'The Build',
        body: 'We code your custom automation, test rigorously, and deploy to your cloud.',
        deliverable: 'Live, tested automations',
        duration: '2–3 weeks',
      },
      {
        number: '04',
        title: 'The Handoff',
        body: 'We train your team and transfer complete ownership.',
        deliverable: 'Training + documentation + code access',
        duration: '3–5 days',
      },
    ],
    cta: {
      text: 'See how much you can save',
      anchor: '#calculator',
    },
  },

  faq: {
    title: 'Frequently Asked Questions',
    intro: 'Common questions about process, support, and pricing.',
    searchPlaceholder: 'Search questions...',
    searchLabelSr: 'Search FAQ',
    searchAriaLabel: 'Search FAQ',
    seeLess: 'See less',
    seeAllTemplate: 'See all ({{count}} questions)',
    noResults: 'No questions match your search.',

    categories: {
      process: [
        {
          q: 'How long does a typical project take?',
          a: 'Most projects complete in 4-6 weeks from discovery to deployment. Timeline depends on complexity, number of integrations, and how quickly you provide access and approvals.',
        },
        {
          q: 'What if my needs change during the project?',
          a: "We use formal change orders for scope adjustments. Changes to the original blueprint are documented and priced transparently. This protects both parties and ensures you get exactly what you're paying for.",
        },
        {
          q: 'Do I need technical knowledge to use the automations?',
          a: "No. Everything runs automatically in the background. You'll receive complete training on monitoring and managing workflows, but no coding or technical expertise is required.",
        },
        {
          q: 'Can I make changes to the automations myself?',
          a: 'Absolutely. You own the code and infrastructure. We provide complete documentation. Many clients make minor adjustments themselves. For major changes, engage us on-demand.',
        },
        {
          q: "What if I'm not happy with the final product?",
          a: 'We use structured sign-offs at every stage: Discovery → Design → Build → Deploy. You approve detailed blueprints before we write a single line of code.',
        },
      ],

      business: [
        {
          q: 'What size businesses do you work with?',
          a: 'We focus on established Hawaii service businesses with 5–50 employees, using three or more software tools and spending 10+ hours monthly on repetitive admin.',
        },
        {
          q: 'Do you work with businesses outside of Hawaii?',
          a: 'Our primary focus is Hawaii service businesses because we understand local challenges, but we occasionally take mainland clients if the fit is strong.',
        },
        {
          q: 'What industries do you specialize in?',
          a: 'Professional services (accounting, legal, consulting), real estate, medical/dental practices (low-PHI operational workflows), specialty contractors, and property management—Hawaii service businesses with recurring admin work.',
        },
        {
          q: 'Can you train my team on how the automations work?',
          a: 'Yes. Every project includes customized training covering each workflow, monitoring, and safe minor adjustments.',
        },
        {
          q: 'What if my business grows and I need more automation?',
          a: 'We can add new workflows or expand existing ones. Since you own the infrastructure, adding automation is straightforward via new projects or on-demand support.',
        },
        {
          q: 'How do you handle data security and privacy?',
          a: 'Automations run in your cloud environment—you retain full control. We follow best practices for credential management and never store your sensitive business data.',
        },
        {
          q: "What's your refund policy?",
          a: "Due to custom work, we don't offer refunds once a project begins. We use milestone-based delivery with sign-offs. If we can't solve your problem, we'll tell you during discovery before work starts.",
        },
        {
          q: "Can I see examples of workflows you've built?",
          a: "We can't share specific workflows due to client confidentiality, but during your free assessment we can walk through example scenarios similar to your business.",
        },
      ],
    },
  },

  footer: {
    quickLinksTitle: 'Quick Links',
    legalTitle: 'Legal',
    getInTouchTitle: 'Get in Touch',
    companyName: 'Silva Automation',
    tagline:
      'Workflow automation for Hawaii service businesses. Fixed-price projects, no recurring fees.',
    quickLinks: [
      { label: 'Intro', href: '#challenge-and-solution' },
      { label: 'Process', href: '#process' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Calculator', href: '#calculator' },
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
    ],
    legalLinks: [
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Cookie Policy', to: '/cookies' },
      { label: 'Refunds', to: '/refunds' },
    ],
    email: 'contact@silvaautomation.com',
    phone: '(808) 726-6422',
    phoneHref: 'tel:+18087266422',
    bookAssessmentText: 'Book Free Assessment',
    bookAssessmentUrl: 'https://calendly.com/silvaautomation/consultation',
    copyright:
      '© 2026 Silva Automation LLC | Based in Waipahu, Hawaii | Serving Hawaii Service Businesses',
  },

  cookieBanner: {
    ariaLabel: 'Cookie consent',
    message:
      'We use cookies and local storage to remember your preferences and improve your experience. By continuing, you agree to our',
    cookiePolicyLinkText: 'Cookie Policy',
    learnMore: 'Learn more',
    accept: 'Accept',
  },

  errorBoundary: {
    title: 'Oops! Something went wrong',
    message: "We're sorry for the inconvenience. Please try refreshing the page.",
    refreshButton: 'Refresh Page',
    retryButton: 'Try Again',
    errorDetailsLabel: 'Error details',
  },

  loader: {
    loadingText: 'Loading...',
  },

  legalLayout: {
    backToHome: 'Back to Home',
    logoAlt: 'Silva Automation',
    lastUpdated: 'February 2, 2026',
    footerText: 'Silva Automation LLC. All rights reserved.',
  },

  legal: {
    effectiveDate: 'February 2, 2026',
    contactEmail: 'contact@silvaautomation.com',
    contactPhone: '(808) 726-6422',
    contactAddress: 'Silva Automation LLC, 94-207 Waipahu Street #323, Waipahu, HI 96797',
    pages: {
      terms: 'Terms and Conditions',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      refunds: 'Refund & Cancellation Policy',
    },
  },
};

export const challengeAndSolutionSection = {
  id: 'challenge-and-solution',
  header: 'The Challenge & Our Solution',
  intro:
    'Hawaii service businesses use multiple tools, but manual transfers, follow-ups, and invoicing waste hours every week—without justifying a full-time IT hire.',
  blocks: [
    {
      type: 'problem',
      title: 'The Problem',
      body: [
        {
          header: 'Data Silos',
          body: 'Hours wasted copying information between systems, introducing errors and delays.',
        },
        {
          header: 'Lost Leads',
          body: 'Leads and tasks slip through without consistent follow-up.',
        },
        {
          header: 'Slow Payments',
          body: 'Manual invoicing slows cash flow and creates billing friction.',
        },
        {
          header: 'Admin Overload',
          body: 'Scheduling, reminders, and updates pull staff away from revenue work.',
        },
      ],
    },
    {
      type: 'solution',
      title: 'Our Solution',
      body: [
        {
          header: 'Seamless Integration',
          body: 'Custom workflow automations eliminate manual entry and transfer errors.',
        },
        {
          header: 'Reliable Workflows',
          body: 'Every lead captured, every task tracked—nothing gets lost.',
        },
        {
          header: 'Accelerated Billing',
          body: 'Automated invoicing and payment tracking accelerate cash flow.',
        },
        {
          header: 'Full Ownership',
          body: 'We build and deploy, you own everything—no vendor lock-in.',
        },
      ],
    },
  ],
};
