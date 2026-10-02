/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#07090e',
        surface: {
          50: '#141824',
          100: '#10141f',
          200: '#0c0f17',
          300: '#080a10',
        },
        accent: {
          cyan: '#00f2fe',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          emerald: '#10b981',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(0, 242, 254, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
        'radial-glow': "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%)",
        'cyan-glow': "radial-gradient(circle at 50% 50%, rgba(0, 242, 254, 0.12), transparent 60%)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
