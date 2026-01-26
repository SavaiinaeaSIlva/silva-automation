# Changelog

## [Unreleased]
### Added
- N/A

### Changed
- Removed unused image and font assets and minor code cleanups to reduce bundle size and remove dead files.

### Removed
- Removed large unused PNGs: `src/assets/images/*`, `src/assets/logo/icon.png`, `src/assets/logo/logo.png`.
- Removed duplicate fonts from `public/fonts`.
- Removed unused component `src/components/ui/Card.jsx`.
- Deleted unused `siteContent.ts`.

### Notes
- Replaced footer logo and favicon with the small `liquid-metal.svg` to dramatically reduce bundle size.
- Defer WebGL shader fallback to avoid large PNG fallback and possible canvas tainting.
- Lint and build verified (ESLint & Vite build passed).
