/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
      'custom': '0px 50px 0px 50px',
      // 'custom': '12px 0px 0px 50px',
    },
  },},
  
  plugins: [],
}