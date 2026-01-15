/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./assets/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0f172a', // bleu nuit => background principal
        lightNavy: '#1e293b', // bleu gris => background secondaire
        slate: '#94a3b8', // gris bleuté (texte secondaire)
        lightSlate: '#f1f5f9', // girs très clair (texte principal)
        accent: '#06b6d4', // cyan (accent dark)
        lightBg: '#f8fafc', // gris très claire (background principal)
        lightBgSecondary: '#f1f5f9', // gris claire (background secondaire)
        lightText: '#1e293b', // gris foncé (texte principal)
        lightTextSecondary: '#64748b', // gris (texte secondaire)
        accentLight: '#8b5cf6' // violet => accent light
      },
    }
  },
  plugins: [],
}