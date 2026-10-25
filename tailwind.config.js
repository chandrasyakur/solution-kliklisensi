/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#017EFC',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#017EFC',
          600: '#006ee0',
          700: '#0058b8',
          800: '#034691',
          900: '#083c74',
        },
        ink: {
          DEFAULT: '#202125',
          soft: '#515151',
          muted: '#86868B',
        },
        surface: {
          DEFAULT: '#F5F5F7',
          card: '#FFFFFF',
          hover: '#EBEBED',
          line: '#E5E5E9',
          canvas: '#FAFAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'apple-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'apple-md': '0 4px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'apple-lg': '0 12px 32px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'brand-glow': '0 8px 24px -4px rgba(1, 126, 252, 0.25)',
      },
      borderRadius: {
        'apple': '10px',
        'apple-inner': '8px',
        'apple-card': '14px',
      }
    },
  },
  plugins: [],
}
