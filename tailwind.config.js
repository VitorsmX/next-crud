/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    {
      pattern: /^bg-|^to-|^from-/
    }
  ],
  theme: {
    extend: {
      keyframes: {
        pulseRed: {
          '50%': { backgroundColor: '#ffb5ab', opacity: .8 },
        },
        animation: {
          pulseRed: 'pulseRed 700ms ease-in-out backwards',
        }
      }
    },
  },
  plugins: [],
}