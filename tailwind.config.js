/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        arcanta: {
          dark: '#020914',
          card: '#07111F',
          blue: '#11A8FF',
          gold: '#F5A33B',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.10), 0 10px 30px rgba(5, 20, 40, 0.45)',
      },
      backgroundImage: {
        'arcanta-grid': 'radial-gradient(circle at 20% 10%, rgba(17, 168, 255, 0.15), transparent 35%), radial-gradient(circle at 80% 30%, rgba(245, 163, 59, 0.09), transparent 30%), linear-gradient(180deg, #020914 0%, #030C19 35%, #020914 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
