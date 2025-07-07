/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        // Paleta clásica de barbería
        'barber-blue': '#1e3f66',
        'barber-red': '#d72638',
        'barber-white': '#f5f5f5',
        'barber-dark': '#121212',
        'barber-gray': '#1e1e1e',
      },
    },
  },
  plugins: [],
}
