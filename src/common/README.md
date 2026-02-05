# src/common

This folder contains low-level, well-tested atomic components intended to be framework-agnostic and reusable across multiple modules (e.g., `Accordion`, `Loader`, `ErrorBoundary`).

Guidelines:

- Keep components small and dependency-free when possible.
- Add tests alongside components in `__tests__`.
- Avoid importing large app-level context or styles that create tight coupling.
