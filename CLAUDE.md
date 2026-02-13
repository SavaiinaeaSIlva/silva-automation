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
│   ├── why-choose-us/
│   ├── services/
│   ├── calculator/
│   ├── pricing/
│   ├── contact/
│   ├── faq/
│   ├── footer/
│   ├── cookie-banner/
│   └── error-boundary/
│
├── components/         # ONLY for reusable components used in 3+ features
│   ├── ui/            # Button, Input, Card, etc.
│   └── layout/        # Container, Section, Grid
│
├── types/             # ALL TypeScript types
│   └── content.types.ts
│
├── constants/         # ALL site content
│   └── site-content.ts
│
├── hooks/             # Custom React hooks
├── utils/             # Pure utility functions
├── styles/            # Global styles only
└── pages/             # Full page components (future routing)
```

## MANDATORY Rules

### 1. Feature Organization

**Each feature MUST have its own folder with:**
- `FeatureName.tsx` - Main component
- `FeatureName.module.css` - Scoped CSS Module
- `index.ts` - Barrel export: `export { FeatureName } from './FeatureName'`

**Example:**
```
features/calculator/
├── Calculator.tsx
├── Calculator.module.css
├── useCalculator.ts      # Feature-specific hook (optional)
├── calculator.utils.ts   # Feature-specific utils (optional)
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

- **Shared hooks** → `src/hooks/` (e.g., `useCalculator.ts`)
- **Feature-specific hooks** → Keep in feature folder (e.g., `features/calculator/useCalculator.ts`)

Export shared hooks from `src/hooks/index.ts`

### 8. File Naming

**Strict naming conventions:**

- Components: `PascalCase.tsx` (e.g., `Calculator.tsx`)
- Hooks: `camelCase.ts` (e.g., `useCalculator.ts`)
- Utils: `camelCase.ts` (e.g., `formatCurrency.ts`)
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
