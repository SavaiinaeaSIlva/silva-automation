# AI Context — Silva Automation Project

> **READ THIS BEFORE MAKING ANY CHANGES.** This document is the "Source of Truth" for all AI-assisted development. Violating these constraints will result in immediate rejection of the code.

---

## 🚨 Critical Constraints (Do Not Violate)

### 1. The "Silva Completion" Rule
- **NO SNIPPETS.** Provide the **complete, fully coded file** ready to copy/paste in its entirety.
- **NO PLACEHOLDERS.** Never use `// ... rest of code` or `/* logic here */`.
- If refactoring a 500-line file, you must output all 500 lines.

### 2. File Naming & Extension
- **EXTENSION:** Use `.tsx` for all React components (per TypeScript strict mode).
- **NAMING:** Use PascalCase for components (e.g., `HeroSection.tsx`) and camelCase for hooks/utilities.

### 3. Visual & Animation Parity
- **DO NOT** change colors, spacing, or timing.
- **DO NOT** modify GSAP/Lenis logic. Refactors must be **pixel-identical**.
- **GLASSMORPHISM:** Always preserve `.glass-card` classes and light leak wrappers.

### 4. Design System Strictness
- **NO ARBITRARY VALUES:** Do not use `text-[14px]` or `bg-[#123456]`.
- **TOKENS ONLY:** Use tokens from `tailwind.config.cjs`. If a value is missing, add it to the config first.

### 5. No New Dependencies
- Use ONLY: React, React Router, GSAP, Lenis, Lucide React, Tailwind.
- Do not suggest `framer-motion` or other libraries.

### 6. VCS Workflow
- **COMMIT POLICY:** All commits must be made directly to the `main` branch. 
- **PUSH POLICY:** Do not push to remote (GitHub) without explicit approval from Savaiinaea Silva.

---

## 📁 Project Structure

```
silva-automation/
├── src/
│   ├── core/           # Providers (LenisContext.tsx - DO NOT MODIFY)
│   ├── common/         # Atomic components (Accordion, Loader, ErrorBoundary)
│   ├── modules/        # Feature-based sections (Logic stays here)
│   │   └── home/       # Landing page sections (Hero, Process, Pricing, etc.)
│   ├── pages/          # Route components (HomePage, LegalPage)
│   ├── hooks/          # GSAP & interpolation hooks (useScrollReveal, useAnimatedNumber)
│   ├── content/        # UI Text (siteContent.ts, legalContent.ts) - EDIT COPY HERE
│   ├── components/     # Shared Layout (Header, Footer, SectionLayout, CookieBanner)
│   └── styles/         # global.css (Complex animations & CSS variables)
```

---

## 🎨 Design System Architecture

### Token Hierarchy
- **CSS Variables (:root)** → **tailwind.config.cjs** → **Component Classes**

### Key Classes (global.css)
| Class | Purpose |
|-------|---------|
| `.glass-card` | Glassmorphism card with backdrop blur |
| `.glass-card-featured` | Animated gradient border card |
| `.section-header` | Gradient text heading |
| `.section-light-leaks` | Ambient background animation wrapper |

---

## 📋 Component Patterns

### ✅ Gold Standard (Follow This)
```tsx
import { siteContent } from '../../content/siteContent';
import SectionLayout from '../../components/SectionLayout';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ExampleSection() {
  const content = siteContent.example;
  const ref = useScrollReveal({ y: 20, duration: 0.7 });

  return (
    <SectionLayout id="example" lightLeaks="v2">
      <div ref={ref} className="z-base">
        <h2 className="section-header">{content.title}</h2>
        <p className="section-subtitle text-white-50 duration-slow">{content.desc}</p>
      </div>
    </SectionLayout>
  );
}
```

---

## 🚫 Common "Fuck Ups" to Avoid
1. **Broken Imports:** After moving a file, you MUST update all referencing files. Run `npm run typecheck`.
2. **Inline Styles:** Forbidden. Use Tailwind tokens or `global.css` utility classes.
3. **TypeScript:** Strict mode is ON. No `any`. All props must have explicit interfaces.
4. **Lazy Loading:** Ensure below-the-fold sections are lazy-loaded in `HomePage.tsx`.

---

**Last Updated:** February 2026  
**Stack:** Vite 7 + React 18 + TS 5 + GSAP 3 + Lenis + Tailwind CSS 3