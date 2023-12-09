/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        textcolour: '#210109',
        backgroundColour: '#feedf1',
        backgroundColour2: 'rgba(250, 228, 133, 0.10);',
        backgroundColour3: 'rgba(245, 36, 64, 0.05);',
        primaryColour: '#f5213e',
        secondaryColour: 'rgba(250, 228, 133, 0.30);',
        accentColour: '#eaf751'
      }
    },
  },
  plugins: [],
}
