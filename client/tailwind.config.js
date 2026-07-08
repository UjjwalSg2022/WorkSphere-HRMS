/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        accent: '#22C55E',
        bg: '#09090B',
        card: '#18181B',
        text: '#F8FAFC'
      }
    }
  },
  plugins: []
};
