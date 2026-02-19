# READ_FIRST_AI

This file is a merged AI reference of CLAUDE.md and STRUCTURE.md. It preserves all original content from both files.

---

## Source: CLAUDE.md

# Claude Code Instructions

**READ THIS FIRST** - This file contains mandatory project structure and coding standards for Silva Automation landing page.

## Project Architecture

This is a **feature-first**, modular React TypeScript project. The architecture is non-negotiable.

### Folder Structure (DO NOT DEVIATE)

```
src/
├── features/           # ONE folder per landing page section
│   ├── header/
│   ├── hero/
│   ├── workflow/
│   ├── calculator/
│   ├── pricing/
│   ├── contact/
│   ├── faq/
│   ├── footer/
│   ├── cookie-banner/
│   └── error-boundary/
│
├── components/         # ONLY for reusable components used in 3+ features
│   ├── ui/            # Button, Card, BackToTop
│   └── layout/        # Container, Section
│
├── types/             # ALL TypeScript types
│   └── content.types.ts
│
├── constants/         # ALL site content
│   └── site-content.ts
│
├── hooks/             # Custom shared React hooks
├── utils/             # Pure utility functions
└── pages/             # Full page components (legal pages, Logo)
```

## MANDATORY Rules

### 1. Feature Organization

**Each feature MUST have its own folder with:**

- `FeatureName.tsx` - Main component
- `FeatureName.module.css` - Scoped CSS Module
- `index.ts` - Barrel export: `export { FeatureName } from './FeatureName'`

**Examples:**

```
features/calculator/
├── Calculator.tsx
├── Calculator.module.css
├── useCalculator.ts      # Feature-specific hook
├── Input.tsx             # Feature-specific sub-component
├── Input.module.css
└── index.ts

features/hero/
├── Hero.tsx              # Main component (includes globe/sphere visual)
├── Hero.module.css       # Scoped styles (sphere, orbit, dot-pattern overlay)
├── RollingText.tsx       # Sub-component for animated word cycling
├── RollingText.module.css
└── index.ts
```

### 2. Content Management

**ALL text/data MUST go in `src/constants/site-content.ts`**

❌ NEVER hardcode strings in components:

```typescript
// WRONG
<h1>Your Admin Work Should Run Itself</h1>
```

✅ ALWAYS use site content:

```typescript
// CORRECT
const { hero } = siteContent;
<h1>{hero.title}</h1>
```

### 3. TypeScript Types

**ALL content types MUST be defined in `src/types/content.types.ts`**

When adding new content:

1. Add type to `content.types.ts`
2. Add content to `site-content.ts`
3. TypeScript will enforce correctness

### 4. Styling with CSS Modules

**ALWAYS use CSS Modules, NEVER inline styles or global CSS**

```typescript
// CORRECT
import styles from './Component.module.css';
<div className={styles.container}>
```

**CSS Variables:**
Use global CSS variables defined in `src/index.css`:

```css
/* Use these in your CSS Modules */
var(--color-primary)
var(--color-text-primary)
var(--color-bg-secondary)
/* etc. */
```

### 5. Import Conventions

**ALWAYS use path aliases:**

```typescript
// CORRECT
import { siteContent } from '@/constants';
import { Button } from '@/components/ui';

// WRONG
import { siteContent } from '../../../constants/site-content';
```

**Type imports:**

```typescript
// CORRECT (for types)
import type { ReactNode } from 'react';

// CORRECT (for functions/components)
import { useState } from 'react';

// WRONG (mixing types and values)
import { useState, ReactNode } from 'react';
```

### 6. Component Creation

**When creating new UI components:**

1. Check if it exists in `components/ui/` first
2. Only create new if used in 3+ features
3. Otherwise, keep it in the feature folder

**When creating new features:**

1. Create folder in `features/`
2. Add types to `types/content.types.ts`
3. Add content to `constants/site-content.ts`
4. Create component with CSS Module
5. Export from `index.ts`
6. Import in `App.tsx`

### 7. Custom Hooks

**Hook location rules:**

- **Shared hooks** → `src/hooks/` (used by multiple features)
- **Feature-specific hooks** → Keep in feature folder (e.g., `features/calculator/useCalculator.ts`)

Export shared hooks from `src/hooks/index.ts`

### 8. File Naming

**Strict naming conventions:**

- Components: `PascalCase.tsx` (e.g., `Calculator.tsx`)
- Hooks: `camelCase.ts` (e.g., `useCalculator.ts`)
- Utils: `camelCase.ts` (e.g., `formatters.ts`)
- Types: `kebab-case.types.ts` (e.g., `content.types.ts`)
- CSS Modules: `PascalCase.module.css` (e.g., `Calculator.module.css`)

## DO NOT Create

❌ DO NOT create these without explicit permission:

