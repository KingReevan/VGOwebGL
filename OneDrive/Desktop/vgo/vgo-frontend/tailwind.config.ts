import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }, // Changed from -50% to -100% for seamless loop
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-100%)' }, // Changed from -50% to -100%
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'scroll-left': 'scroll-left 65s linear infinite',
        'scroll-right': 'scroll-right 65s linear infinite',
        'scroll-mobile': 'scroll-left 45s linear infinite',
      },
      fontFamily: {
        sans: ['var(--font-rajdhani)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config