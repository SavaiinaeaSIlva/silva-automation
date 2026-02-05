# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2026-02-05

### Breaking Changes
- **Asset imports**: Moved all assets from `public/` to `src/assets/` with proper organization
  - `public/LOGO.png` → `src/assets/images/silva-logo.png`
  - `public/icon.png` → `src/assets/icons/silva-icon.png`
  - All components now import assets as ES modules instead of using public paths
- **Test structure**: Consolidated test folders into single `src/__tests__/` location
  - Moved `src/components/__tests__/` → `src/__tests__/`

### Added
- **Path aliases**: Comprehensive TypeScript path aliases with `vite-tsconfig-paths`
  - `@/*`, `@/components/*`, `@/common/*`, `@/modules/*`, `@/hooks/*`, `@/core/*`, `@/content/*`, `@/pages/*`, `@/assets/*`, `@/styles/*`
- **Barrel exports**: Created `index.ts` files in all major folders for clean imports
  - `src/components/index.ts`, `src/common/components/index.ts`, `src/modules/home/index.ts`
  - `src/hooks/index.ts`, `src/pages/index.ts`, `src/core/index.ts`
- **Test coverage thresholds**: Enforced minimum coverage in CI (70%+ for lines, functions, statements; 65%+ for branches)
- **Accessibility linting**: Added `eslint-plugin-jsx-a11y` with recommended rules
- **Documentation**: Added folder-level README files for `src/common/` and `src/components/`
- **CI checks**: Added check-no-debug.js script to prevent debug files in production
- **Tests**: Added comprehensive test coverage
  - `src/__tests__/lenis.test.tsx` - Lenis context provider tests
  - `src/__tests__/scrollingTextWall.test.tsx` - ScrollingTextWall component tests
  - `src/__tests__/accessibility.test.tsx` - Accessibility compliance tests

### Changed
- **Asset organization**: Proper directory structure for images and icons in `src/assets/`
- **Import paths**: All asset imports use ES modules with proper bundler optimization
- **TypeScript config**: Enhanced `tsconfig.json` with path aliases and baseUrl
- **Vite config**: Added `vite-tsconfig-paths` plugin for path alias resolution
- **ESLint config**: Added jsx-a11y plugin for accessibility rule enforcement

### Fixed
- **CalculatorSection**: Fixed ref handling and removed duplicate animation ref declarations
- **Test**: Updated scrollingTextWall test to handle multiple text instances correctly
- **Build artifacts**: Removed committed `dist/` folder from repository
- **Debug files**: Removed `public/debug-hero.js` (moved to `scripts/debug-hero.dev.js`)
- **Binary files**: Removed large installer binary (`VSCodeUserSetup-x64-1.108.2.exe`)

### Improved
- **`.gitignore`**: Enhanced with coverage directory, OS-specific files, and IDE files
- **Code organization**: Cleaner imports with barrel exports and path aliases
- **Developer experience**: Better autocomplete and import suggestions with path aliases
- **CI pipeline**: Coverage enforcement prevents regressions in test coverage
- **Accessibility**: Linting catches a11y issues during development, not just in tests

### Infrastructure
- All 18 tests passing across 8 test files
- TypeScript compilation successful with strict mode
- ESLint passing with zero warnings (max-warnings=0)
- Production build verified and optimized
- Comprehensive commit pushed to `origin/main`
