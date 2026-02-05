# Silva Automation - Workflow Automation for Hawaii Service Businesses

A modern, accessible, and performant React application built with Vite, TypeScript, and Tailwind CSS. This project showcases workflow automation services with a focus on user experience, accessibility, and code quality.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Run tests with coverage
npm run test -- --coverage

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Project Overview

This application provides:
- **Hero Section** with compelling value proposition
- **Calculator** to estimate ROI from workflow automation
- **Pricing Information** with transparent, fixed-price models
- **Process Overview** showing how we work with clients
- **FAQ Section** with searchable questions
- **Contact Integration** with Calendly scheduling

## 🏗️ Architecture & Structure

This project follows a **modular hierarchy** architecture with a **design-system first** approach:

```
src/
├── core/               # Providers, Contexts, Global Logic
│   └── LenisContext.tsx
├── common/             # Atomic UI components
│   └── components/
│       ├── Accordion.tsx
│       ├── ErrorBoundary.tsx
│       └── Loader.tsx
├── modules/            # Feature-specific sections
│   └── home/
│       ├── HeroSection.tsx
│       ├── ProcessSection.tsx
│       ├── PricingSection.tsx
│       ├── CalculatorSection.tsx
│       ├── ContactSection.tsx
│       ├── FAQSection.tsx
│       ├── ProblemSolutionSection.tsx
│       └── FeatureHighlights.tsx
├── pages/              # Top-level route components
│   ├── HomePage.tsx
│   └── LegalPage.tsx
├── hooks/              # Custom React hooks
│   ├── useScrollReveal.ts
│   └── useAnimatedNumber.ts
├── components/         # Shared layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SectionLayout.tsx
│   ├── CookieBanner.tsx
│   ├── BackToTop.tsx
│   └── ScrollingTextWall.tsx
├── content/            # Content and data
│   ├── siteContent.ts
│   └── legalContent.ts
├── assets/             # Images, icons, static fonts
└── styles/             # Global styles
    └── global.css
```

### Design System Architecture

The project uses a **token-based design system**:

1. **CSS Variables** (`:root` in `global.css`) — Single source of truth for colors, typography, spacing
2. **Tailwind Config** (`tailwind.config.cjs`) — Consumes CSS variables and extends with semantic tokens
3. **Component Classes** — Complex animations and glassmorphism effects in `global.css`

#### Key Design Tokens

| Category | Examples |
|----------|----------|
| **Colors** | `brand-bg`, `brand-elevated`, `text-main`, `muted`, `cta` |
| **Text Opacity** | `text-white-90`, `text-white-70`, `text-white-50` |
| **Backgrounds** | `bg-glass-subtle`, `bg-glass-medium`, `bg-glass-strong` |
| **Borders** | `border-subtle`, `border-medium`, `border-strong` |
| **Typography** | `text-display-sm`, `text-display-md`, `text-display-lg` |
| **Spacing** | `min-h-section-card-sm`, `w-step-card`, `h-icon-sm` |
| **Shadows** | `shadow-nav`, `shadow-card-hover`, `shadow-cta` |
| **Transitions** | `duration-fast`, `duration-slow`, `ease-bounce-sm` |
| **Z-Index** | `z-base`, `z-sticky`, `z-modal`, `z-back-to-top` |

## 🎨 Styling & Design System

The project uses a **design-system first** approach:

### Token Architecture
- **CSS Custom Properties** — Core values in `:root` (colors, typography, radii)
- **Tailwind Tokens** — Semantic naming in `tailwind.config.cjs` consuming CSS variables
- **Utility Classes** — Standard Tailwind utilities for layout and spacing
- **Component Classes** — Complex animations in `global.css` (glassmorphism, CTA buttons)

### Key Technologies
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **CSS Variables** — Theming and single source of truth
- **GSAP + ScrollTrigger** — Performant scroll animations
- **Lenis** — Smooth scrolling with GSAP sync
- **Responsive Design** — Mobile-first with `sm:`, `md:`, `lg:` breakpoints

### Glass Card System
```css
.glass-card          /* Standard glassmorphism card */
.glass-card-featured /* Animated border gradient card */
.glass-card-calculator /* Slightly different opacity for inputs */
```

### Animation Classes
- `.section-light-leaks` — Ambient background animations per section
- `.light-leak-v1/v2/v3` — Variant color schemes (warm, cool, neutral)
- `.cta-button-primary` — Animated CTA with hover arrow reveal

