# Quick Start Guide

Get up and running in 5 minutes.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Common Tasks

### Update Site Content

1. Open [`src/constants/site-content.ts`](src/constants/site-content.ts)
2. Find the section you want to update
3. Modify the text
4. Save - TypeScript will validate your changes

### Create a New Component

```bash
# 1. Create the component file
src/components/ui/Button.tsx

# 2. Export it from the barrel
src/components/ui/index.ts
```

```typescript
// Button.tsx
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
```

```typescript
// src/components/ui/index.ts
export { Button } from './Button';
```

### Create a New Feature

```bash
# 1. Create folder
src/features/new-feature/

# 2. Add types to src/types/content.types.ts
# 3. Add content to src/constants/site-content.ts
# 4. Create component
src/features/new-feature/NewFeature.tsx
```

### Add a Custom Hook

```bash
# 1. Create hook file
src/hooks/useMyHook.ts

# 2. Export from barrel
src/hooks/index.ts
```

```typescript
// useMyHook.ts
import { useState, useEffect } from 'react';

export const useMyHook = () => {
  const [value, setValue] = useState('');

  // Hook logic here

  return { value, setValue };
};
```

```typescript
// src/hooks/index.ts
export { useMyHook } from './useMyHook';
```

## Code Quality

```bash
# Lint
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

## Build for Production

```bash
npm run build
```

Output: `dist/` folder

## Preview Production Build

```bash
npm run preview
```

## Path Aliases

Use `@/` prefix for imports:

```typescript
import { siteContent } from '@/constants';
import { Button } from '@/components/ui';
import { useCalculator } from '@/hooks';
```

## File Structure Quick Reference

```
src/
├── features/         → Landing page sections
├── components/       → Reusable UI components
│   ├── ui/          → Buttons, inputs, cards
│   └── layout/      → Containers, grids
├── types/           → TypeScript types
├── constants/       → Site content & config
├── hooks/           → Custom React hooks
├── utils/           → Helper functions
└── styles/          → Global styles
```

## Need Help?

- [README.md](README.md) - Full documentation
- [STRUCTURE.md](STRUCTURE.md) - Project architecture
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guide

## Contact

Questions? Email: contact@silvaautomation.com
