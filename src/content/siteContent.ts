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
      'Custom automation systems for Hawaii service businesses — so scheduling, invoicing, and follow-ups run themselves.',
    cta: 'Get Free Workflow Assessment',
    benefits: [
      { label: 'Save time', icon: 'Zap' },
      { label: 'Fewer errors', icon: 'Target' },
      { label: 'Scale without hiring', icon: 'Repeat' },
      { label: 'Runs reliably', icon: 'Shield' },
    ],
  },

  pricing: {
    header: 'Pay Once. Own Forever.',
    intro:
      'Simple, one-time project fees with no recurring retainers. Every package includes 90 days of free support for the workflows we deliver—after that, you only pay when you actually need help.',
    tiers: [
      {
        name: 'Founding Client Package',
        price: '$5,000',
        description: 'Single Core Workflow',
        included: [
          'End-to-end discovery and workflow mapping for one priority process',
          'Custom automation built for a single high-impact workflow',
          'Integration with 1–2 systems already in your stack',
          'Deployment plus training and documentation so your team can self-manage',
        ],
        badge: 'Limited Availability',
      },

      {
        name: 'Standard Project',
        price: '$6,000',
        description: 'Multi-Workflow Solution',
        included: [
          'Discovery and mapping of your core operational processes',
          'Custom automations for 2–3 related workflows within the agreed scope',
          'Integrations across 2–3 systems your team already uses',
          'Cloud deployment with full training and documentation',
        ],
        badge: 'Most Popular',
      },

      {
        name: 'Advanced Integration',
        price: '$7,000+',
        description: 'Complex Automation',
        included: [
          'Comprehensive discovery and mapping for advanced operations within a defined scope',
          'Automations for 3+ workflows with complex logic and exception handling',
          'Integration across 4+ systems where technically feasible',
          'Deployment with advanced reporting and full documentation',
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
      intro:
        'We stand behind our work on every tier. After 90 days, you own everything and can maintain it yourself using our documentation. If you need us:',
      benefits: [
        {
          label: 'Pay only for actual work',
          detail: 'No contracts, no minimums, no commitments',
        },
        {
          label: 'Billed quarterly',
          detail: 'Invoiced every 3 months for work performed',
        },
        {
          label: '15-minute increments',
          detail: 'Fair, transparent billing',
        },
        {
          label: 'Most clients go months without needing us',
          detail: "That's how we know our builds work",
        },
      ],
      coversTitle: 'What On-Demand Support Covers:',
      covers: [
        'Minor workflow adjustments',
        'Adding new integrations',
        'Troubleshooting edge cases',
        'Quarterly system health checks (optional)',
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
    analysisTitle: 'Stop Paying Skilled Workers for Paperwork',
    analysisCopy:
      "Whether it's a Project Manager chasing invoices or an Agent manually entering leads, you're burning cash on grunt work. Automation handles the repetitive tasks—so your team can focus on building, selling, and serving customers.",
  },

  contact: {
    title: 'Ready to Automate Your Workflows?',
    subtitle:
      'Serving Hawaii service businesses across professional services, real estate, healthcare, and specialty trades—firms with 5–50 employees looking to eliminate repetitive work.',
    whatToExpect: 'What to expect',
    cta: {
      text: 'Book Free Workflow Assessment',
      url: 'https://calendly.com/silvaautomation/consultation',
    },
    benefits: [
      'No obligation 30-minute consultation',
      'Walk through your current processes',
      'Identify high-impact automation opportunities',
    ],
  },

  process: {
    header: 'How We Work',
    subtitle:
      'A proven, step-by-step journey from bottleneck to breakthrough—built specifically for Hawaii service businesses.',
    steps: [
      {
        number: '01',
        title: 'The Audit',
        body: "We dig into your manual bottlenecks to find exactly where you're losing time and money.",
        deliverable: 'Full workflow inefficiency report',
        duration: '3–5 days',
      },
      {
        number: '02',
        title: 'The Blueprint',
        body: 'We architect a custom automation map tailored specifically to your Hawaii service business.',
        deliverable: 'Detailed automation roadmap with sign-off',
        duration: '1 week',
      },
      {
        number: '03',
        title: 'The Build',
        body: 'We develop your system in a sandbox environment to ensure 100% reliability before going live.',
        deliverable: 'Tested automation ready for deployment',
        duration: '2–3 weeks',
      },
      {
        number: '04',
        title: 'The Launch',
        body: 'We flip the switch, train your team, and provide the support needed to scale your operations.',
        deliverable: 'Live system + training + 90-day support',
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
    intro: 'Answers to common questions about process, support, and pricing.',
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
          a: 'Most projects are completed in 4-6 weeks from initial discovery to final deployment. Timeline depends on complexity, number of systems being integrated, and how quickly you can provide access to your tools and review blueprints.',
        },
        {
          q: 'What if my needs change during the project?',
          a: "We use formal change orders to manage scope adjustments. Any changes to the original blueprint are documented and priced transparently. This protects both of us from scope creep and ensures you get exactly what you're paying for.",
        },
        {
          q: 'Do I need technical knowledge to use the automations?',
          a: "No. We build everything to run automatically in the background. You'll receive complete training on how to monitor and manage your workflows, but no coding or technical expertise is required. Our documentation is written in plain language.",
        },
        {
          q: 'Can I make changes to the automations myself?',
          a: 'Absolutely. You own the code and infrastructure. We provide complete documentation showing how everything works. Many clients make minor adjustments themselves. For major changes or new integrations, you can engage us on-demand.',
        },
        {
          q: "What if I'm not happy with the final product?",
          a: 'We use a structured process with client sign-off at every stage (Discovery → Design → Build → Deploy). You review and approve detailed blueprints before we write a single line of code. This ensures the final product matches your expectations.',
        },
      ],

      business: [
        {
          q: 'What size businesses do you work with?',
          a: 'We focus on established Hawaii service businesses with roughly 5–50 employees, using three or more software tools and spending 10+ hours monthly on repetitive administrative tasks.',
        },
        {
          q: 'Do you work with businesses outside of Hawaii?',
          a: 'Our primary focus is Hawaii service businesses because we understand the local challenges, but we occasionally take mainland clients if the project is a strong fit.',
        },
        {
          q: 'What industries do you specialize in?',
          a: 'We serve professional services (accounting, legal, consulting), real estate agencies, medical/dental practices and healthcare providers for low-PHI operational workflows, specialty contractors, and property management companies—basically Hawaii service businesses with recurring admin work.',
        },
        {
          q: 'Can you train my team on how the automations work?',
          a: 'Yes. Every project includes customized training that walks your team through each workflow, monitoring, and how to make minor adjustments safely.',
        },
        {
          q: 'What if my business grows and I need more automation?',
          a: 'We can add new workflows or expand existing ones as you scale. Since you own the infrastructure, adding automation is straightforward; we can engage on a new project basis or via on-demand support.',
        },
        {
          q: 'How do you handle data security and privacy?',
          a: 'Automations run in your cloud environment, so you retain full control over data security. We follow best practices for credential management and access control, and we never store your sensitive business data on our systems.',
        },
        {
          q: "What's your refund policy?",
          a: "Due to the custom nature of our work, we don't offer refunds once a project begins. We use milestone-based delivery with client sign-off to ensure alignment; if we determine we can't solve your problem, we'll tell you during discovery before work starts.",
        },
        {
          q: "Can I see examples of workflows you've built?",
          a: "We can't share specific workflows publicly due to client confidentiality, but during your free assessment we can walk through example scenarios similar to your business and show how automation would apply.",
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
    'Hawaii service businesses use multiple software tools, but manual data transfers, customer follow-ups, and invoicing waste hours every week—without justifying a full-time IT hire.',
  blocks: [
    {
      type: 'problem',
      title: 'The Problem',
      body: [
        {
          header: 'Data Silos',
          body: 'Hours are spent copying information between systems by hand, introducing avoidable errors and delays.',
        },
        {
          header: 'Lost Leads',
          body: 'Customer leads and tasks slip through the cracks without consistent follow-up workflows.',
        },
        {
          header: 'Slow Payments',
          body: 'Manual invoicing and payment tracking slow cash flow and create billing friction.',
        },
        {
          header: 'Admin Overload',
          body: 'Scheduling, reminders, and status updates demand constant attention and pull staff away from revenue-generating work.',
        },
      ],
    },
    {
      type: 'solution',
      title: 'Our Solution',
      body: [
        {
          header: 'Seamless Integration',
          body: 'We design and build custom workflow automations using platforms like n8n and Oracle Cloud to eliminate manual entry and transfer errors.',
        },
        {
          header: 'Reliable Workflows',
          body: 'Custom automations ensure every lead is captured and tasks are tracked through completion—nothing is lost.',
        },
        {
          header: 'Accelerated Billing',
          body: 'Automated invoicing and payment tracking remove bottlenecks and accelerate cash flow.',
        },
        {
          header: 'Full Service & Ownership',
          body: 'We handle build and deployment, provide training and documentation, and you retain full ownership—no vendor lock-in.',
        },
      ],
    },
  ],
};
