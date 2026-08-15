/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05070A',
        charcoal: '#0B0E13',
        panel: '#0D1219',
        navy: '#0A1420',
        'navy-mid': '#101B2B',
        line: '#1B2534',
        'line-soft': '#141C28',
        ink: '#E9ECF1',
        muted: '#8B94A3',
        faint: '#5A6472',
        accent: '#4C8DFF',
        'accent-dim': '#2A4E85',
        'accent-glow': '#7FB1FF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(#101826 1px, transparent 1px), linear-gradient(90deg, #101826 1px, transparent 1px)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scanline: 'scanline 6s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
