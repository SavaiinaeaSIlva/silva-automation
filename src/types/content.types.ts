/**
 * Site Content Type Definitions
 *
 * All type definitions for the site content structure.
 * Ensures type safety across the application.
 */

// ============================================================================
// Common Types
// ============================================================================

export interface NavLink {
  href: string;
  label: string;
}

export interface LinkItem {
  label: string;
  href?: string;
  to?: string;
}

export interface IconLabel {
  label: string;
  icon: string;
}

export interface IconLabelDetail extends IconLabel {
  detail?: string;
}

// ============================================================================
// Header Section
// ============================================================================

export interface HeaderContent {
  skipToMainContent: string;
  logoAlt: string;
  backToTopAria: string;
  openMenu: string;
  closeMenu: string;
  mobileNavAria: string;
  navLinks: NavLink[];
}

// ============================================================================
// Hero Section
// ============================================================================

export interface HeroContent {
  title: string;
  titleLine1Highlight: string;
  titleLine1Rest: string;
  titleLine2Highlight: string;
  titleLine2Rest: string;
  subtitle: string;
  cta: string;
  benefits: IconLabel[];
  workflowSteps: string[];
}

// ============================================================================
// Why Choose Us Section
// ============================================================================

export interface WhyChooseUsReason {
  icon: string;
  title: string;
  body: string;
}

export interface WhyChooseUsContent {
  id: string;
  label: string;
  header: string;
  subtitle: string;
  reasons: WhyChooseUsReason[];
}

// ============================================================================
// Services Section
// ============================================================================

export interface ServiceBlock {
  type: string;
  title: string;
  problem: string;
  solution: string;
  examples: string[];
}

export interface ServicesContent {
  id: string;
  label: string;
  header: string;
  intro: string;
  blocks: ServiceBlock[];
  otherIndustries: string;
}

// ============================================================================
// Calculator Section
// ============================================================================

export interface CalculatorField {
  label: string;
  placeholder: string;
  srDescription: string;
  min: number;
  max: number | undefined;
}

export interface CalculatorResultLabels {
  monthlyAdminCost: string;
  yearlyRevenueLeak: string;
  yearlyHoursSaved: string;
  paybackPeriod: string;
  firstYearRoi: string;
  yearlySavings: string;
}

export interface CalculatorContent {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  inputsTitle: string;
  resultsTitle: string;
  fields: CalculatorField[];
  resetButton: string;
  copyButton: string;
  copiedButton: string;
  copyAriaLabel: string;
  resultLabels: CalculatorResultLabels;
}

// ============================================================================
// Pricing Section
// ============================================================================

export interface FoundingOffer {
  show: boolean;
  badge: string;
  headline: string;
  body: string;
  spotsRemaining: string;
}

export interface PricingTier {
  name: string;
  price: string;
  originalPrice: string;
  foundingPrice: string;
  description: string;
  included: string[];
  badge: string;
  bestFor: string;
}

export interface AfterSupportBenefit {
  label: string;
  detail: string;
}

export interface AfterSupport {
  title: string;
  headline: string;
  intro: string;
  benefits: AfterSupportBenefit[];
  coversTitle: string;
  covers: string[];
}

export interface PricingTabs {
  pricing: string;
  support: string;
}

export interface PricingContent {
  id: string;
  label: string;
  header: string;
  intro: string;
  foundingOffer: FoundingOffer;
  tiers: PricingTier[];
  tabs: PricingTabs;
  afterSupport: AfterSupport;
}

// ============================================================================
// Contact Section
// ============================================================================

export interface ContactCTA {
  text: string;
  url: string;
}

export interface FormValidation {
  required: string;
  emailInvalid: string;
}

export interface ContactForm {
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  nameSr: string;
  emailLabel: string;
  emailPlaceholder: string;
  emailSr: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
  validation: FormValidation;
}

export interface ContactContent {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  webhook: string;
  cta: ContactCTA;
  form: ContactForm;
}

// ============================================================================
// FAQ Section
// ============================================================================

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategories {
  process: FAQItem[];
  business: FAQItem[];
}

export interface FAQContent {
  id: string;
  label: string;
  title: string;
  intro: string;
  searchPlaceholder: string;
  searchLabelSr: string;
  searchAriaLabel: string;
  seeLess: string;
  seeAllTemplate: string;
  noResults: string;
  clearSearch: string;
  categories: FAQCategories;
}

// ============================================================================
// Footer Section
// ============================================================================

export interface FooterContent {
  quickLinksTitle: string;
  legalTitle: string;
  getInTouchTitle: string;
  companyName: string;
  tagline: string;
  quickLinks: LinkItem[];
  legalLinks: LinkItem[];
  email: string;
  phone: string;
  phoneHref: string;
  bookAssessmentText: string;
  bookAssessmentUrl: string;
  copyright: string;
}

// ============================================================================
// Cookie Banner
// ============================================================================

export interface CookieBannerContent {
  ariaLabel: string;
  message: string;
  cookiePolicyLinkText: string;
  learnMore: string;
  accept: string;
}

// ============================================================================
// Error Boundary
// ============================================================================

export interface ErrorBoundaryContent {
  title: string;
  message: string;
  refreshButton: string;
  retryButton: string;
  errorDetailsLabel: string;
}

// ============================================================================
// Loader
// ============================================================================

export interface LoaderContent {
  loadingText: string;
}

// ============================================================================
// Legal Layout
// ============================================================================

export interface LegalLayoutContent {
  backToHome: string;
  logoAlt: string;
  lastUpdated: string;
  footerText: string;
}

// ============================================================================
// Legal Pages
// ============================================================================

export interface ContactLabels {
  email: string;
  phone: string;
  address: string;
}

export interface LegalPages {
  terms: string;
  privacy: string;
  cookies: string;
  refunds: string;
}

export interface LegalContent {
  effectiveDate: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  contactLabels: ContactLabels;
  pages: LegalPages;
}

// ============================================================================
// Main Site Content Interface
// ============================================================================

export interface SiteContent {
  header: HeaderContent;
  hero: HeroContent;
  whyChooseUs: WhyChooseUsContent;
  services: ServicesContent;
  calculator: CalculatorContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FAQContent;
  footer: FooterContent;
  cookieBanner: CookieBannerContent;
  errorBoundary: ErrorBoundaryContent;
  loader: LoaderContent;
  legalLayout: LegalLayoutContent;
  legal: LegalContent;
}
