module.exports = {
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'}
      }
    },
  },
  variants: [
    'dark',
    'dark-hover',
    'dark-group-hover',
    'dark-even',
    'dark-odd',
    'responsive',
    'motion-safe',
    'motion-reduce'
  ]
}