- New documentation files (we have README, STRUCTURE, QUICKSTART)
- New config files
- New build tools
- Global CSS files (use CSS Modules)
- Utility CSS frameworks (no Tailwind, etc.)

## Common Tasks

### Adding a New Section

```bash
# 1. Create feature folder
mkdir src/features/new-section

# 2. Add types to src/types/content.types.ts
export interface NewSectionContent {
  title: string;
  // ...
}

# 3. Add to main SiteContent type
export interface SiteContent {
  // ... existing
  newSection: NewSectionContent;
}

# 4. Add content to src/constants/site-content.ts
export const siteContent: SiteContent = {
  // ... existing
  newSection: {
    title: 'Section Title',
    // ...
  },
};

# 5. Create component
# features/new-section/NewSection.tsx
# features/new-section/NewSection.module.css
# features/new-section/index.ts

# 6. Add to App.tsx
import { NewSection } from '@/features/new-section';
// Add <NewSection /> in appropriate place
```

### Updating Content

**ONLY edit `src/constants/site-content.ts`**

Never touch component code for text changes.

### Adding a Shared Component

Only if used in 3+ features:

```bash
# 1. Create in components/ui/
src/components/ui/NewComponent.tsx
src/components/ui/NewComponent.module.css

# 2. Export from barrel
# src/components/ui/index.ts
export { NewComponent } from './NewComponent';
```

## Technology Stack

**Installed and configured:**

- ⚛️ React 19
- 📘 TypeScript 5 (strict mode)
- ⚡ Vite 7
- 🎨 CSS Modules (scoped styling)
- 🎬 GSAP 3 + @gsap/react (animations: hero globe spin, orbit light, rolling text, scroll reveals)
- 🔍 ESLint + Prettier

**DO NOT install:**

- ❌ Tailwind CSS (we use CSS Modules)
- ❌ styled-components (we use CSS Modules)
- ❌ Material-UI or other component libraries
- ❌ State management (Redux, Zustand) - not needed yet

## Code Quality Standards

**Before committing:**

```bash
npm run lint:fix    # Fix linting issues
npm run format      # Format code
npm run build       # Ensure it builds
```

**Required for all code:**

- TypeScript types for everything
- CSS Modules for all styling
- Proper error handling
- Accessibility (ARIA labels where needed)
- Mobile-first responsive design

## Questions?

- See [README.md](README.md) for general info
- See [STRUCTURE.md](STRUCTURE.md) for architecture details
- See [QUICKSTART.md](QUICKSTART.md) for common tasks

## Version Control

**When making commits:**

- ALWAYS use feature branches
- NEVER commit directly to main
- Follow conventional commits (feat:, fix:, etc.)

---

**REMINDER: This structure is the result of careful planning. Follow it exactly. If you think something should change, ask the user first.**

---

## Source: STRUCTURE.md

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
│   │   ├── hero/             # Hero section + RollingText + globe/sphere visual
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
│   ├── assets/              # Static assets imported by components
│   │   ├── icon.svg         # Brand icon (used in Hero + Header)
│   │   └── logo.svg         # Full logo
│   │
│   ├── App.tsx              # Root component
│   ├── App.css              # App-level styles
│   ├── index.css            # Global CSS variables & resets
│   └── main.tsx             # Entry point
│
├── public/                   # Static assets
│   └── icon.svg             # Favicon (SVG)
│
├── .editorconfig            # Editor configuration
├── .env.example             # Environment variables template
├── eslint.config.js         # ESLint configuration (flat config)
├── .gitignore               # Git ignore rules
├── .prettierrc              # Prettier configuration
├── .prettierignore          # Prettier ignore rules
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config (base)
├── tsconfig.app.json        # TypeScript config (app)
├── tsconfig.node.json       # TypeScript config (node)
├── vercel.json              # Vercel deployment config
├── vite.config.ts           # Vite configuration
└── context/                 # Project docs & coding standards
    ├── CLAUDE.md            # Coding rules & conventions
    ├── README.md            # Project documentation
    └── STRUCTURE.md         # This file
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

features/hero/
├── Hero.tsx                    # Main component (title, CTA, globe/sphere)
├── Hero.module.css             # Scoped styles (sphere, orbit, dot-pattern)
├── RollingText.tsx             # Animated word-cycling sub-component
├── RollingText.module.css      # RollingText styles
└── index.ts                    # Public exports
```

**Hero globe/sphere:**
The hero section includes an interactive 3D-style globe built with inline SVG
(longitude/latitude lines) and GSAP animations:

- Longitude ellipses spin via GSAP `onUpdate` callback
- An orbiting light follows the cursor on mousemove, auto-rotates otherwise
- A radial dot-pattern overlay is applied via `::before` on `.heroSection`

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
5. **Refactor early** - Do not let technical debt accumulate
