/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      fontSize: {
        huge: "156px",
      },
      height: {
        screen: "100dvh", //dyanmic viewport height
      },
    },
  },
  plugins: [],
};
