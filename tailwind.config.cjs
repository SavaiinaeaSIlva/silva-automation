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
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
    },
  },
  plugins: [],
};
