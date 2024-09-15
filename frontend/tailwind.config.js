/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    /** overriding default tailwind styles */
    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};
