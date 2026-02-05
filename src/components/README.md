# src/components

This folder contains shared layout and feature components that compose pages (e.g., `Header`, `Footer`, `CookieBanner`). These components may depend on app-level context or content from `src/content`.

Guidelines:

- Keep component APIs stable and document prop contracts.
- Prefer composition over prop-per-feature to keep components readable.
- Add stories or screenshot tests when component visual behavior is important.
