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
  href: string;
}

// ============================================================================
// Header Section
// ============================================================================

export interface BookingCTA {
  text: string;
  url: string;
}

export interface HeaderContent {
  skipToMainContent: string;
  logoAlt: string;
  backToTopAria: string;
  backToTopIcon: string;
  mainNavAria: string;
  openMenu: string;
  closeMenu: string;
  mobileNavAria: string;
  navLinks: NavLink[];
  bookingCta: BookingCTA;
}

// ============================================================================
// Hero Section
// ============================================================================

export interface HudOverlayLabels {
  sysRun: string;
  nodeActive: string;
  brand: string;
}

export interface HeroContent {
  titlePrefix: string;
  rollingWords: string[];
  subtitle: string;
  cta: string;
  opensInNewWindow: string;
  bookingCta: BookingCTA;
  hudLabels: HudOverlayLabels;
}

// ============================================================================
// Calculator Section
// ============================================================================

export interface CalculatorRoiInput {
  label: string;
  defaultValue: number;
}

export interface CalculatorContent {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  currencySymbol: string;
  percentSymbol: string;
  roiInputs: {
    hoursPerWeek: CalculatorRoiInput;
    numEmployees: CalculatorRoiInput;
    hourlyWage: CalculatorRoiInput;
    setupFee: CalculatorRoiInput;
    monthlyRetainer: CalculatorRoiInput;
  };
  statLabels: {
    hoursSaved: string;
    annualSavings: string;
    firstYearRoi: string;
  };
  units: {
    hours: string;
  };
  chartTitle: string;
  monthPrefix: string;
  chartKeys: {
    manualCost: string;
    automationCost: string;
  };
  downloadButton: string;
  downloadFilename: string;
  emailButton: string;
  emailSubject: string;
  summaryTitle: string;
  summaryCurrentProcess: string;
  summaryPricing: string;
  summaryResults: string;
  summaryLabels: {
    hoursPerWeek: string;
    numEmployees: string;
    hourlyWage: string;
    setupFee: string;
    monthlyRetainer: string;
    hoursSaved: string;
    annualSavings: string;
    firstYearRoi: string;
  };
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

export interface PricingContent {
  id: string;
  label: string;
  header: string;
  intro: string;
  bestForLabel: string;
  checkIcon: string;
  foundingOffer: FoundingOffer;
  tiers: PricingTier[];
  afterSupport: AfterSupport;
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
  expandIcon: string;
  collapseIcon: string;
  categories: FAQCategories;
}

// ============================================================================
// Footer Section
// ============================================================================

export interface FooterContent {
  quickLinksTitle: string;
  legalTitle: string;
  getInTouchTitle: string;
  contactIntro: string;
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
// Legal Layout
// ============================================================================

export interface LegalLayoutContent {
  backToHome: string;
  logoAlt: string;
  lastUpdated: string;
  footerText: string;
  legalPagesNavAria: string;
}

// ============================================================================
// Legal Pages
// ============================================================================

export interface ContactLabels {
  email: string;
  phone: string;
  address: string;
}

export interface LegalPage {
  title: string;
  content: string;
}

export interface LegalPages {
  terms: LegalPage;
  privacy: LegalPage;
  cookies: LegalPage;
  refunds: LegalPage;
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
// Workflow Section
// ============================================================================

export interface WorkflowNode {
  icon: string;
  title: string;
  subtitle: string;
  backInfo?: string;
}

export interface WorkflowContent {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  clickHint: string;
  replayAnimationAria: string;
  closeAria: string;
  previousNodeAria: string;
  nextNodeAria: string;
  nodeDetailsSuffix: string;
  inputs: WorkflowNode[];
  engine: WorkflowNode;
  outputs: WorkflowNode[];
}

// ============================================================================
// Calculator Hook Types
// ============================================================================

export interface CalculatorInputs {
  hoursPerWeek: number;
  numEmployees: number;
  hourlyWage: number;
  setupFee: number;
  monthlyRetainer: number;
}

export interface CalculatorResults {
  manualHoursPerMonth: number;
  annualNetSavings: number;
  roiPercentage: string;
}

export interface CalculatorMonthlyPoint {
  manualCost: number;
  automationCost: number;
}

// ============================================================================
// Integrations Section
// ============================================================================

export interface IntegrationTool {
  name: string;
  icon: string;
  category: string;
}

export interface IntegrationsContent {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  tools: IntegrationTool[];
}

// ============================================================================
// CTA Section
// ============================================================================

export interface CTASectionContent {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    url: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

// ============================================================================
// Main Site Content Interface
// ============================================================================

export interface SiteContent {
  header: HeaderContent;
  hero: HeroContent;
  workflow: WorkflowContent;
  integrations: IntegrationsContent;
  calculator: CalculatorContent;
  pricing: PricingContent;
  ctaSection: CTASectionContent;
  faq: FAQContent;
  footer: FooterContent;
  cookieBanner: CookieBannerContent;
  errorBoundary: ErrorBoundaryContent;
  legalLayout: LegalLayoutContent;
  legal: LegalContent;
}
