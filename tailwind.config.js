/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05020e",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "card": "rgba(29,24,54,0.3)",
        "card-2": "rgba(90, 100, 130, 0.5)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        tech: ["Share Tech Mono", "monospace"],
        roboto: ["Roboto", "sans-serif"],
        mons: ["Montserrat", "sans-serif"],
      },
      listStyleType: {
        dash: "'- '",
      },
    },
  },
  plugins: [],
};
