/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{markdown,mustache,html,svelte}",
  ],
  theme: {
    extend: {
      "fontFamily":{
        "sans":"'Inter',sans-serif"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
