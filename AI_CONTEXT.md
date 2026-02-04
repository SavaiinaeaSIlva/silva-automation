# AI Context — Silva Automation Project

> **Read this file before making ANY changes to this codebase.**

This document provides essential context for AI assistants working on this Vite + React + Tailwind CSS project. Violating these constraints will break the build, visual design, or architectural integrity.

---

## 🚨 Critical Constraints (Do Not Violate)

### 1. Visual Parity
- **DO NOT** change colors, spacing, animations, or visual appearance
- **DO NOT** modify GSAP/Lenis animation logic or timing
- **DO NOT** alter glassmorphism effects or light leak animations
- Any refactoring must produce **pixel-identical** output

### 2. Design System Strictness
- **DO NOT** use arbitrary Tailwind values (e.g., `text-[14px]`, `bg-[#123456]`, `w-[200px]`)
- **ALWAYS** use tokens defined in `tailwind.config.cjs`
- If a token doesn't exist, add it to the config first, then use it

### 3. Import Path Resolution
- When moving files, **ALWAYS** update all import statements across the project
- Run `npm run typecheck` after any file moves to verify

### 4. No New Dependencies
- **DO NOT** add packages not already in `package.json`
- Use only: React, React Router, GSAP, Lenis, Lucide React, Tailwind

### 5. TypeScript Strict Mode
- Project uses strict TypeScript — all types must be explicit
- No `any` types unless absolutely necessary
- Run `npm run typecheck` to verify changes

---

## 📁 Project Structure

```
silva-automation/
├── public/                 # Static assets (LOGO.png, icon.png)
├── src/
│   ├── core/              # Providers & Context
│   │   └── LenisContext.tsx    # Smooth scroll provider (DO NOT MODIFY LOGIC)
│   │
│   ├── common/            # Atomic/Reusable Components
│   │   └── components/
│   │       ├── Accordion.tsx
│   │       ├── ErrorBoundary.tsx
│   │       └── Loader.tsx
│   │
│   ├── modules/           # Feature Sections (lazy-loaded)
│   │   └── home/
│   │       ├── HeroSection.tsx
│   │       ├── ProcessSection.tsx      # ⭐ Gold-standard example
│   │       ├── PricingSection.tsx
│   │       ├── CalculatorSection.tsx
│   │       ├── ContactSection.tsx
│   │       ├── FAQSection.tsx
│   │       ├── ProblemSolutionSection.tsx
│   │       └── FeatureHighlights.tsx
│   │
│   ├── pages/             # Route Components
│   │   ├── HomePage.tsx        # Main landing page
│   │   └── LegalPage.tsx       # Terms, Privacy, Cookies, Refunds
│   │
│   ├── hooks/             # Custom React Hooks
│   │   ├── useScrollReveal.ts      # GSAP scroll animations
│   │   └── useAnimatedNumber.ts    # Number interpolation
│   │
│   ├── components/        # Shared Layout Components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionLayout.tsx       # Wrapper with light leaks
│   │   ├── CookieBanner.tsx
│   │   ├── BackToTop.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── ScrollingTextWall.tsx
│   │   ├── LegalSection.tsx
│   │   └── ContactInfoBlock.tsx
│   │
│   ├── content/           # Static Content (text, copy)
│   │   ├── siteContent.ts      # All UI text
│   │   └── legalContent.ts     # Legal page content
│   │
│   ├── assets/            # Images, icons, fonts (if needed)
│   │
│   ├── styles/
│   │   └── global.css          # CSS variables + complex animations
│   │
│   ├── __tests__/         # Test files
│   ├── App.tsx            # Router setup
│   └── main.tsx           # Entry point
│
├── tailwind.config.cjs    # 🎨 DESIGN TOKENS — Edit here for new values
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 🎨 Design System Architecture

### Token Hierarchy (Single Source of Truth)

```
CSS Variables (:root)     →  tailwind.config.cjs  →  Component Classes
─────────────────────────────────────────────────────────────────────
--color-bg: #0a0a0a       →  brand-bg             →  bg-brand-bg
--color-text-muted        →  muted                →  text-muted
--radius-md: 12px         →  rounded-md           →  rounded-md
```

### Key Token Categories

| Category | Config Location | Examples |
|----------|-----------------|----------|
| **Colors** | `theme.extend.colors` | `brand-bg`, `muted`, `cta`, `glass-bg` |
| **Text Opacity** | `theme.extend.textColor` | `text-white-90`, `text-white-50` |
| **Backgrounds** | `theme.extend.backgroundColor` | `bg-glass-subtle`, `bg-glass-medium` |
| **Borders** | `theme.extend.borderColor` | `border-subtle`, `border-medium` |
| **Typography** | `theme.extend.fontSize` | `text-display-sm`, `text-display-lg` |
| **Spacing** | `theme.extend.spacing` | `min-h-section-card-sm`, `w-step-card` |
| **Shadows** | `theme.extend.boxShadow` | `shadow-nav`, `shadow-card-hover` |
| **Transitions** | `theme.extend.transitionDuration` | `duration-fast`, `duration-slow` |
| **Z-Index** | `theme.extend.zIndex` | `z-base`, `z-sticky`, `z-modal` |

### CSS Classes (global.css)

These are complex animations that cannot be utility-ized:

| Class | Purpose |
|-------|---------|
| `.glass-card` | Glassmorphism card with backdrop blur |
| `.glass-card-featured` | Animated gradient border card |
| `.cta-button-primary` | Animated CTA with arrow reveal |
| `.section-header` | Gradient text heading |
| `.section-subtitle` | Muted centered paragraph |
| `.section-light-leaks` | Ambient background animation wrapper |
| `.light-leak-v1/v2/v3` | Color variants (warm/cool/neutral) |
| `.nav-link` | Navigation link with active state |
| `.form-input` | Styled form input |
| `.back-to-top` | Fixed scroll button |

---

## ✅ Validation Commands

Run these before committing any changes:

```bash
npm run typecheck    # TypeScript validation
npm run lint         # ESLint checks
npm run build        # Production build test
npm run test         # Unit tests
```

---

## 📋 Component Patterns

### Gold-Standard: ProcessSection.tsx

Reference this file for correct patterns:

```tsx
// ✅ Correct: Use design tokens
className="text-white-50"
className="duration-slow"
className="w-step-card"
className="h-icon-sm"
className="z-base"

