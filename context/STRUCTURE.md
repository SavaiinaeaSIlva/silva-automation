# Project Structure Guide

This document provides a detailed overview of the project architecture and organization.

## Directory Tree

```
sav2/
├── .vscode/                    # VSCode workspace settings
│   ├── extensions.json        # Recommended extensions
│   └── settings.json          # Editor settings
│
├── src/                       # Source code
│   ├── features/             # Feature-based modules
│   │   ├── header/           # Navigation header
│   │   ├── hero/             # Hero section + RollingText
│   │   ├── workflow/         # Workflow diagram section
│   │   ├── calculator/       # ROI Calculator (+ Input, useCalculator)
│   │   ├── pricing/          # Pricing tiers
│   │   ├── contact/          # Contact form
│   │   ├── faq/              # FAQ section
│   │   ├── footer/           # Footer
│   │   ├── cookie-banner/    # Cookie consent
│   │   └── error-boundary/   # Error handling
│   │
│   ├── components/           # Reusable components (3+ features)
│   │   ├── ui/              # UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── BackToTop.tsx
│   │   │   └── index.ts     # Barrel export
│   │   ├── layout/          # Layout components
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   └── index.ts     # Barrel export
│   │   └── index.ts         # Barrel export
│   │
│   ├── types/               # TypeScript types
│   │   ├── content.types.ts # Content structure types
│   │   └── index.ts         # Barrel export
│   │
│   ├── constants/           # Configuration
│   │   ├── site-content.ts  # All site text/data
│   │   └── index.ts         # Barrel export
│   │
│   ├── hooks/               # Custom shared React hooks
│   │   └── index.ts         # Barrel export
│   │
│   ├── utils/               # Utility functions
│   │   ├── formatters.ts
│   │   ├── validation.ts
│   │   └── index.ts         # Barrel export
│   │
│   ├── pages/               # Page components
│   │   ├── Terms.tsx
│   │   ├── Privacy.tsx
│   │   ├── Cookies.tsx
│   │   ├── Refunds.tsx
│   │   ├── Logo.tsx
│   │   └── index.ts
│   │
│   ├── App.tsx              # Root component
│   ├── App.css              # App-level styles
│   ├── index.css            # Global CSS variables & resets
│   └── main.tsx             # Entry point
│
├── public/                   # Static assets
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
│
├── .editorconfig            # Editor configuration
├── .env.example             # Environment variables template
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── .prettierrc              # Prettier configuration
├── .prettierignore          # Prettier ignore rules
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config (base)
├── tsconfig.app.json        # TypeScript config (app)
├── tsconfig.node.json       # TypeScript config (node)
├── vite.config.ts           # Vite configuration
├── CONTRIBUTING.md          # Contribution guidelines
├── README.md                # Project documentation
└── STRUCTURE.md             # This file
```

## Architecture Patterns

### Feature Module Pattern

Each feature is self-contained:

```
features/calculator/
├── Calculator.tsx              # Main component
├── Calculator.module.css       # Scoped styles
├── useCalculator.ts            # Business logic hook
├── Input.tsx                   # Feature-specific sub-component
├── Input.module.css            # Sub-component styles
└── index.ts                    # Public exports
```

**Benefits:**

- Easy to locate related code
- Simple to test in isolation
- Clear boundaries between features
- Straightforward to delete/refactor

### Barrel Exports Pattern

Every folder has an `index.ts` that exports public APIs:

```typescript
// features/calculator/index.ts
export { Calculator } from './Calculator';
// Don't export internal components
```

**Usage:**

```typescript
// Clean import
import { Calculator } from '@/features/calculator';

// Instead of
import { Calculator } from '@/features/calculator/Calculator';
```

### Type-First Development

1. Define types in `types/content.types.ts`
2. Add content to `constants/site-content.ts`
3. TypeScript ensures correctness
4. Build components with type safety

### Separation of Concerns

```
Component (UI)
    ↓
Hook (Logic)
    ↓
Utils (Helpers)
    ↓
Types (Structure)
```

## Import Conventions

### Path Aliases

```typescript
// ✅ Good - Use path aliases
import { siteContent } from '@/constants';
import { Button } from '@/components/ui';
import { useCalculator } from '@/hooks';

// ❌ Bad - Relative paths
import { siteContent } from '../../../constants/site-content';
```

### Barrel Exports

```typescript
// ✅ Good - Use barrel exports
import { Button, Input, Card } from '@/components/ui';

// ❌ Bad - Direct imports
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
```

## Naming Conventions

### Files

- Components: `PascalCase.tsx` (e.g., `Calculator.tsx`)
- Hooks: `camelCase.ts` (e.g., `useCalculator.ts`)
- Utils: `camelCase.ts` (e.g., `formatCurrency.ts`)
- Types: `kebab-case.types.ts` (e.g., `content.types.ts`)
- Constants: `kebab-case.ts` (e.g., `site-content.ts`)

### Code

- Components: `PascalCase`
- Functions: `camelCase`
- Constants: `camelCase` or `UPPER_SNAKE_CASE`
- Types/Interfaces: `PascalCase`

## Scalability Considerations

### Adding New Sections

1. Create feature folder: `src/features/new-section/`
2. Add types to `src/types/content.types.ts`
3. Add content to `src/constants/site-content.ts`
4. Build components in feature folder
5. Export from `features/new-section/index.ts`

### Shared Components

Move to `components/ui/` when:

- Used in 3+ different features
- Generic and reusable
- No business logic

### State Management

For global state (future):

- Add `src/store/` for Redux/Zustand
- Or use Context in `src/contexts/`
- Keep feature state local when possible

### API Integration

When adding API calls:

1. Create `src/services/` folder
2. Define API client and endpoints
3. Create hooks in `src/hooks/` for data fetching
4. Use React Query or SWR for caching

## Best Practices

1. **Keep it modular** - Each feature should be independent
2. **Type everything** - No `any` types
3. **Document complexity** - Add JSDoc for non-obvious code
4. **Test as you go** - Write tests alongside features
5. **Refactor early** - Don't let technical debt accumulate

## Questions?

See [README.md](README.md) for general documentation.
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
