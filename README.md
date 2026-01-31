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

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Accordion.tsx
│   ├── ErrorBoundary.tsx
│   └── __tests__/      # Component tests
├── sections/           # Page sections
│   ├── HeroSection.tsx
│   ├── CalculatorSection.tsx
│   ├── PricingSection.tsx
│   └── ...
├── pages/              # Route pages
│   ├── HomePage.tsx
│   ├── TermsPage.tsx
│   └── ...
├── hooks/              # Custom React hooks
│   └── useScrollReveal.ts
├── content/            # Content and data
│   └── siteContent.ts
└── styles/             # Global styles
    └── global.css
```

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for theming (defined in `global.css`)
- **GSAP** for scroll animations
- **Responsive Design** with mobile-first approach

See `read_me_first/THEMING.md` for detailed theming documentation.

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
- **React 18** - UI library
- **React Router 7** - Routing
- **GSAP 3** - Animations
- **Lucide React** - Icons

### Dev Dependencies
- **Vite 7** - Build tool
- **TypeScript 5** - Type safety
- **Tailwind CSS 3** - Styling
- **Vitest 4** - Testing framework
- **ESLint 8** - Linting
- **Prettier 3** - Code formatting

## 📝 Additional Documentation

For more detailed information, see:
- `read_me_first/Change_Log.md` - Detailed changelog
- `read_me_first/STYLING-SNAPSHOT.md` - Styling conventions
- `read_me_first/THEMING.md` - Theme customization guide

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

- **Node.js**: 18+ recommended
- **Package Manager**: npm
- **Browser Support**: Modern browsers (ES2020+)

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with test setup and build optimization
- `tsconfig.json` - TypeScript configuration with strict mode
- `tailwind.config.cjs` - Tailwind CSS configuration with custom theme
- `.eslintrc.cjs` - ESLint rules and plugins
- `.prettierrc` - Prettier formatting rules
- `postcss.config.cjs` - PostCSS configuration

## 📞 Support

For questions or issues:
- Check the FAQ section in the application
- Review documentation in `read_me_first/`
- Open an issue on the repository

---

Built with ❤️ for Hawaii service businesses
