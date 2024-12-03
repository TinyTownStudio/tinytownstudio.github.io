/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{markdown,mustache,html}",
  ],
  theme: {
    extend: {
      "fontFamily":{
        "sans":"'Inter',sans-serif"
      }
    },
  },
  plugins: [],
}

