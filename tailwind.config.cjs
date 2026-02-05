/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════════════════
      // COLOR SYSTEM — All colors consume CSS variables for single source of truth
      // ═══════════════════════════════════════════════════════════════════════
      colors: {
        // Brand backgrounds
        'brand-bg': 'var(--color-bg)',
        'brand-elevated': 'var(--color-bg-elevated)',
        'brand-card': 'var(--color-bg-card)',

        // Text colors
        'text-main': 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        subtle: 'var(--color-text-subtle)',
        success: 'var(--color-success)',

        // CTA / interactive
        cta: 'var(--color-cta)',
        'cta-hover': 'var(--color-cta-hover)',
        'cta-text': 'var(--color-cta-text)',

        // Semantic aliases for common usage
        'glass-bg': 'var(--card-bg)',

        // Semantic colors (extracted from components)
        'problem-bg': 'rgba(239, 68, 68, 0.1)',
        'problem-text': '#f87171',
        'solution-bg': 'rgba(16, 185, 129, 0.1)',
        'solution-text': '#34d399',

        // Accent (platinum) - single token, use sparingly
        'accent-platinum': 'var(--color-accent-platinum)',
        'accent-platinum-muted': 'var(--color-accent-platinum-muted)',

        // Zinc palette for text
        'zinc-400': '#a1a1aa',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TEXT COLOR SYSTEM — Opacity variants for white text
      // ═══════════════════════════════════════════════════════════════════════
      textColor: {
        'white-90': 'rgba(255, 255, 255, 0.9)',
        'white-85': 'rgba(255, 255, 255, 0.85)',
        'white-80': 'rgba(255, 255, 255, 0.8)',
        'white-70': 'rgba(255, 255, 255, 0.7)',
        'white-60': 'rgba(255, 255, 255, 0.6)',
        'white-50': 'rgba(255, 255, 255, 0.5)',
        'white-40': 'rgba(255, 255, 255, 0.4)',
        'white-30': 'rgba(255, 255, 255, 0.3)',
        'white-20': 'rgba(255, 255, 255, 0.2)',
        'white-10': 'rgba(255, 255, 255, 0.1)',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // BORDER SYSTEM
      // ═══════════════════════════════════════════════════════════════════════
      borderColor: {
        DEFAULT: 'var(--color-border)',
        hover: 'var(--color-border-hover)',
        subtle: 'rgba(255, 255, 255, 0.06)',
        medium: 'rgba(255, 255, 255, 0.08)',
        strong: 'rgba(255, 255, 255, 0.15)',
        accent: 'rgba(255, 255, 255, 0.25)',
        divider: 'rgba(255, 255, 255, 0.10)',
        'divider-strong': 'rgba(255, 255, 255, 0.20)',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // BACKGROUND OPACITY VARIANTS (for glass morphism)
      // ═══════════════════════════════════════════════════════════════════════
      backgroundColor: {
        'glass-subtle': 'rgba(255, 255, 255, 0.03)',
        'glass-light': 'rgba(255, 255, 255, 0.05)',
        'glass-medium': 'rgba(255, 255, 255, 0.08)',
        'glass-strong': 'rgba(255, 255, 255, 0.10)',
        'glass-hover': 'rgba(255, 255, 255, 0.06)',
        'glass-intense': 'rgba(255, 255, 255, 0.15)',
        'nav-bg': 'rgba(0, 0, 0, 0.7)',
        'nav-mobile': 'rgba(0, 0, 0, 0.9)',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TYPOGRAPHY SYSTEM
      // ═══════════════════════════════════════════════════════════════════════
      fontSize: {
        // Standard scale from CSS variables
        xs: ['var(--text-xs)', { lineHeight: '1.5' }],
        sm: ['var(--text-sm)', { lineHeight: '1.5' }],
        base: ['var(--text-base)', { lineHeight: '1.6' }],
        lg: ['var(--text-lg)', { lineHeight: '1.5' }],
        xl: ['var(--text-xl)', { lineHeight: '1.2' }],
        '2xl': ['var(--text-2xl)', { lineHeight: '1.2' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],

        // Display typography for hero/section numbers
        'display-sm': ['4rem', { lineHeight: '1', fontWeight: '700' }],
        'display-md': ['5rem', { lineHeight: '1', fontWeight: '700' }],
        'display-lg': ['6rem', { lineHeight: '1', fontWeight: '700' }],
      },

      fontFamily: {
        main: ['var(--font-main)', 'system-ui', 'sans-serif'],
      },

      // ═══════════════════════════════════════════════════════════════════════
      // SPACING SYSTEM — Section and component spacing
      // ═══════════════════════════════════════════════════════════════════════
      spacing: {
        // Section heights
        'section-card-sm': '14rem',
        'section-card-lg': '16rem',

        // Component gaps
        'gap-xs': '0.5rem',
        'gap-sm': '0.75rem',
        'gap-md': '1rem',
        'gap-lg': '1.5rem',
        'gap-xl': '2rem',

        // Section spacing — professional gaps between sections
        'section-py': '4rem',
        'section-py-lg': '6rem',
        'section-mt': '2rem',

        // Component specific
        'icon-sm': '2.5rem',
        'icon-md': '3rem',
        'icon-lg': '2.75rem',

        // Feature card heights
        'feature-card': '180px',
        'feature-card-lg': '150px',
      },

      minHeight: {
        'section-card-sm': '14rem',
        'section-card-lg': '16rem',
        loader: '200px',
        'feature-card': '180px',
        'feature-card-lg': '150px',
      },

      maxWidth: {
        content: '1100px',
        'content-lg': '1200px',
        'content-xl': '1536px',
        section: '36rem',
        form: '576px',
        legal: '896px',
      },

      width: {
        'step-card': '16rem',
      },

      height: {
        'nav-logo': '1.75rem',
        'footer-logo': '2rem',
        divider: '1px',
        'icon-sm': '2.5rem',
        'icon-md': '3rem',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // BORDER RADIUS SYSTEM
      // ═══════════════════════════════════════════════════════════════════════
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: '1rem',
        full: 'var(--radius-full)',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // BOX SHADOW SYSTEM
      // ═══════════════════════════════════════════════════════════════════════
      boxShadow: {
        'cookie-banner': '0 -4px 24px rgba(0, 0, 0, 0.4)',
        nav: '0 4px 20px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 12px 24px -8px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        cta: '0 4px 15px rgba(255, 255, 255, 0.15)',
        'cta-hover': '0 8px 30px rgba(229, 228, 226, 0.3), 0 0 40px rgba(192, 192, 192, 0.2)',
        'glass-featured': '0 0 40px -10px rgba(255, 255, 255, 0.15)',
        'feature-hover': '0 8px 20px -4px rgba(0, 0, 0, 0.3)',
        'button-glow': '0 4px 15px rgba(255, 255, 255, 0.10)',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TRANSITION SYSTEM
      // ═══════════════════════════════════════════════════════════════════════
      transitionTimingFunction: {
        'bounce-sm': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      transitionDuration: {
        DEFAULT: '200ms',
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
        slower: '600ms',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // OPACITY SYSTEM (for text/white overlays)
      // ═══════════════════════════════════════════════════════════════════════
      opacity: {
        3: '0.03',
        6: '0.06',
        8: '0.08',
        15: '0.15',
        20: '0.20',
        25: '0.25',
        80: '0.80',
        85: '0.85',
        90: '0.90',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // Z-INDEX SYSTEM
      // ═══════════════════════════════════════════════════════════════════════
      zIndex: {
        base: '1',
        dropdown: '10',
        sticky: '40',
        modal: '50',
        'back-to-top': '9999',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // ANIMATION SYSTEM
      // ═══════════════════════════════════════════════════════════════════════
      animation: {
        'cta-pulse': 'cta-pulse 3s ease-in-out infinite',
        'border-spin': 'border-spin 4s linear infinite',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // BLUR SYSTEM
      // ═══════════════════════════════════════════════════════════════════════
      backdropBlur: {
        nav: '24px',
        card: '16px',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // GRID SYSTEM
      // ═══════════════════════════════════════════════════════════════════════
      gridTemplateColumns: {
        'feature-3': 'repeat(3, 1fr)',
        footer: 'repeat(1, 1fr)',
        'footer-md': 'repeat(4, 1fr)',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // GAP SYSTEM
      // ═══════════════════════════════════════════════════════════════════════
      gap: {
        section: '1.5rem',
        'section-lg': '2rem',
        card: '1rem',
        'card-lg': '1.5rem',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // PADDING SYSTEM
      // ═══════════════════════════════════════════════════════════════════════
      padding: {
        'card-sm': '1rem',
        'card-md': '1.5rem',
        'card-lg': '2rem',
        'card-xl': '2.5rem',
        section: '1rem',
      },
    },
  },
  plugins: [],
};
