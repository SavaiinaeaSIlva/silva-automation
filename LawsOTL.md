# Silva Automation Laws Of The Land DO NOT DELETE THIS FILE EVER - THIS FILE MUST STAY AT ALL TIMES - EVEN IF YOU THINK IT'S OBVIOUS OR REDUNDANT - THIS FILE IS THE LAW FOR THIS PROJECT

> This file is the **single source of truth** for architecture, coding standards, and allowed technologies for the Silva Automation landing page. Treat it like **law**.
> 

---

## 0. Authority & Scope (READ THIS FIRST)

1. This document is the **single source of truth** for the Silva Automation landing page architecture, coding style, and allowed technologies.
2. If any other file, instruction, or AI prompt conflicts with this document, **this document wins**.
3. All AI assistants (Claude, GPT, etc.) must treat every rule here as **mandatory**, not advisory.
4. Do **not** create new standards or override these rules without explicit written approval from the project owner.
5. When in doubt, **stop and ask** the project owner; never guess or “improve” patterns that differ from this document.

### For AI Assistants (Claude, GPT, etc.)

- You **MUST** read this entire file before generating or editing any code for this repo.
- You **MUST** follow these rules even if the user prompt seems to suggest a different structure or tech choice.
- If the user asks for something that violates this document (e.g., Tailwind, new global CSS, new state library), you **MUST** refuse and explain which rule it breaks.
- You **MUST NOT** invent new folders, patterns, or tools that are not described here.
- You **MUST** keep this document as the reference when making architectural or structural decisions.

---

## 1. Project Architecture

This is a **feature-first**, modular React + TypeScript project. The architecture is **non-negotiable**.

### Folder Structure (DO NOT DEVIATE)

```
src/
├── features/          # ONE folder per landing page section
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
├── components/        # Reusable components used in 3+ features
│   ├── ui/            # Button, Card, BackToTop
│   └── layout/        # Container, Section
│
├── types/             # ALL TypeScript types
│   └── content.types.ts
│
├── constants/         # ALL site content
│   └── site-content.ts
│
├── hooks/             # Shared React hooks
├── utils/             # Pure utility functions
└── pages/             # Full page components (legal pages, Logo)
```

---

## 2. Mandatory Rules

### 2.1 Feature Organization

**RULE:** Each feature **MUST** have its own folder with:

- `FeatureName.tsx` – Main component
- `FeatureName.module.css` – Scoped CSS Module
- `index.ts` – Barrel export: `export { FeatureName } from './FeatureName'`

**EXAMPLE (do not change structure):**

```
features/calculator/
├── Calculator.tsx
├── Calculator.module.css
├── useCalculator.ts       # Feature-specific hook
├── Input.tsx              # Feature-specific sub-component
├── Input.module.css
└── index.ts

features/hero/
├── Hero.tsx               # Main component (includes globe/sphere visual)
├── Hero.module.css        # Scoped styles
├── RollingText.tsx        # Animated word-cycling sub-component
├── RollingText.module.css
└── index.ts
```

Hero globe/sphere (summary):

- Implemented with inline SVG and GSAP animations.
- Orbiting light follows cursor or auto-rotates.
- Dot-pattern overlay via `::before` on the hero section.

### 2.2 Content Management

**RULE:** All text/data **MUST** live in `src/constants/site-content.ts`.

You **MUST NOT** hardcode strings in components.

```tsx
// ❌ WRONG
<h1>Your Admin Work Should Run Itself</h1>

// ✅ CORRECT
const { hero } = siteContent;
<h1>{hero.title}</h1>
```

### 2.3 TypeScript Types

**RULE:** All content types **MUST** be defined in `src/types/content.types.ts`.

When adding new content:

1. Add or update types in `content.types.ts`.
2. Add content in `site-content.ts`.
3. Let TypeScript enforce correctness (no `any` for content).

### 2.4 Styling with CSS Modules

**RULES:**

- You **MUST** use CSS Modules for all styling.
- You **MUST NOT** use inline styles for layout/visual styling (except trivial one-offs like dynamic `style` for GSAP hooks when truly necessary).
- You **MUST NOT** create new global CSS files. Use existing `index.css` only for variables and resets.

```tsx
// ✅ CORRECT
import styles from './Component.module.css';
<div className={styles.container} />
```

Use CSS variables defined in `src/index.css` inside modules:

```css
var(--color-primary);
var(--color-text-primary);
var(--color-bg-secondary);
/* etc. */
```

### 2.5 Import Conventions

**RULES:**

- You **MUST** use path aliases, not deep relative paths.
- You **MUST** separate type imports from value imports.

```tsx
// ✅ CORRECT
import { siteContent } from '@/constants';
import { Button } from '@/components/ui';

// ❌ WRONG
import { siteContent } from '../../../constants/site-content';
```

```tsx
// ✅ Types
import type { ReactNode } from 'react';

// ✅ Values
import { useState } from 'react';

// ❌ WRONG (mixing types and values)
import { useState, ReactNode } from 'react';
```

### 2.6 Component & Feature Creation

**When creating new UI components:**

1. Check if it already exists in `components/ui/`.
2. Only move a component to `components/ui/` if it is used in **3+ features** and is generic.
3. Otherwise, keep it inside the feature folder.

**When creating new features:**

1. Create folder in `src/features/feature-name/`.
2. Add types in `src/types/content.types.ts`.
3. Add content in `src/constants/site-content.ts`.
4. Create main component + CSS Module in the feature folder.
5. Export from `features/feature-name/index.ts`.
6. Import and render in `App.tsx`.

### 2.7 Custom Hooks

**RULES:**

