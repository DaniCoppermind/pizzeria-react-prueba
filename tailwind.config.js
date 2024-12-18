/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/src/assets/background-image.jpg')",
      },
    },
  },
  plugins: [],
}