// ❌ Wrong: Arbitrary values
className="text-white/50"
className="duration-300"
className="w-64"
className="h-10"
className="z-10"
```

### Section Component Template

```tsx
import { siteContent } from '../../content/siteContent';
import SectionLayout from '../../components/SectionLayout';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function NewSection() {
  const content = siteContent.newSection;
  const headerRef = useScrollReveal({ y: 30, duration: 0.7 });

  return (
    <SectionLayout id="new-section" lightLeaks="v1">
      <div ref={headerRef}>
        <h2 className="section-header">{content.header}</h2>
        <p className="section-subtitle">{content.subtitle}</p>
      </div>
      {/* Section content */}
    </SectionLayout>
  );
}
```

---

## 🔒 Files That Should Rarely Change

| File | Reason |
|------|--------|
| `src/core/LenisContext.tsx` | Smooth scroll + GSAP sync logic |
| `src/styles/global.css` (animations) | Complex keyframe animations |
| `src/components/SectionLayout.tsx` | Light leak visibility logic |
| `src/hooks/useScrollReveal.ts` | GSAP animation hook |

---

## 🚫 Common Mistakes to Avoid

1. **Breaking imports after moving files**
   - Always grep for imports: `grep -r "old/path" src/`

2. **Using arbitrary Tailwind values**
   - Add tokens to `tailwind.config.cjs` instead

3. **Modifying animation timing**
   - GSAP/Lenis timings are carefully tuned

4. **Forgetting aria-hidden on decorative elements**
   - Dividers, icons, background elements need `aria-hidden="true"`

5. **Not lazy-loading below-fold sections**
   - Use `React.lazy()` in `HomePage.tsx`

6. **Adding inline styles**
   - Use Tailwind classes or add to design system

---

## 📞 Quick Reference

| Task | Location |
|------|----------|
| Add a new color | `tailwind.config.cjs` → `theme.extend.colors` |
| Add a new spacing value | `tailwind.config.cjs` → `theme.extend.spacing` |
| Modify site copy | `src/content/siteContent.ts` |
| Add a new section | `src/modules/home/` + update `HomePage.tsx` |
| Add a new page | `src/pages/` + update `App.tsx` routes |
| Add a new hook | `src/hooks/` |
| Add a reusable component | `src/common/components/` |

---

**Last Updated:** February 2026  
**Stack:** Vite 7 + React 18 + TypeScript 5 + Tailwind CSS 3 + GSAP 3 + Lenis
