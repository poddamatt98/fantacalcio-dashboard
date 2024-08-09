/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all relevant files are included
  ],
  theme: {
    extend: {
      // Customize the theme here if needed
      colors: {
        primary: '#1DA1F2', // Example: Adding a primary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: Custom font
      },
    },
  },
  plugins: [],
};
