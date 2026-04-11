/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37', // Classic Gold
          light: '#F9E79F',   // Champagne
          dark: '#9A7B4F',    // Bronze/Dark Gold
        },
        background: {
          dark: '#0A0A0A',    // Obsidian
          card: '#161616',    // Deep Stone
        },
        accent: '#D4AF37',
        stone: {
          950: '#0A0A0A',
          900: '#161616',
          800: '#262626',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        accent: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}
