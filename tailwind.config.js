/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#FAF8FF',
        'secondary-bg': '#F0EAFE',
        'primary-purple': '#7952B3',
        'lavender': '#C4B5FD',
        'dark-purple': '#4C327A',
        'heading-color': '#30234A',
        'body-text': '#625B71',
        'card-bg': '#FFFFFF',
        'border-color': '#E8DFF5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'purple-sm': '0 2px 8px rgba(76, 50, 122, 0.06)',
        'purple-md': '0 8px 24px rgba(76, 50, 122, 0.09)',
        'purple-lg': '0 16px 36px rgba(76, 50, 122, 0.12)',
        'purple-glow': '0 0 20px rgba(196, 181, 253, 0.45)',
      },
    },
  },
  plugins: [],
}

