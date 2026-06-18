/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0a0a0f',
        'space-blue': '#1a1a2e',
        'neon-blue': '#B7C6E0',
        'neon-purple': '#B7C6E0',
        'star-gold': '#B7C6E0',
        'primary-blue': '#B7C6E0',
        'blue-glow': '#A5B4CC',
      },
      fontFamily: {
        'space': ['Orbitron', 'monospace'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #B7C6E0, 0 0 10px #B7C6E0, 0 0 15px #B7C6E0' },
          '100%': { boxShadow: '0 0 15px #B7C6E0, 0 0 25px #B7C6E0, 0 0 35px #B7C6E0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'space-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
      }
    },
  },
  plugins: [],
}