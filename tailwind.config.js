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
        'linear': 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
        'dark-1': '#757575',
        'dark-2': '#A3A3A3',
      },

      backgroundImage: theme => ({
        'linear': 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
      }),
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
  },
  plugins: [require("daisyui")],
}

