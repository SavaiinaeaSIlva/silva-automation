// Centralized content data - Single source of truth for all website content

export const siteInfo = {
  companyName: "Silva Automation",
  tagline: "Workflow Automation For Hawaii Service Businesses",
  location: "Waipahu, Hawaii",
  copyright: "© 2026 Silva Automation | Based in Waipahu, Hawaii | Serving Hawaii Service Businesses",
};

export const heroContent = {
  title: "Workflow Automation For Hawaii Service Businesses",
  subtitle:
    "Fixed-price automation projects deployed directly into your cloud infrastructure. You own everything—we build the workflows that reclaim your time.",
  cta: "Get Free Workflow Assessment",
  stats: [
    { value: "10+", label: "hrs", description: "Saved Monthly" },
    { value: "90 " , label: "days", description: "Free Support" },
    { value: "$5K-$8K", label: "", description: "Fixed Pricing" },
  ],
};

export const problemContent = {
  header: "The Problem",
  intro:
    "Hawaii service businesses use multiple software tools, but manual data transfers, customer follow-ups, and invoicing waste hours every week—without justifying a full-time IT hire.",
  problems: [
    {
      id: 1,
      title: "Manual Data Transfer",
      description: "Hours spent copying information between systems by hand.",
    },
    {
      id: 2,
      title: "Missed Follow-ups",
      description: "Customer leads and tasks slip through the cracks.",
    },
    {
      id: 3,
      title: "Billing Delays",
      description: "Manual invoicing and payment tracking slow your cash flow.",
    },
    {
      id: 4,
      title: "Scheduling Chaos",
      description: "Appointments and reminders demand constant attention.",
    },
  ],
};

export const solutionContent = {
  header: "The Solution",
  intro:
    "We design and build custom workflow automations for established Hawaii service businesses with 5-50 employees, using platforms like n8n and Oracle Cloud.",
  steps: [
    {
      id: 1,
      title: "Discovery",
      description: "Assess your processes and identify high-impact automation opportunities.",
    },
    {
      id: 2,
      title: "Design",
      description: "Map your ideal workflow with detailed blueprints and client sign-off.",
    },
    {
      id: 3,
      title: "Build & Test",
      description: "Develop and rigorously test automations with quality assurance.",
    },
    {
      id: 4,
      title: "Deploy & Train",
      description: "Launch directly into YOUR cloud with complete documentation and training.",
    },
  ],
  benefits: [
    "Reclaim 10+ hours monthly from administrative tasks",
    "Accelerate billing cycles and customer follow-ups",
    "Eliminate dropped leads and forgotten tasks",
    "Own your infrastructure—zero vendor lock-in",
  ],
};

export const pricingContent = {
  header: "Pay Once. Own Forever.",
  intro:
    "One-time project fees. No monthly retainers. No subscriptions. Every package includes 90 days of free support, then you only pay for what you actually need.",
  tiers: [
    {
      id: 1,
      name: "Founding Client Package",
      price: "$5,000",
      description: "Single Core Workflow",
      badge: "Limited Availability",
      features: [
        "Discovery & Process Mapping",
        "Custom Automation Build (1 workflow)",
        "1-2 System Integration",
        "Deployment to Your Cloud",
        "Complete Documentation & Training",
        "90 Days Free Post-Launch Support",
      ],
    },
    {
      id: 2,
      name: "Standard Project",
      price: "$6,000",
      description: "Multi-Workflow Solution",
      badge: "Most Popular",
      featured: true,
      features: [
        "Discovery & Process Mapping",
        "Custom Automation Build (2-3 workflows)",
        "2-3 System Integration",
        "Deployment to Your Cloud",
        "Complete Documentation & Training",
        "90 Days Free Post-Launch Support",
      ],
    },
    {
      id: 3,
      name: "Advanced Integration",
      price: "$7,000 - $8,000",
      description: "Complex Multi-System Automation",
      badge: "Enterprise-Grade",
      features: [
        "Discovery & Process Mapping",
        "Custom Automation Build (3+ workflows)",
        "4+ System Integration",
        "Complex Business Logic & Routing",
        "Advanced Reporting & Dashboards",
        "Deployment to Your Cloud",
        "Complete Documentation & Training",
        "90 Days Free Post-Launch Support",
      ],
    },
  ],
  supportNote: {
    title: "After Your 90-Day Free Support Period:",
    subtitle: "Zero Monthly Retainers. Ever.",
    description: "We stand behind our work on every tier. After 90 days, you own everything and can maintain it yourself using our documentation. If you need us:",
    features: [
      "Pay only for actual work - No contracts, no minimums, no commitments",
      "Billed quarterly - Invoiced every 3 months for work performed",
      "15-minute increments - Fair, transparent billing",
      "Most clients go months without needing us - That's how we know our builds work",
    ],
    coverageTitle: "What On-Demand Support Covers:",
    coverage: [
      "Minor workflow adjustments",
      "Adding new integrations",
      "Troubleshooting edge cases",
      "Quarterly system health checks (optional)",
    ],
  },
};

