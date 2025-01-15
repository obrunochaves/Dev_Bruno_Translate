/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{.js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#ededed',
        secondaryBackground: '#f5f5f5',
        headerColor: '#5f6368',
        textColor: '#3c4043',
      }
      }
    },
  
  plugins: [],
}