- Shared hooks (used by multiple features) → `src/hooks/`.
- Feature-specific hooks → inside the feature folder (e.g., `features/calculator/useCalculator.ts`).
- Shared hooks should be exported from `src/hooks/index.ts`.

### 2.8 File Naming

**RULE:** You **MUST** follow these naming conventions:

- Components: `PascalCase.tsx` (e.g., `Calculator.tsx`)
- Hooks: `camelCase.ts` (e.g., `useCalculator.ts`)
- Utils: `camelCase.ts` (e.g., `formatters.ts`)
- Types: `kebab-case.types.ts` (e.g., `content.types.ts`)
- CSS Modules: `PascalCase.module.css` (e.g., `Calculator.module.css`)
- Constants: `kebab-case.ts` (e.g., `site-content.ts`)

---

## 3. DO NOT Create / DO NOT Install

You **MUST NOT** create these without explicit permission from the project owner:

- New documentation files (we already have `README`, `STRUCTURE`, `QUICKSTART`)
- New config files or build tools
- New global CSS files (beyond the existing `index.css`)
- Utility CSS frameworks (e.g., Tailwind)
- CSS-in-JS or styling libraries (styled-components, etc.)
- UI component libraries (Material-UI, Chakra, etc.)
- State management libraries (Redux, Zustand, etc.) for this project phase

---

## 4. Common Tasks

### 4.1 Adding a New Section

**RULE:** Follow these steps exactly when adding a new landing page section.

```bash
# 1. Create feature folder
mkdir src/features/new-section
```

```tsx
// 2. Add types to src/types/content.types.ts
export interface NewSectionContent {
  title: string;
  // ...
}

// 3. Add to main SiteContent type
export interface SiteContent {
  // ...existing
  newSection: NewSectionContent;
}
```

```tsx
// 4. Add content to src/constants/site-content.ts
export const siteContent: SiteContent = {
  // ...existing
  newSection: {
    title: 'Section Title',
    // ...
  },
};
```

```
# 5. Create component files
src/features/new-section/NewSection.tsx
src/features/new-section/NewSection.module.css
src/features/new-section/index.ts
```

```tsx
// 6. Add to App.tsx
import { NewSection } from '@/features/new-section';

// Use <NewSection /> in the appropriate place
```

### 4.2 Updating Content

**RULE:** For text/content changes, you **MUST ONLY** edit `src/constants/site-content.ts`.

You **MUST NOT** change component code just to modify text or static content.

### 4.3 Adding a Shared Component

Only if used in **3+ features**:

```
# 1. Create files
src/components/ui/NewComponent.tsx
src/components/ui/NewComponent.module.css
```

```tsx
// 2. Export from barrel
// src/components/ui/index.ts
export { NewComponent } from './NewComponent';
```

---

## 5. Technology Stack

**Installed and configured:**

- React 19
- TypeScript 5 (strict)
- Vite 7
- CSS Modules (scoped styling)
- GSAP 3 + `@gsap/react` (hero globe spin, orbit light, rolling text, scroll reveals)
- ESLint + Prettier

**RULE:** You **MUST NOT** add alternative styling systems, UI libraries, or global state libraries without explicit approval.

---

## 6. Code Quality Standards

Before committing, you **MUST** run:

```bash
npm run lint:fix    # Fix linting issues
npm run format      # Format code
npm run build       # Ensure it builds
```

All code **MUST** follow:

- Proper TypeScript typing (no unnecessary `any`)
- CSS Modules for all styling
- Proper error handling where needed
- Accessibility best practices (ARIA attributes where needed)
- Mobile-first responsive design

---

## 7. Questions?

- See `README.md` for general info.
- See `STRUCTURE.md` for additional architecture details.
- See `QUICKSTART.md` for task examples.

Those documents provide context only. If they conflict with this file, **this file is correct**.

---

## 8. Version Control Rules

- You **MUST** use feature branches.
- You **MUST NOT** commit directly to `main`.
- You **MUST** follow conventional commits (`feat:`, `fix:`, `chore:`, etc.).

---

## 9. Project Structure Reference (from [STRUCTURE.md](http://structure.md/))

This is a **reference only**, not a second set of rules. Layout:

```
sav2/
├── .vscode/                # VSCode workspace settings
│   ├── extensions.json
│   └── settings.json
│
├── src/                    # Source code
│   ├── features/           # Feature-based modules
│   ├── components/         # Reusable components (3+ features)
│   ├── types/              # TypeScript types
│   ├── constants/          # Site content
│   ├── hooks/              # Shared React hooks
│   ├── utils/              # Utility functions
│   ├── pages/              # Page components (legal pages, Logo)
│   ├── assets/             # Static assets imported by components
│   ├── App.tsx             # Root component
│   ├── App.css             # App-level styles
│   ├── index.css           # Global CSS variables & resets
│   └── main.tsx            # Entry point
│
├── public/                 # Static public assets
│   └── icon.svg            # Favicon
│
├── .editorconfig
├── .env.example
├── eslint.config.js
├── .gitignore
├── .prettierrc
├── .prettierignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
└── context/
    ├── CLAUDE.md
    ├── README.md
    └── STRUCTURE.md
```

Key patterns:

- Feature Module Pattern (self-contained feature folders).
- Barrel Exports (`index.ts` in each folder for public API).
- Type-first development (types → content → components).
- Separation of concerns:
    - Components (UI)
    - Hooks (logic)
    - Utils (helpers)
    - Types (structure)

---

**FINAL REMINDER:**

This file is the **law** for this project. If any instruction anywhere conflicts with this file, follow **this file** and inform the user which rule would be broken.