export const calculatorContent = {
  title: "Overhead Calculator",
  subtitle: "What Admin Work Really Costs You",
  inputs: {
    teamSize: { label: "Team Size (Crew/Agents)", min: 1, max: 50, default: 5 },
    weeklyHours: { label: "Weekly Paperwork Hours", min: 1, max: 40, default: 10 },
    hourlyCost: { label: "Average Hourly Cost", min: 20, max: 200, default: 50 },
  },
  analysisTitle: "Stop Paying Skilled Workers for Paperwork",
  analysisDescription:
    "Whether it's a Project Manager chasing invoices or an Agent manually entering leads, you're burning cash on grunt work. Automation handles the repetitive tasks—so your team can focus on building, selling, and serving customers.",
  industryExamples: [
    {
      id: 1,
      title: "For Contractors",
      description: "Stop PMs from spending 10+ hours weekly on estimates, change orders, and invoices.",
    },
    {
      id: 2,
      title: "For Real Estate Agencies",
      description: "Instant lead response = higher conversion rates and faster deal cycles.",
    },
    {
      id: 3,
      title: "Zero Human Error",
      description: "Never lose a lead, miss a follow-up, or forget a bill again.",
    },
  ],
};

export const contactContent = {
  title: "Ready to Automate Your Workflows?",
  subtitle:
    "Serving Hawaii service businesses across professional services, real estate, healthcare, and specialty trades—firms with 5-50 employees looking to eliminate repetitive work.",
  cta: "Book Free Workflow Assessment",
};

