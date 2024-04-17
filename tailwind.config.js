/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      heading: []
    }
  },
  plugins: [],
}

// theme: {
//   extend: {},
//   fontFamily : {
//     body:["Arial", "Verdana", "Tahoma" ,"Trebuchet MS", "Petunia Sans",],
//     abc: ["Open Sans", "sans-serif"]
//   }
// },