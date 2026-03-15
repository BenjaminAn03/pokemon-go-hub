/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goHubGreen: "#09c077",
        mainGrey: "rgb(245, 245, 245)",
        searchBarPlaceholderColor: "#1d855c",
        SectionTabBackgroundColor: "#F0F0E5",
        tabHoverColor: "#2A8C5A",
      },
      backgroundImage: {
        "type-artwork": "linear-gradient(white, var(--type-color))",
        "type-weakness": "linear-gradient(-90deg, white, var(--type-color))",
        "type-resistance": "linear-gradient(-90deg, white, var(--type-color))",
      }
    },
  },
  plugins: [],
}