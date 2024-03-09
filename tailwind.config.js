/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        burple: {
          primary: "#7b34dd",
          secondary: "#712bda",
        },
        white: {
          DEFAULT: "#fff",
          20: "rgba(255, 255, 255, 0.2)",
        },
        dark: {
          90: "rgba(28, 28, 45, 0.9)",
        },
        green: {
          700: "#15803d",
        },
        bluegray: {
          500: "#64748b",
        },
      },
      spacing: {
        xs: "4px",
        s: "8px",
        m: "12px",
      },
    },
  },
  plugins: [],
};
