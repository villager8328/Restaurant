/** @type {import('tailwindcss').Config} */
export default {
  content:   [
  "./index.html",
  "./*.{js,jsx}",
],
],
    extend: {
      colors: {
        // ---- Brand palette (Ember & Spice) ----
        // Change these if you rebrand the restaurant's look.
        charcoal: {
          DEFAULT: '#1B1512',
          dark: '#140F0D',
          light: '#2A211B',
        },
        cream: '#FAF3E7',
        ember: {
          DEFAULT: '#E8632E',
          dark: '#C94F22',
          light: '#F2895E',
        },
        gold: {
          DEFAULT: '#D9A441',
          light: '#EAC474',
        },
        maroon: '#7A1F2B',
        ink: {
          DEFAULT: '#F5EDE0',
          muted: '#C9BBA8',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(0,0,0,0.45)',
        glow: '0 0 60px -10px rgba(232, 99, 46, 0.45)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        emberPulse: {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.06)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
        emberPulse: 'emberPulse 3.5s ease-in-out infinite',
        slideUp: 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