Theme variables are defined in `src/styles/global.css` and extended in `tailwind.config.cjs`.

## ♿ Accessibility Features

This project prioritizes accessibility:
- ✅ **WCAG 2.1 AA compliance** target
- ✅ **Keyboard navigation** fully supported
- ✅ **Skip links** for screen readers
- ✅ **ARIA attributes** on interactive elements
- ✅ **Focus indicators** visible and clear
- ✅ **Semantic HTML** structure
- ✅ **Alt text** on all images
- ✅ **Accessibility testing** with jest-axe

## 🧪 Testing

We use Vitest and React Testing Library:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run with coverage report
npm run test -- --coverage

# Run specific test file
npm run test -- accordion.test.tsx
```

### Test Coverage

- Unit tests for components
- Integration tests for user flows
- Accessibility tests with jest-axe
- Setup in `src/setupTests.ts`

## 🔒 Security

Security measures implemented:
- **Content Security Policy (CSP)** headers
- **X-Frame-Options** to prevent clickjacking
- **X-Content-Type-Options** to prevent MIME sniffing
- **Referrer Policy** for privacy
- **No hardcoded secrets** or API keys
- **Input validation** on all user inputs

## ⚡ Performance Optimizations

- **Code splitting** with React.lazy for routes
- **Image optimization** with lazy loading and proper dimensions
- **Bundle optimization** with manual chunks (vendor, animations, icons)
- **Memoization** of expensive calculations
- **GSAP ScrollTrigger** for performant scroll animations
- **Tree shaking** enabled in production builds

## 🛠️ Development Tools

### Code Quality
- **TypeScript** in strict mode
- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for git hooks
- **lint-staged** for pre-commit checks

### Scripts
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run typecheck    # Run TypeScript type checking
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run test         # Run tests
npm run check:ci     # Run all checks (CI)
```

## 🔄 CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`):
1. Install dependencies
2. Type checking
3. Linting
4. Run tests
5. Build production bundle

## 📦 Dependencies

### Main Dependencies
- **React 18** — UI library
- **React Router 7** — Client-side routing
- **GSAP 3** — Professional-grade animations
- **Lenis** — Smooth scroll with GSAP integration
- **Lucide React** — Modern icon library

### Dev Dependencies
- **Vite 7** — Next-gen build tool
- **TypeScript 5** — Strict type safety
- **Tailwind CSS 3** — Utility-first styling
- **Vitest** — Fast unit testing
- **Testing Library** — React component testing
- **jest-axe** — Accessibility testing
- **ESLint 8** — Code linting
- **Prettier** — Code formatting
- **Husky** — Git hooks

## 📝 Additional Documentation

### Design System Files
- `src/styles/global.css` — CSS custom properties and complex component styles
- `tailwind.config.cjs` — Extended Tailwind theme with semantic tokens

### Component Patterns

**Gold-Standard Example:** See `src/modules/home/ProcessSection.tsx` for the recommended patterns:
- JSDoc documentation
- Semantic token usage (no arbitrary values)
- Centralized hooks from `/hooks`
- Accessibility attributes on decorative elements
- Consistent naming conventions

### Adding New Sections

1. Create component in `src/modules/home/`
2. Use `SectionLayout` wrapper with `lightLeaks` variant
3. Import animation hooks from `../../hooks/useScrollReveal`
4. Use semantic Tailwind tokens from the design system
5. Add to `HomePage.tsx` with lazy loading if below fold

## 🤝 Contributing

1. Ensure all tests pass: `npm run test`
2. Run type checking: `npm run typecheck`
3. Run linting: `npm run lint`
4. Format code: `npm run format`
5. Build successfully: `npm run build`

Pre-commit hooks will automatically run linting and formatting.

## 📄 License

All rights reserved. See individual files for specific copyright information.

## 🌐 Environment

- **Node.js**: 20+ recommended
- **Package Manager**: npm
- **Browser Support**: Modern browsers (ES2020+)

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Build config, test setup, chunk splitting |
| `tsconfig.json` | TypeScript strict mode configuration |
| `tailwind.config.cjs` | **Design system tokens** — colors, spacing, typography |
| `postcss.config.cjs` | PostCSS with Tailwind and Autoprefixer |
| `.eslintrc.cjs` | ESLint rules (React, TypeScript, Prettier) |
| `.prettierrc` | Code formatting rules |

## 📞 Support

For questions or issues:
- Check the FAQ section in the application
- Open an issue on the repository

---

Built with ❤️ for Hawaii service businesses
