/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        lightNavy: '#112240',
        slate: '#8892b0',
        lightSlate: '#ccd6f6',
        accent: '#a8dadc',
      },
    }
  },
  plugins: [],
}