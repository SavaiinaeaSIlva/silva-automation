module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cta: 'var(--color-cta)',
        muted: 'var(--color-text-muted)',
        success: 'var(--color-success)',
        'text-main': 'var(--color-text)',
      },
      fontSize: {
        xs: ['var(--text-xs)', { lineHeight: '1.5' }],
        sm: ['var(--text-sm)', { lineHeight: '1.5' }],
        base: ['var(--text-base)', { lineHeight: '1.6' }],
        lg: ['var(--text-lg)', { lineHeight: '1.5' }],
        xl: ['var(--text-xl)', { lineHeight: '1.2' }],
        '2xl': ['var(--text-2xl)', { lineHeight: '1.2' }],
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
    },
  },
  plugins: [],
};