export const faqContent = {
  questions: [
    {
      id: 1,
      question: "Why do I own the infrastructure?",
      answer:
        "All automations deploy directly to your cloud accounts (Oracle Cloud, AWS, Google Cloud, etc.). You maintain full access to the code, data, and control. If we part ways, you keep everything—no data held hostage, no vendor lock-in. This ensures business continuity and gives you the freedom to modify or expand your workflows independently.",
    },
    {
      id: 2,
      question: "What's included in the 90-day support period?",
      answer:
        "Complete bug fixes, troubleshooting assistance, and addressing any integration issues stemming from the original implementation. This covers anything that doesn't work as originally designed. After 90 days, you can maintain workflows yourself using our comprehensive documentation, or engage us for hourly support at $125/hour (plus GET) as needed.",
    },
    {
      id: 3,
      question: "Are there ongoing subscription fees?",
      answer:
        "None from us. You pay a one-time project fee with a 50% deposit upfront and 50% upon completion. Your only recurring costs are standard cloud hosting fees (Oracle Cloud, AWS, etc.) and any third-party service subscriptions you choose to use (like Make.com, CRMs, or other platforms)—typically minimal for workflow automation.",
    },
    {
      id: 4,
      question: "What size businesses do you work with?",
      answer:
        "We focus on established Hawaii service businesses with 5-50 employees, using 3+ software tools, and currently spending 10+ hours monthly on repetitive administrative tasks. If you're a small team drowning in manual processes, we're here to help.",
    },
    {
      id: 5,
      question: "How long does a typical project take?",
      answer:
        "Most workflow automation projects take 4-8 weeks from kickoff to delivery, depending on complexity and scope. This includes discovery, development, testing, and documentation. We'll provide a detailed timeline in your Project Proposal before any work begins.",
    },
    {
      id: 6,
      question: "What if my needs change after the project is complete?",
      answer:
        "We can absolutely help with modifications, new features, or additional integrations. These would be quoted as separate projects at our standard rates. Alternatively, you can make changes yourself since you own all the code and documentation, or hire another developer to assist you.",
    },
    {
      id: 7,
      question: "Do you work with businesses outside of Hawaii?",
      answer:
        "While we're based in Hawaii and specialize in serving Hawaii businesses, we can work with mainland clients remotely. However, our expertise in Hawaii-specific business practices, tax requirements (GET), and local workflows makes us particularly valuable to island-based companies.",
    },
    {
      id: 8,
      question: "What happens if a third-party service (like Make.com or Zapier) changes or shuts down?",
      answer:
        "Since you own your infrastructure, you have options. We can help you migrate to alternative platforms, or rebuild workflows using different tools. While we can't control third-party platforms, our documentation makes transitions manageable. This is covered separately from the original project scope.",
    },
    {
      id: 9,
      question: "Can I see examples of workflows you've built?",
      answer:
        "Absolutely! During our discovery call, we can walk through case studies and examples relevant to your industry. Due to client confidentiality, we don't publicly share specific implementations, but we're happy to demonstrate our capabilities and approach in a consultation.",
    },
    {
      id: 10,
      question: "What types of tasks can be automated?",
      answer:
        "We automate repetitive, rule-based processes: data entry between systems, invoice generation, customer onboarding, appointment scheduling, report compilation, email follow-ups, CRM updates, inventory tracking, and much more. If you do it the same way every time, it can likely be automated.",
    },
    {
      id: 11,
      question: "How do payments work?",
      answer:
        "We require a 50% deposit upon signing the Service Agreement to secure your project timeline and begin work. The remaining 50% is due upon project completion and delivery of all deliverables. We accept bank transfers (ACH), credit/debit cards, and checks. All invoices include Hawaii's 4.5% General Excise Tax (GET).",
    },
    {
      id: 12,
      question: "What if I'm not satisfied with the final deliverable?",
      answer:
        "You have 7 calendar days from delivery to review the project and report any material defects—meaning core functions that don't work as specified in the Project Proposal. We then have 15 business days to fix any verified issues. Our goal is to deliver exactly what we agreed upon, and we stand behind our work.",
    },
    {
      id: 13,
      question: "Do I need technical expertise to maintain my workflows?",
      answer:
        "Not necessarily. We provide comprehensive documentation that explains how everything works in plain English. Many clients handle basic maintenance themselves. For more complex changes, you can hire us on an hourly basis or work with another developer using our documentation.",
    },
    {
      id: 14,
      question: "What credentials or access do you need?",
      answer:
        "We'll need access to the systems we're integrating (CRMs, email platforms, cloud accounts, etc.). We store all credentials securely using industry-standard encryption, use them only for the agreed-upon project scope, and delete them upon project completion unless you've contracted ongoing support. Security is a top priority.",
    },
    {
      id: 15,
      question: "Can I cancel my project after it's started?",
      answer:
        "Yes. If you cancel before final delivery, you'll receive a refund of 25% of the total project value (50% of your deposit). We retain the other 25% to cover setup, planning, and work completed. Any third-party costs already incurred are non-refundable. See our full Refund & Cancellation Policy for details.",
    },
  ],
};

export const navigationLinks = [
  { id: 1, label: "Problem", href: "#problem" },
  { id: 2, label: "Solution", href: "#solution" },
  { id: 3, label: "Pricing", href: "#pricing" },
  { id: 4, label: "Calculator", href: "#calculator" },
  { id: 5, label: "FAQ", href: "#faq" },
];
