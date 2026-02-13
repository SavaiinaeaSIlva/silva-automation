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
    webhook: 'https://n8n.silvaautomation.com/webhook-test/c0185471-5c05-41c8-b140-124d79f90a38',
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
    seeLess: 'See less',
    seeAllTemplate: 'See all ({{count}})',
    noResults: 'No matches.',
    clearSearch: 'Clear',

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
    lastUpdated: 'February 2, 2026',
    footerText: 'Silva Automation LLC. All rights reserved.',
  },

  legal: {
    effectiveDate: 'February 2, 2026',
    contactEmail: 'contact@silvaautomation.com',
    contactPhone: '(808) 726-6422',
    contactAddress: 'Silva Automation LLC, 94-207 Waipahu Street #323, Waipahu, HI 96797',
    contactLabels: {
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
    },
    pages: {
      terms: 'Terms and Conditions',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      refunds: 'Refund & Cancellation Policy',
    },
  },
};
