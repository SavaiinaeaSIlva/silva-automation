# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **GSAP scroll animations**: Installed GSAP with ScrollTrigger plugin for smooth reveal-on-scroll effects.
- **useScrollReveal hook**: Reusable animation hooks (`useScrollReveal`, `useStaggerReveal`, `useCountUp`) in `src/hooks/useScrollReveal.ts`.
- **Section animations**: All main sections (Hero, Problem/Solution, Process, Pricing, Calculator, FAQ, Contact) now animate in when scrolling into view.
- **Reusable CSS utility classes**: Created `.legal-content`, `.footer-heading`, `.footer-link`, and `.legal-page-bg` in `global.css` for consistent styling across components.
- **Tailwind border colors**: Extended Tailwind config with `borderColor` defaults using CSS variables.

### Changed

- **Standardized icon library**: Consolidated from two libraries (`react-icons` + `lucide-react`) to `lucide-react` only.
- **TypeScript consistency**: Converted all `.jsx` files to `.tsx` (Terms, Privacy, Cookies, Refunds, LegalLayout).
- **Folder structure cleanup**: Moved `LegalLayout` from `sections/` to `components/` (it's a layout, not a section).
- **CSS variable usage**: Replaced inline CSS variable brackets (`text-[var(--color-text)]`) with Tailwind classes (`text-text-main`, `text-muted`, `text-cta`, etc.) throughout codebase.
- **Removed inline styles**: Moved hardcoded gradient from `LegalLayout.tsx` to CSS class.
- **PricingSection**: Now uses `SectionLayout` wrapper for consistency with other sections.
- **Contact form endpoint**: Updated from placeholder to actual email address.
- **Test assertions**: Fixed FAQ section test to match actual heading text ("Frequently Asked Questions").

### Removed

- **Unused dependencies**: Removed `@paper-design/shaders-react` and `react-icons` from `package.json`.
- **Unused components**: Deleted `ErrorBoundary.tsx`, `Card.tsx`, `IconCheck.tsx`, `IconClose.tsx`, and `icons/` folder.
- **Duplicate configuration**: Removed redundant `vitest` config from `package.json` (kept in `vite.config.ts`).
- **Unused CSS**: Removed `.btn-primary` and `.btn-secondary` classes from `global.css` (Button component uses Tailwind).
- **Unused Tailwind config**: Removed undefined colors (`surface`, `primary`) and unused font (`Orbitron`).
- **Development files**: Cleaned `public/` folder (removed exe installer and screenshot files).
- **SSR attributes**: Removed `suppressHydrationWarning` props (not needed in Vite SPA).

### Fixed

- **Accessibility**: Changed `aria-current="true"` to `aria-current="page"` in Header navigation.
- **Line endings**: Fixed CRLF/LF inconsistency in `ScrollToTop.tsx`.

---

## [0.2.0] - 2026-01-30

### Added

- **Mobile navigation**: Hamburger menu for screens below `lg` breakpoint with slide-down overlay.
- **Form submission infrastructure**: Contact form supports async submission with loading, success, and error states (FormSubmit endpoint, configurable).
- **Expanded footer**: Three-column layout with quick links, contact info, and border separators.
- **Animated border effect**: Spinning conic gradient border on featured pricing card using CSS `@property` and keyframes.

### Changed

- **Complete design overhaul**: Modern SaaS aesthetic inspired by clean dark themes:
  - Monochrome color palette (white accents on `#0a0a0a` background)
  - Sentence-case typography using Inter font (removed Orbitron)
  - Pill-shaped buttons with primary/secondary variants
  - Solid dark cards (`#111111`) with subtle borders
  - Invisible section containers (content floats on background)
- **Background**: Clean minimal dark gradient (removed starfield, nebula, and horizon effects).
- **Header**: Sticky with backdrop blur, compact logo (`h-12`), pill-style active nav state.
- **Hero section**: Added label badge, dual CTA buttons, stats displayed as simple text grid with border separator.
- **Problem/Solution section**: Cleaner card layout with icon boxes, removed vector illustrations.
- **Process section**: Simple grid cards with numbered badges (removed timeline).
- **Pricing section**: "Most Popular" tier highlighted with animated spinning border effect.
- **Calculator**: Team size input now used in calculation (hours × team size × weeks × rate).
- **Contact form**: Darker input styling (`#0a0a0a`), wrapped in card, disabled states during submission.
- **Button component**: Pill shape, primary/secondary variants, arrow-up-right icon.

### Removed

- Orbitron display font (now using Inter throughout).
- Vector illustrations (`HeroVector`, `ProblemVector`, `SolutionVector`) and `src/components/vectors/` directory.
- Glassmorphism/backdrop blur on cards (replaced with solid dark backgrounds).
- Starfield, nebula, and horizon background effects.
- Contact form image, Unsplash credits, mouse-tracking background logic.

## [0.1.0]

- Initial release.
