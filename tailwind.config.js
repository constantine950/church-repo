/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      spacing : {
        '5.5': '1.4rem',
      },
      fontFamily: {
        body:['Rajdhani'],
      }
    },
  },
  plugins: [],
}
