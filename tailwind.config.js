/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,txs}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1919',
        secondary: '#474747',
        linear: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
        'dark-1': '#757575',
        'dark-2': '#A3A3A3',
      }
    },
  },
  plugins: [require("daisyui")],
}

